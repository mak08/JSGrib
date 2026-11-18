import { GRIB2_SECTIONS, GRIB2_CODETABLES } from './GRIB2_Sections.js?v=ocean-bitmap-20261118';
import { JpxImage } from './jpeg2000/src/jpx.js'
import { Buffer } from './buffer/index.js'
import { decodeCCSDS } from './CCSDS.js'

class Message {
    parameterName() {
        let paramTable = GRIB2_CODETABLES.find(elem =>
            elem.discipline == this.discipline
            && elem.category == this.PRODUCT_DEFINITION_SECTION.parameterCategory);
        const number = this.PRODUCT_DEFINITION_SECTION.parameterNumber;
        return paramTable?.entries.find(entry => Number(entry.code) === number)?.shortname
            || `${this.discipline}.${this.PRODUCT_DEFINITION_SECTION.parameterCategory}.${number}`;
    }
    timestamp() {
        let ident = this.IDENTIFICATION_SECTION;
        let timestamp = new Date(Date.UTC(ident.year, ident.month - 1, ident.day, ident.hour, ident.minute, ident.second));
        return timestamp.toISOString();
    }
}

class JSGrib {

    constructor(buffer, {decodeData = true} = {}) {
        this.decodeData = decodeData;
        this.buffer = buffer;
        this.messages = [];
        this.decodeGrib();
        this.buffer = undefined;
    }

    getMessageByParameterName(name) {
        return this.messages.find(message => name == message.parameterName());
    }

    decodeGrib() {
        try {
            console.log(`Decoding ${this.buffer.length} bytes`);
            let offset = 0;
            while (offset < this.buffer.length) {
                let message = new Message();
                console.log(`Decoding message at ${offset}`);
                offset = this.decodeMessage(message, offset);
                console.log(`Message timestamp: ${message.timestamp()}`);
                this.messages.push(message);
            }
        } catch (e) {
            console.log(e);
            throw e;
        }
    }

    decodeMessage(message, startOffset) {
        let offset = this.decodeIndicatorSection(message, startOffset);
        if (message.magicBytes !== 'GRIB' || message.editionNUmber !== 2 ||
            message.totalLength < 20 || startOffset + message.totalLength > this.buffer.length) {
            throw new Error(`Invalid or truncated GRIB2 message at byte ${startOffset}`);
        }
        while (offset < startOffset + message.totalLength - 4) {
            offset = this.decodeSection(message, offset, startOffset + message.totalLength - 4);
        }
        let endMarker = this.buffer.subarray(offset, offset + 4).toString();
        if (endMarker != '7777') {
            throw ('Message end marker not found');
        }
        return offset + 4;
    }

    decodeIndicatorSection(message, offset) {
        message.magicBytes = this.buffer.subarray(offset, offset + 4).toString();
        message.discipline = this.buffer.readUint8(offset + 6);
        message.editionNUmber = this.buffer.readUint8(offset + 7)
        message.totalLength = this.readUint64BE(offset + 8);
        return offset + 16;
    }

    decodeSection(message, offset, endOffset) {
        if (offset + 5 > endOffset) throw new Error(`Truncated section header at byte ${offset}`);
        let section = {
            "_length": this.buffer.readUInt32BE(offset),
            "_number": this.buffer.readUInt8(offset + 4)
        }
        if (section._length < 5 || offset + section._length > endOffset) {
            throw new Error(`Invalid or truncated section at byte ${offset}`);
        }
        let sectionSpec = GRIB2_SECTIONS[section._number];
        if (!sectionSpec) {
            throw new Error(`Unsupported GRIB section ${section._number} at byte ${offset}`);
        }
        if (message[sectionSpec.name]) {
            throw ('Repeated sections not implemented');
        }
        message[sectionSpec.name] = section;
        console.log(`Decoding ${sectionSpec.name}`);
        if (section._number === 6) {
            this.decodeBitmap(message, section, offset);
        } else if (sectionSpec.name == 'DATA_SECTION') {
            if (this.decodeData) {
                this.decodeDataSection(message, section, offset);
                this.expandBitmap(message, section);
            }
        } else {
            this.decodeFieldList(message, section, sectionSpec, sectionSpec.fields, offset);
        }
        // console.log(JSON.stringify(section, undefined, ' '));
        return offset + section._length;
    }

    decodeFieldList(message, section, sectionSpec, fieldList, offset) {
        let endOffset = offset;
        for (const fieldSpec of fieldList) {
            if (endOffset >= offset + section._length) {
                break;
            } else {
                endOffset = this.decodeField(message, section, sectionSpec, fieldSpec, offset);
            }
        }
        return endOffset;
    }

    decodeField(message, section, sectionSpec, fieldSpec, offset) {
        switch (fieldSpec.type) {
            case 'unsigned':
            case 'codetable':
            case 'codeflag':
            case 'signed':
                return this.decodeInteger(message, section, fieldSpec, offset);
            case 'ieeefloat':
            case 'real':
                return this.decodeIEEEFloat(message, section, fieldSpec, offset);
            case 'template':
                let template = this.getTemplate(sectionSpec, section[fieldSpec.name]);
                return this.decodeFieldList(message, section, sectionSpec, template.fields, offset);
            case 'use':
                return offset + section._length;
            default:
                throw new Error(`Unsupported GRIB field type ${fieldSpec.type}`);
        }
    }

    decodeIEEEFloat(message, section, fieldSpec, offset) {
        let byteSpec = this.parseByteSpec(fieldSpec.octets);
        section[fieldSpec.name] = this.buffer.readFloatBE(offset + byteSpec.offset);
        return offset + byteSpec.offset + byteSpec.length;
    }

    decodeInteger(message, section, fieldSpec, offset) {
        let value = 0;
        let byteSpec = this.parseByteSpec(fieldSpec.octets);
        switch (byteSpec.length) {
            case 1:
                value = this.buffer.readUInt8(offset + byteSpec.offset);
                break;
            case 2:
                value = this.buffer.readUInt16BE(offset + byteSpec.offset);
                break;
            case 4:
                value = this.buffer.readUInt32BE(offset + byteSpec.offset);
                break;
            default:
                console.warn(`Missed case byteSpec.length=${byteSpec.length}`);
                break;
        }
        if (fieldSpec.type == 'signed') {
            section[fieldSpec.name] = this.decodeSignedInteger(byteSpec.length * 8, value);
        } else {
            section[fieldSpec.name] = value;
        }
        return offset + byteSpec.offset + byteSpec.length;
    }

    decodeSignedInteger(bitLength, value) {
        const sign = 2 ** (bitLength - 1);
        return value >= sign ? -(value - sign) : value;
    }

    getTemplate(sectionSpec, templateNumber) {
        if (sectionSpec.templates) {
            for (const template of sectionSpec.templates) {
                if (template.template == templateNumber.toFixed()) {
                    console.log(`Using template ${sectionSpec.section}.${templateNumber}`)
                    return template;
                }
            }
        }
        throw (`Template ${sectionSpec.section}.${templateNumber} not found`)
    }

    parseByteSpec(string) {
        let spec = string.split('-').map(Number);
        return {
            "offset": spec[0] - 1,
            "length": (spec.length == 1) ? 1 : (spec[1] - spec[0] + 1)
        }
    }

    readUint64BE(offset) {
        let high = this.buffer.readUInt32BE(offset);
        let low = this.buffer.readUInt32BE(offset + 4);
        const value = high * 2 ** 32 + low;
        if (!Number.isSafeInteger(value)) throw new Error('GRIB message exceeds safe integer size');
        return value;
    }

   decodeDataSection(message, section, offset) {
        console.log(`Data section at offset ${offset}`);
        let rep = message.DATA_REPRESENTATION_SECTION;
        console.log(`Using template 5.${rep.dataRepresentationTemplateNumber}`);
        if (rep.dataRepresentationTemplateNumber == '40') {
            console.log('Decoding JPEG2000');
            let rawData = this.buffer.subarray(offset + 5, offset + section._length);
            let unpacked = this.decodeJPXImage(rawData);
            section.data = this.scaleValues(message, unpacked);
        } else if (rep.dataRepresentationTemplateNumber == '42') {
            console.log('Decoding CCSDS');
            let rawData = this.buffer.subarray(offset + 5, offset + section._length);
            let unpacked = decodeCCSDS(rawData, rep.numberOfValues, rep);
            section.data = this.scaleValues(message, unpacked);
        } else if (rep.dataRepresentationTemplateNumber === 0) {
            const values = [];
            this.readPacked(this.buffer.subarray(offset + 5, offset + section._length),
                {offset: 0, bit: 0}, values, rep.numberOfValues, rep.bitsPerValue, false, false);
            section.data = this.scaleValues(message, values);
        } else if (rep.dataRepresentationTemplateNumber === 3) {
            section.data = this.scaleValues(message,
                this.decodeSpatialDifferencing(this.buffer.subarray(offset + 5, offset + section._length), rep));
        } else {
            throw new Error(`Data representation template 5.${rep.dataRepresentationTemplateNumber} not implemented`);
        }
        if (section.data.length !== rep.numberOfValues) throw new Error('Incorrect packed value count');
    }

    // GRIB bitmaps omit missing nodes from section 7. Preserve them as NaN,
    // rather than shifting the remaining samples or inventing zero measurements.
    decodeBitmap(message, section, offset) {
        if (section._length < 6) throw new Error('Truncated bitmap section');
        section.bitMapIndicator = this.buffer.readUInt8(offset + 5);
        if (section.bitMapIndicator === 255) return;
        if (section.bitMapIndicator !== 0) throw new Error(`Unsupported bitmap indicator ${section.bitMapIndicator}`);
        const count = message.GRID_DEFINITION_SECTION.numberOfDataPoints;
        if (section._length !== 6 + Math.ceil(count / 8)) throw new Error('Incorrect bitmap length');
        section.bitmap = this.buffer.subarray(offset + 6, offset + section._length);
    }

    expandBitmap(message, section) {
        const count = message.GRID_DEFINITION_SECTION.numberOfDataPoints;
        const bitmap = message['BIT-MAP_SECTION'].bitmap;
        if (!bitmap) {
            if (section.data.length !== count) throw new Error('Incorrect grid value count');
            return;
        }
        const expanded = new Float32Array(count).fill(NaN);
        let packed = 0;
        for (let i = 0; i < count; i++) {
            if (bitmap[i >> 3] & (128 >> (i & 7))) {
                if (packed >= section.data.length) throw new Error('Bitmap exceeds packed value count');
                expanded[i] = section.data[packed++];
            }
        }
        if (packed !== section.data.length) throw new Error('Bitmap does not match packed value count');
        section.data = expanded;
        // Do not retain a view of the whole downloaded file through the bitmap.
        message['BIT-MAP_SECTION'].bitmap = Uint8Array.from(bitmap);
    }

    // Template 5.3: group widths/lengths are offsets from their references.
    // Initial values are unsigned; only the minimum difference is sign-magnitude.
    decodeSpatialDifferencing(data, rep) {
        if (![1, 2].includes(rep.orderOfSpatialDifferencing) || rep.missingValueManagementUsed !== 0) {
            throw new Error('Unsupported spatial differencing order or internal missing-value mode');
        }
        const order = rep.orderOfSpatialDifferencing;
        const initial = [], minimum = [], references = [], widths = [], lengths = [];
        let at = this.readPacked(data, {offset: 0, bit: 0}, initial, order,
            rep.numberOfOctetsExtraDescriptors * 8, false, false);
        at = this.readPacked(data, at, minimum, 1, rep.numberOfOctetsExtraDescriptors * 8, false, true);
        at = this.readPacked(data, at, references, rep.numberOfGroupsOfDataValues, rep.bitsPerValue, true, false);
        at = this.readPacked(data, at, widths, rep.numberOfGroupsOfDataValues, rep.numberOfBitsUsedForTheGroupWidths, true, false);
        at = this.readPacked(data, at, lengths, rep.numberOfGroupsOfDataValues, rep.numberOfBitsForScaledGroupLengths, true, false);
        const differences = [];
        for (let k = 0; k < lengths.length; k++) {
            const length = k === lengths.length - 1 ? rep.trueLengthOfLastGroup
                : rep.referenceForGroupLengths + lengths[k] * rep.lengthIncrementForTheGroupLengths;
            if (differences.length + length > rep.numberOfValues) throw new Error('Too many complex-packed values');
            const values = [];
            at = this.readPacked(data, at, values, length, widths[k] + rep.referenceForGroupWidths, false, false);
            for (const value of values) differences.push(value + references[k] + minimum[0]);
        }
        if (differences.length !== rep.numberOfValues) throw new Error('Incorrect spatial difference count');
        for (let i = 0; i < order; i++) differences[i] = initial[i];
        for (let i = order; i < differences.length; i++) {
            differences[i] += order === 1 ? differences[i - 1] : 2 * differences[i - 1] - differences[i - 2];
        }
        return differences;
    }

    decodeValue(encodedValue, referenceValue, binPow, decPow) {
        return (referenceValue + encodedValue * binPow) / decPow;
    }

    decodeJPXImage (rawData) {
        let t0 = new Date();
        const JPX = new JpxImage()
        JPX.parse(rawData);
        let t1 = new Date()
        console.assert(JPX.tiles.length == 1, 'Unexpected number of tiles %d, wanted exactly one.', JPX.tiles.length);
        console.log('Decoded JPEG2000 width:%d height:%d values:%d in %dms', JPX.width, JPX.height, JPX.tiles[0].items.length, t1 - t0);
        return JPX.tiles[0].items;
    }
    
    scaleValues (message, values) {
        let binPow = Math.pow(2, message.DATA_REPRESENTATION_SECTION.binaryScaleFactor);
        let decPow = Math.pow(10, message.DATA_REPRESENTATION_SECTION.decimalScaleFactor);
        let referenceValue = message.DATA_REPRESENTATION_SECTION.referenceValue;
        let result = new Float32Array(values.length);
        for (let i = 0; i < values.length; i++) {
            result[i] = this.decodeValue(values[i], referenceValue, binPow, decPow);
        }
        return result;
    }

    readPacked(buffer, start, result, number, bitLength, fill, signed = true) {
        if (!Number.isInteger(bitLength) || bitLength < 0 || bitLength > 53 ||
            !Number.isSafeInteger(number) || number < 0) throw new Error('Invalid packed value size');
        let position = start.offset * 8 + start.bit;
        if (position + number * bitLength > buffer.length * 8) throw new Error('Truncated packed data');
        for (let n = 0; n < number; n++) {
            let value = 0;
            for (let k = 0; k < bitLength; k++, position++) {
                value = value * 2 + ((buffer[position >> 3] >> (7 - (position & 7))) & 1);
            }
            result.push(signed && bitLength ? this.decodeSignedInteger(bitLength, value) : value);
        }
        if (fill) position = Math.ceil(position / 8) * 8;
        return {offset: Math.floor(position / 8), bit: position % 8};
    }

}

function decodeGRIB2ArrayBuffer(arrayBuffer, options) {
    let buffer = Buffer.from(arrayBuffer);
    try {
        return new JSGrib(buffer, options);
    } catch (e) {
        console.log(e);
        throw e;
    }
}

export {
    decodeGRIB2ArrayBuffer
}
