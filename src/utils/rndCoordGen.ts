import { ILatLong } from "../types/ILatLong";

function getRandomNumberBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function genRandomCoordinates(size: number): Array<ILatLong> {
  const coordinates = Array<ILatLong>();

  for (let i = 0; i < size; i++) {
    coordinates.push({
      latitude: getRandomNumberBetween(-18000000, 1800000) / 100000,
      longitude: getRandomNumberBetween(-90, 90) / 100000,
    });
  }

  return coordinates;
}
