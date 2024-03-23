import { GameBoardFilled } from "src/game/types";

export const logPrittyBoard = (board: GameBoardFilled) => {
  const cellStrLen = 6;
  console.log(
    board.map((row) =>
      row
        .map((cell) => {
          if (!cell) {
            return "_".repeat(cellStrLen);
          }

          const cellStr = `${cell.color.slice(0, 1)}_${cell.id}`;

          return cellStr.padEnd(cellStrLen, " ");
        })
        .join(" "),
    ),
  );
};
