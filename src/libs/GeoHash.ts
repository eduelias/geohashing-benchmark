import { GeoHash as gh } from "geohash";
import { ILatLong } from "../types/ILatLong";
import { IHasheable } from "../types/IHasheable";

export class GeoHash implements IHasheable {
  public name: string = "geohash";
  public decode: (hash: string) => ILatLong = (hash: string) => {
    const { latitude, longitude } = gh.decodeGeoHash(hash);
    return { latitude, longitude };
  };
  public encode: (latLong: ILatLong) => string = ({ latitude, longitude }) =>
    gh.encodeGeoHash(latitude, longitude);
}
