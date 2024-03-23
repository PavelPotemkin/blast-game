import { GameBoardFilled, GameCellCoords, GameConfig } from "src/game/types";
import { getCubesChain } from "../getCubesChain";
import { burnCubes } from "../burnCubes";

export const tryBurnCubes = (
  config: GameConfig,
  board: GameBoardFilled,
  coords: GameCellCoords,
) => {
  const { minChainLength } = config;
  const cubesChain = getCubesChain(board, coords);

  if (cubesChain.length < minChainLength) {
    return null;
  }

  return burnCubes(board, cubesChain);
};
