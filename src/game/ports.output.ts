import {
  GameCellCoords,
  GameCube,
  GameBoardFilled,
  GameCubeColor,
  GameConfig,
  GameStatus,
  GameMoves,
  GameScore,
} from "./types";

export type ReadCellByCoords = (coords: GameCellCoords) => GameCube | null;
export type SaveCellByCoords = (
  coords: GameCellCoords,
  maybeCube: GameCube | null,
) => void;
export type ReadBoard = () => GameBoardFilled;
export type SaveBoard = (board: GameBoardFilled) => void;
export type ReadConfig = () => GameConfig;
export type SaveConfig = (config: GameConfig) => void;
export type SaveAvialableCubesColors = (
  avialableCubes: Array<GameCubeColor>,
) => void;
export type ReadAvialableCubesColors = () => Array<GameCubeColor>;
export type ReadScore = () => GameScore;
export type SaveScore = (score: GameScore) => void;
export type ReadStatus = () => GameStatus;
export type SaveStatus = (status: GameStatus) => void;
export type ReadRemainingMoves = () => GameMoves;
export type SaveRemainingMoves = (moves: GameMoves) => void;
export type ReadMixCount = () => number;
