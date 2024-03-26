import { Branded } from "../types";
import { GAME_CUBES, GAME_STATUSES } from "./constants";

export interface GameConfigParams {
  boardRows: number;
  boardCols: number;
  cubeColorsCount: number;
  minChainLength: number;
  scoresToWin: number;
}

export type GameCubeColor = (typeof GAME_CUBES)[keyof typeof GAME_CUBES];

export type GameStatus = (typeof GAME_STATUSES)[keyof typeof GAME_STATUSES];

export type GameCubeId = Branded<string, "GameBoardCubeId">;

export interface GameCellCoords {
  x: number;
  y: number;
}

export interface GameCube {
  id: GameCubeId;
  color: GameCubeColor;
  coords: GameCellCoords;
}

export interface GameConfig {
  boardRows: number;
  boardCols: number;
  cubeColorsCount: number;
  minChainLength: number;
  scoresToWin: number;
  countdownSeconds: number;
}

export type GameCubes = Array<GameCube>;

export type GameBoardCell = GameCube | null;

export type GameBoardFilled = Array<Array<GameCube>>;

export type GameBoard = Array<Array<GameBoardCell>>;

export type GameBurnedCubes = Array<GameCube>;

export type GameScore = number;

export interface GameFalledCube {
  from: GameCellCoords;
  to: GameCellCoords;
  cube: GameCube;
}

export type GameFalledCubes = Array<GameFalledCube>;

export interface GameStore {
  config: GameConfig;
  board: GameBoardFilled;
  score: number;
  status: GameStatus;
  avialableCubes: Array<GameCubeColor>;
}
