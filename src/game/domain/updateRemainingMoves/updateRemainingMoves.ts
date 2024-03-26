import { GameMoves } from "../../types";

export const updateRemainingMoves = (currentMoves: GameMoves) => {
  const updated = currentMoves - 1;
  return updated;
};
