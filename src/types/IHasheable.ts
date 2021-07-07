import { ILatLong } from "./ILatLong";

export interface IHasheable {
  name?: string;
  decode: (hash: string) => ILatLong;
  encode: (latlon: ILatLong) => string;
}
