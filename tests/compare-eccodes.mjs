import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {decodeGRIB2ArrayBuffer} from '../JSGrib.js';
const log = console.log;
console.log = () => {};
for (const {file, expected} of JSON.parse(readFileSync(process.argv[2]))) {
    const grib = decodeGRIB2ArrayBuffer(readFileSync(file));
    assert.equal(grib.messages.length, expected.length);
    let maxError = 0, missing = 0, count = 0;
    grib.messages.forEach((message, index) => {
        const reference = readFileSync(expected[index]);
        const actual = message.DATA_SECTION.data;
        assert.equal(actual.length * 8, reference.length);
        for (let i = 0; i < actual.length; i++) {
            const value = reference.readDoubleLE(i * 8);
            if (value === 9999) { assert.ok(Number.isNaN(actual[i])); missing++; }
            else {
                const error = Math.abs(actual[i] - value);
                maxError = Math.max(maxError, error);
                assert.ok(error <= Math.max(1e-6, Math.abs(value) * 1e-7),
                    `${file}: message ${index} node ${i}: ${actual[i]} != ${value}`);
            }
            count++;
        }
    });
    log(`${file}: ${grib.messages.length} messages, ${count} nodes, ${missing} missing; max error ${maxError}`);
}
