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
    readConfig,
  }: Deps): StartGame =>
  () => {
    const config = readConfig();
    const avialableCubesColors = updateAvialableCubesColors(config);
    const board = generateBoard(config, avialableCubesColors);
    const score = 0;
    const status = GAME_STATUSES.PLAYING;

    saveBoard(board);
    saveAvialableCubesColors(avialableCubesColors);
    saveScore(score);
    saveStatus(status);

    return {
      board,
      avialableCubesColors,
      score,
      status,
    };
  };
