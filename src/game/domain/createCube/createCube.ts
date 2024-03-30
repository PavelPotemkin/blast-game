import { GAME_CUBES_TYPE } from "src/game/constants";
import {
  GameCubeId,
  GameCellCoords,
  GameCubeColor,
  GameCube,
  GameCubeType,
} from "../../types";

let cubeIdx = 0;

export const createCube = (
  coords: GameCellCoords,
  color: GameCubeColor,
  type?: GameCubeType,
): GameCube => {
  return {
    id: `${cubeIdx++}` as GameCubeId,
    color,
    coords,
    type: type || GAME_CUBES_TYPE.BASE,
  };
};
