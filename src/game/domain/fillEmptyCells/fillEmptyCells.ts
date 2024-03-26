import { copyBoard, setCellByCoords } from "src/game/utils";
import {
  GameCubes,
  GameCellCoords,
  GameCubeColor,
  GameFalledCubes,
  GameBoard,
} from "../../types";
import { createRandomCube } from "../createRandomCube";

export const fillEmptyCells = (
  boardWithEmpty: GameBoard,
  avialableCubesColors: Array<GameCubeColor>,
) => {
  const newCubes: GameCubes = [];
  const boardCopy = copyBoard(boardWithEmpty);

  const emptyCells = boardWithEmpty.reduce((acc, row, y) => {
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

  const getEmptyCountInColumn = (x: number) => {
    return boardWithEmpty.reduce((acc, row) => {
      if (!row[x]) {
        acc++;
      }

      return acc;
    }, 0);
  };

  const falledNewCubes = newCubes.reduce((acc, cube) => {
    const { coords } = cube;

    const falledCube = {
      from: {
        x: coords.x,
        y: coords.y - getEmptyCountInColumn(coords.x),
      },
      to: coords,
      cube,
    };

    acc.push(falledCube);

    return acc;
  }, [] as GameFalledCubes);

  return {
    newCubes,
    falledNewCubes,
    board: boardCopy,
  };
};
