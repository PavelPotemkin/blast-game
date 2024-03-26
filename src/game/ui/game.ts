import { Application, Assets, Container, Ticker } from "pixi.js";
import { ASSETS, GAME_CUBES, GAME_STATUSES } from "../constants";
import {
  GameBoard,
  GameBurnedCubes,
  GameCellCoords,
  GameConfig,
  GameCubeColor,
  GameFalledCubes,
  GameStatus,
} from "../types";
import { ClickCell, StartGame } from "../ports.input";
import { createClickCell, createStartGame } from "../application";
import { GamePanelContainer } from "./gamePanel";
import { GameBoardContainer } from "./gameBoard";

export class Game {
  private app: Application;
  private mainContainer: Container;

  private editable: boolean = false;
  private board: GameBoard = [];
  private avialableCubesColors: Array<GameCubeColor> = [
    GAME_CUBES.RED,
    GAME_CUBES.GREEN,
    GAME_CUBES.BLUE,
    GAME_CUBES.YELLOW,
    GAME_CUBES.PURPLE,
  ];

  private score: number;
  private status: GameStatus;
  private config: GameConfig = {
    boardRows: 9,
    boardCols: 9,
    cubeColorsCount: 5,
    minChainLength: 3,
    scoresToWin: 50,
    countdownSeconds: 60,
  };

  private countdownSeconds: number = this.config.countdownSeconds;

  private startGame: StartGame;
  private clickCell: ClickCell;

  private gameBoardContainer: GameBoardContainer;
  private panelScoreContainer: GamePanelContainer;

  constructor() {
    this.app = new Application();

    this.mainContainer = new Container();

    this.gameBoardContainer = new GameBoardContainer(this.app, {
      width: 500,
      height: 500,
      rows: this.config.boardRows,
      cols: this.config.boardCols,
    });

    this.panelScoreContainer = new GamePanelContainer({
      width: 300,
      height: 300,
    });

    this.startGame = createStartGame({
      readConfig: () => this.config,
      saveAvialableCubesColors: (avialableCubesColors) =>
        (this.avialableCubesColors = avialableCubesColors),
      saveBoard: (board) => (this.board = board),
      saveScore: (score) => (this.score = score),
      saveStatus: (status) => (this.status = status),
    });

    this.clickCell = createClickCell({
      readConfig: () => this.config,
      readBoard: () => this.board,
      readScore: () => this.score,
      readAvialableCubesColors: () => this.avialableCubesColors,
      readStatus: () => this.status,
      saveBoard: (board) => (this.board = board),
      saveScore: (score) => (this.score = score),
      saveStatus: (status) => (this.status = status),
    });
  }

  start() {
    this.editable = true;
    this.startGame();

    this.renderInitialBoard();
    this.renderInitialPanel();

    this.startTimer();
  }

  async init() {
    await this.app.init({ background: "#A1A1A1", resizeTo: window });
    document.body.appendChild(this.app.canvas);

    await this.loadAssets();

    const containerWidth = 1000;
    const containerHeight = 700;

    this.mainContainer.setSize(containerWidth, containerHeight);
    this.mainContainer.position.set(
      (this.app.screen.width - containerWidth) / 2,
      (this.app.screen.height - containerHeight) / 2,
    );

    this.panelScoreContainer.position.set(
      containerWidth - 50 - 300,
      containerHeight / 2 - 300 / 2,
    );

    this.gameBoardContainer.position.set(50, containerHeight - 50 - 500);

    this.mainContainer.addChild(this.gameBoardContainer);
    this.mainContainer.addChild(this.panelScoreContainer);
    this.app.stage.addChild(this.mainContainer);
  }

  private async onCellClick(coords: GameCellCoords) {
    if (!this.editable) {
      return;
    }

    const result = this.clickCell(coords);
    if (!result) {
      return;
    }

    this.editable = false;

    this.renderScore();

    await this.renderBurnedBoard(result.burnedCubes, result.boardWithBurned);

    await this.renderFalledBoard(
      result.falledCubes.concat(result.falledNewCubes),
      result.boardWithoutMoved,
    );

    this.renderInitialBoard();

    if (result.status === GAME_STATUSES.WIN) {
      this.stopTimer();
      window.alert("WIN");
    } else if (result.status === GAME_STATUSES.NO_MOVES) {
      this.stopTimer();
      window.alert("NO_MOVES");
    } else {
      this.editable = true;
    }
  }

  private startTimer() {
    this.app.ticker.add(this.timerCallback.bind(this));
  }

  private stopTimer() {
    this.app.ticker.stop();
  }

  private timerCallback(ticker: Ticker) {
    this.renderTimer();

    if (this.leftSeconds <= 0) {
      this.stopTimer();
      this.editable = false;
    }

    this.countdownSeconds -= ticker.deltaTime / 100;
  }

  private renderInitialBoard() {
    this.gameBoardContainer.renderCubes(
      this.board,
      this.onCellClick.bind(this),
    );
  }

  private async renderBurnedBoard(
    burned: GameBurnedCubes,
    boardWithoutBurned: GameBoard,
  ) {
    this.gameBoardContainer.renderCubes(boardWithoutBurned);
    await this.gameBoardContainer.renderBurned(burned);
  }

  private async renderFalledBoard(
    falled: GameFalledCubes,
    boardWithoutMoved: GameBoard,
  ) {
    this.gameBoardContainer.renderCubes(boardWithoutMoved);
    await this.gameBoardContainer.renderFalled(falled);
  }

  private renderInitialPanel() {
    this.panelScoreContainer.render(this.score, this.config.countdownSeconds);
  }

  private renderScore() {
    this.panelScoreContainer.renderScore(this.score);
  }

  private renderTimer() {
    this.panelScoreContainer.renderTimer(this.leftSeconds);
  }

  private get leftSeconds() {
    return Math.max(0, Math.round(this.countdownSeconds));
  }

  private async loadAssets() {
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
}
