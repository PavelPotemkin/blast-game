import { GameConfig, GameBoard, GameFalledCubes } from "../../types";
import { copyBoard, getCellByCoords, setCellByCoords } from "../../utils";
import { createCube } from "../createCube";

export const fallCubes = (config: GameConfig, board: GameBoard) => {
  const falledCubes: GameFalledCubes = [];
  const { boardCols, boardRows } = config;
  const boardCopy = copyBoard(board);
  const boardWithoutMoved = copyBoard(board);

  for (let y = boardRows - 1; y >= 0; y--) {
    for (let x = 0; x <= boardCols - 1; x++) {
      const maybeCube = getCellByCoords(boardCopy, { x, y });
      if (!maybeCube) {
        let fallY = y;
        for (let checkY = y; checkY >= 0; checkY--) {
          const temp = getCellByCoords(boardCopy, {
            x,
            y: checkY,
          });

          if (temp) {
            const from = { x, y: checkY };
            const to = { x, y: fallY };
            const updatedCube = createCube(to, temp.color, temp.type);

            setCellByCoords(boardCopy, to, updatedCube);
            setCellByCoords(boardCopy, from, null);

            setCellByCoords(boardWithoutMoved, to, null);
            setCellByCoords(boardWithoutMoved, from, null);

            falledCubes.push({
              from,
              to,
              cube: updatedCube,
            });

            fallY--;
          }
        }
      }
    }
  }

  return {
    board: boardCopy,
    falledCubes,
    boardWithoutMoved,
  };
};
