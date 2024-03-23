import { createStore } from "./store";

export const {
  readConfig,
  saveConfig,
  saveAvialableCubesColors,
  readAvialableCubesColors,
  readBoard,
  saveBoard,
  readCellByCoords,
  saveCellByCoords,
  saveScore,
  saveStatus,
  readScore,
  readStatus,
} = createStore({
  boardRows: 14,
  boardCols: 10,
  cubeColorsCount: 5,
  minChainLength: 4,
  scoresToWin: 50,
});
