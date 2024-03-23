import { getRandomInt } from "../../utils";
import { GameBoardCubeId, GameCellCoords, GameCubeColor } from "../../types";

let cubeIdx = 0;

export const createRandomCube = (
  coords: GameCellCoords,
  avialableCubesColors: Array<GameCubeColor>,
) => {
  const getRandomColor = (colors: Array<GameCubeColor>): GameCubeColor => {
    return colors[getRandomInt(0, colors.length - 1)];
  };

  return {
    id: `${cubeIdx++}` as GameBoardCubeId,
    color: getRandomColor(avialableCubesColors),
    coords,
  };
};
