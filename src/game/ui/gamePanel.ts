import { Assets, Text, Container, Sprite, Graphics } from "pixi.js";
import { ASSETS } from "../constants";

export class GamePanelContainer extends Container {
  panelScoreContainer: Container;
  panelTimerContainer: Container;

  constructor(private options: { width: number; height: number }) {
    super();
    this.panelScoreContainer = new Container();
    this.panelTimerContainer = new Container();
  }

  render(score: number, time: number) {
    const panelScoreSize = this.options.width;
    this.setSize(panelScoreSize, panelScoreSize);

    const panelScoreSprite = new Sprite(Assets.get(ASSETS.PANEL_SCORE.ALIAS));
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

    const panelTimerScoreWrapper = new Graphics()
      .roundRect(0, 0, 120, 120, 120)
      .fill("#C4398F");
    panelTimerScoreWrapper.position.set(panelScoreSize / 2 - 60, 40);

    this.addChild(panelScoreSprite);
    this.addChild(panelScoreScoreWrapper);
    this.addChild(panelScoreScoreTitle);
    this.addChild(panelTimerScoreWrapper);

    this.addChild(this.panelTimerContainer);
    this.addChild(this.panelScoreContainer);

    this.renderScore(score);
    this.renderMoves(time);
  }

  renderScore(score: number) {
    this.panelScoreContainer.removeChildren();

    const panelScoreScoreValue = new Text({
      text: score,
      style: {
        fontFamily: "Arial",
        fontSize: 50,
        fill: "white",
      },
    });
    panelScoreScoreValue.position.set(
      (this.options.width - panelScoreScoreValue.width) / 2,
      this.options.width - 80,
    );

    this.panelScoreContainer.addChild(panelScoreScoreValue);
  }

  renderMoves(moves: number) {
    this.panelTimerContainer.removeChildren();

    const panelMovesValue = new Text({
      text: moves,
      style: {
        fontFamily: "Arial",
        fontSize: 70,
        fill: "white",
      },
    });
    panelMovesValue.position.set(
      (this.options.width - panelMovesValue.width) / 2,
      60,
    );

    this.panelTimerContainer.addChild(panelMovesValue);
  }
}
