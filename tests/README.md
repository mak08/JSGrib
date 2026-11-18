# Current GRIB regression checks

`node tests/current-grib-tests.mjs` runs without external packages. It checks
simple packing, constant/empty fields, 32-bit packed values, signed scale factors,
first/second-order spatial differencing, nonzero group-width references, explicit
bitmaps, multiple concatenated frames, ocean parameter names and invalid inputs.

`fixtures/ifs-current-ccsds-bitmap.grib2` is a synthetic ecCodes-generated GRIB2
file containing two 4 × 2 fields (SVE and SVN), CCSDS packing and explicit bitmaps.
Its values, in stored scan order, are:

- SVE: `0.5, missing, -0.25, 1.125, missing, 0, 0.125, -0.5`
- SVN: `0.25, missing, 0.75, -0.5, missing, 0.125, 0, -1`

`compare-eccodes.py` independently decodes every message via the ecCodes C API,
then calls `compare-eccodes.mjs` to compare all samples and bitmap holes against
JSGrib. Example from the repository parent:

```sh
python3 JSGrib/tests/compare-eccodes.py \
  cl-weather/weather/ibi_english_channel/20261118/ibi_english_channel.20261118.grib2 \
  cl-weather/weather/global_agulhas/20261118/global_agulhas.20261118.grib2 \
  cl-weather/weather/ifs-current/0p25/20261118/12/ifs-current.0p25.20261118.t12z.f000.grib2
```

It allows Float32 rounding (`max(1e-6, abs(reference) * 1e-7)`) and requires
NaN at ecCodes' missing nodes. It uses the default ecCodes missing sentinel
9999, suitable for the wind/current fields tested here. Temporary reference
arrays are removed automatically. Tests do not fetch forecast data or install
software.
