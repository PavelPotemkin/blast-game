import { GameConfig } from "../../types";
import { GAME_CUBES } from "../../constants";

const avialableCubes = [
  GAME_CUBES.RED,
  GAME_CUBES.GREEN,
  GAME_CUBES.BLUE,
  GAME_CUBES.YELLOW,
  GAME_CUBES.PURPLE,
];

export const updateAvialableCubesColors = (config: GameConfig) => {
  const { cubeColorsCount } = config;

  if (Object.keys(GAME_CUBES).length < cubeColorsCount) {
    throw new Error("Invalid cube colors count");
  }

  return avialableCubes.slice(0, cubeColorsCount);
};
