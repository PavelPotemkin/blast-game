export { startGame } from "./startGame";
export { clickCell } from "./clickCell";

// import { createConfig } from "../domain";
// import {
//   TGenerateBoard,
//   ReadAvialableCubes,
//   ReadConfig,
//   SaveAvialableCubes,
//   SaveBoard,
// } from "../ports.output";
// import { TGameConfigParams } from "../types";

// interface InitGameDeps {
//   saveAvialableCubesColors: SaveAvialableCubes;
//   getAvialableCubes: ReadAvialableCubes;
//   generateBoard: TGenerateBoard;
//   saveBoard: SaveBoard;
// }
// const createInitGame =
//   ({
//     saveAvialableCubesColors,
//     getAvialableCubes,
//     saveBoard,
//     generateBoard,
//   }: InitGameDeps) =>
//   () => {
//     const avialableCubes = getAvialableCubes();
//     saveAvialableCubesColors(avialableCubes);

//     const board = generateBoard();
//     saveBoard(board);
//   };

// export const createGame = (params: TGameConfigParams) => {
//   const {
//     getBoard,
//     saveBoard,
//     getCellByCoords,
//     setCellByCoords,
//     getConfig,
//     saveAvialableCubesColors,
//   } = createStore(createConfig(params));

//   const getAvialableCubes = createGetAvialableCubes({
//     getConfig,
//   });

//   const createRandomCube = createCreateRandomCube({
//     getAvialableCubes,
//   });

//   const generateBoard = createGenerateBoard({
//     getConfig,
//     createRandomCube,
//   });

//   const initGame = createInitGame({
//     saveAvialableCubesColors,
//     generateBoard,
//     getAvialableCubes,
//     saveBoard,
//   });

//   initGame();

//   //   this.getLinkedCubes = createGetLinkedCubes({
//   //     getCellByCoords,
//   //   });

//   //   this.getCubesChain = createGetCubesChain({
//   //     getCellByCoords,
//   //     getLinkedCubes: this.getLinkedCubes,
//   //   });

//   //   this.burnCubes = createBurnCubes({
//   //     setCellByCoords,
//   //   });

//   //   this.fallCubes = createFallCubes({
//   //     getConfig,
//   //     getCellByCoords,
//   //     setCellByCoords,
//   //   });

//   //   this.fillEmptyCells = createFillEmptyCells({
//   //     createRandomCube: this.createRandomCube,
//   //     setCellByCoords,
//   //     getBoard,
//   //   });

//   //   this.checkHasMoves = createCheckHasMoves({
//   //     getLinkedCubes: this.getLinkedCubes,
//   //     getConfig,
//   //     getCellByCoords,
//   //   });

//   //   this.mixCubes = createMixCubes({
//   //     getConfig,
//   //     getCellByCoords,
//   //     saveBoard,
//   //   });
// };
