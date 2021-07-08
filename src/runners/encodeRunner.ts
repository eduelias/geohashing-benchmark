import { add } from "benny";
import { IHasheable } from "../types/IHasheable";
import { ILatLong } from "../types/ILatLong";
import { SuiteObject } from "../types/SuiteObject";

export function encodeRunner(
  coordinates: Array<ILatLong>,
  libraries: Array<IHasheable>
): Promise<SuiteObject>[] {
  const runs: Promise<SuiteObject>[] = [];
  for (const library of libraries) {
    runs.push(
      add(`${library.name}`, () => {
        for (const coord of coordinates) {
          library.encode(coord, 4);
        }
      })
    );
  }
  return runs;
}
