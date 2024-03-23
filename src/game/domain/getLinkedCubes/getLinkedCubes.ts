import {
  GameBoardFilled,
  GameCubeId,
  GameCellCoords,
  GameCubeColor,
  GameCubes,
} from "../../types";
import { getCellByCoords } from "../../utils";

export const getLinkedCubes = (
  board: GameBoardFilled,
  coords: GameCellCoords,
  cubeColor: GameCubeColor,
  checkedCubes: Array<GameCubeId>,
) => {
  const getLinkedCubes = (
    board: GameBoardFilled,
    coords: GameCellCoords,
    cubeColor: GameCubeColor,
    checkedCubes: Array<GameCubeId>,
  ) => {
    const linkedCubes: GameCubes = [];

    const getLinkedCube = (coords: GameCellCoords) => {
      const cube = getCellByCoords(board, coords);

      if (cube && cube.color === cubeColor) {
        if (checkedCubes.includes(cube.id)) {
          return;
        }

        checkedCubes.push(cube.id);

        linkedCubes.push(
          cube,
          ...getLinkedCubes(board, coords, cubeColor, checkedCubes),
        );
      }
    };

    getLinkedCube({ x: coords.x, y: coords.y + 1 });
    getLinkedCube({ x: coords.x - 1, y: coords.y });
    getLinkedCube({ x: coords.x + 1, y: coords.y });
    getLinkedCube({ x: coords.x, y: coords.y - 1 });

    return linkedCubes;
  };

  return getLinkedCubes(board, coords, cubeColor, checkedCubes);
};
