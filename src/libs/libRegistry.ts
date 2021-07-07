import { ITestable } from "../types/ITestable";
import { NGeohash } from "./NGeoHash";
import { LatLongGeoHash } from "./latLonGeoHash";

export const Libraries: Array<ITestable> = [
  new NGeohash(),
  new LatLongGeoHash(),
];
