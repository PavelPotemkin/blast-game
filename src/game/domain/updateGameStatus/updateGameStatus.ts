import {
  GameBoardFilled,
  GameConfig,
  GameMoves,
  GameScore,
  GameStatus,
} from "../../types";
import { checkIsWin } from "../checkIsWin";
import { GAME_STATUSES } from "../../constants";
import { checkHasMoves } from "../checkHasMoves";

export const updateGameStatus = (
  config: GameConfig,
  board: GameBoardFilled,
  score: GameScore,
  scoresToWin: GameScore,
  status: GameStatus,
  currentMoves: GameMoves,
): GameStatus => {
  if (checkIsWin(score, scoresToWin)) {
    return GAME_STATUSES.WIN;
  } else if (!checkHasMoves(config, board) || currentMoves === 0) {
    return GAME_STATUSES.NO_MOVES;
  }

  return status;
};
