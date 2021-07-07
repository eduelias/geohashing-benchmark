import { GeoHash as gh } from "geohash";
import { ILatLong } from "../types/ILatLong";
import { ITestable } from "../types/ITestable";

export class GeoHash implements ITestable {
  public name: string = "geohash";
  public decode: (hash: string) => ILatLong = (hash: string) => {
    const { latitude, longitude } = gh.decodeGeoHash(hash);
    return { latitude, longitude };
  };
  public encode: (latLong: ILatLong) => string = ({ latitude, longitude }) =>
    gh.encodeGeoHash(latitude, longitude);
}
