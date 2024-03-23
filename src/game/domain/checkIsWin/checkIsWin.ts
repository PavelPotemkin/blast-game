import { GameScore } from "src/game/types";

export const checkIsWin = (score: GameScore, scoresToWin: GameScore) => {
  return score >= scoresToWin;
};
