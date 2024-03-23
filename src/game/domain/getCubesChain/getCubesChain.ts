import { getCellByCoords } from "src/game/utils";
import { GameCubes, GameCellCoords, GameBoard } from "../../types";
import { getLinkedCubes } from "../getLinkedCubes";

export const getCubesChain = (
  board: GameBoard,
  coords: GameCellCoords,
): GameCubes => {
  const cube = getCellByCoords(board, coords);

  const linkedCubes = getLinkedCubes(
    board,
    { x: coords.x, y: coords.y },
    cube.color,
    [],
  );

  return linkedCubes;
};
