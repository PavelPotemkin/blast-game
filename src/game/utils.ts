import { GameBoardFilled, GameCellCoords, GameCube } from "./types";

export const getCellByCoords = (
  board: GameBoardFilled,
  coords: GameCellCoords,
) => {
  return board[coords.y]?.[coords.x] || null;
};

export const setCellByCoords = (
  board: GameBoardFilled,
  coords: GameCellCoords,
  maybeCube: GameCube | null,
) => {
  board[coords.y][coords.x] = maybeCube;
};

export const copyBoard = (board: GameBoardFilled) => {
  return JSON.parse(JSON.stringify(board));
};

export function getRandomInt(min: number, max: number) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

export const wait = (ms: number = 1000) =>
  new Promise((resolve) => setTimeout(resolve, ms));
