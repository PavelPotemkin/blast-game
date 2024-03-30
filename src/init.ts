import { Game } from "./game";

interface TZVars {
  N: number;
  M: number;
  C: number;
  K?: number;
  S: number;
  X: number;
  Y: number;
  L: number;
  R: number;
}

export default async function init() {
  const varsFromTZ: TZVars = {
    N: 10,
    M: 10,
    C: 5,
    // K: 3,
    S: 5,
    X: 100,
    Y: 15,
    L: 4,
    R: 2,
  };

  const game = new Game(getGameConfigFromTZVars(varsFromTZ));

  await game.init();

  game.start();
}

function getGameConfigFromTZVars(vars: TZVars) {
  return {
    boardCols: vars.N,
    boardRows: vars.M,
    cubeColorsCount: vars.C,
    minChainLength: vars.K || 2,
    mixCount: vars.S,
    scoresToWin: vars.X,
    moveCount: vars.Y,
    cubesToSuper: vars.L,
    superBombRadius: vars.R,
  };
}
