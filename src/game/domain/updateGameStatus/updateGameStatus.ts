import { GameBoard, GameConfig, GameScore, GameStatus } from "../../types";
import { checkIsWin } from "../checkIsWin";
import { GAME_STATUSES } from "../../constants";
import { checkHasMoves } from "../checkHasMoves";

export const updateGameStatus = (
  config: GameConfig,
  board: GameBoard,
  score: GameScore,
  scoresToWin: GameScore,
  status: GameStatus,
): GameStatus => {
  if (checkIsWin(score, scoresToWin)) {
    return GAME_STATUSES.WIN;
  } else if (!checkHasMoves(config, board)) {
    return GAME_STATUSES.NO_MOVES;
  }

  return status;
};
