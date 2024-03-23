import { StartGame } from "../../ports.input";
import {
  readConfig,
  saveAvialableCubesColors,
  saveBoard,
  saveScore,
  saveStatus,
} from "../../store";
import { createStartGame } from "./startGame";

export const startGame: StartGame = createStartGame({
  saveAvialableCubesColors,
  saveBoard,
  saveScore,
  saveStatus,
  readConfig,
});
