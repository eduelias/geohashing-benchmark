import Geohash from "latlon-geohash";
import { ILatLong } from "../types/ILatLong";
import { IHasheable } from "../types/IHasheable";

export class LatLongGeoHash implements IHasheable {
  public name: string = "latlong-geohash";
  public decode: (hash: string) => ILatLong = (hash: string) => {
    const { lat, lon } = Geohash.decode(hash);
    return { latitude: lat, longitude: lon };
  };
  public encode: (latLong: ILatLong) => string = ({ latitude, longitude }) =>
    Geohash.encode(latitude, longitude);
}
