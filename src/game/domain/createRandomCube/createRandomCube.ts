import { getRandomInt } from "../../utils";
import { GameCubeId, GameCellCoords, GameCubeColor } from "../../types";

let cubeIdx = 0;

export const createRandomCube = (
  coords: GameCellCoords,
  avialableCubesColors: Array<GameCubeColor>,
) => {
  const getRandomColor = (colors: Array<GameCubeColor>): GameCubeColor => {
    return colors[getRandomInt(0, colors.length)];
  };

  return {
    id: `${cubeIdx++}` as GameCubeId,
    color: getRandomColor(avialableCubesColors),
    coords,
  };
};
