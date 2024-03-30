import { Application, Assets, Container, Point, Sprite, Ticker } from "pixi.js";
import { ASSETS, GAME_CUBES_TYPE } from "../constants";
import {
  GameBoard,
  GameBurnedCubes,
  GameCellCoords,
  GameCube,
  GameFalledCubes,
  GameMixedBoard,
  GameSuperCubes,
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
    this.removeChildren();
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

  public renderSuperCubes(superCubes: GameSuperCubes) {
    const promises = superCubes.map((superCube) => {
      return new Promise((resolve) => {
        const cubeSprite = this.createCube(superCube);
        this.addChild(cubeSprite);

        const animationLogic = (ticker: Ticker) => {
          if (cubeSprite.width >= this.cubeWidth * 1.3) {
            this.removeChild(cubeSprite);
            this.app.ticker.remove(animationLogic);
            resolve("");
          } else {
            cubeSprite.width += 0.4 * ticker.deltaTime;
            cubeSprite.height += 0.4 * ticker.deltaTime;
            cubeSprite.position.set(
              cubeSprite.x - 0.2 * ticker.deltaTime,
              cubeSprite.y - 0.2 * ticker.deltaTime,
            );
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

  public async renderMixed(mixedBoard: GameMixedBoard) {
    this.removeChildren();
    this.renderBoardBg();

    const promises = mixedBoard.map((mixedCube) => {
      return new Promise((resolve) => {
        const cubeSprite = this.createCube(mixedCube.cube);

        const fromPosition = this.getCubePositionByCoords(mixedCube.from);
        const toPosition = this.getCubePositionByCoords(mixedCube.to);

        this.addChild(cubeSprite);
        cubeSprite.position.set(fromPosition.x, fromPosition.y);

        const animationLogic = (ticker: Ticker) => {
          const startPosition = cubeSprite.position;

          const diff = new Point(
            toPosition.x - startPosition.x,
            toPosition.y - startPosition.y,
          );

          if (diff.x === 0 && diff.y === 0) {
            this.app.ticker.remove(animationLogic);
            resolve("");
          } else {
            const perTick = 5;

            const perTickX = fromPosition.x > toPosition.x ? -perTick : perTick;
            const perTickY = fromPosition.y > toPosition.y ? -perTick : perTick;

            const nextX = (fromPosition.x > toPosition.x ? Math.max : Math.min)(
              startPosition.x + perTickX * ticker.deltaTime,
              toPosition.x,
            );

            const nextY = (fromPosition.y > toPosition.y ? Math.max : Math.min)(
              startPosition.y + perTickY * ticker.deltaTime,
              toPosition.y,
            );

            cubeSprite.position.set(nextX, nextY);
          }
        };

        this.app.ticker.add(animationLogic);
      });
    });

    await Promise.all(promises).then(() => {});
  }

  private createCube(
    cube: GameCube,
    callback?: (coords: GameCellCoords) => void,
  ) {
    const texture = Assets.get(cube.color);
    const cubeSprite = new Sprite(texture);
    const position = this.getCubePositionByCoords(cube.coords);

    cubeSprite.width = this.cubeWidth;
    cubeSprite.height = this.cubeHeight;
    cubeSprite.position.set(position.x, position.y);

    if (cube.type !== GAME_CUBES_TYPE.BASE) {
      cubeSprite.alpha = 0.7;
    }

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
