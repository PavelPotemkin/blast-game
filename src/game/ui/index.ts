import {
  Application,
  Assets,
  Texture,
  Text,
  Container,
  Sprite,
  Graphics,
} from "pixi.js";
import { clickCell, startGame } from "../application";
import { readAvialableCubesColors, readConfig } from "../store";
import { createRandomCube } from "../domain";
import { ASSETS } from "../constants";

export const initUi = async () => {
  startGame();

  // clickCell({
  //   x: 5,
  //   y: 8,
  // });

  // const boardContaner = new Container();
  // const config = readConfig();

  const app = new Application();
  await app.init({ background: "#A1A1A1", resizeTo: window });
  document.body.appendChild(app.canvas);

  await loadAssets();

  const staticContainer = new Container();
  await printStatic(app, staticContainer);

  const cubesContainer = new Container();
  await testRenderCubes(app, cubesContainer);

  app.stage.addChild(staticContainer);
  app.stage.addChild(cubesContainer);
};

async function loadAssets() {
  Assets.add([
    {
      alias: ASSETS.BOARD.ALIAS,
      src: ASSETS.BOARD.SRC,
    },
    {
      alias: ASSETS.BLUE_CUBE.ALIAS,
      src: ASSETS.BLUE_CUBE.SRC,
    },
    {
      alias: ASSETS.RED_CUBE.ALIAS,
      src: ASSETS.RED_CUBE.SRC,
    },
    {
      alias: ASSETS.GREEN_CUBE.ALIAS,
      src: ASSETS.GREEN_CUBE.SRC,
    },
    {
      alias: ASSETS.YELLOW_CUBE.ALIAS,
      src: ASSETS.YELLOW_CUBE.SRC,
    },
    {
      alias: ASSETS.PURPLE_CUBE.ALIAS,
      src: ASSETS.PURPLE_CUBE.SRC,
    },
    {
      alias: ASSETS.PANEL_SCORE.ALIAS,
      src: ASSETS.PANEL_SCORE.SRC,
    },
  ]);

  await Assets.load([
    ASSETS.BOARD.ALIAS,
    ASSETS.PANEL_SCORE.ALIAS,
    ASSETS.BLUE_CUBE.ALIAS,
    ASSETS.RED_CUBE.ALIAS,
    ASSETS.GREEN_CUBE.ALIAS,
    ASSETS.YELLOW_CUBE.ALIAS,
    ASSETS.PURPLE_CUBE.ALIAS,
  ]);
}

async function printStatic(app: Application, container: Container) {
  const boardSize = 500;
  const board = await Assets.get(ASSETS.BOARD.ALIAS);
  const boardSprite = new Sprite(board);
  boardSprite.width = boardSize;
  boardSprite.height = boardSize;
  boardSprite.position.set(50, app.screen.height - 50 - boardSize);
  boardSprite.setSize(boardSize, boardSize);

  const panelContainer = new Container();
  const panelScoreSize = 300;
  panelContainer.position.set(
    app.screen.width - 50 - panelScoreSize,
    app.screen.height / 2 - panelScoreSize / 2,
  );
  panelContainer.setSize(panelScoreSize, panelScoreSize);

  const panelScore = await Assets.get(ASSETS.PANEL_SCORE.ALIAS);
  const panelScoreSprite = new Sprite(panelScore);
  panelScoreSprite.width = panelScoreSize;
  panelScoreSprite.height = panelScoreSize;

  const panelScoreScoreWrapper = new Graphics()
    .roundRect(0, 0, 200, 80, 20)
    .fill("#0E3366");
  panelScoreScoreWrapper.position.set(
    (panelScoreSize - 200) / 2,
    panelScoreSize - 80 - 30,
  );
  const panelScoreScoreTitle = new Text({
    text: "счет:",
    style: {
      fontFamily: "Arial",
      fontSize: 30,
      fill: "white",
    },
  });
  panelScoreScoreTitle.position.set(
    (panelScoreSize - panelScoreScoreTitle.width) / 2,
    panelScoreSize - 80 - 30,
  );
  panelContainer.addChild(panelScoreSprite);
  panelContainer.addChild(panelScoreScoreWrapper);
  panelContainer.addChild(panelScoreScoreTitle);

  container.addChild(panelContainer);
  container.addChild(boardSprite);
}

async function testRenderCubes(app: Application, cubesContainer: Container) {
  const boardSize = 500;
  cubesContainer.position.set(50, app.screen.height - 50 - boardSize);
  cubesContainer.setSize(boardSize, boardSize);

  const rows = 10;
  const cols = 10;

  const avialableWitdh = boardSize - 30;
  const cubeSize = avialableWitdh / cols;

  const availableColors = readAvialableCubesColors();

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const coords = { x: j, y: i };
      const cube = createRandomCube(coords, availableColors);
      const texture = await Assets.get(cube.color);
      const cubeSprite = new Sprite(texture);
      cubeSprite.width = cubeSize;
      cubeSprite.height = cubeSize;
      cubeSprite.position.set(j * cubeSize + 15, i * cubeSize + 15);

      cubeSprite.eventMode = "static";
      cubeSprite.cursor = "pointer";
      cubeSprite.on("pointerdown", console.log);
      cubesContainer.addChild(cubeSprite);
    }
  }
}
