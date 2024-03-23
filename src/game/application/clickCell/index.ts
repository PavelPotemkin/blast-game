import { ClickCell } from "../../ports.input";
import {
  readScore,
  saveScore,
  readConfig,
  readBoard,
  saveBoard,
  readAvialableCubesColors,
  readStatus,
  saveStatus,
} from "../../store";

import { createClickCell } from "./clickCell";

export const clickCell: ClickCell = createClickCell({
  readScore,
  saveScore,
  readConfig,
  readBoard,
  saveBoard,
  readAvialableCubesColors,
  readStatus,
  saveStatus,
});
