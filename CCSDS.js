function decodeCCSDS(data, numberOfValues, representation) {
    const bitsPerSample = representation.bitsPerValue;
    const flags = representation.compressionOptions;
    const blockSize = representation.blockSize;
    const sampleInterval = representation.sampleInterval;
    const signed = (flags & 1) !== 0;
    const preprocess = (flags & 8) !== 0;
    const padRsi = (flags & 32) !== 0;

    if (!Number.isInteger(numberOfValues) || numberOfValues < 0) {
        throw new Error('Invalid CCSDS number of values');
    }
    if (numberOfValues === 0) return [];
    if (bitsPerSample === 0) return new Array(numberOfValues).fill(0);
    if (!Number.isInteger(bitsPerSample) || bitsPerSample < 1 ||
        bitsPerSample > 32 || !Number.isInteger(blockSize) || blockSize < 2 ||
        blockSize > 256 || blockSize % 2 !== 0 ||
        !Number.isInteger(sampleInterval) || sampleInterval < 1 ||
        sampleInterval > 4096 || (flags & ~63) !== 0 ||
        ((flags & 16) !== 0 && bitsPerSample > 4 && bitsPerSample <= 8)) {
        throw new Error('Invalid CCSDS packing parameters');
    }

    let byteOffset = 0;
    let bitOffset = 0;
    const values = [];
    const readBits = (count) => {
        let value = 0;
        for (let bit = 0; bit < count; bit++) {
            if (byteOffset >= data.length) {
                throw new Error(`Unexpected end of CCSDS data after ${values.length} of ${numberOfValues} values`);
            }
            value = value * 2 + ((data[byteOffset] >> (7 - bitOffset)) & 1);
            if (++bitOffset === 8) {
                bitOffset = 0;
                byteOffset++;
            }
        }
        return value;
    };
    const readFundamentalSequence = () => {
        let value = 0;
        while (readBits(1) === 0) value++;
        return value;
    };
    const signExtend = (value) => {
        const signBit = 2 ** (bitsPerSample - 1);
        return value >= signBit ? value - 2 ** bitsPerSample : value;
    };
    const readSample = () => {
        const value = readBits(bitsPerSample);
        return signed ? signExtend(value) : value;
    };
    const idLength = bitsPerSample > 16
        ? 5
        : bitsPerSample > 8
            ? 4
            : (flags & 16) !== 0
                ? (bitsPerSample <= 2 ? 1 : 2)
                : 3;
    const maximum = signed
        ? 2 ** (bitsPerSample - 1) - 1
        : 2 ** bitsPerSample - 1;
    const rsiLength = blockSize * sampleInterval;

    while (values.length < numberOfValues) {
        const inRsi = values.length % rsiLength;
        if (values.length > 0 && inRsi === 0 && padRsi && bitOffset !== 0) {
            byteOffset++;
            bitOffset = 0;
        }
        const reference = preprocess && inRsi === 0;
        const id = readBits(idLength);

        if (id === 0) {
            const specialEncoding = readBits(1) === 1;
            if (specialEncoding) {
                if (reference) values.push(readSample());
                let sampleIndex = reference ? 1 : 0;
                while (sampleIndex < blockSize) {
                    const code = readFundamentalSequence();
                    const group = Math.floor((Math.sqrt(8 * code + 1) - 1) / 2);
                    if (group > 12) throw new Error('Invalid CCSDS special-encoding code');
                    const groupStart = group * (group + 1) / 2;
                    const second = code - groupStart;
                    if (sampleIndex % 2 === 0) {
                        if (values.length < numberOfValues) values.push(group - second);
                        sampleIndex++;
                    }
                    if (sampleIndex < blockSize) {
                        if (values.length < numberOfValues) values.push(second);
                        sampleIndex++;
                    }
                }
            } else {
                if (reference) values.push(readSample());
                const runCode = readFundamentalSequence() + 1;
                const blocksInRsi = Math.floor(inRsi / blockSize);
                const blocksUntilRsiEnd = sampleInterval - blocksInRsi;
                let zeroBlocks = runCode;
                if (runCode === 5) {
                    zeroBlocks = Math.min(blocksUntilRsiEnd, 64 - (blocksInRsi % 64));
                } else if (runCode > 5) {
                    zeroBlocks--;
                }
                if (zeroBlocks < 1) throw new Error('Invalid CCSDS zero-block run');
                const zeroCount = zeroBlocks * blockSize - (reference ? 1 : 0);
                if (zeroCount > rsiLength - inRsi - (reference ? 1 : 0)) {
                    throw new Error('CCSDS zero-block run exceeds the reference sample interval');
                }
                for (let i = 0; i < zeroCount && values.length < numberOfValues; i++) values.push(0);
            }
        } else if (id === 2 ** idLength - 1) {
            for (let i = 0; i < blockSize && values.length < numberOfValues; i++) {
                values.push(readSample());
            }
        } else {
            if (reference) values.push(readSample());
            const count = blockSize - (reference ? 1 : 0);
            const k = id - 1;
            const highParts = new Array(count);
            for (let i = 0; i < count; i++) highParts[i] = readFundamentalSequence() * 2 ** k;
            for (let i = 0; i < count && values.length < numberOfValues; i++) {
                values.push(highParts[i] + readBits(k));
            }
        }
    }

    if (!preprocess) return values;

    const decoded = new Array(values.length);
    for (let start = 0; start < values.length; start += rsiLength) {
        const end = Math.min(start + rsiLength, values.length);
        let previous = values[start];
        decoded[start] = previous;
        for (let i = start + 1; i < end; i++) {
            const difference = values[i];
            const halfDifference = Math.floor(difference / 2) + (difference % 2);
            if (signed) {
                if (previous < 0) {
                    if (halfDifference <= maximum + previous + 1) {
                        previous += difference % 2 === 0
                            ? Math.floor(difference / 2)
                            : -halfDifference;
                    } else {
                        previous = difference - maximum - 1;
                    }
                } else if (halfDifference <= maximum - previous) {
                    previous += difference % 2 === 0
                        ? Math.floor(difference / 2)
                        : -halfDifference;
                } else {
                    previous = maximum - difference;
                }
            } else {
                const mask = Math.floor(previous / (maximum / 2 + 1)) % 2
                    ? maximum
                    : 0;
                const distance = mask === 0 ? previous : maximum - previous;
                if (halfDifference <= distance) {
                    previous += difference % 2 === 0
                        ? Math.floor(difference / 2)
                        : -halfDifference;
                } else {
                    previous = mask === 0 ? difference : maximum - difference;
                }
            }
            decoded[i] = previous;
        }
    }
    return decoded;
}

export { decodeCCSDS };
