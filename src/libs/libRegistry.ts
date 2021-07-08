import { IHasheable } from "../types/IHasheable";
import { NGeohash } from "./NGeoHash";
import { LatLongGeoHash } from "./latLonGeoHash";
import { GeoHash } from "./GeoHash";
import { LocalGeoHash } from "./LocalGeoHash";
import { NGeohashInt } from "./NGeoHashInt";

export const Libraries: Array<IHasheable> = [
  new NGeohash(),
  new NGeohashInt(),
  new LatLongGeoHash(),
  new GeoHash(),
  new LocalGeoHash(),
];
