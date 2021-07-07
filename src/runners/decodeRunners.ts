import { add } from "benny";
import { IHasheable } from "../types/IHasheable";
import { SuiteObject } from "../types/SuiteObject";

export function decodeRunner(
  hashes: Array<string>,
  libraries: Array<IHasheable>
): Promise<SuiteObject>[] {
  const runs: Promise<SuiteObject>[] = [];
  for (const library of libraries) {
    runs.push(
      add(`${library.name}`, () => {
        for (const hash of hashes) {
          library.decode(hash);
        }
      })
    );
  }
  return runs;
}
