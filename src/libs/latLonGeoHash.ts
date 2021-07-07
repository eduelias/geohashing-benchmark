import Geohash from "latlon-geohash";
import { ILatLong } from "../types/ILatLong";
import { ITestable } from "../types/ITestable";

export class LatLongGeoHash implements ITestable {
  public name: string = "latlong-geohash";
  public decode: (hash: string) => ILatLong = (hash: string) => {
    const { lat, lon } = Geohash.decode(hash);
    return { latitude: lat, longitude: lon };
  };
  public encode: (latLong: ILatLong) => string = ({ latitude, longitude }) =>
    Geohash.encode(latitude, longitude);
}
