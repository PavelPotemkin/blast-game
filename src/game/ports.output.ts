import {
  GameCellCoords,
  GameCube,
  GameBoardFilled,
  GameCubeColor,
  GameConfig,
  GameStatus,
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
export type ReadScore = () => number;
export type SaveScore = (score: number) => void;
export type ReadStatus = () => GameStatus;
export type SaveStatus = (status: GameStatus) => void;
