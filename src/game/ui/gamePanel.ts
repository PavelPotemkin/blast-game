import { Assets, Text, Container, Sprite, Graphics } from "pixi.js";
import { ASSETS } from "../constants";

export class GamePanelContainer extends Container {
  constructor(private options: { width: number; height: number }) {
    super();
  }

  renderScore(score: number) {
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

    const panelScoreScoreValue = new Text({
      text: score,
      style: {
        fontFamily: "Arial",
        fontSize: 50,
        fill: "white",
      },
    });
    panelScoreScoreValue.position.set(
      (panelScoreSize - panelScoreScoreValue.width) / 2,
      panelScoreSize - 80,
    );

    this.addChild(panelScoreSprite);
    this.addChild(panelScoreScoreWrapper);
    this.addChild(panelScoreScoreTitle);
    this.addChild(panelScoreScoreValue);
  }
}
