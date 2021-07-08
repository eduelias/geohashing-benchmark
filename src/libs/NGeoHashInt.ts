import * as gh from "ngeohash";
import { ILatLong } from "../types/ILatLong";
import { IHasheable } from "../types/IHasheable";

export class NGeohashInt implements IHasheable {
  public name: string = "ngeohash-int";
  public decode: (hash: string) => ILatLong = gh.decode;
  public encode: (latLong: ILatLong, precision?: any) => string = (
    { latitude, longitude },
    precision
  ) => gh.encode_int(latitude, longitude).toString();
}
