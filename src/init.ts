import game from "./game";

export default function init() {
  game.startGame();

  game.clickCell({
    x: 5,
    y: 8,
  });
}
