import { genRandomCoordinates } from "./rndCoordGen";
import { NGeohash } from "./../libs/NGeoHash";

export function genRandomHashes(size: number): Array<string> {
  const hashes: Array<string> = [];
  const coordinates = genRandomCoordinates(size);
  const gh = new NGeohash();

  for (const coord of coordinates) {
    hashes.push(gh.encode(coord));
  }

  return hashes;
}
