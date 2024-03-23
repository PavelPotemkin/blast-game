import { getRandomInt, getCellByCoords } from "../../utils";
import { GameBoard, GameConfig } from "../../types";

export const mixCubes = (config: GameConfig, board: GameBoard) => {
  const { boardCols, boardRows } = config;
  const newBoard: GameBoard = [];

  const avialableCoords = Array.from(
    {
      length: boardRows * boardCols,
    },
    (_, index) => ({
      x: index % boardCols,
      y: Math.floor(index / boardCols),
    }),
  );

  for (let row = 0; row < boardRows; row++) {
    newBoard[row] = [];
    for (let col = 0; col < boardCols; col++) {
      const randomIdx = getRandomInt(0, avialableCoords.length - 1);
      const randomCoords = avialableCoords[randomIdx];
      avialableCoords.splice(randomIdx, 1);

      const cube = getCellByCoords(board, randomCoords);
      newBoard[row][col] = cube;
    }
  }

  return newBoard;
};
