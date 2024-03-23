import { getCellByCoords } from "src/game/utils";
import { GameBoard, GameBoardCubeId, GameConfig } from "../../types";
import { getLinkedCubes } from "../getLinkedCubes";

export const checkHasMoves = (config: GameConfig, board: GameBoard) => {
  const checkedCubes: Array<GameBoardCubeId> = [];

  const { boardCols, boardRows, minChainLength } = config;

  for (let y = 0; y < boardRows; y++) {
    for (let x = 0; x < boardCols; x++) {
      const cube = getCellByCoords(board, { x, y });

      if (cube) {
        const linkedCubes = getLinkedCubes(
          board,
          { x, y },
          cube.color,
          checkedCubes,
        );
        if (linkedCubes.length >= minChainLength) {
          return true;
        } else {
          checkedCubes.push(...linkedCubes.map((cube) => cube.id));
        }
      }
    }
  }

  return false;
};
