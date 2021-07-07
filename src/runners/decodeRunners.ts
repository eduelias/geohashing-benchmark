import { add } from "benny";
import { ITestable } from "../types/ITestable";
import { SuiteObject } from "../types/SuiteObject";

export function decodeRunner(
  hashes: Array<string>,
  libraries: Array<ITestable>
): Promise<SuiteObject>[] {
  const runs: Promise<SuiteObject>[] = [];
  for (const library of libraries) {
    runs.push(
      add(`${library.name} decoding`, () => {
        for (const hash of hashes) {
          library.decode(hash);
        }
      })
    );
  }
  return runs;
}
