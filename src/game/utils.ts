import { GameBoard, GameCellCoords, GameCube } from "./types";

export const getCellByCoords = (board: GameBoard, coords: GameCellCoords) => {
  return board[coords.y]?.[coords.x] || null;
};

export const setCellByCoords = (
  board: GameBoard,
  coords: GameCellCoords,
  maybeCube: GameCube | null,
) => {
  board[coords.y][coords.x] = maybeCube;
};

export const copyBoard = (board: GameBoard) => {
  return JSON.parse(JSON.stringify(board));
};

export function getRandomInt(min: number, max: number) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
