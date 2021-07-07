import * as gh from "ngeohash";
import { ILatLong } from "../types/ILatLong";
import { ITestable } from "../types/ITestable";

export class NGeohash implements ITestable {
  public name: string = "ngeohash";
  public decode: (hash: string) => ILatLong = gh.decode;
  public encode: (latLong: ILatLong) => string = ({ latitude, longitude }) =>
    gh.encode(latitude, longitude);
}
