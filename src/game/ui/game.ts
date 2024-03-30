import { Application, Assets, Container } from "pixi.js";
import { ASSETS, GAME_CUBES, GAME_STATUSES } from "../constants";
import {
  GameBoard,
  GameBurnedCubes,
  GameCellCoords,
  GameConfig,
  GameCubeColor,
  GameFalledCubes,
  GameMixedBoard,
  GameStatus,
  GameSuperCubes,
} from "../types";
import { ClickCell, StartGame } from "../ports.input";
import { createClickCell, createStartGame } from "../application";
import { GamePanelContainer } from "./gamePanel";
import { GameBoardContainer } from "./gameBoard";
import { wait } from "../utils";

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
  private config: GameConfig;

  private remainingMoves: number;

  private startGame: StartGame;
  private clickCell: ClickCell;

  private gameBoardContainer: GameBoardContainer;
  private panelScoreContainer: GamePanelContainer;

  constructor(config: GameConfig) {
    this.config = config;
    this.remainingMoves = config.moveCount;

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
      saveRemainingMoves: (moves) => (this.remainingMoves = moves),
    });

    this.clickCell = createClickCell({
      readConfig: () => this.config,
      readBoard: () => this.board,
      readScore: () => this.score,
      readAvialableCubesColors: () => this.avialableCubesColors,
      readStatus: () => this.status,
      readRemainingMoves: () => this.remainingMoves,
      saveBoard: (board) => (this.board = board),
      saveScore: (score) => (this.score = score),
      saveStatus: (status) => (this.status = status),
      saveRemainingMoves: (moves) => (this.remainingMoves = moves),
      readMixCount: () => this.config.mixCount,
    });
  }

  start() {
    this.editable = true;
    this.startGame();

    this.renderInitialBoard();
    this.renderInitialPanel();
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
    this.renderMoves();

    await this.renderBurnedBoard(result.burnedCubes, result.boardWithBurned);

    await this.renderSuperCubes(result.superCubes);

    await this.renderFalledBoard(
      result.falledCubes.concat(result.falledNewCubes),
      result.boardWithoutMoved,
    );

    if (result.status === GAME_STATUSES.WIN) {
      window.alert("WIN");
      return;
    }

    if (result.mixedBoards.length) {
      await this.renderMixedBoard(result.mixedBoards);
    }

    if (result.status === GAME_STATUSES.NO_MOVES) {
      window.alert("NO_MOVES");
    } else {
      this.renderInitialBoard();
      this.editable = true;
    }
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

  private async renderSuperCubes(superCubes: GameSuperCubes) {
    await this.gameBoardContainer.renderSuperCubes(superCubes);
  }

  private async renderFalledBoard(
    falled: GameFalledCubes,
    boardWithoutMoved: GameBoard,
  ) {
    this.gameBoardContainer.renderCubes(boardWithoutMoved);
    await this.gameBoardContainer.renderFalled(falled);
  }

  private async renderMixedBoard(mixedBoards: Array<GameMixedBoard>) {
    for await (const mixedBoard of mixedBoards) {
      await this.gameBoardContainer.renderMixed(mixedBoard);

      await wait(200);
    }
  }

  private renderInitialPanel() {
    this.panelScoreContainer.render(this.score, this.remainingMoves);
  }

  private renderScore() {
    this.panelScoreContainer.renderScore(this.score);
  }

  private renderMoves() {
    this.panelScoreContainer.renderMoves(this.remainingMoves);
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
