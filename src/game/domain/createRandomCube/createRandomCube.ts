import { getRandomInt } from "../../utils";
import { GameCellCoords, GameCubeColor, GameCubeType } from "../../types";
import { createCube } from "../createCube";

export const createRandomCube = (
  coords: GameCellCoords,
  avialableCubesColors: Array<GameCubeColor>,
  type?: GameCubeType,
) => {
  const getRandomColor = (colors: Array<GameCubeColor>): GameCubeColor => {
    return colors[getRandomInt(0, colors.length)];
  };

  return createCube(coords, getRandomColor(avialableCubesColors), type);
};
