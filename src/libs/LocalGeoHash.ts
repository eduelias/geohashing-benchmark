// geohash.js
// Geohash library for Javascript
// (c) 2008 David Troy
// Distributed under the MIT License

import { IHasheable } from "../types/IHasheable";
import { ILatLong } from "../types/ILatLong";

const BITS = [16, 8, 4, 2, 1];
const BASE32 = "0123456789bcdefghjkmnpqrstuvwxyz";

function refine_interval(interval: any, charIndex: any, mask: any) {
  if (charIndex & mask) interval[0] = (interval[0] + interval[1]) / 2;
  else interval[1] = (interval[0] + interval[1]) / 2;
}

export class LocalGeoHash implements IHasheable {
  public name: string = "Local GeoHash";

  public decode(geohash: string) {
    var isEven = true;
    var lat = [];
    var lon = [];
    lat[0] = -90.0;
    lat[1] = 90.0;
    lon[0] = -180.0;
    lon[1] = 180.0;
    let lat_err = 90.0;
    let lon_err = 180.0;

    for (let i = 0; i < geohash.length; i++) {
      const currentChar = geohash[i];
      const currCharIndex = BASE32.indexOf(currentChar);
      for (let j = 0; j < 5; j++) {
        const mask = BITS[j];
        if (isEven) {
          lon_err /= 2;
          refine_interval(lon, currCharIndex, mask);
        } else {
          lat_err /= 2;
          refine_interval(lat, currCharIndex, mask);
        }
        isEven = !isEven;
      }
    }
    lat[2] = (lat[0] + lat[1]) / 2;
    lon[2] = (lon[0] + lon[1]) / 2;

    return { latitude: lat, longitude: lon };
  }

  public encode({ latitude, longitude }: ILatLong, precision: number): string {
    var isEven = true;
    var lat = [];
    var lon = [];
    var bit = 0;
    var ch = 0;
    let geohash = "";

    lat[0] = -90.0;
    lat[1] = 90.0;
    lon[0] = -180.0;
    lon[1] = 180.0;
    let middle: any;
    while (geohash.length < precision) {
      if (isEven) {
        middle = (lon[0] + lon[1]) / 2;
        if (longitude > middle) {
          ch |= BITS[bit];
          lon[0] = middle;
        } else lon[1] = middle;
      } else {
        middle = (lat[0] + lat[1]) / 2;
        if (latitude > middle) {
          ch |= BITS[bit];
          lat[0] = middle;
        } else lat[1] = middle;
      }

      isEven = !isEven;
      if (bit < 4) bit++;
      else {
        geohash += BASE32[ch];
        bit = 0;
        ch = 0;
      }
    }
    return geohash;
  }
}
