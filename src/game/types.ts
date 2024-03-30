import { Branded } from "../types";
import { GAME_CUBES, GAME_CUBES_TYPE, GAME_STATUSES } from "./constants";

export interface GameConfigParams {
  boardRows: number;
  boardCols: number;
  cubeColorsCount: number;
  minChainLength: number;
  scoresToWin: number;
}

export type GameCubeColor = (typeof GAME_CUBES)[keyof typeof GAME_CUBES];

export type GameStatus = (typeof GAME_STATUSES)[keyof typeof GAME_STATUSES];

export type GameCubeType =
  (typeof GAME_CUBES_TYPE)[keyof typeof GAME_CUBES_TYPE];

export type GameCubeId = Branded<string, "GameBoardCubeId">;

export type GameMoves = number;

export type GameScore = number;

export type GameMixCount = number;

export interface GameCellCoords {
  x: number;
  y: number;
}

export interface GameCube {
  id: GameCubeId;
  color: GameCubeColor;
  coords: GameCellCoords;
  type: GameCubeType;
}

export interface GameConfig {
  boardRows: number;
  boardCols: number;
  cubeColorsCount: number;
  minChainLength: number;
  scoresToWin: number;
  moveCount: number;
  mixCount: number;
  cubesToSuper: number;
  superBombRadius: number;
}

export type GameCubes = Array<GameCube>;

export type GameBoardCell = GameCube | null;

export type GameBoardFilled = Array<Array<GameCube>>;

export type GameBoard = Array<Array<GameBoardCell>>;

export type GameMixedBoard = Array<{
  from: GameCellCoords;
  to: GameCellCoords;
  cube: GameCube;
}>;

export type GameBurnedCubes = Array<GameCube>;

export type GameSuperCubes = Array<GameCube>;

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
