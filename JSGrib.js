import { GRIB2_SECTIONS, GRIB2_CODETABLES } from './GRIB2_Sections.js';
import { JpxImage } from './jpeg2000/src/jpx.js'
import { Buffer } from './buffer/index.js'

const decodeJPXImage = function (rawData) {
    let t0 = new Date();
    const JPX = new JpxImage()
    JPX.parse(rawData);
    let t1 = new Date()
    console.assert(JPX.tiles.length == 1, 'Unexpected number of tiles %d, wanted exactly one.', JPX.tiles.length);
    console.log('Decoded JPEG2000 width:%d height:%d values:%d in %dms', JPX.width, JPX.height, JPX.tiles[0].items.length, t1 - t0);
    return JPX.tiles[0].items;
}

class Message {
    parameterName() {
        let paramTable = GRIB2_CODETABLES.find(elem =>
            elem.discipline == this.discipline
            && elem.category == this.PRODUCT_DEFINITION_SECTION.parameterCategory);
        return paramTable.entries[this.PRODUCT_DEFINITION_SECTION.parameterNumber].shortname;
    }
    timestamp() {
        let ident = this.IDENTIFICATION_SECTION;
        let timestamp = new Date(Date.UTC(ident.year, ident.month - 1, ident.day, ident.hour, ident.minute, ident.second));
        return timestamp.toISOString();
    }
}

class JSGrib {

    mask = [128, 64, 32, 16, 8, 4, 2, 1];
        
    constructor(buffer) {
        this.buffer = buffer;
        this.messages = [];
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
                offset += this.decodeMessage(message, offset);
                console.log(`Message timestamp: ${message.timestamp()}`);
                this.messages.push(message);
            }
        } catch (e) {
            console.log(e);
        }
    }

    decodeMessage(message, startOffset) {
        let offset = this.decodeIndicatorSection(message, startOffset);
        while (offset < startOffset + message.totalLength - 4) {
            offset = this.decodeSection(message, offset);
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

    decodeSection(message, offset) {
        let section = {
            "_length": this.buffer.readUInt32BE(offset),
            "_number": this.buffer.readUInt8(offset + 4)
        }
        let sectionSpec = GRIB2_SECTIONS[section._number];
        if (message[sectionSpec.name]) {
            throw ('Repeated sections not implemented');
        }
        message[sectionSpec.name] = section;
        console.log(`Decoding ${sectionSpec.name}`);
        if (sectionSpec.name == 'DATA_SECTION') {
            this.decodeDataSection(message, section, offset);
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
            default:
                console.log(`Missed case ${fieldSpec.type}`);
                break;
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
        let highBit = -(2 << bitLength - 2);
        let mask = highBit - 1;
        if ((value & highBit) == -highBit) {
            value = value & mask;
            return -value;
        } else {
            return value;
        }
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
        return (high << 32) + low;
    }

   decodeDataSection(message, section, offset) {
        console.log(`Data section at offset ${offset}`);
        let rep = message.DATA_REPRESENTATION_SECTION;
        console.log(`Using template 5.${rep.dataRepresentationTemplateNumber}`);
        if (rep.dataRepresentationTemplateNumber == '40') {
            console.log('Decoding JPEG2000');
            let rawData = this.buffer.subarray(offset + 5, offset + section._length);
            let unpacked = decodeJPXImage(rawData);
            let binPow = Math.pow(2, message.DATA_REPRESENTATION_SECTION.binaryScaleFactor);
            let decPow = Math.pow(10, message.DATA_REPRESENTATION_SECTION.decimalScaleFactor);
            let referenceValue = message.DATA_REPRESENTATION_SECTION.referenceValue;
            section.data = new Float32Array(unpacked.length);
            for (let i = 0; i < unpacked.length; i++) {
                section.data[i] = this.decodeValue(unpacked[i], referenceValue, binPow, decPow);
            }
        } else if (rep.dataRepresentationTemplateNumber == '3') {
            let unscaledMin = [];
            offset = this.readValues(this.buffer, { "offset": offset + 5, "bit": 0 }, unscaledMin, rep.orderOfSpatialDifferencing + 1, rep.numberOfOctetsExtraDescriptors * 8, true);
            console.log(`UnscaledMin: ${unscaledMin}`);

            let groupReferenceValues = [];
            offset = this.readValues(this.buffer, offset, groupReferenceValues, rep.numberOfGroupsOfDataValues, rep.bitsPerValue, true, false);

            let groupWidth = [];
            offset = this.readValues(this.buffer, offset, groupWidth, rep.numberOfGroupsOfDataValues, rep.numberOfBitsUsedForTheGroupWidths, true, false);

            let groupLength = [];
            offset = this.readValues(this.buffer, offset, groupLength, rep.numberOfGroupsOfDataValues, rep.numberOfBitsForScaledGroupLengths, true, false);

            let packedValues = [];
            for (var k = 0; k < groupLength.length; k++) {
                let groupValues = [];
                let Ln = rep.referenceForGroupLengths + groupLength[k] * rep.lengthIncrementForTheGroupLengths;
                if (k == groupLength.length - 1) {
                    Ln = rep.trueLengthOfLastGroup;
                }
                if (groupWidth[k] == 0) {
                    for (var i = 0; i < Ln; i++) {
                        groupValues.push(0);
                    }
                } else {
                    try {
                        offset = this.readValues(this.buffer, offset, groupValues, Ln, groupWidth[k], false, false);
                    } catch (e) {
                        console.log(`Error reading group ${k}/${groupLength.length}`);
                        throw e;
                    }
                }
                groupValues = groupValues.map(v => v + groupReferenceValues[k]);
                packedValues.push(...groupValues);
            }
            console.log(`packedValues: ${packedValues.length}`);
            console.log(`packedValues: ${packedValues.slice(0, 10)}`)
            let h = packedValues.map(v => v + unscaledMin[2]);
            let f = [unscaledMin[0], unscaledMin[1]];
            let g = [unscaledMin[0], f[1]-f[0]];
            for (var k = 2; k<h.length; k++) {
                g[k] = g[k-1] + h[k];
            }
            for (var k = 2; k<g.length; k++ ) {
                f[k] = f[k-1] + g[k];
            }
            
            let binPow = Math.pow(2, message.DATA_REPRESENTATION_SECTION.binaryScaleFactor);
            let decPow = Math.pow(10, message.DATA_REPRESENTATION_SECTION.decimalScaleFactor);
            let referenceValue = message.DATA_REPRESENTATION_SECTION.referenceValue;
            section.data = new Float32Array(f.length);
            for (let i = 0; i < f.length; i++) {
                section.data[i] = this.decodeValue(f[i], referenceValue, binPow, decPow);
            }
            console.log(`values: ${section.data.subarray(0, 10)}`)

        } else {
            console.error(`Data representation template ${rep.dataRepresentationTemplateNumber} not implemented`);
        }
    }

    decodeValue(encodedValue, referenceValue, binPow, decPow) {
        return (referenceValue + encodedValue * binPow) / decPow;
    }

    readValues(buffer, start, result, number, bitLength, fill, signed = true) {
        let offset = start.offset;
        let bit = start.bit;
        let byte = buffer.readUInt8(offset);
        for (var n = 0; n < number && offset < buffer.length; n++) {
            let value = 0;
            for (var k = 0; k < bitLength; k++) {
                value <<= 1;
                if ((byte & this.mask[bit]) == this.mask[bit]) {
                    value += 1;
                }
                bit += 1;
                if (bit % 8 == 0 && offset < buffer.length - 1) {
                    offset += 1;
                    byte = buffer.readUInt8(offset);
                    bit = 0;
                } else if (k < bitLength - 1 && offset >= buffer.length - 1) {
                    throw `Reading past end of buffer at offset ${offset}, value ${n}/${number}, bit ${k}/${bitLength}`;
                }
            }
            result.push(signed ? this.decodeSignedInteger(bitLength, value) : value);
        }

        if (fill && (bit > 0)) {
            offset += 1;
            bit = 0;
        }

        return {
            "offset": offset,
            "bit": bit
        }
    }

}

function decodeGRIB2ArrayBuffer(arrayBuffer) {
    let buffer = Buffer.from(arrayBuffer);
    const jsGrib = new JSGrib(buffer);
    try {
        jsGrib.decodeGrib();
        return jsGrib;
    } catch (e) {
        console.log(e);
        return undefined
    }
}

export {
    decodeGRIB2ArrayBuffer
}
