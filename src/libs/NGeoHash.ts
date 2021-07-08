import * as gh from "ngeohash";
import { ILatLong } from "../types/ILatLong";
import { IHasheable } from "../types/IHasheable";

export class NGeohash implements IHasheable {
  public name: string = "ngeohash";
  public decode: (hash: string) => ILatLong = gh.decode;
  public encode: (latLong: ILatLong, precision?: any) => string = ({ latitude, longitude }, precision) =>
    gh.encode(latitude, longitude, precision);
}
