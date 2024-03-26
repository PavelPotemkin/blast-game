import {
  GameBoard,
  GameBurnedCubes,
  GameCellCoords,
  GameCubes,
  GameFalledCubes,
  GameScore,
  GameStatus,
} from "./types";

export type StartGame = () => {
  board: GameBoard;
  avialableCubesColors: string[];
  score: GameScore;
  status: GameStatus;
};

export type ClickCell = (coords: GameCellCoords) => {
  board: GameBoard;
  boardWithBurned: GameBoard;
  falledBoard: GameBoard;
  filledBoard: GameBoard;
  burnedCubes: GameBurnedCubes;
  falledCubes: GameFalledCubes;
  newCubes: GameCubes;
  updatedScore: GameScore;
  mixed: boolean;
  boardWithoutMoved: GameBoard;
  falledNewCubes: GameFalledCubes;
} | null;
