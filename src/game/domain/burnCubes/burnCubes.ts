import { copyBoard, setCellByCoords } from "src/game/utils";
import { GameBoard, GameCubes } from "src/game/types";

export const burnCubes = (board: GameBoard, cubes: GameCubes) => {
  const burnedCubes = [];
  const boardCopy = copyBoard(board);

  for (const cube of cubes) {
    burnedCubes.push(cube);
    setCellByCoords(boardCopy, cube.coords, null);
  }

  return {
    burnedCubes,
    board: boardCopy,
  };
};
