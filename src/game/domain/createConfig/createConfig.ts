import { GAME_CUBES } from "../../constants";
import { GameConfigParams } from "../../types";

const minCubeColorsCount = 2;
const maxCubeColorsCount = Object.values(GAME_CUBES).length;

export const createConfig = (params: GameConfigParams) => {
  const { cubeColorsCount } = params;

  if (cubeColorsCount < minCubeColorsCount) {
    throw new Error(
      `cubeColorsCount should be greater than ${minCubeColorsCount - 1}`,
    );
  }

  if (cubeColorsCount > maxCubeColorsCount) {
    throw new Error(
      `cubeColorsCount should be less than ${maxCubeColorsCount + 1}`,
    );
  }

  return params;
};
