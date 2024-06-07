import {GRIB2_SECTIONS, GRIB2_CODETABLES} from './GRIB2_Sections.js';
import {JpxImage} from './jpeg2000/src/jpx.js'
import {Buffer} from './buffer/index.js'


const decodeJPXImage = function (rawData) {
    try {
        let t0 = new Date();
        const JPX = new JpxImage()
        JPX.parse(rawData);
        let t1 = new Date()
        console.assert(JPX.tiles.length == 1, 'Unexpected number of tiles %d, wanted exactly one.',JPX.tiles.length);
        console.log('Decoded JPEG2000 width:%d height:%d values:%d in %dms', JPX.width, JPX.height, JPX.tiles[0].items.length, t1 - t0);
        return JPX.tiles[0].items;
    } catch (e) {
        console.log(e);
    }
}


class Message {
    parameterName() {
        let paramTable = GRIB2_CODETABLES.find(elem => 
            elem.discipline == this.discipline
            && elem.category == this.PRODUCT_DEFINITION_SECTION.parameterCategory );
        return paramTable.entries[this.PRODUCT_DEFINITION_SECTION.parameterNumber].shortname;
    }
}

// https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_table4-2-0-2.shtml
class JSGrib {

    constructor (buffer) {
        this.buffer = buffer;
        this.messages = [];
    }

    getMessageByParameterName (name) {
        return this.messages.find( message => name == message.parameterName());
    }

    decodeGrib () {
        console.log(`Decoding ${this.buffer.length} bytes`);
        let offset = 0;        
        while (offset < this.buffer.length) {
            let message = new Message();
            console.log(`Decoding message at ${offset}`);
            offset += this.decodeMessage(message, offset);
            this.messages.push(message);
        }
    }

    decodeMessage (message, startOffset) {
        let offset = this.decodeIndicatorSection(message, startOffset);
        while (offset < startOffset + message.totalLength - 4) {
            offset = this.decodeSection(message, offset);
        }
        let endMarker = this.buffer.subarray(offset, offset+4).toString();
        if (endMarker != '7777') {
            throw('Message end marker not found');
        }
        return offset + 4;
    }
    
    decodeIndicatorSection (message, offset) {
        message.magicBytes = this.buffer.subarray(offset, offset+4).toString();
        message.discipline = this.buffer.readUint8(offset+6);
        message.editionNUmber = this.buffer.readUint8(offset+7)
        message.totalLength = this.readUint64BE(offset+8);
        return offset + 16;
    }

    decodeSection (message, offset) {
        let section = {
            "_length": this.buffer.readUInt32BE(offset),
            "_number": this.buffer.readUInt8(offset+4)
        }
        let sectionSpec = GRIB2_SECTIONS[section._number];
        if (message[sectionSpec.name]) {
            throw('Repeated sections not implemented');
        }
        message[sectionSpec.name] = section;
        console.log(`Decoding ${sectionSpec.name}`);
        if (sectionSpec.name == 'DATA_SECTION') {
            this.decodeDataSection(message, section, offset);
        } else {   
            this.decodeFieldList(message, section, sectionSpec, sectionSpec.fields, offset);
        }
        return offset+section._length;
    }

    decodeFieldList (message, section, sectionSpec, fieldList, offset) {
        let endOffset = offset;
        for (const fieldSpec of fieldList) {
            if (endOffset >= offset+section._length) {
                break;
            } else {
                endOffset = this.decodeField(message, section, sectionSpec, fieldSpec, offset);
            }
        }
        return endOffset;
    }

    decodeField (message, section, sectionSpec, fieldSpec, offset) {
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

    decodeIEEEFloat (message, section, fieldSpec, offset) {
        let byteSpec = this.parseByteSpec(fieldSpec.octets);
        section[fieldSpec.name] =  this.buffer.readFloatBE(offset + byteSpec.offset);
        return offset + byteSpec.offset + byteSpec.length;
    }

    decodeInteger (message, section, fieldSpec, offset) {
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
            let highBit = -(2 << byteSpec.length * 8 - 2);  
            let mask = highBit - 1;
            if ((value & highBit) == -highBit) {
                value = value & mask;
                section[fieldSpec.name] = -value;
            } else {
                section[fieldSpec.name] = value;
            }
        } else {
            section[fieldSpec.name] = value;
        }
        return offset + byteSpec.offset + byteSpec.length;
    }    

    getTemplate (sectionSpec, templateNumber) {
        if (sectionSpec.templates) {
            for (const template of sectionSpec.templates) {
                if (template.template == templateNumber.toFixed()) {
                    console.log(`Using template ${sectionSpec.section}.${templateNumber}`)
                    return template;
                }
            }
        }
        throw(`Template ${sectionSpec.section}.${templateNumber} not found`)
    }

    parseByteSpec (string) {
        let spec = string.split('-').map(Number);
        return {
            "offset": spec[0]-1,
            "length": (spec.length == 1)? 1: (spec[1] - spec[0] + 1)
        }
    }

    readUint64BE (offset) {
        let high = this.buffer.readUInt32BE(offset);
        let low = this.buffer.readUInt32BE(offset+4);
        return (high << 32) + low;
    }

    decodeDataSection (message, section, offset) {
        let dataRepresentation = message.DATA_REPRESENTATION_SECTION;
        if (dataRepresentation.dataRepresentationTemplateNumber == '40') {
            console.log('Decoding JPEG2000');
            let rawData = this.buffer.subarray(offset+5, offset + section._length);
            let binPow = Math.pow(2, message.DATA_REPRESENTATION_SECTION.binaryScaleFactor);
            let decPow = Math.pow(10, message.DATA_REPRESENTATION_SECTION.decimalScaleFactor);
            let referenceValue = message.DATA_REPRESENTATION_SECTION.referenceValue;
            let unpacked = decodeJPXImage(rawData);
            section.data = new Float32Array(unpacked.length);
            for (let i = 0; i<unpacked.length; i++) {
               section.data[i] = this.decodeValue(unpacked[i], referenceValue, binPow, decPow);
            }
        } else if (dataRepresentation.dataRepresentationTemplateNumber == '3') {
            console.log('Decoding JPEG2000');
            let rawData = this.buffer.subarray(offset+5, offset + section._length);
            let binPow = Math.pow(2, message.DATA_REPRESENTATION_SECTION.binaryScaleFactor);
            let decPow = Math.pow(10, message.DATA_REPRESENTATION_SECTION.decimalScaleFactor);
            let referenceValue = message.DATA_REPRESENTATION_SECTION.referenceValue;
            section.data = new Float32Array(rawData.length);
            for (let i = 0; i<rawData.length; i++) {
               section.data[i] = this.decodeValue(rawData[i], referenceValue, binPow, decPow);
            }
        } else {
            console.error(`Data representation template ${dataRepresentation.dataRepresentationTemplateNumber} not implemented`);
        }
    }

    decodeValue (encodedValue, referenceValue, binPow, decPow) {
        return (referenceValue + encodedValue * binPow) / decPow;
    }

}

function decodeGRIB2ArrayBuffer (arrayBuffer) {
    let buffer = Buffer.from(arrayBuffer);
    const jsGrib = new JSGrib(buffer);
    jsGrib.decodeGrib();
    return jsGrib;
}

export {
    decodeGRIB2ArrayBuffer
}

