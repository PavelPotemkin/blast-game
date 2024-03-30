import { copyBoard, getCellByCoords, setCellByCoords } from "../../utils";
import {
  GameBoard,
  GameBoardFilled,
  GameBurnedCubes,
  GameConfig,
  GameCube,
  GameCubes,
} from "../../types";
import { GAME_CUBES_TYPE } from "../../constants";

function burnSuperCube(
  cube: GameCube,
  boardWithBurned: GameBoard,
  burnedCubes: GameBurnedCubes,
  superBombRadius: number,
) {
  const burnCube = (cubeToBurn: GameCube) => {
    burnedCubes.push(cubeToBurn);
    setCellByCoords(boardWithBurned, cubeToBurn.coords, null);

    if (cubeToBurn.type !== GAME_CUBES_TYPE.BASE) {
      burnSuperCube(cubeToBurn, boardWithBurned, burnedCubes, superBombRadius);
    }
  };

  if (cube.type === GAME_CUBES_TYPE.COL) {
    for (let row = 0; row < boardWithBurned.length; row++) {
      const cubeToBurnCoords = {
        y: row,
        x: cube.coords.x,
      };

      const cubeToBurn = getCellByCoords(boardWithBurned, cubeToBurnCoords);

      if (cubeToBurn) {
        burnCube(cubeToBurn);
      }
    }
  } else if (cube.type === GAME_CUBES_TYPE.ROW) {
    for (let col = 0; col < boardWithBurned[0].length; col++) {
      const cubeToBurnCoords = {
        y: cube.coords.y,
        x: col,
      };

      const cubeToBurn = getCellByCoords(boardWithBurned, cubeToBurnCoords);

      if (cubeToBurn) {
        burnCube(cubeToBurn);
      }
    }
  } else if (cube.type === GAME_CUBES_TYPE.RADIUS) {
    const radius = superBombRadius;

    for (
      let row = cube.coords.y - radius;
      row <= cube.coords.y + radius;
      row++
    ) {
      for (
        let col = cube.coords.x - radius;
        col <= cube.coords.x + radius;
        col++
      ) {
        if (
          row >= 0 &&
          row < boardWithBurned.length &&
          col >= 0 &&
          col < boardWithBurned[0].length
        ) {
          const cubeToBurnCoords = {
            y: row,
            x: col,
          };

          const cubeToBurn = getCellByCoords(boardWithBurned, cubeToBurnCoords);

          if (cubeToBurn) {
            burnCube(cubeToBurn);
          }
        }
      }
    }
  } else if (cube.type === GAME_CUBES_TYPE.BOARD) {
    for (let row = 0; row < boardWithBurned.length; row++) {
      for (let col = 0; col < boardWithBurned[0].length; col++) {
        const cubeToBurnCoords = {
          y: row,
          x: col,
        };

        const cubeToBurn = getCellByCoords(boardWithBurned, cubeToBurnCoords);

        if (cubeToBurn) {
          burnCube(cubeToBurn);
        }
      }
    }
  }
}

export const burnCubes = (
  config: GameConfig,
  board: GameBoardFilled,
  cubes: GameCubes,
) => {
  const burnedCubes: GameBurnedCubes = [];
  const boardCopy = copyBoard(board);

  const superCubes = cubes.filter((cube) => cube.type !== GAME_CUBES_TYPE.BASE);

  superCubes.forEach((cube) => {
    burnSuperCube(cube, boardCopy, burnedCubes, config.superBombRadius);
  });

  for (const cube of cubes) {
    const alreadyBurned = burnedCubes.find(
      (burnedCube) =>
        burnedCube.coords.x === cube.coords.x &&
        burnedCube.coords.y === cube.coords.y,
    );

    if (!alreadyBurned) {
      burnedCubes.push(cube);
      setCellByCoords(boardCopy, cube.coords, null);
    }
  }

  return {
    burnedCubes,
    board: boardCopy as GameBoard,
  };
};
