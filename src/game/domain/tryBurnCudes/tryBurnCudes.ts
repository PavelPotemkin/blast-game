import { GameBoardFilled, GameConfig, GameCube } from "../../types";
import { getCubesChain } from "../getCubesChain";
import { burnCubes } from "../burnCubes";
import { GAME_CUBES_TYPE } from "src/game/constants";

export const tryBurnCubes = (
  config: GameConfig,
  board: GameBoardFilled,
  clickedCube: GameCube,
) => {
  const { minChainLength } = config;

  const cubesChain = getCubesChain(board, clickedCube.coords);

  const needBurn =
    cubesChain.length >= minChainLength ||
    clickedCube.type !== GAME_CUBES_TYPE.BASE;

  if (!needBurn) {
    return null;
  }

  return burnCubes(config, board, cubesChain);
};
