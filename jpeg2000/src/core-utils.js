// Calculate the base 2 logarithm of the number `x`. This differs from the
// native function in the sense that it returns the ceiling value and that it
// returns 0 instead of `Infinity`/`NaN` for `x` values smaller than/equal to 0.

function log2 (x) {
    {
        if (x <= 0) {
            return 0;
        }
        return Math.ceil(Math.log2(x));
    }
}

function readInt8 (data, offset) {
    return data.readInt8(offset);
}

function readUint16 (data, offset) {
    return data.readUInt16BE(offset);
}

function readUint32 (data, offset) {
    return data.readUInt32BE(offset);
}

export {
    log2,
    readInt8,
    readUint16,
    readUint32
}
