import { suite, cycle, complete, save } from "benny";
import { Libraries } from "../libs/libRegistry";
import { encodeRunner } from "../runners";
import { genRandomCoordinates } from "../utils/rndCoordGen";

const Coordinates = genRandomCoordinates(10000);
export const encodeSuite = suite(
  "Encoding",
  ...encodeRunner(Coordinates, Libraries),
  cycle(),
  complete(),
  save({ file: "encode", version: "1.0.0" }),
  save({ file: "encode", format: "chart.html" })
);
