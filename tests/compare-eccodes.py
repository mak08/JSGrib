#!/usr/bin/env python3
"""Compare every decoded sample/missing node with ecCodes (no Python package needed).
Usage: python3 tests/compare-eccodes.py forecast.grib2 [...]
Requires Node.js and the ecCodes shared library; does not download/install anything.
"""
import ctypes as C
import ctypes.util
import json
from pathlib import Path
import subprocess
import sys
import tempfile

lib = C.CDLL(ctypes.util.find_library('eccodes'))
lib.codes_handle_new_from_message_copy.argtypes = [C.c_void_p, C.c_void_p, C.c_size_t]
lib.codes_handle_new_from_message_copy.restype = C.c_void_p
lib.codes_get_size.argtypes = [C.c_void_p, C.c_char_p, C.POINTER(C.c_size_t)]
lib.codes_get_double_array.argtypes = [C.c_void_p, C.c_char_p, C.POINTER(C.c_double), C.POINTER(C.c_size_t)]
lib.codes_handle_delete.argtypes = [C.c_void_p]

def check(code):
    if code: raise RuntimeError(f'ecCodes error {code}')

with tempfile.TemporaryDirectory() as temp:
    metadata = []
    for file in sys.argv[1:]:
        data = Path(file).read_bytes()
        offset = 0
        messages = []
        while offset < len(data):
            size = int.from_bytes(data[offset+8:offset+16], 'big')
            if size < 20: raise ValueError('Bad message size')
            raw = C.create_string_buffer(data[offset:offset+size])
            handle = lib.codes_handle_new_from_message_copy(None, raw, size)
            if not handle: raise ValueError('ecCodes rejected message')
            try:
                count = C.c_size_t()
                check(lib.codes_get_size(handle, b'values', C.byref(count)))
                values = (C.c_double * count.value)()
                check(lib.codes_get_double_array(handle, b'values', values, C.byref(count)))
                expected = Path(temp) / f'{len(metadata)}-{len(messages)}.bin'
                expected.write_bytes(bytes(values))
                # ecCodes expands bitmap nodes with its configurable missingValue (9999).
                messages.append(str(expected))
            finally: lib.codes_handle_delete(handle)
            offset += size
        metadata.append({'file': str(Path(file).resolve()), 'expected': messages})
    manifest = Path(temp) / 'manifest.json'
    manifest.write_text(json.dumps(metadata))
    subprocess.run(['node', str(Path(__file__).with_name('compare-eccodes.mjs')), str(manifest)], check=True)
