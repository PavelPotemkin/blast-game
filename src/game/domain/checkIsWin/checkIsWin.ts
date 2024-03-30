import { GameScore } from "../../types";

export const checkIsWin = (score: GameScore, scoresToWin: GameScore) => {
  return score >= scoresToWin;
};
