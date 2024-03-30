import { GAME_CUBES_TYPE } from "../../constants";
import {
  GameBoard,
  GameBurnedCubes,
  GameCellCoords,
  GameConfig,
} from "../../types";
import { copyBoard, getRandomInt, setCellByCoords } from "../../utils";
import { createCube } from "../createCube";

const getRandomSuperCubeType = () => {
  const supers = Object.values(GAME_CUBES_TYPE).filter(
    (type) => type !== GAME_CUBES_TYPE.BASE,
  );

  return supers[getRandomInt(0, supers.length - 1)];
};

export const tryCreateSuperCube = (
  config: GameConfig,
  clickCoords: GameCellCoords,
  burnedCubes: GameBurnedCubes,
  boardWithBurned: GameBoard,
  enable: boolean,
) => {
  const { cubesToSuper } = config;

  if (burnedCubes.length < cubesToSuper || !enable) {
    return {
      board: boardWithBurned,
      superCubes: [],
    };
  }

  const burnedToSuperCube = burnedCubes.find(
    (cube) =>
      cube.coords.x === clickCoords.x && cube.coords.y === clickCoords.y,
  );

  const superCube = createCube({
    coords: burnedToSuperCube.coords,
    color: burnedToSuperCube.color,
    type: getRandomSuperCubeType(),
  });

  const boardBurnedWithSuper = copyBoard(boardWithBurned);
  setCellByCoords(boardBurnedWithSuper, superCube.coords, superCube);

  return {
    board: boardBurnedWithSuper,
    superCubes: [superCube],
  };
};
