import { GameBurnedCubes, GameScore } from "../../types";

export const getUpdateScore = (
  burnedCubes: GameBurnedCubes,
  score: GameScore,
) => {
  return burnedCubes.length + score;
};
