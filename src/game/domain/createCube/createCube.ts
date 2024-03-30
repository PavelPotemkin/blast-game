import { GAME_CUBES_TYPE } from "../../constants";
import {
  GameCubeId,
  GameCellCoords,
  GameCubeColor,
  GameCube,
  GameCubeType,
} from "../../types";

let cubeIdx = 0;

interface Options {
  id?: GameCubeId;
  coords: GameCellCoords;
  color: GameCubeColor;
  type?: GameCubeType;
}

export const createCube = ({ id, color, coords, type }: Options): GameCube => {
  return {
    id: id || (`${cubeIdx++}` as GameCubeId),
    color,
    coords,
    type: type || GAME_CUBES_TYPE.BASE,
  };
};
