import { ILatLong } from "./ILatLong";

export interface ITestable {
  name?: string;
  decode: (hash: string) => ILatLong;
  encode: (latlon: ILatLong) => string;
}
