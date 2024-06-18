// JSGrib usage example
import * as fs from 'fs';
import {decodeGRIB2ArrayBuffer} from './JSGrib.js'

async function loadFile(url) {
     try {
         let buffer = await fs.promises.readFile(url);
         console.log(`Loaded ${url}`);
         return buffer;
     } catch (error) {
         console.error('Error loading file:', error);
     }
}
 
async function loadURL(url) {
    try {
        let buffer = await fetch(url, {
            headers: {
            'Authorization': `Basic ${btoa('user01:_user_01')}`, 
        }});
        console.log(`Loaded ${url}`);
        return buffer;
    } catch (error) {
        console.error('Error loading file:', error);
    }
}

let t0 = new Date();

// loadURL('https://bitsailor.net/weather/vr/0p25/20240602/12/20240602.12.018.0p25.grb').then((response) => 
//     {
//         if (response.ok) {
//             response.arrayBuffer().then ((buffer) => {
//             console.log(`Loaded data in ${new Date()-t0}ms`);
//             let result = decodeGRIB2ArrayBuffer(buffer);
//             console.log(`Finished in ${new Date()-t0}ms`);
//             console.log(JSON.stringify(result, undefined, ' '))});
//         } else {
//             console.log(response.statusText);
//         }
//     }
// );

// loadFile('/home/michael/Wetter/noaa/archive/2024/06/04/20240604_gfs.t12z.pgrb2.1p00.f009.grib2').then((buffer) => {
// loadFile('/home/michael/Wetter/vr/0p25/20240517/18/20240517.18.006.0p25.grb').then((buffer) => {
// loadFile('/home/michael/Wetter/vr/1p00/20240517/18/20240517.18.006.1p00.grb').then((buffer) => {
// loadFile('/home/michael/Downloads/20240602.12.018.0p25.grb').then((buffer) => {
loadFile('/home/michael/Wetter/noaa/archive/2024/05/17/20240517_gfs.t12z.pgrb2.0p25.f009.grib2').then((buffer) => {
// loadFile('/home/michael/Wetter/noaa/archive/2024/05/17/20240517_gfs.t12z.pgrb2.1p00.f009.grib2').then((buffer) => {
// loadFile('/home/michael/Wetter/noaa/archive/2024/05/17/20240517_gfs.t12z.pgrb2.1p00.f015.grib2').then((buffer) => {
      console.log(`Loaded data in ${new Date()-t0}ms`);
      let result = decodeGRIB2ArrayBuffer(buffer);
      console.log(`Finished in ${new Date()-t0}ms`);
      // console.log(JSON.stringify(result, undefined, ' '));
 }) ;
