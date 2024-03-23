import { copyBoard, setCellByCoords } from "src/game/utils";
import {
  GameCubes,
  GameCellCoords,
  GameBoardFilled,
  GameCubeColor,
} from "../../types";
import { createRandomCube } from "../createRandomCube";

export const fillEmptyCells = (
  board: GameBoardFilled,
  avialableCubesColors: Array<GameCubeColor>,
) => {
  const newCubes: GameCubes = [];
  const boardCopy = copyBoard(board);

  const emptyCells = board.reduce((acc, row, y) => {
    row.forEach((cell, x) => {
      if (!cell) {
        acc.push({ x, y });
      }
    });

    return acc;
  }, [] as Array<GameCellCoords>);

  for (const coords of emptyCells) {
    const newCube = createRandomCube(coords, avialableCubesColors);
    setCellByCoords(boardCopy, coords, newCube);
    newCubes.push(newCube);
  }

  return {
    newCubes,
    board: boardCopy,
  };
};
