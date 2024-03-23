import { GameBoardFilled, GameConfig, GameCubeColor } from "../../types";
import { createRandomCube } from "../createRandomCube";

export const generateBoard = (
  config: GameConfig,
  avialableCubesColors: Array<GameCubeColor>,
): GameBoardFilled => {
  const { boardRows, boardCols } = config;
  const board: GameBoardFilled = [];

  for (let row = 0; row < boardRows; row++) {
    board[row] = [];
    for (let col = 0; col < boardCols; col++) {
      const coords = { x: col, y: row };
      const cube = createRandomCube(coords, avialableCubesColors);
      board[row][col] = cube;
    }
  }

  return board;
};
