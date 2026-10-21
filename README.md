# JSGrib

JSGrib is a small JavaScript ES module for decoding GRIB2 messages. It is used
by Bitsailor to read forecast fields in the browser, and can also be imported
from Node.js.

## Features

- Reads one or more GRIB2 messages from an `ArrayBuffer` or typed array.
- Parses GRIB2 message sections and their fields using the bundled section and
  code-table definitions in `GRIB2_Sections.js`.
- Decodes data representation templates:
  - 5.3: complex packing with spatial differencing
  - 5.40: JPEG2000 packing
  - 5.42: CCSDS/AEC packing
- Applies GRIB reference values and binary/decimal scale factors to produce
  decoded `Float32Array` data.
- Provides each message's reference timestamp and parameter name, and supports
  looking up a message by parameter name.

The decoder targets the GRIB2 structures and packing modes used by this
project; it is not a general-purpose implementation of every GRIB2 template.

## Prerequisites and modules

- A JavaScript runtime with ES module support. For Node.js, use a current
  release that supports `ArrayBuffer`, typed arrays, and ES modules. Browsers
  with ES module support can also use JSGrib.
- No external npm packages are required. `Buffer` is provided by the bundled
  `buffer/` module, JPEG2000 decoding by the bundled `jpeg2000/` code, and
  CCSDS decoding by `CCSDS.js`.

`package.json` declares `"type": "module"` so Node treats `.js` files in this
directory as ES modules.

## Installation

JSGrib has no separate package installation step. Keep the complete
`web/js/JSGrib/` directory together and import `decodeGRIB2ArrayBuffer` from
`JSGrib.js`. The decoder's supporting files use relative imports and must
remain in their bundled locations.

## Usage

### Node.js

```js
import { readFile } from 'node:fs/promises';
import { decodeGRIB2ArrayBuffer } from './JSGrib.js';

const bytes = await readFile('./forecast.grib2');
const grib = decodeGRIB2ArrayBuffer(bytes);

for (const message of grib.messages) {
    console.log(message.timestamp(), message.parameterName());
    console.log(message.DATA_SECTION.data);
}

const uWind = grib.getMessageByParameterName('UGRD');
console.log(uWind?.DATA_SECTION.data);
```

### Browser

```js
import { decodeGRIB2ArrayBuffer } from './JSGrib/JSGrib.js';

const response = await fetch('/forecast.grib2');
if (!response.ok) {
    throw new Error(`Unable to fetch GRIB: ${response.status}`);
}

const grib = decodeGRIB2ArrayBuffer(await response.arrayBuffer());
const uWind = grib.getMessageByParameterName('UGRD');
console.log(uWind?.DATA_SECTION.data);
```

`decodeGRIB2ArrayBuffer` accepts an `ArrayBuffer` or a typed array/Node.js
`Buffer`. It returns an object with a `messages` array. Each decoded message
contains its parsed section data; decoded field values are available at
`message.DATA_SECTION.data`.
