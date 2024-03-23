import { GAME_STATUSES } from "../constants";
import {
  ReadCellByCoords,
  SaveCellByCoords,
  ReadBoard,
  SaveBoard,
  ReadConfig,
  SaveAvialableCubesColors,
  SaveConfig,
  ReadAvialableCubesColors,
  SaveScore,
  ReadScore,
  SaveStatus,
  ReadStatus,
} from "../ports.output";
import { GameConfig, GameStore } from "../types";

export const createStore = (config: GameConfig) => {
  const store: GameStore = {
    config,
    board: [],
    score: 0,
    status: GAME_STATUSES.IDLE,
    avialableCubes: [],
  };

  const readConfig: ReadConfig = () => store.config;

  const saveConfig: SaveConfig = (config) => {
    store.config = config;
  };

  const saveAvialableCubesColors: SaveAvialableCubesColors = (
    avialableCubes,
  ) => {
    store.avialableCubes = avialableCubes;
  };

  const readAvialableCubesColors: ReadAvialableCubesColors = () =>
    store.avialableCubes;

  const readBoard: ReadBoard = () => store.board;

  const saveBoard: SaveBoard = (board) => {
    store.board = board;
  };

  const readCellByCoords: ReadCellByCoords = (coords) => {
    return store.board[coords.y]?.[coords.x] || null;
  };

  const saveCellByCoords: SaveCellByCoords = (coords, maybeCube) => {
    store.board[coords.y][coords.x] = maybeCube;
  };

  const saveScore: SaveScore = (score) => {
    store.score = score;
  };

  const readScore: ReadScore = () => store.score;

  const saveStatus: SaveStatus = (status) => {
    store.status = status;
  };

  const readStatus: ReadStatus = () => store.status;

  return {
    readConfig,
    saveConfig,
    saveAvialableCubesColors,
    readAvialableCubesColors,
    readBoard,
    saveBoard,
    readCellByCoords,
    saveCellByCoords,
    saveScore,
    readScore,
    saveStatus,
    readStatus,
  };
};
