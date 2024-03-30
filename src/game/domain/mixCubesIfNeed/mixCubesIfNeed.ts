import { getRandomInt, getCellByCoords, copyBoard } from "../../utils";
import {
  GameBoard,
  GameBoardFilled,
  GameConfig,
  GameMixedBoard,
} from "../../types";
import { checkHasMoves } from "../checkHasMoves";
import { createCube } from "../createCube";

export const mixCubesIfNeed = (
  config: GameConfig,
  filledBoard: GameBoardFilled,
  mixCount: number,
) => {
  const { boardCols, boardRows } = config;

  const hasMoves = checkHasMoves(config, filledBoard);
  if (hasMoves) {
    return {
      mixedBoards: [],
      updatedBoard: filledBoard,
    };
  }

  const mixedBoards: Array<GameMixedBoard> = [];
  let prevBoard = filledBoard;

  for (let i = 0; i < mixCount; i++) {
    const newMixedBoard: GameMixedBoard = [];
    const newBoard: GameBoard = Array.from(
      {
        length: boardRows,
      },
      () => Array.from({ length: boardCols }),
    );

    const avialableCoords = Array.from(
      {
        length: boardRows * boardCols,
      },
      (_, index) => ({
        x: index % boardCols,
        y: Math.floor(index / boardCols),
      }),
    );

    for (let row = 0; row < boardRows; row++) {
      for (let col = 0; col < boardCols; col++) {
        const randomIdx = getRandomInt(0, avialableCoords.length - 1);
        const randomCoords = avialableCoords[randomIdx];
        avialableCoords.splice(randomIdx, 1);

        const fromCoords = {
          x: col,
          y: row,
        };

        const cube = getCellByCoords(prevBoard, fromCoords);
        const toCoords = randomCoords;

        const newCube = createCube({
          id: cube.id,
          coords: toCoords,
          color: cube.color,
          type: cube.type,
        });

        newBoard[toCoords.y][toCoords.x] = newCube;
        newMixedBoard.push({
          cube: newCube,
          from: fromCoords,
          to: toCoords,
        });
      }
    }

    mixedBoards.push(newMixedBoard);

    const hasMoves = checkHasMoves(config, newBoard);

    if (hasMoves || i === mixCount - 1) {
      return {
        mixedBoards,
        updatedBoard: copyBoard(newBoard),
      };
    } else {
      prevBoard = copyBoard(newBoard);
    }
  }
};
