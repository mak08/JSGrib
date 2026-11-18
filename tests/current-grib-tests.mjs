// Self-contained GRIB2 fixtures: node tests/current-grib-tests.mjs
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {decodeGRIB2ArrayBuffer} from '../JSGrib.js';
const log = console.log;
console.log = () => {};
function section(number, size) {
    const b = Buffer.alloc(size); b.writeUInt32BE(size); b[4] = number; return b;
}
function bits(values, width) {
    const bytes = Buffer.alloc(Math.ceil(values.length * width / 8));
    let position = 0;
    for (const value of values) for (let k = width - 1; k >= 0; k--, position++) {
        bytes[position >> 3] |= (Math.floor(value / 2 ** k) & 1) << (7 - (position & 7));
    }
    return bytes;
}
function fixture({values = [0, 1, 2, 3, 4, 5, 6, 7], width = 3,
                  reference = -1, binary = 0, decimal = 0, bitmap, hour = 0,
                  complex = false, order = 2, parameter = 2, category = 1} = {}) {
    const s1 = section(1, 21); s1.writeUInt16BE(2026, 12); s1[14] = 11; s1[15] = 18;
    const s3 = section(3, 72); s3.writeUInt32BE(8, 6); s3.writeUInt32BE(4, 30); s3.writeUInt32BE(2, 34);
    const s4 = section(4, 34); s4[9] = category; s4[10] = parameter; s4[17] = 1; s4.writeUInt32BE(hour, 18);
    const s5 = section(5, complex ? 49 : 21);
    s5.writeUInt32BE(values.length, 5); s5.writeFloatBE(reference, 11);
    s5.writeUInt16BE(binary < 0 ? 32768 - binary : binary, 15);
    s5.writeUInt16BE(decimal < 0 ? 32768 - decimal : decimal, 17); s5[19] = width;
    let raw = bits(values, width);
    if (complex) {
        s5.writeUInt16BE(3, 9); s5[21] = 1; s5.writeUInt32BE(1, 31);
        s5[35] = width; // Nonzero reference width, zero width-delta bits.
        s5.writeUInt32BE(values.length, 37); s5[41] = 1;
        s5.writeUInt32BE(values.length, 42); s5[47] = order; s5[48] = 1;
        s5[19] = 0; // One group with zero reference.
        // Signed minimum -1 and unsigned initial values above the sign bit.
        raw = Buffer.concat([Buffer.from(order === 1 ? [200, 129] : [200, 201, 129]), raw]);
    }
    const s6 = section(6, bitmap === undefined ? 6 : 7); s6[5] = bitmap === undefined ? 255 : 0;
    if (bitmap !== undefined) s6[6] = bitmap;
    const s7 = section(7, 5 + raw.length); raw.copy(s7, 5);
    const header = Buffer.alloc(16); header.write('GRIB'); header[6] = 10; header[7] = 2;
    const result = Buffer.concat([header, s1, s3, s4, s5, s6, s7, Buffer.from('7777')]);
    result.writeBigUInt64BE(BigInt(result.length), 8); return result;
}
const decode = data => decodeGRIB2ArrayBuffer(data).messages;
assert.deepEqual([...decode(fixture())[0].DATA_SECTION.data], [-1, 0, 1, 2, 3, 4, 5, 6]);
const three = decode(Buffer.concat([fixture(), fixture({hour: 3}), fixture({hour: 6})]));
assert.equal(three.length, 3);
assert.deepEqual(three.map(m => m.PRODUCT_DEFINITION_SECTION.forecastTime), [0, 3, 6]);
assert.equal(three[0].parameterName(), 'UOGRD');
assert.deepEqual([...decode(fixture({width: 0, values: Array(8).fill(0), reference: 2.5}))[0].DATA_SECTION.data], Array(8).fill(2.5));
assert.equal(decode(fixture({width: 32, values: Array(8).fill(2 ** 31 + 256), reference: 0}))[0].DATA_SECTION.data[0], 2 ** 31 + 256);
assert.equal(decode(fixture({width: 5, reference: -10, binary: -1, decimal: -1}))[0].DATA_SECTION.data[7], -65);
const masked = decode(fixture({values: [1, 2, 3], bitmap: 0b10100001}))[0].DATA_SECTION.data;
assert.deepEqual([...masked], [0, NaN, 1, NaN, NaN, NaN, NaN, 2]);
assert.ok([...decode(fixture({values: [], width: 0, bitmap: 0}))[0].DATA_SECTION.data].every(Number.isNaN));
assert.equal(decode(fixture({category: 3, parameter: 14}))[0].parameterName(), 'SVE');
assert.equal(decode(fixture({category: 3, parameter: 15}))[0].parameterName(), 'SVN');
assert.equal(decode(fixture({category: 250, parameter: 15}))[0].parameterName(), '10.250.15');
assert.deepEqual([...decode(fixture({complex: true, order: 1}))[0].DATA_SECTION.data], [199, 199, 200, 202, 205, 209, 214, 220]);
assert.deepEqual([...decode(fixture({complex: true}))[0].DATA_SECTION.data], [199, 200, 202, 206, 213, 224, 240, 262]);
assert.throws(() => decode(fixture().subarray(0, -1)), /truncated/);
assert.throws(() => decode(fixture({values: [1, 2], bitmap: 255})), /Bitmap exceeds/);
assert.throws(() => decode(fixture({values: [1, 2, 3], bitmap: 128})), /Bitmap does not match/);
const unsupported = fixture(); unsupported[16 + 21 + 72 + 34 + 10] = 41;
assert.throws(() => decode(unsupported), /5.41 not implemented/);
const badMagic = fixture(); badMagic[0] = 0;
assert.throws(() => decode(badMagic), /Invalid/);
// ecCodes-generated two-component CCSDS fixture with omitted land nodes.
const ocean = decode(readFileSync(new URL('./fixtures/ifs-current-ccsds-bitmap.grib2', import.meta.url)));
assert.equal(ocean.length, 2);
assert.deepEqual(ocean.map(m => m.parameterName()), ['SVE', 'SVN']);
assert.deepEqual([...ocean[0].DATA_SECTION.data], [0.5, NaN, -0.25, 1.125, NaN, 0, 0.125, -0.5]);
assert.deepEqual([...ocean[1].DATA_SECTION.data], [0.25, NaN, 0.75, -0.5, NaN, 0.125, 0, -1]);
console.log = log;
log('Simple/complex packing, bitmap expansion, concatenated frames, ocean parameters and malformed GRIB tests passed.');
