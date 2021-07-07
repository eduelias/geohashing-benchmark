import { ITestable } from "../types/ITestable";
import { NGeohash } from "./NGeoHash";
import { LatLongGeoHash } from "./latLonGeoHash";
import { GeoHash } from "./GeoHash";

export const Libraries: Array<ITestable> = [
  new NGeohash(),
  new LatLongGeoHash(),
  new GeoHash(),
];
