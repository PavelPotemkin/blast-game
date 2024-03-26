import { Game } from "./game";

export default async function init() {
  const game = new Game();

  await game.init();

  game.start();
}
