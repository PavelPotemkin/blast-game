import { GameCellCoords } from "./types";

export type StartGame = () => void;
export type ClickCell = (coords: GameCellCoords) => void;
