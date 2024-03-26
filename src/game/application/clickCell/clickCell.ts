import {
  checkHasMoves,
  fallCubes,
  fillEmptyCells,
  getUpdateScore,
  mixCubes,
  tryBurnCubes,
  updateGameStatus,
} from "../../domain";
import { ClickCell } from "../../ports.input";
import {
  SaveScore,
  ReadConfig,
  ReadBoard,
  ReadScore,
  SaveBoard,
  ReadAvialableCubesColors,
  ReadStatus,
  SaveStatus,
} from "../../ports.output";

interface Deps {
  readScore: ReadScore;
  saveScore: SaveScore;
  readConfig: ReadConfig;
  readBoard: ReadBoard;
  saveBoard: SaveBoard;
  readAvialableCubesColors: ReadAvialableCubesColors;
  readStatus: ReadStatus;
  saveStatus: SaveStatus;
}

export const createClickCell =
  ({
    saveScore,
    readConfig,
    readBoard,
    readScore,
    saveBoard,
    readAvialableCubesColors,
    readStatus,
    saveStatus,
  }: Deps): ClickCell =>
  (coords) => {
    const config = readConfig();
    const board = readBoard();
    const score = readScore();

    const maybeBurnedInfo = tryBurnCubes(config, board, coords);
    if (!maybeBurnedInfo) {
      console.log("[DEBUG]: no cubes to burn");
      return null;
    }

    const { burnedCubes, board: boardWithBurned } = maybeBurnedInfo;
    const updatedScore = getUpdateScore(burnedCubes, score);

    const {
      falledCubes,
      board: falledBoard,
      boardWithoutMoved,
    } = fallCubes(config, boardWithBurned);

    const avialableCubesColors = readAvialableCubesColors();

    const {
      newCubes,
      board: filledBoard,
      falledNewCubes,
    } = fillEmptyCells(falledBoard, avialableCubesColors);

    const hasMoves = checkHasMoves(config, filledBoard);

    const updatedBoard = hasMoves ? filledBoard : mixCubes(config, filledBoard);
    const mixed = !hasMoves;

    const status = readStatus();
    const updatedStatus = updateGameStatus(
      config,
      updatedBoard,
      updatedScore,
      config.scoresToWin,
      status,
    );

    saveScore(updatedScore);
    saveBoard(updatedBoard);
    saveStatus(updatedStatus);

    return {
      burnedCubes,
      falledCubes,
      boardWithBurned,
      falledBoard,
      boardWithoutMoved,
      mixed,
      filledBoard,
      newCubes,
      updatedScore,
      board: updatedBoard,
      falledNewCubes,
    };
  };
