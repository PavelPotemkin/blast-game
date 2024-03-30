import { getCellByCoords } from "src/game/utils";
import { GameCubes, GameCellCoords, GameBoardFilled } from "../../types";
import { getLinkedCubes } from "../getLinkedCubes";

export const getCubesChain = (
  board: GameBoardFilled,
  coords: GameCellCoords,
): GameCubes => {
  const cube = getCellByCoords(board, coords);

  const linkedCubes = getLinkedCubes(
    board,
    { x: coords.x, y: coords.y },
    cube.color,
    [cube.id],
  );

  return [...linkedCubes, cube];
};
