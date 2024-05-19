'use strict'

import {decodeGRIB2File} from './grib2utils.js';

function parseGrib2ByteArray (byteArray) {
    return decodeGRIB2File(byteArray);
}

export {
    parseGrib2ByteArray
}
