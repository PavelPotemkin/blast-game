import { GAME_STATUSES } from "../../constants";
import { generateBoard, updateAvialableCubesColors } from "../../domain";
import {
  SaveAvialableCubesColors,
  SaveBoard,
  SaveScore,
  SaveStatus,
  ReadConfig,
  SaveRemainingMoves,
} from "../../ports.output";
import { StartGame } from "../../ports.input";

interface Deps {
  saveAvialableCubesColors: SaveAvialableCubesColors;
  saveBoard: SaveBoard;
  saveScore: SaveScore;
  saveStatus: SaveStatus;
  readConfig: ReadConfig;
  saveRemainingMoves: SaveRemainingMoves;
}

export const createStartGame =
  ({
    saveAvialableCubesColors,
    saveBoard,
    saveScore,
    saveStatus,
    readConfig,
    saveRemainingMoves,
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
    saveRemainingMoves(config.moveCount);

    return {
      board,
      avialableCubesColors,
      score,
      status,
    };
  };
