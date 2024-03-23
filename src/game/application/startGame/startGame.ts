import { GAME_STATUSES } from "../../constants";
import { generateBoard, updateAvialableCubesColors } from "../../domain";
import {
  SaveAvialableCubesColors,
  SaveBoard,
  SaveScore,
  SaveStatus,
  ReadConfig,
} from "../../ports.output";
import { StartGame } from "../../ports.input";
import { readConfig } from "src/game/store";

interface Deps {
  saveAvialableCubesColors: SaveAvialableCubesColors;
  saveBoard: SaveBoard;
  saveScore: SaveScore;
  saveStatus: SaveStatus;
  readConfig: ReadConfig;
}

export const createStartGame =
  ({
    saveAvialableCubesColors,
    saveBoard,
    saveScore,
    saveStatus,
  }: Deps): StartGame =>
  () => {
    const config = readConfig();
    const avialableCubesColors = updateAvialableCubesColors(config);
    const board = generateBoard(config, avialableCubesColors);

    saveBoard(board);
    saveAvialableCubesColors(avialableCubesColors);
    saveScore(0);
    saveStatus(GAME_STATUSES.PLAYING);
  };
