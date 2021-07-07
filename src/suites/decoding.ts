import { suite, cycle, complete, save } from "benny";
import { Libraries } from "../libs/libRegistry";
import { decodeRunner } from "../runners";
import { genRandomHashes } from "../utils/rndHashGen";

const Hashes = genRandomHashes(100000);

export const decodeSuite = suite(
  "Decoding",
  ...decodeRunner(Hashes, Libraries),
  cycle(),
  complete(),
  save({ file: "decode", version: "1.0.0" }),
  save({ file: "decode", format: "chart.html" })
);
