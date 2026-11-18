# JSGrib

JSGrib is a small JavaScript ES module for decoding GRIB2 messages. It is used
by Bitsailor to read forecast fields in the browser, and can also be imported
from Node.js.

## Features

- Reads one or more GRIB2 messages from an `ArrayBuffer` or typed array.
- Parses GRIB2 message sections and their fields using the bundled section and
  code-table definitions in `GRIB2_Sections.js`.
- Decodes data representation templates:
  - 5.0: simple packing (including constant fields)
  - 5.3: complex packing with first- or second-order spatial differencing
  - 5.40: JPEG2000 packing
  - 5.42: CCSDS/AEC packing
- Applies GRIB reference values and binary/decimal scale factors to produce
  decoded `Float32Array` data.
- Expands explicit GRIB bitmaps to the full grid, representing missing samples as
  `NaN`. An explicit bitmap is supported with every supported packing template.
- Recognizes ocean-current components `UOGRD`/`VOGRD` (Fairwinds) and
  `SVE`/`SVN` (IFS). Unknown parameters have a `discipline.category.number` name.
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

## Current GRIB support and verification

The cached current products were checked with ecCodes on 18 November 2026:

| Source | Packing | Messages checked | Grid values checked | Maximum absolute difference |
| --- | --- | ---: | ---: | ---: |
| Fairwinds English Channel (IBI) | Simple, 5.0 | 34 | 5,948,640 | 1.20e-7 m/s |
| Fairwinds Agulhas | Spatial differencing, 5.3 | 42 | 15,430,002 | 1.20e-7 m/s |
| ECMWF IFS currents, 12Z hour 0 | CCSDS, 5.42, with bitmap | 2 | 2,076,480 | 0 |

All 701,982 missing IFS nodes matched ecCodes. GFS and IFS wind fields were
also compared to check the shared decoder; both passed within Float32 rounding.
Multi-message files are decoded through their final frame, without skipping
messages after the second component.

Run the self-contained regression suite, including a small ecCodes-generated
CCSDS/bitmap fixture:

```sh
node tests/current-grib-tests.mjs
```

To compare **every** value in locally available forecasts against ecCodes:

```sh
python3 tests/compare-eccodes.py /path/to/current.grib2 /path/to/wind.grib2
```

The comparison needs Node.js and the ecCodes shared library, but no Python
packages, downloads or installation step. See [tests/README.md](tests/README.md).
The packing and bitmap layout follow the
[ECMWF GRIB2 definitions](https://codes.ecmwf.int/grib/format/grib2/).

Limitations: predefined/reused bitmaps, repeated sections within one message,
and complex packing with internal missing-value management are unsupported
and rejected explicitly. None occurs in the current products checked above.
`timestamp()` is the reference time; the forecast lead time remains in
`PRODUCT_DEFINITION_SECTION.forecastTime` and its time-unit field.

For multi-frame files, `decodeGRIB2ArrayBuffer(bytes, {decodeData: false})`
parses message metadata without unpacking section 7. `totalLength` allows a
caller to locate individual messages and decode just the U/V pair needed for
a displayed forecast time. Default calls continue to decode all fields.
Missing samples remain `NaN` in decoded arrays; consumers decide how to handle
them during interpolation. Bitsailor's current overlay zeroes a whole U/V node
if either component is missing, matching the router's current-vector handling.
