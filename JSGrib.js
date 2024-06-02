import * as fs from 'fs';
import {GRIB2_SECTIONS} from './GRIB2_Sections.js';
import {JpxImage} from './jpeg2000/src/jpx.js'


const decodeJPXImage = function (rawData) {
    try {
        let t0 = new Date();
        let buffer = Buffer.from(rawData, 'hex');
        const jpx = new JpxImage()
        jpx.parse(buffer);
        let t1 = new Date()
        console.assert(jpx.tiles.length == 1, 'Unexpected number of tiles %d, wanted exactly one.',jpx.tiles.length);
        console.log('Decoded JPEG2000 width:%d height:%d values:%d in %dms', jpx.width, jpx.height, jpx.tiles[0].items.length, t1 - t0);
        return jpx.tiles[0].items;
    } catch (e) {
        console.log(e);
    }
}

// https://www.nco.ncep.noaa.gov/pmb/docs/grib2/grib2_doc/grib2_table4-2-0-2.shtml
class JSGrib {

    constructor (url) {
        this.url = url;
        this.buffer = null;
        this.messages = [];
    }

    async loadFile() {
        try {
            this.buffer = await fs.promises.readFile(this.url);
            console.log('File loaded successfully.');
        } catch (error) {
            console.error('Error loading file:', error);
        }
    }

    decodeGrib () {
        console.log(`Decoding ${this.buffer.length} bytes`);
        let offset = 0;        
        while (offset < this.buffer.length) {
            let message = {};
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
        message.editionNUmber = this.buffer.readUint8(offset+7)
        message.totalLength = this.readUint64BE(offset+8);
        return offset + 16;
    }

    decodeSection (message, offset) {
        let section = {};
        let sectionLength = this.buffer.readUInt32BE(offset);
        let sectionNumber = this.buffer.readUInt8(offset+4);
        let sectionSpec = GRIB2_SECTIONS[sectionNumber];
        if (message[sectionSpec.name]) {
            throw('Repeated sections not implemented');
        }
        message[sectionSpec.name] = section;
        console.log(`Decoding ${sectionSpec.name}`);
        this.decodeFieldList(message, section, sectionSpec, sectionSpec.fields, offset, sectionLength);
        return offset+sectionLength;
    }

    decodeFieldList (message, section, sectionSpec, fieldList, offset, sectionLength) {
        let endOffset = offset;
        for (const fieldSpec of fieldList) {
            if (endOffset >= offset+sectionLength) {
                break;
            } else {
                endOffset = this.decodeField(message, section, sectionSpec, fieldSpec, offset);
            }
        }
        return endOffset;
    }

    decodeField (message, section, sectionSpec, fieldSpec, offset, sectionLength) {
        let byteSpec = this.parseByteSpec(fieldSpec.octets);
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
            return this.decodeFieldList(message, section, sectionSpec, template.fields, offset, sectionLength);
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
}

// Usage
let t0 = new Date();
// const jsGrib = new JSGrib('/home/michael/Wetter/vr/0p25/20240517/18/20240517.18.006.0p25.grb');
// const jsGrib = new JSGrib('/home/michael/Wetter/vr/1p00/20240517/18/20240517.18.006.1p00.grb');
// const jsGrib = new JSGrib('/home/michael/Wetter/vr/1p00/20240517/18/20240517.18.015.1p00.grb');
const jsGrib = new JSGrib('/home/michael/Wetter/noaa/archive/2024/05/17/20240517_gfs.t12z.pgrb2.0p25.f009.grib2');
// const jsGrib = new JSGrib('/home/michael/Wetter/noaa/archive/2024/05/17/20240517_gfs.t12z.pgrb2.1p00.f009.grib2');
jsGrib.loadFile().then(() => {
    console.log(`Loaded data in ${new Date()-t0}ms`);
    jsGrib.decodeGrib();
    console.log(`Finished in ${new Date()-t0}ms`);
    console.log(JSON.stringify(jsGrib.messages, undefined, ' '));
}) ;
