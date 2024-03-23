export const GAME_CUBES = {
  BLUE: "blueCube",
  RED: "redCube",
  GREEN: "greenCube",
  YELLOW: "yellowCube",
  PURPLE: "purpleCube",
} as const;

export const GAME_STATUSES = {
  WIN: "win",
  NO_MOVES: "noMoves",
  PLAYING: "playing",
  IDLE: "idle",
} as const;

export const ASSETS = {
  BOARD: {
    ALIAS: "board",
    SRC: "assets/board.png",
  },
  BLUE_CUBE: {
    ALIAS: GAME_CUBES.BLUE,
    SRC: "assets/blueCube.png",
  },
  RED_CUBE: {
    ALIAS: GAME_CUBES.RED,
    SRC: "assets/redCube.png",
  },
  GREEN_CUBE: {
    ALIAS: GAME_CUBES.GREEN,
    SRC: "assets/greenCube.png",
  },
  YELLOW_CUBE: {
    ALIAS: GAME_CUBES.YELLOW,
    SRC: "assets/yellowCube.png",
  },
  PURPLE_CUBE: {
    ALIAS: GAME_CUBES.PURPLE,
    SRC: "assets/purpleCube.png",
  },
  PANEL_SCORE: {
    ALIAS: "panelScore",
    SRC: "assets/panelScore.png",
  },
} as const;
