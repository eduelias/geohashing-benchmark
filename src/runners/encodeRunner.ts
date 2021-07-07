import { add } from "benny";
import { ITestable } from "../types/ITestable";
import { ILatLong } from "../types/ILatLong";
import { SuiteObject } from "../types/SuiteObject";

export function encodeRunner(
  coordinates: Array<ILatLong>,
  libraries: Array<ITestable>
): Promise<SuiteObject>[] {
  const runs: Promise<SuiteObject>[] = [];
  for (const library of libraries) {
    runs.push(
      add(`${library.name}`, () => {
        for (const coord of coordinates) {
          library.encode(coord);
        }
      })
    );
  }
  return runs;
}
