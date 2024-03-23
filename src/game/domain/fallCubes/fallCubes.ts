import { GameConfig, GameBoard, GameFalledCubes } from "../../types";
import { copyBoard, getCellByCoords, setCellByCoords } from "../../utils";

export const fallCubes = (config: GameConfig, board: GameBoard) => {
  const falledCubes: GameFalledCubes = [];
  const { boardCols, boardRows } = config;
  const boardCopy = copyBoard(board);

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
            setCellByCoords(boardCopy, { x, y: fallY }, temp);
            setCellByCoords(boardCopy, { x, y: checkY }, null);

            falledCubes.push({
              from: { x, y: checkY },
              to: { x, y: fallY },
              cube: temp,
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
  };
};
