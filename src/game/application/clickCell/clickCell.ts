import { getCellByCoords } from "src/game/utils";
import {
  fallCubes,
  fillEmptyCells,
  getUpdateScore,
  mixCubesIfNeed,
  tryBurnCubes,
  tryCreateSuperCube,
  updateGameStatus,
  updateRemainingMoves,
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
  SaveRemainingMoves,
  ReadRemainingMoves,
  ReadMixCount,
} from "../../ports.output";
import { GAME_CUBES_TYPE } from "src/game/constants";

interface Deps {
  readScore: ReadScore;
  saveScore: SaveScore;
  readConfig: ReadConfig;
  readBoard: ReadBoard;
  saveBoard: SaveBoard;
  readAvialableCubesColors: ReadAvialableCubesColors;
  readStatus: ReadStatus;
  saveStatus: SaveStatus;
  readRemainingMoves: ReadRemainingMoves;
  saveRemainingMoves: SaveRemainingMoves;
  readMixCount: ReadMixCount;
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
    readRemainingMoves,
    saveRemainingMoves,
    readMixCount,
  }: Deps): ClickCell =>
  (coords) => {
    const config = readConfig();
    const board = readBoard();
    const score = readScore();

    const clickedCube = getCellByCoords(board, coords);

    const maybeBurnedInfo = tryBurnCubes(config, board, clickedCube);
    if (!maybeBurnedInfo) {
      return null;
    }

    const isBaseCube = clickedCube.type === GAME_CUBES_TYPE.BASE;

    const { burnedCubes, board: boardWithBurned } = maybeBurnedInfo;
    const updatedScore = getUpdateScore(burnedCubes, score);

    const { board: boardBurnedWithSuper, superCubes } = tryCreateSuperCube(
      config,
      coords,
      burnedCubes,
      boardWithBurned,
      isBaseCube,
    );

    const {
      falledCubes,
      board: falledBoard,
      boardWithoutMoved,
    } = fallCubes(config, boardBurnedWithSuper);

    const avialableCubesColors = readAvialableCubesColors();

    const {
      newCubes,
      board: filledBoard,
      falledNewCubes,
    } = fillEmptyCells(falledBoard, avialableCubesColors);

    const mixCount = readMixCount();

    const { mixedBoards, updatedBoard } = mixCubesIfNeed(
      config,
      filledBoard,
      mixCount,
    );

    const status = readStatus();
    const currentMoves = readRemainingMoves();

    const updatedMoves = updateRemainingMoves(currentMoves);

    const updatedStatus = updateGameStatus(
      config,
      updatedBoard,
      updatedScore,
      config.scoresToWin,
      status,
      updatedMoves,
    );

    saveScore(updatedScore);
    saveBoard(updatedBoard);
    saveStatus(updatedStatus);
    saveRemainingMoves(updatedMoves);

    return {
      burnedCubes,
      superCubes,
      falledCubes,
      boardWithBurned,
      boardBurnedWithSuper,
      falledBoard,
      boardWithoutMoved,
      filledBoard,
      newCubes,
      mixedBoards,
      updatedScore,
      board: updatedBoard,
      falledNewCubes,
      status: updatedStatus,
    };
  };
