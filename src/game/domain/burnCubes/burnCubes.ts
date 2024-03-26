import { copyBoard, setCellByCoords } from "../../utils";
import {
  GameBoard,
  GameBoardFilled,
  GameBurnedCubes,
  GameCubes,
} from "../../types";

export const burnCubes = (board: GameBoardFilled, cubes: GameCubes) => {
  const burnedCubes: GameBurnedCubes = [];
  const boardCopy = copyBoard(board);

  for (const cube of cubes) {
    burnedCubes.push(cube);
    setCellByCoords(boardCopy, cube.coords, null);
  }

  return {
    burnedCubes,
    board: boardCopy as GameBoard,
  };
};
