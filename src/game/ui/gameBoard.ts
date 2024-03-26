import { Application, Assets, Container, Point, Sprite, Ticker } from "pixi.js";
import { ASSETS } from "../constants";
import {
  GameBoard,
  GameBurnedCubes,
  GameCellCoords,
  GameCube,
  GameFalledCubes,
} from "../types";

export class GameBoardContainer extends Container {
  constructor(
    private app: Application,
    private options: {
      width: number;
      height: number;
      rows: number;
      cols: number;
    },
  ) {
    super();
  }

  get cubeWidth() {
    return (this.options.width - 30) / this.options.cols;
  }

  get cubeHeight() {
    return this.cubeWidth;
  }

  public renderCubes(
    board: GameBoard,
    callback?: (coords: GameCellCoords) => void,
  ) {
    this.renderBoardBg();

    board.forEach((row, i) => {
      row.forEach((cube, j) => {
        if (!cube) {
          return;
        }

        const cubeSprite = this.createCube(cube, callback);
        this.addChild(cubeSprite);
      });
    });
  }

  public renderBurned(burnedCubes: GameBurnedCubes) {
    const promises = burnedCubes.map((burnedCube) => {
      return new Promise((resolve) => {
        const cubeSprite = this.createCube(burnedCube);
        this.addChild(cubeSprite);

        const animationLogic = (ticker: Ticker) => {
          if (cubeSprite.alpha <= 0) {
            this.removeChild(cubeSprite);
            this.app.ticker.remove(animationLogic);
            resolve("");
          } else {
            cubeSprite.width -= 0.1;
            cubeSprite.height -= 0.1;
            cubeSprite.alpha -= 0.1 * ticker.deltaTime;
            cubeSprite.position.set(cubeSprite.x + 0.05, cubeSprite.y + 0.05);
          }
        };

        this.app.ticker.add(animationLogic);
      });
    });

    return Promise.all(promises).then(() => {});
  }

  public renderFalled(falledCubes: GameFalledCubes) {
    const promises = falledCubes.map((falledCube) => {
      return new Promise((resolve) => {
        const cubeSprite = this.createCube({
          ...falledCube.cube,
          coords: falledCube.from,
        });

        this.addChild(cubeSprite);

        const animationLogic = (ticker: Ticker) => {
          const startPosition = cubeSprite.position;
          const endPostion = this.getCubePositionByCoords(falledCube.to);

          const diff = new Point(
            startPosition.x,
            endPostion.y - startPosition.y,
          );

          if (diff.y === 0) {
            this.app.ticker.remove(animationLogic);
            resolve("");
          } else {
            const nextY = Math.min(
              startPosition.y + 5 * ticker.deltaTime,
              endPostion.y,
            );
            cubeSprite.position.set(startPosition.x, nextY);
          }
        };

        this.app.ticker.add(animationLogic);
      });
    });

    return Promise.all(promises).then(() => {});
  }

  private createCube(
    cube: GameCube,
    callback?: (coords: GameCellCoords) => void,
  ) {
    const texture = Assets.get(cube.color);
    const cubeSprite = new Sprite(texture);
    cubeSprite.width = this.cubeWidth;
    cubeSprite.height = this.cubeHeight;
    const position = this.getCubePositionByCoords(cube.coords);
    cubeSprite.position.set(position.x, position.y);

    cubeSprite.eventMode = "static";
    cubeSprite.cursor = "pointer";

    if (callback) {
      cubeSprite.on("pointerdown", () => callback(cube.coords));
    }

    return cubeSprite;
  }

  private getCubePositionByCoords(coords: GameCellCoords) {
    return {
      x: coords.x * this.cubeWidth + 15,
      y: coords.y * this.cubeHeight + 15,
    };
  }

  private renderBoardBg() {
    const boardSprite = new Sprite(Assets.get(ASSETS.BOARD.ALIAS));
    boardSprite.setSize(this.options.width, this.options.height);
    this.addChild(boardSprite);
  }
}
