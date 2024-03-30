import {
  GameBoard,
  GameBurnedCubes,
  GameCellCoords,
  GameCubes,
  GameFalledCubes,
  GameMixedBoard,
  GameScore,
  GameStatus,
  GameSuperCubes,
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
  superCubes: GameSuperCubes;
  falledCubes: GameFalledCubes;
  newCubes: GameCubes;
  updatedScore: GameScore;
  boardWithoutMoved: GameBoard;
  falledNewCubes: GameFalledCubes;
  status: GameStatus;
  mixedBoards: Array<GameMixedBoard>;
  boardBurnedWithSuper: GameBoard;
} | null;
