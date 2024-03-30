/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game/application/clickCell/clickCell.ts":
/*!*****************************************************!*\
  !*** ./src/game/application/clickCell/clickCell.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createClickCell: () => (/* binding */ createClickCell)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/game/utils.ts");
/* harmony import */ var _domain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain */ "./src/game/domain/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./src/game/constants.ts");



const createClickCell = ({
  saveScore,
  readConfig,
  readBoard,
  readScore,
  saveBoard,
  readAvialableCubesColors,
  readStatus,
  saveStatus,
  readRemainingMoves,
  saveRemainingMoves,
  readMixCount
}) => coords => {
  const config = readConfig();
  const board = readBoard();
  const score = readScore();
  const clickedCube = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getCellByCoords)(board, coords);
  const maybeBurnedInfo = (0,_domain__WEBPACK_IMPORTED_MODULE_1__.tryBurnCubes)(config, board, clickedCube);
  if (!maybeBurnedInfo) {
    return null;
  }
  const isBaseCube = clickedCube.type === _constants__WEBPACK_IMPORTED_MODULE_2__.GAME_CUBES_TYPE.BASE;
  const {
    burnedCubes,
    board: boardWithBurned
  } = maybeBurnedInfo;
  const updatedScore = (0,_domain__WEBPACK_IMPORTED_MODULE_1__.getUpdateScore)(burnedCubes, score);
  const {
    board: boardBurnedWithSuper,
    superCubes
  } = (0,_domain__WEBPACK_IMPORTED_MODULE_1__.tryCreateSuperCube)(config, coords, burnedCubes, boardWithBurned, isBaseCube);
  const {
    falledCubes,
    board: falledBoard,
    boardWithoutMoved
  } = (0,_domain__WEBPACK_IMPORTED_MODULE_1__.fallCubes)(config, boardBurnedWithSuper);
  const avialableCubesColors = readAvialableCubesColors();
  const {
    newCubes,
    board: filledBoard,
    falledNewCubes
  } = (0,_domain__WEBPACK_IMPORTED_MODULE_1__.fillEmptyCells)(falledBoard, avialableCubesColors);
  const mixCount = readMixCount();
  const {
    mixedBoards,
    updatedBoard
  } = (0,_domain__WEBPACK_IMPORTED_MODULE_1__.mixCubesIfNeed)(config, filledBoard, mixCount);
  const status = readStatus();
  const currentMoves = readRemainingMoves();
  const updatedMoves = (0,_domain__WEBPACK_IMPORTED_MODULE_1__.updateRemainingMoves)(currentMoves);
  const updatedStatus = (0,_domain__WEBPACK_IMPORTED_MODULE_1__.updateGameStatus)(config, updatedBoard, updatedScore, config.scoresToWin, status, updatedMoves);
  saveScore(updatedScore);
  saveBoard(updatedBoard);
  saveStatus(updatedStatus);
  saveRemainingMoves(updatedMoves);
  return {
    burnedCubes,
    superCubes,
    falledCubes,
    boardWithBurned,
    boardBurnedWithSuper,
    falledBoard,
    boardWithoutMoved,
    filledBoard,
    newCubes,
    mixedBoards,
    updatedScore,
    board: updatedBoard,
    falledNewCubes,
    status: updatedStatus
  };
};

/***/ }),

/***/ "./src/game/application/clickCell/index.ts":
/*!*************************************************!*\
  !*** ./src/game/application/clickCell/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createClickCell: () => (/* reexport safe */ _clickCell__WEBPACK_IMPORTED_MODULE_0__.createClickCell)
/* harmony export */ });
/* harmony import */ var _clickCell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clickCell */ "./src/game/application/clickCell/clickCell.ts");


/***/ }),

/***/ "./src/game/application/index.ts":
/*!***************************************!*\
  !*** ./src/game/application/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createClickCell: () => (/* reexport safe */ _clickCell__WEBPACK_IMPORTED_MODULE_1__.createClickCell),
/* harmony export */   createStartGame: () => (/* reexport safe */ _startGame__WEBPACK_IMPORTED_MODULE_0__.createStartGame)
/* harmony export */ });
/* harmony import */ var _startGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startGame */ "./src/game/application/startGame/index.ts");
/* harmony import */ var _clickCell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clickCell */ "./src/game/application/clickCell/index.ts");



/***/ }),

/***/ "./src/game/application/startGame/index.ts":
/*!*************************************************!*\
  !*** ./src/game/application/startGame/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createStartGame: () => (/* reexport safe */ _startGame__WEBPACK_IMPORTED_MODULE_0__.createStartGame)
/* harmony export */ });
/* harmony import */ var _startGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startGame */ "./src/game/application/startGame/startGame.ts");


/***/ }),

/***/ "./src/game/application/startGame/startGame.ts":
/*!*****************************************************!*\
  !*** ./src/game/application/startGame/startGame.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createStartGame: () => (/* binding */ createStartGame)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./src/game/constants.ts");
/* harmony import */ var _domain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain */ "./src/game/domain/index.ts");


const createStartGame = ({
  saveAvialableCubesColors,
  saveBoard,
  saveScore,
  saveStatus,
  readConfig,
  saveRemainingMoves
}) => () => {
  const config = readConfig();
  const avialableCubesColors = (0,_domain__WEBPACK_IMPORTED_MODULE_1__.updateAvialableCubesColors)(config);
  const board = (0,_domain__WEBPACK_IMPORTED_MODULE_1__.generateBoard)(config, avialableCubesColors);
  const score = 0;
  const status = _constants__WEBPACK_IMPORTED_MODULE_0__.GAME_STATUSES.PLAYING;
  saveBoard(board);
  saveAvialableCubesColors(avialableCubesColors);
  saveScore(score);
  saveStatus(status);
  saveRemainingMoves(config.moveCount);
  return {
    board,
    avialableCubesColors,
    score,
    status
  };
};

/***/ }),

/***/ "./src/game/constants.ts":
/*!*******************************!*\
  !*** ./src/game/constants.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ASSETS: () => (/* binding */ ASSETS),
/* harmony export */   GAME_CUBES: () => (/* binding */ GAME_CUBES),
/* harmony export */   GAME_CUBES_TYPE: () => (/* binding */ GAME_CUBES_TYPE),
/* harmony export */   GAME_STATUSES: () => (/* binding */ GAME_STATUSES)
/* harmony export */ });
const GAME_CUBES = {
  BLUE: "blueCube",
  RED: "redCube",
  GREEN: "greenCube",
  YELLOW: "yellowCube",
  PURPLE: "purpleCube"
};
const GAME_CUBES_TYPE = {
  BASE: "base",
  COL: "col",
  ROW: "row",
  BOARD: "board",
  RADIUS: "radius"
};
const GAME_STATUSES = {
  WIN: "win",
  NO_MOVES: "noMoves",
  PLAYING: "playing",
  IDLE: "idle"
};
const ASSETS = {
  BOARD: {
    ALIAS: "board",
    SRC: "assets/board.png"
  },
  BLUE_CUBE: {
    ALIAS: GAME_CUBES.BLUE,
    SRC: "assets/blueCube.png"
  },
  RED_CUBE: {
    ALIAS: GAME_CUBES.RED,
    SRC: "assets/redCube.png"
  },
  GREEN_CUBE: {
    ALIAS: GAME_CUBES.GREEN,
    SRC: "assets/greenCube.png"
  },
  YELLOW_CUBE: {
    ALIAS: GAME_CUBES.YELLOW,
    SRC: "assets/yellowCube.png"
  },
  PURPLE_CUBE: {
    ALIAS: GAME_CUBES.PURPLE,
    SRC: "assets/purpleCube.png"
  },
  PANEL_SCORE: {
    ALIAS: "panelScore",
    SRC: "assets/panelScore.png"
  }
};

/***/ }),

/***/ "./src/game/domain/burnCubes/burnCubes.ts":
/*!************************************************!*\
  !*** ./src/game/domain/burnCubes/burnCubes.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   burnCubes: () => (/* binding */ burnCubes)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/game/utils.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./src/game/constants.ts");


function burnSuperCube(cube, boardWithBurned, burnedCubes, superBombRadius) {
  const burnCube = cubeToBurn => {
    burnedCubes.push(cubeToBurn);
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setCellByCoords)(boardWithBurned, cubeToBurn.coords, null);
    if (cubeToBurn.type !== _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_CUBES_TYPE.BASE) {
      burnSuperCube(cubeToBurn, boardWithBurned, burnedCubes, superBombRadius);
    }
  };
  if (cube.type === _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_CUBES_TYPE.COL) {
    for (let row = 0; row < boardWithBurned.length; row++) {
      const cubeToBurnCoords = {
        y: row,
        x: cube.coords.x
      };
      const cubeToBurn = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getCellByCoords)(boardWithBurned, cubeToBurnCoords);
      if (cubeToBurn) {
        burnCube(cubeToBurn);
      }
    }
  } else if (cube.type === _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_CUBES_TYPE.ROW) {
    for (let col = 0; col < boardWithBurned[0].length; col++) {
      const cubeToBurnCoords = {
        y: cube.coords.y,
        x: col
      };
      const cubeToBurn = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getCellByCoords)(boardWithBurned, cubeToBurnCoords);
      if (cubeToBurn) {
        burnCube(cubeToBurn);
      }
    }
  } else if (cube.type === _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_CUBES_TYPE.RADIUS) {
    const radius = superBombRadius;
    for (let row = cube.coords.y - radius; row <= cube.coords.y + radius; row++) {
      for (let col = cube.coords.x - radius; col <= cube.coords.x + radius; col++) {
        if (row >= 0 && row < boardWithBurned.length && col >= 0 && col < boardWithBurned[0].length) {
          const cubeToBurnCoords = {
            y: row,
            x: col
          };
          const cubeToBurn = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getCellByCoords)(boardWithBurned, cubeToBurnCoords);
          if (cubeToBurn) {
            burnCube(cubeToBurn);
          }
        }
      }
    }
  } else if (cube.type === _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_CUBES_TYPE.BOARD) {
    for (let row = 0; row < boardWithBurned.length; row++) {
      for (let col = 0; col < boardWithBurned[0].length; col++) {
        const cubeToBurnCoords = {
          y: row,
          x: col
        };
        const cubeToBurn = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getCellByCoords)(boardWithBurned, cubeToBurnCoords);
        if (cubeToBurn) {
          burnCube(cubeToBurn);
        }
      }
    }
  }
}
const burnCubes = (config, board, cubes) => {
  const burnedCubes = [];
  const boardCopy = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.copyBoard)(board);
  const superCubes = cubes.filter(cube => cube.type !== _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_CUBES_TYPE.BASE);
  superCubes.forEach(cube => {
    burnSuperCube(cube, boardCopy, burnedCubes, config.superBombRadius);
  });
  for (const cube of cubes) {
    const alreadyBurned = burnedCubes.find(burnedCube => burnedCube.coords.x === cube.coords.x && burnedCube.coords.y === cube.coords.y);
    if (!alreadyBurned) {
      burnedCubes.push(cube);
      (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setCellByCoords)(boardCopy, cube.coords, null);
    }
  }
  return {
    burnedCubes,
    board: boardCopy
  };
};

/***/ }),

/***/ "./src/game/domain/burnCubes/index.ts":
/*!********************************************!*\
  !*** ./src/game/domain/burnCubes/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   burnCubes: () => (/* reexport safe */ _burnCubes__WEBPACK_IMPORTED_MODULE_0__.burnCubes)
/* harmony export */ });
/* harmony import */ var _burnCubes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./burnCubes */ "./src/game/domain/burnCubes/burnCubes.ts");


/***/ }),

/***/ "./src/game/domain/checkHasMoves/checkHasMoves.ts":
/*!********************************************************!*\
  !*** ./src/game/domain/checkHasMoves/checkHasMoves.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkHasMoves: () => (/* binding */ checkHasMoves)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/game/utils.ts");
/* harmony import */ var _getLinkedCubes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getLinkedCubes */ "./src/game/domain/getLinkedCubes/index.ts");


const checkHasMoves = (config, board) => {
  const checkedCubes = [];
  const {
    boardCols,
    boardRows,
    minChainLength
  } = config;
  for (let y = 0; y < boardRows; y++) {
    for (let x = 0; x < boardCols; x++) {
      const cube = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getCellByCoords)(board, {
        x,
        y
      });
      if (cube) {
        const linkedCubes = (0,_getLinkedCubes__WEBPACK_IMPORTED_MODULE_1__.getLinkedCubes)(board, {
          x,
          y
        }, cube.color, checkedCubes);
        if (linkedCubes.length >= minChainLength) {
          return true;
        } else {
          checkedCubes.push(...linkedCubes.map(cube => cube.id));
        }
      }
    }
  }
  return false;
};

/***/ }),

/***/ "./src/game/domain/checkHasMoves/index.ts":
/*!************************************************!*\
  !*** ./src/game/domain/checkHasMoves/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkHasMoves: () => (/* reexport safe */ _checkHasMoves__WEBPACK_IMPORTED_MODULE_0__.checkHasMoves)
/* harmony export */ });
/* harmony import */ var _checkHasMoves__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkHasMoves */ "./src/game/domain/checkHasMoves/checkHasMoves.ts");


/***/ }),

/***/ "./src/game/domain/checkIsWin/checkIsWin.ts":
/*!**************************************************!*\
  !*** ./src/game/domain/checkIsWin/checkIsWin.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkIsWin: () => (/* binding */ checkIsWin)
/* harmony export */ });
const checkIsWin = (score, scoresToWin) => {
  return score >= scoresToWin;
};

/***/ }),

/***/ "./src/game/domain/checkIsWin/index.ts":
/*!*********************************************!*\
  !*** ./src/game/domain/checkIsWin/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkIsWin: () => (/* reexport safe */ _checkIsWin__WEBPACK_IMPORTED_MODULE_0__.checkIsWin)
/* harmony export */ });
/* harmony import */ var _checkIsWin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkIsWin */ "./src/game/domain/checkIsWin/checkIsWin.ts");


/***/ }),

/***/ "./src/game/domain/createConfig/createConfig.ts":
/*!******************************************************!*\
  !*** ./src/game/domain/createConfig/createConfig.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createConfig: () => (/* binding */ createConfig)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./src/game/constants.ts");

const minCubeColorsCount = 2;
const maxCubeColorsCount = Object.values(_constants__WEBPACK_IMPORTED_MODULE_0__.GAME_CUBES).length;
const createConfig = params => {
  const {
    cubeColorsCount
  } = params;
  if (cubeColorsCount < minCubeColorsCount) {
    throw new Error(`cubeColorsCount should be greater than ${minCubeColorsCount - 1}`);
  }
  if (cubeColorsCount > maxCubeColorsCount) {
    throw new Error(`cubeColorsCount should be less than ${maxCubeColorsCount + 1}`);
  }
  return params;
};

/***/ }),

/***/ "./src/game/domain/createConfig/index.ts":
/*!***********************************************!*\
  !*** ./src/game/domain/createConfig/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createConfig: () => (/* reexport safe */ _createConfig__WEBPACK_IMPORTED_MODULE_0__.createConfig)
/* harmony export */ });
/* harmony import */ var _createConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createConfig */ "./src/game/domain/createConfig/createConfig.ts");


/***/ }),

/***/ "./src/game/domain/createCube/createCube.ts":
/*!**************************************************!*\
  !*** ./src/game/domain/createCube/createCube.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCube: () => (/* binding */ createCube)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./src/game/constants.ts");

let cubeIdx = 0;
const createCube = ({
  id,
  color,
  coords,
  type
}) => {
  return {
    id: id || `${cubeIdx++}`,
    color,
    coords,
    type: type || _constants__WEBPACK_IMPORTED_MODULE_0__.GAME_CUBES_TYPE.BASE
  };
};

/***/ }),

/***/ "./src/game/domain/createCube/index.ts":
/*!*********************************************!*\
  !*** ./src/game/domain/createCube/index.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCube: () => (/* reexport safe */ _createCube__WEBPACK_IMPORTED_MODULE_0__.createCube)
/* harmony export */ });
/* harmony import */ var _createCube__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createCube */ "./src/game/domain/createCube/createCube.ts");


/***/ }),

/***/ "./src/game/domain/createRandomCube/createRandomCube.ts":
/*!**************************************************************!*\
  !*** ./src/game/domain/createRandomCube/createRandomCube.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createRandomCube: () => (/* binding */ createRandomCube)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/game/utils.ts");
/* harmony import */ var _createCube__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../createCube */ "./src/game/domain/createCube/index.ts");


const createRandomCube = (coords, avialableCubesColors, type) => {
  const getRandomColor = colors => {
    return colors[(0,_utils__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(0, colors.length)];
  };
  return (0,_createCube__WEBPACK_IMPORTED_MODULE_1__.createCube)({
    coords,
    color: getRandomColor(avialableCubesColors),
    type
  });
};

/***/ }),

/***/ "./src/game/domain/createRandomCube/index.ts":
/*!***************************************************!*\
  !*** ./src/game/domain/createRandomCube/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createRandomCube: () => (/* reexport safe */ _createRandomCube__WEBPACK_IMPORTED_MODULE_0__.createRandomCube)
/* harmony export */ });
/* harmony import */ var _createRandomCube__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createRandomCube */ "./src/game/domain/createRandomCube/createRandomCube.ts");


/***/ }),

/***/ "./src/game/domain/fallCubes/fallCubes.ts":
/*!************************************************!*\
  !*** ./src/game/domain/fallCubes/fallCubes.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fallCubes: () => (/* binding */ fallCubes)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/game/utils.ts");
/* harmony import */ var _createCube__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../createCube */ "./src/game/domain/createCube/index.ts");


const fallCubes = (config, board) => {
  const falledCubes = [];
  const {
    boardCols,
    boardRows
  } = config;
  const boardCopy = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.copyBoard)(board);
  const boardWithoutMoved = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.copyBoard)(board);
  for (let y = boardRows - 1; y >= 0; y--) {
    for (let x = 0; x <= boardCols - 1; x++) {
      const maybeCube = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getCellByCoords)(boardCopy, {
        x,
        y
      });
      if (!maybeCube) {
        let fallY = y;
        for (let checkY = y; checkY >= 0; checkY--) {
          const temp = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getCellByCoords)(boardCopy, {
            x,
            y: checkY
          });
          if (temp) {
            const from = {
              x,
              y: checkY
            };
            const to = {
              x,
              y: fallY
            };
            const updatedCube = (0,_createCube__WEBPACK_IMPORTED_MODULE_1__.createCube)({
              id: temp.id,
              coords: to,
              color: temp.color,
              type: temp.type
            });
            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setCellByCoords)(boardCopy, to, updatedCube);
            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setCellByCoords)(boardCopy, from, null);
            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setCellByCoords)(boardWithoutMoved, to, null);
            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setCellByCoords)(boardWithoutMoved, from, null);
            falledCubes.push({
              from,
              to,
              cube: updatedCube
            });
            fallY--;
          }
        }
      }
    }
  }
  return {
    board: boardCopy,
    falledCubes,
    boardWithoutMoved
  };
};

/***/ }),

/***/ "./src/game/domain/fallCubes/index.ts":
/*!********************************************!*\
  !*** ./src/game/domain/fallCubes/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fallCubes: () => (/* reexport safe */ _fallCubes__WEBPACK_IMPORTED_MODULE_0__.fallCubes)
/* harmony export */ });
/* harmony import */ var _fallCubes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fallCubes */ "./src/game/domain/fallCubes/fallCubes.ts");


/***/ }),

/***/ "./src/game/domain/fillEmptyCells/fillEmptyCells.ts":
/*!**********************************************************!*\
  !*** ./src/game/domain/fillEmptyCells/fillEmptyCells.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fillEmptyCells: () => (/* binding */ fillEmptyCells)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/game/utils.ts");
/* harmony import */ var _createRandomCube__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../createRandomCube */ "./src/game/domain/createRandomCube/index.ts");


const fillEmptyCells = (boardWithEmpty, avialableCubesColors) => {
  const newCubes = [];
  const boardCopy = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.copyBoard)(boardWithEmpty);
  const emptyCells = boardWithEmpty.reduce((acc, row, y) => {
    row.forEach((cell, x) => {
      if (!cell) {
        acc.push({
          x,
          y
        });
      }
    });
    return acc;
  }, []);
  for (const coords of emptyCells) {
    const newCube = (0,_createRandomCube__WEBPACK_IMPORTED_MODULE_1__.createRandomCube)(coords, avialableCubesColors);
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setCellByCoords)(boardCopy, coords, newCube);
    newCubes.push(newCube);
  }
  const getEmptyCountInColumn = x => {
    return boardWithEmpty.reduce((acc, row) => {
      if (!row[x]) {
        acc++;
      }
      return acc;
    }, 0);
  };
  const falledNewCubes = newCubes.reduce((acc, cube) => {
    const {
      coords
    } = cube;
    const falledCube = {
      from: {
        x: coords.x,
        y: coords.y - getEmptyCountInColumn(coords.x)
      },
      to: coords,
      cube
    };
    acc.push(falledCube);
    return acc;
  }, []);
  return {
    newCubes,
    falledNewCubes,
    board: boardCopy
  };
};

/***/ }),

/***/ "./src/game/domain/fillEmptyCells/index.ts":
/*!*************************************************!*\
  !*** ./src/game/domain/fillEmptyCells/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fillEmptyCells: () => (/* reexport safe */ _fillEmptyCells__WEBPACK_IMPORTED_MODULE_0__.fillEmptyCells)
/* harmony export */ });
/* harmony import */ var _fillEmptyCells__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fillEmptyCells */ "./src/game/domain/fillEmptyCells/fillEmptyCells.ts");


/***/ }),

/***/ "./src/game/domain/generateBoard/generateBoard.ts":
/*!********************************************************!*\
  !*** ./src/game/domain/generateBoard/generateBoard.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateBoard: () => (/* binding */ generateBoard)
/* harmony export */ });
/* harmony import */ var _createRandomCube__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createRandomCube */ "./src/game/domain/createRandomCube/index.ts");

const generateBoard = (config, avialableCubesColors) => {
  const {
    boardRows,
    boardCols
  } = config;
  const board = [];
  for (let row = 0; row < boardRows; row++) {
    board[row] = [];
    for (let col = 0; col < boardCols; col++) {
      const coords = {
        x: col,
        y: row
      };
      const cube = (0,_createRandomCube__WEBPACK_IMPORTED_MODULE_0__.createRandomCube)(coords, avialableCubesColors);
      board[row][col] = cube;
    }
  }
  return board;
};

/***/ }),

/***/ "./src/game/domain/generateBoard/index.ts":
/*!************************************************!*\
  !*** ./src/game/domain/generateBoard/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateBoard: () => (/* reexport safe */ _generateBoard__WEBPACK_IMPORTED_MODULE_0__.generateBoard)
/* harmony export */ });
/* harmony import */ var _generateBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generateBoard */ "./src/game/domain/generateBoard/generateBoard.ts");


/***/ }),

/***/ "./src/game/domain/getCubesChain/getCubesChain.ts":
/*!********************************************************!*\
  !*** ./src/game/domain/getCubesChain/getCubesChain.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCubesChain: () => (/* binding */ getCubesChain)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/game/utils.ts");
/* harmony import */ var _getLinkedCubes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getLinkedCubes */ "./src/game/domain/getLinkedCubes/index.ts");


const getCubesChain = (board, coords) => {
  const cube = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getCellByCoords)(board, coords);
  const linkedCubes = (0,_getLinkedCubes__WEBPACK_IMPORTED_MODULE_1__.getLinkedCubes)(board, {
    x: coords.x,
    y: coords.y
  }, cube.color, [cube.id]);
  return [...linkedCubes, cube];
};

/***/ }),

/***/ "./src/game/domain/getCubesChain/index.ts":
/*!************************************************!*\
  !*** ./src/game/domain/getCubesChain/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCubesChain: () => (/* reexport safe */ _getCubesChain__WEBPACK_IMPORTED_MODULE_0__.getCubesChain)
/* harmony export */ });
/* harmony import */ var _getCubesChain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCubesChain */ "./src/game/domain/getCubesChain/getCubesChain.ts");


/***/ }),

/***/ "./src/game/domain/getLinkedCubes/getLinkedCubes.ts":
/*!**********************************************************!*\
  !*** ./src/game/domain/getLinkedCubes/getLinkedCubes.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLinkedCubes: () => (/* binding */ getLinkedCubes)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/game/utils.ts");

const getLinkedCubes = (board, coords, cubeColor, checkedCubes) => {
  const getLinkedCubes = (board, coords, cubeColor, checkedCubes) => {
    const linkedCubes = [];
    const getLinkedCube = coords => {
      const cube = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getCellByCoords)(board, coords);
      if (cube && cube.color === cubeColor) {
        if (checkedCubes.includes(cube.id)) {
          return;
        }
        checkedCubes.push(cube.id);
        linkedCubes.push(cube, ...getLinkedCubes(board, coords, cubeColor, checkedCubes));
      }
    };
    getLinkedCube({
      x: coords.x,
      y: coords.y + 1
    });
    getLinkedCube({
      x: coords.x - 1,
      y: coords.y
    });
    getLinkedCube({
      x: coords.x + 1,
      y: coords.y
    });
    getLinkedCube({
      x: coords.x,
      y: coords.y - 1
    });
    return linkedCubes;
  };
  return getLinkedCubes(board, coords, cubeColor, checkedCubes);
};

/***/ }),

/***/ "./src/game/domain/getLinkedCubes/index.ts":
/*!*************************************************!*\
  !*** ./src/game/domain/getLinkedCubes/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getLinkedCubes: () => (/* reexport safe */ _getLinkedCubes__WEBPACK_IMPORTED_MODULE_0__.getLinkedCubes)
/* harmony export */ });
/* harmony import */ var _getLinkedCubes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getLinkedCubes */ "./src/game/domain/getLinkedCubes/getLinkedCubes.ts");


/***/ }),

/***/ "./src/game/domain/getUpdateScore/getUpdateScore.ts":
/*!**********************************************************!*\
  !*** ./src/game/domain/getUpdateScore/getUpdateScore.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getUpdateScore: () => (/* binding */ getUpdateScore)
/* harmony export */ });
const getUpdateScore = (burnedCubes, score) => {
  return burnedCubes.length + score;
};

/***/ }),

/***/ "./src/game/domain/getUpdateScore/index.ts":
/*!*************************************************!*\
  !*** ./src/game/domain/getUpdateScore/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getUpdateScore: () => (/* reexport safe */ _getUpdateScore__WEBPACK_IMPORTED_MODULE_0__.getUpdateScore)
/* harmony export */ });
/* harmony import */ var _getUpdateScore__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getUpdateScore */ "./src/game/domain/getUpdateScore/getUpdateScore.ts");


/***/ }),

/***/ "./src/game/domain/index.ts":
/*!**********************************!*\
  !*** ./src/game/domain/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   burnCubes: () => (/* reexport safe */ _burnCubes__WEBPACK_IMPORTED_MODULE_6__.burnCubes),
/* harmony export */   checkHasMoves: () => (/* reexport safe */ _checkHasMoves__WEBPACK_IMPORTED_MODULE_9__.checkHasMoves),
/* harmony export */   checkIsWin: () => (/* reexport safe */ _checkIsWin__WEBPACK_IMPORTED_MODULE_15__.checkIsWin),
/* harmony export */   createConfig: () => (/* reexport safe */ _createConfig__WEBPACK_IMPORTED_MODULE_11__.createConfig),
/* harmony export */   createCube: () => (/* reexport safe */ _createCube__WEBPACK_IMPORTED_MODULE_0__.createCube),
/* harmony export */   createRandomCube: () => (/* reexport safe */ _createRandomCube__WEBPACK_IMPORTED_MODULE_1__.createRandomCube),
/* harmony export */   fallCubes: () => (/* reexport safe */ _fallCubes__WEBPACK_IMPORTED_MODULE_7__.fallCubes),
/* harmony export */   fillEmptyCells: () => (/* reexport safe */ _fillEmptyCells__WEBPACK_IMPORTED_MODULE_8__.fillEmptyCells),
/* harmony export */   generateBoard: () => (/* reexport safe */ _generateBoard__WEBPACK_IMPORTED_MODULE_3__.generateBoard),
/* harmony export */   getCubesChain: () => (/* reexport safe */ _getCubesChain__WEBPACK_IMPORTED_MODULE_5__.getCubesChain),
/* harmony export */   getLinkedCubes: () => (/* reexport safe */ _getLinkedCubes__WEBPACK_IMPORTED_MODULE_4__.getLinkedCubes),
/* harmony export */   getUpdateScore: () => (/* reexport safe */ _getUpdateScore__WEBPACK_IMPORTED_MODULE_14__.getUpdateScore),
/* harmony export */   logPrittyBoard: () => (/* reexport safe */ _logPrittyBoard__WEBPACK_IMPORTED_MODULE_17__.logPrittyBoard),
/* harmony export */   mixCubesIfNeed: () => (/* reexport safe */ _mixCubesIfNeed__WEBPACK_IMPORTED_MODULE_10__.mixCubesIfNeed),
/* harmony export */   tryBurnCubes: () => (/* reexport safe */ _tryBurnCudes__WEBPACK_IMPORTED_MODULE_13__.tryBurnCubes),
/* harmony export */   tryCreateSuperCube: () => (/* reexport safe */ _tryCreateSuperCube__WEBPACK_IMPORTED_MODULE_2__.tryCreateSuperCube),
/* harmony export */   updateAvialableCubesColors: () => (/* reexport safe */ _updateAvialableCubesColors__WEBPACK_IMPORTED_MODULE_12__.updateAvialableCubesColors),
/* harmony export */   updateGameStatus: () => (/* reexport safe */ _updateGameStatus__WEBPACK_IMPORTED_MODULE_16__.updateGameStatus),
/* harmony export */   updateRemainingMoves: () => (/* reexport safe */ _updateRemainingMoves__WEBPACK_IMPORTED_MODULE_18__.updateRemainingMoves)
/* harmony export */ });
/* harmony import */ var _createCube__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createCube */ "./src/game/domain/createCube/index.ts");
/* harmony import */ var _createRandomCube__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createRandomCube */ "./src/game/domain/createRandomCube/index.ts");
/* harmony import */ var _tryCreateSuperCube__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tryCreateSuperCube */ "./src/game/domain/tryCreateSuperCube/index.ts");
/* harmony import */ var _generateBoard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generateBoard */ "./src/game/domain/generateBoard/index.ts");
/* harmony import */ var _getLinkedCubes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getLinkedCubes */ "./src/game/domain/getLinkedCubes/index.ts");
/* harmony import */ var _getCubesChain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getCubesChain */ "./src/game/domain/getCubesChain/index.ts");
/* harmony import */ var _burnCubes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./burnCubes */ "./src/game/domain/burnCubes/index.ts");
/* harmony import */ var _fallCubes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fallCubes */ "./src/game/domain/fallCubes/index.ts");
/* harmony import */ var _fillEmptyCells__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fillEmptyCells */ "./src/game/domain/fillEmptyCells/index.ts");
/* harmony import */ var _checkHasMoves__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./checkHasMoves */ "./src/game/domain/checkHasMoves/index.ts");
/* harmony import */ var _mixCubesIfNeed__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mixCubesIfNeed */ "./src/game/domain/mixCubesIfNeed/index.ts");
/* harmony import */ var _createConfig__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./createConfig */ "./src/game/domain/createConfig/index.ts");
/* harmony import */ var _updateAvialableCubesColors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./updateAvialableCubesColors */ "./src/game/domain/updateAvialableCubesColors/index.ts");
/* harmony import */ var _tryBurnCudes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tryBurnCudes */ "./src/game/domain/tryBurnCudes/index.ts");
/* harmony import */ var _getUpdateScore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./getUpdateScore */ "./src/game/domain/getUpdateScore/index.ts");
/* harmony import */ var _checkIsWin__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./checkIsWin */ "./src/game/domain/checkIsWin/index.ts");
/* harmony import */ var _updateGameStatus__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./updateGameStatus */ "./src/game/domain/updateGameStatus/index.ts");
/* harmony import */ var _logPrittyBoard__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./logPrittyBoard */ "./src/game/domain/logPrittyBoard/index.ts");
/* harmony import */ var _updateRemainingMoves__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./updateRemainingMoves */ "./src/game/domain/updateRemainingMoves/index.ts");




















/***/ }),

/***/ "./src/game/domain/logPrittyBoard/index.ts":
/*!*************************************************!*\
  !*** ./src/game/domain/logPrittyBoard/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   logPrittyBoard: () => (/* reexport safe */ _logPrittyBoard__WEBPACK_IMPORTED_MODULE_0__.logPrittyBoard)
/* harmony export */ });
/* harmony import */ var _logPrittyBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logPrittyBoard */ "./src/game/domain/logPrittyBoard/logPrittyBoard.ts");


/***/ }),

/***/ "./src/game/domain/logPrittyBoard/logPrittyBoard.ts":
/*!**********************************************************!*\
  !*** ./src/game/domain/logPrittyBoard/logPrittyBoard.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   logPrittyBoard: () => (/* binding */ logPrittyBoard)
/* harmony export */ });
const logPrittyBoard = board => {
  const cellStrLen = 6;
  console.log(board.map(row => row.map(cell => {
    if (!cell) {
      return "_".repeat(cellStrLen);
    }
    const cellStr = `${cell.color.slice(0, 1)}_${cell.id}`;
    return cellStr.padEnd(cellStrLen, " ");
  }).join(" ")));
};

/***/ }),

/***/ "./src/game/domain/mixCubesIfNeed/index.ts":
/*!*************************************************!*\
  !*** ./src/game/domain/mixCubesIfNeed/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mixCubesIfNeed: () => (/* reexport safe */ _mixCubesIfNeed__WEBPACK_IMPORTED_MODULE_0__.mixCubesIfNeed)
/* harmony export */ });
/* harmony import */ var _mixCubesIfNeed__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mixCubesIfNeed */ "./src/game/domain/mixCubesIfNeed/mixCubesIfNeed.ts");


/***/ }),

/***/ "./src/game/domain/mixCubesIfNeed/mixCubesIfNeed.ts":
/*!**********************************************************!*\
  !*** ./src/game/domain/mixCubesIfNeed/mixCubesIfNeed.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mixCubesIfNeed: () => (/* binding */ mixCubesIfNeed)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/game/utils.ts");
/* harmony import */ var _checkHasMoves__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../checkHasMoves */ "./src/game/domain/checkHasMoves/index.ts");
/* harmony import */ var _createCube__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../createCube */ "./src/game/domain/createCube/index.ts");



const mixCubesIfNeed = (config, filledBoard, mixCount) => {
  const {
    boardCols,
    boardRows
  } = config;
  const hasMoves = (0,_checkHasMoves__WEBPACK_IMPORTED_MODULE_1__.checkHasMoves)(config, filledBoard);
  if (hasMoves) {
    return {
      mixedBoards: [],
      updatedBoard: filledBoard
    };
  }
  const mixedBoards = [];
  let prevBoard = filledBoard;
  for (let i = 0; i < mixCount; i++) {
    const newMixedBoard = [];
    const newBoard = Array.from({
      length: boardRows
    }, () => Array.from({
      length: boardCols
    }));
    const avialableCoords = Array.from({
      length: boardRows * boardCols
    }, (_, index) => ({
      x: index % boardCols,
      y: Math.floor(index / boardCols)
    }));
    for (let row = 0; row < boardRows; row++) {
      for (let col = 0; col < boardCols; col++) {
        const randomIdx = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(0, avialableCoords.length - 1);
        const randomCoords = avialableCoords[randomIdx];
        avialableCoords.splice(randomIdx, 1);
        const fromCoords = {
          x: col,
          y: row
        };
        const cube = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getCellByCoords)(prevBoard, fromCoords);
        const toCoords = randomCoords;
        const newCube = (0,_createCube__WEBPACK_IMPORTED_MODULE_2__.createCube)({
          id: cube.id,
          coords: toCoords,
          color: cube.color,
          type: cube.type
        });
        newBoard[toCoords.y][toCoords.x] = newCube;
        newMixedBoard.push({
          cube: newCube,
          from: fromCoords,
          to: toCoords
        });
      }
    }
    mixedBoards.push(newMixedBoard);
    const hasMoves = (0,_checkHasMoves__WEBPACK_IMPORTED_MODULE_1__.checkHasMoves)(config, newBoard);
    if (hasMoves || i === mixCount - 1) {
      return {
        mixedBoards,
        updatedBoard: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.copyBoard)(newBoard)
      };
    } else {
      prevBoard = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.copyBoard)(newBoard);
    }
  }
};

/***/ }),

/***/ "./src/game/domain/tryBurnCudes/index.ts":
/*!***********************************************!*\
  !*** ./src/game/domain/tryBurnCudes/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tryBurnCubes: () => (/* reexport safe */ _tryBurnCudes__WEBPACK_IMPORTED_MODULE_0__.tryBurnCubes)
/* harmony export */ });
/* harmony import */ var _tryBurnCudes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tryBurnCudes */ "./src/game/domain/tryBurnCudes/tryBurnCudes.ts");


/***/ }),

/***/ "./src/game/domain/tryBurnCudes/tryBurnCudes.ts":
/*!******************************************************!*\
  !*** ./src/game/domain/tryBurnCudes/tryBurnCudes.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tryBurnCubes: () => (/* binding */ tryBurnCubes)
/* harmony export */ });
/* harmony import */ var _getCubesChain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../getCubesChain */ "./src/game/domain/getCubesChain/index.ts");
/* harmony import */ var _burnCubes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../burnCubes */ "./src/game/domain/burnCubes/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants */ "./src/game/constants.ts");



const tryBurnCubes = (config, board, clickedCube) => {
  const {
    minChainLength
  } = config;
  const cubesChain = (0,_getCubesChain__WEBPACK_IMPORTED_MODULE_0__.getCubesChain)(board, clickedCube.coords);
  const needBurn = cubesChain.length >= minChainLength || clickedCube.type !== _constants__WEBPACK_IMPORTED_MODULE_2__.GAME_CUBES_TYPE.BASE;
  if (!needBurn) {
    return null;
  }
  return (0,_burnCubes__WEBPACK_IMPORTED_MODULE_1__.burnCubes)(config, board, cubesChain);
};

/***/ }),

/***/ "./src/game/domain/tryCreateSuperCube/index.ts":
/*!*****************************************************!*\
  !*** ./src/game/domain/tryCreateSuperCube/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tryCreateSuperCube: () => (/* reexport safe */ _tryCreateSuperCube__WEBPACK_IMPORTED_MODULE_0__.tryCreateSuperCube)
/* harmony export */ });
/* harmony import */ var _tryCreateSuperCube__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tryCreateSuperCube */ "./src/game/domain/tryCreateSuperCube/tryCreateSuperCube.ts");


/***/ }),

/***/ "./src/game/domain/tryCreateSuperCube/tryCreateSuperCube.ts":
/*!******************************************************************!*\
  !*** ./src/game/domain/tryCreateSuperCube/tryCreateSuperCube.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   tryCreateSuperCube: () => (/* binding */ tryCreateSuperCube)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./src/game/constants.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils */ "./src/game/utils.ts");
/* harmony import */ var _createCube__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../createCube */ "./src/game/domain/createCube/index.ts");



const getRandomSuperCubeType = () => {
  const supers = Object.values(_constants__WEBPACK_IMPORTED_MODULE_0__.GAME_CUBES_TYPE).filter(type => type !== _constants__WEBPACK_IMPORTED_MODULE_0__.GAME_CUBES_TYPE.BASE);
  return supers[(0,_utils__WEBPACK_IMPORTED_MODULE_1__.getRandomInt)(0, supers.length - 1)];
};
const tryCreateSuperCube = (config, clickCoords, burnedCubes, boardWithBurned, enable) => {
  const {
    cubesToSuper
  } = config;
  if (burnedCubes.length < cubesToSuper || !enable) {
    return {
      board: boardWithBurned,
      superCubes: []
    };
  }
  const burnedToSuperCube = burnedCubes.find(cube => cube.coords.x === clickCoords.x && cube.coords.y === clickCoords.y);
  const superCube = (0,_createCube__WEBPACK_IMPORTED_MODULE_2__.createCube)({
    coords: burnedToSuperCube.coords,
    color: burnedToSuperCube.color,
    type: getRandomSuperCubeType()
  });
  const boardBurnedWithSuper = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.copyBoard)(boardWithBurned);
  (0,_utils__WEBPACK_IMPORTED_MODULE_1__.setCellByCoords)(boardBurnedWithSuper, superCube.coords, superCube);
  return {
    board: boardBurnedWithSuper,
    superCubes: [superCube]
  };
};

/***/ }),

/***/ "./src/game/domain/updateAvialableCubesColors/index.ts":
/*!*************************************************************!*\
  !*** ./src/game/domain/updateAvialableCubesColors/index.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateAvialableCubesColors: () => (/* reexport safe */ _updateAvialableCubesColors__WEBPACK_IMPORTED_MODULE_0__.updateAvialableCubesColors)
/* harmony export */ });
/* harmony import */ var _updateAvialableCubesColors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateAvialableCubesColors */ "./src/game/domain/updateAvialableCubesColors/updateAvialableCubesColors.ts");


/***/ }),

/***/ "./src/game/domain/updateAvialableCubesColors/updateAvialableCubesColors.ts":
/*!**********************************************************************************!*\
  !*** ./src/game/domain/updateAvialableCubesColors/updateAvialableCubesColors.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateAvialableCubesColors: () => (/* binding */ updateAvialableCubesColors)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants */ "./src/game/constants.ts");

const avialableCubes = [_constants__WEBPACK_IMPORTED_MODULE_0__.GAME_CUBES.RED, _constants__WEBPACK_IMPORTED_MODULE_0__.GAME_CUBES.GREEN, _constants__WEBPACK_IMPORTED_MODULE_0__.GAME_CUBES.BLUE, _constants__WEBPACK_IMPORTED_MODULE_0__.GAME_CUBES.YELLOW, _constants__WEBPACK_IMPORTED_MODULE_0__.GAME_CUBES.PURPLE];
const updateAvialableCubesColors = config => {
  const {
    cubeColorsCount
  } = config;
  if (Object.keys(_constants__WEBPACK_IMPORTED_MODULE_0__.GAME_CUBES).length < cubeColorsCount) {
    throw new Error("Invalid cube colors count");
  }
  return avialableCubes.slice(0, cubeColorsCount);
};

/***/ }),

/***/ "./src/game/domain/updateGameStatus/index.ts":
/*!***************************************************!*\
  !*** ./src/game/domain/updateGameStatus/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateGameStatus: () => (/* reexport safe */ _updateGameStatus__WEBPACK_IMPORTED_MODULE_0__.updateGameStatus)
/* harmony export */ });
/* harmony import */ var _updateGameStatus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateGameStatus */ "./src/game/domain/updateGameStatus/updateGameStatus.ts");


/***/ }),

/***/ "./src/game/domain/updateGameStatus/updateGameStatus.ts":
/*!**************************************************************!*\
  !*** ./src/game/domain/updateGameStatus/updateGameStatus.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateGameStatus: () => (/* binding */ updateGameStatus)
/* harmony export */ });
/* harmony import */ var _checkIsWin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../checkIsWin */ "./src/game/domain/checkIsWin/index.ts");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./src/game/constants.ts");
/* harmony import */ var _checkHasMoves__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../checkHasMoves */ "./src/game/domain/checkHasMoves/index.ts");



const updateGameStatus = (config, board, score, scoresToWin, status, currentMoves) => {
  if ((0,_checkIsWin__WEBPACK_IMPORTED_MODULE_0__.checkIsWin)(score, scoresToWin)) {
    return _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_STATUSES.WIN;
  } else if (!(0,_checkHasMoves__WEBPACK_IMPORTED_MODULE_2__.checkHasMoves)(config, board) || currentMoves === 0) {
    return _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_STATUSES.NO_MOVES;
  }
  return status;
};

/***/ }),

/***/ "./src/game/domain/updateRemainingMoves/index.ts":
/*!*******************************************************!*\
  !*** ./src/game/domain/updateRemainingMoves/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateRemainingMoves: () => (/* reexport safe */ _updateRemainingMoves__WEBPACK_IMPORTED_MODULE_0__.updateRemainingMoves)
/* harmony export */ });
/* harmony import */ var _updateRemainingMoves__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./updateRemainingMoves */ "./src/game/domain/updateRemainingMoves/updateRemainingMoves.ts");


/***/ }),

/***/ "./src/game/domain/updateRemainingMoves/updateRemainingMoves.ts":
/*!**********************************************************************!*\
  !*** ./src/game/domain/updateRemainingMoves/updateRemainingMoves.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateRemainingMoves: () => (/* binding */ updateRemainingMoves)
/* harmony export */ });
const updateRemainingMoves = currentMoves => {
  const updated = currentMoves - 1;
  return updated;
};

/***/ }),

/***/ "./src/game/index.ts":
/*!***************************!*\
  !*** ./src/game/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Game: () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_0__.Game)
/* harmony export */ });
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/game/ui/index.ts");


/***/ }),

/***/ "./src/game/ui/game.ts":
/*!*****************************!*\
  !*** ./src/game/ui/game.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Game: () => (/* binding */ Game)
/* harmony export */ });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/index.mjs");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/game/constants.ts");
/* harmony import */ var _application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../application */ "./src/game/application/index.ts");
/* harmony import */ var _gamePanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gamePanel */ "./src/game/ui/gamePanel.ts");
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gameBoard */ "./src/game/ui/gameBoard.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./src/game/utils.ts");






class Game {
  editable = false;
  board = [];
  avialableCubesColors = [_constants__WEBPACK_IMPORTED_MODULE_1__.GAME_CUBES.RED, _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_CUBES.GREEN, _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_CUBES.BLUE, _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_CUBES.YELLOW, _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_CUBES.PURPLE];
  constructor(config) {
    this.config = config;
    this.remainingMoves = config.moveCount;
    this.app = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Application();
    this.mainContainer = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Container();
    this.gameBoardContainer = new _gameBoard__WEBPACK_IMPORTED_MODULE_4__.GameBoardContainer(this.app, {
      width: 500,
      height: 500,
      rows: this.config.boardRows,
      cols: this.config.boardCols
    });
    this.panelScoreContainer = new _gamePanel__WEBPACK_IMPORTED_MODULE_3__.GamePanelContainer({
      width: 300,
      height: 300
    });
    this.startGame = (0,_application__WEBPACK_IMPORTED_MODULE_2__.createStartGame)({
      readConfig: () => this.config,
      saveAvialableCubesColors: avialableCubesColors => this.avialableCubesColors = avialableCubesColors,
      saveBoard: board => this.board = board,
      saveScore: score => this.score = score,
      saveStatus: status => this.status = status,
      saveRemainingMoves: moves => this.remainingMoves = moves
    });
    this.clickCell = (0,_application__WEBPACK_IMPORTED_MODULE_2__.createClickCell)({
      readConfig: () => this.config,
      readBoard: () => this.board,
      readScore: () => this.score,
      readAvialableCubesColors: () => this.avialableCubesColors,
      readStatus: () => this.status,
      readRemainingMoves: () => this.remainingMoves,
      saveBoard: board => this.board = board,
      saveScore: score => this.score = score,
      saveStatus: status => this.status = status,
      saveRemainingMoves: moves => this.remainingMoves = moves,
      readMixCount: () => this.config.mixCount
    });
  }
  start() {
    this.editable = true;
    this.startGame();
    this.renderInitialBoard();
    this.renderInitialPanel();
  }
  async init() {
    await this.app.init({
      background: "#A1A1A1",
      resizeTo: window
    });
    document.body.appendChild(this.app.canvas);
    await this.loadAssets();
    const containerWidth = 1000;
    const containerHeight = 700;
    this.mainContainer.setSize(containerWidth, containerHeight);
    this.mainContainer.position.set((this.app.screen.width - containerWidth) / 2, (this.app.screen.height - containerHeight) / 2);
    this.panelScoreContainer.position.set(containerWidth - 50 - 300, containerHeight / 2 - 300 / 2);
    this.gameBoardContainer.position.set(50, containerHeight - 50 - 500);
    this.mainContainer.addChild(this.gameBoardContainer);
    this.mainContainer.addChild(this.panelScoreContainer);
    this.app.stage.addChild(this.mainContainer);
  }
  async onCellClick(coords) {
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
    await this.renderFalledBoard(result.falledCubes.concat(result.falledNewCubes), result.boardWithoutMoved);
    if (result.status === _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_STATUSES.WIN) {
      window.alert("WIN");
      return;
    }
    if (result.mixedBoards.length) {
      await this.renderMixedBoard(result.mixedBoards);
    }
    if (result.status === _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_STATUSES.NO_MOVES) {
      window.alert("NO_MOVES");
    } else {
      this.renderInitialBoard();
      this.editable = true;
    }
  }
  renderInitialBoard() {
    this.gameBoardContainer.renderCubes(this.board, this.onCellClick.bind(this));
  }
  async renderBurnedBoard(burned, boardWithoutBurned) {
    this.gameBoardContainer.renderCubes(boardWithoutBurned);
    await this.gameBoardContainer.renderBurned(burned);
  }
  async renderSuperCubes(superCubes) {
    await this.gameBoardContainer.renderSuperCubes(superCubes);
  }
  async renderFalledBoard(falled, boardWithoutMoved) {
    this.gameBoardContainer.renderCubes(boardWithoutMoved);
    await this.gameBoardContainer.renderFalled(falled);
  }
  async renderMixedBoard(mixedBoards) {
    for await (const mixedBoard of mixedBoards) {
      await this.gameBoardContainer.renderMixed(mixedBoard);
      await (0,_utils__WEBPACK_IMPORTED_MODULE_5__.wait)(200);
    }
  }
  renderInitialPanel() {
    this.panelScoreContainer.render(this.score, this.remainingMoves);
  }
  renderScore() {
    this.panelScoreContainer.renderScore(this.score);
  }
  renderMoves() {
    this.panelScoreContainer.renderMoves(this.remainingMoves);
  }
  async loadAssets() {
    pixi_js__WEBPACK_IMPORTED_MODULE_0__.Assets.add([{
      alias: _constants__WEBPACK_IMPORTED_MODULE_1__.ASSETS.BOARD.ALIAS,
      src: _constants__WEBPACK_IMPORTED_MODULE_1__.ASSETS.BOARD.SRC
    }, {
      alias: _constants__WEBPACK_IMPORTED_MODULE_1__.ASSETS.BLUE_CUBE.ALIAS,
      src: _constants__WEBPACK_IMPORTED_MODULE_1__.ASSETS.BLUE_CUBE.SRC
    }, {
      alias: _constants__WEBPACK_IMPORTED_MODULE_1__.ASSETS.RED_CUBE.ALIAS,
      src: _constants__WEBPACK_IMPORTED_MODULE_1__.ASSETS.RED_CUBE.SRC
    }, {
      alias: _constants__WEBPACK_IMPORTED_MODULE_1__.ASSETS.GREEN_CUBE.ALIAS,
      src: _constants__WEBPACK_IMPORTED_MODULE_1__.ASSETS.GREEN_CUBE.SRC
    }, {
      alias: _constants__WEBPACK_IMPORTED_MODULE_1__.ASSETS.YELLOW_CUBE.ALIAS,
      src: _constants__WEBPACK_IMPORTED_MODULE_1__.ASSETS.YELLOW_CUBE.SRC
    }, {
      alias: _constants__WEBPACK_IMPORTED_MODULE_1__.ASSETS.PURPLE_CUBE.ALIAS,
      src: _constants__WEBPACK_IMPORTED_MODULE_1__.ASSETS.PURPLE_CUBE.SRC
    }, {
      alias: _constants__WEBPACK_IMPORTED_MODULE_1__.ASSETS.PANEL_SCORE.ALIAS,
      src: _constants__WEBPACK_IMPORTED_MODULE_1__.ASSETS.PANEL_SCORE.SRC
    }]);
    await pixi_js__WEBPACK_IMPORTED_MODULE_0__.Assets.load([_constants__WEBPACK_IMPORTED_MODULE_1__.ASSETS.BOARD.ALIAS, _constants__WEBPACK_IMPORTED_MODULE_1__.ASSETS.PANEL_SCORE.ALIAS, _constants__WEBPACK_IMPORTED_MODULE_1__.ASSETS.BLUE_CUBE.ALIAS, _constants__WEBPACK_IMPORTED_MODULE_1__.ASSETS.RED_CUBE.ALIAS, _constants__WEBPACK_IMPORTED_MODULE_1__.ASSETS.GREEN_CUBE.ALIAS, _constants__WEBPACK_IMPORTED_MODULE_1__.ASSETS.YELLOW_CUBE.ALIAS, _constants__WEBPACK_IMPORTED_MODULE_1__.ASSETS.PURPLE_CUBE.ALIAS]);
  }
}

/***/ }),

/***/ "./src/game/ui/gameBoard.ts":
/*!**********************************!*\
  !*** ./src/game/ui/gameBoard.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GameBoardContainer: () => (/* binding */ GameBoardContainer)
/* harmony export */ });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/index.mjs");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/game/constants.ts");


class GameBoardContainer extends pixi_js__WEBPACK_IMPORTED_MODULE_0__.Container {
  constructor(app, options) {
    super();
    this.app = app;
    this.options = options;
  }
  get cubeWidth() {
    return (this.options.width - 30) / this.options.cols;
  }
  get cubeHeight() {
    return this.cubeWidth;
  }
  renderCubes(board, callback) {
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
  renderBurned(burnedCubes) {
    const promises = burnedCubes.map(burnedCube => {
      return new Promise(resolve => {
        const cubeSprite = this.createCube(burnedCube);
        this.addChild(cubeSprite);
        const animationLogic = ticker => {
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
  renderSuperCubes(superCubes) {
    const promises = superCubes.map(superCube => {
      return new Promise(resolve => {
        const cubeSprite = this.createCube(superCube);
        this.addChild(cubeSprite);
        const animationLogic = ticker => {
          if (cubeSprite.width >= this.cubeWidth * 1.3) {
            this.removeChild(cubeSprite);
            this.app.ticker.remove(animationLogic);
            resolve("");
          } else {
            cubeSprite.width += 0.4 * ticker.deltaTime;
            cubeSprite.height += 0.4 * ticker.deltaTime;
            cubeSprite.position.set(cubeSprite.x - 0.2 * ticker.deltaTime, cubeSprite.y - 0.2 * ticker.deltaTime);
          }
        };
        this.app.ticker.add(animationLogic);
      });
    });
    return Promise.all(promises).then(() => {});
  }
  renderFalled(falledCubes) {
    const promises = falledCubes.map(falledCube => {
      return new Promise(resolve => {
        const cubeSprite = this.createCube({
          ...falledCube.cube,
          coords: falledCube.from
        });
        this.addChild(cubeSprite);
        const animationLogic = ticker => {
          const startPosition = cubeSprite.position;
          const endPostion = this.getCubePositionByCoords(falledCube.to);
          const diff = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Point(startPosition.x, endPostion.y - startPosition.y);
          if (diff.y === 0) {
            this.app.ticker.remove(animationLogic);
            resolve("");
          } else {
            const nextY = Math.min(startPosition.y + 5 * ticker.deltaTime, endPostion.y);
            cubeSprite.position.set(startPosition.x, nextY);
          }
        };
        this.app.ticker.add(animationLogic);
      });
    });
    return Promise.all(promises).then(() => {});
  }
  async renderMixed(mixedBoard) {
    this.removeChildren();
    this.renderBoardBg();
    const promises = mixedBoard.map(mixedCube => {
      return new Promise(resolve => {
        const cubeSprite = this.createCube(mixedCube.cube);
        const fromPosition = this.getCubePositionByCoords(mixedCube.from);
        const toPosition = this.getCubePositionByCoords(mixedCube.to);
        this.addChild(cubeSprite);
        cubeSprite.position.set(fromPosition.x, fromPosition.y);
        const animationLogic = ticker => {
          const startPosition = cubeSprite.position;
          const diff = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Point(toPosition.x - startPosition.x, toPosition.y - startPosition.y);
          if (diff.x === 0 && diff.y === 0) {
            this.app.ticker.remove(animationLogic);
            resolve("");
          } else {
            const perTick = 5;
            const perTickX = fromPosition.x > toPosition.x ? -perTick : perTick;
            const perTickY = fromPosition.y > toPosition.y ? -perTick : perTick;
            const nextX = (fromPosition.x > toPosition.x ? Math.max : Math.min)(startPosition.x + perTickX * ticker.deltaTime, toPosition.x);
            const nextY = (fromPosition.y > toPosition.y ? Math.max : Math.min)(startPosition.y + perTickY * ticker.deltaTime, toPosition.y);
            cubeSprite.position.set(nextX, nextY);
          }
        };
        this.app.ticker.add(animationLogic);
      });
    });
    await Promise.all(promises).then(() => {});
  }
  createCube(cube, callback) {
    const texture = pixi_js__WEBPACK_IMPORTED_MODULE_0__.Assets.get(cube.color);
    const cubeSprite = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Sprite(texture);
    const position = this.getCubePositionByCoords(cube.coords);
    cubeSprite.width = this.cubeWidth;
    cubeSprite.height = this.cubeHeight;
    cubeSprite.position.set(position.x, position.y);
    if (cube.type !== _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_CUBES_TYPE.BASE) {
      cubeSprite.alpha = 0.7;
    }
    cubeSprite.eventMode = "static";
    cubeSprite.cursor = "pointer";
    if (callback) {
      cubeSprite.on("pointerdown", () => callback(cube.coords));
    }
    return cubeSprite;
  }
  getCubePositionByCoords(coords) {
    return {
      x: coords.x * this.cubeWidth + 15,
      y: coords.y * this.cubeHeight + 15
    };
  }
  renderBoardBg() {
    const boardSprite = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Sprite(pixi_js__WEBPACK_IMPORTED_MODULE_0__.Assets.get(_constants__WEBPACK_IMPORTED_MODULE_1__.ASSETS.BOARD.ALIAS));
    boardSprite.setSize(this.options.width, this.options.height);
    this.addChild(boardSprite);
  }
}

/***/ }),

/***/ "./src/game/ui/gamePanel.ts":
/*!**********************************!*\
  !*** ./src/game/ui/gamePanel.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GamePanelContainer: () => (/* binding */ GamePanelContainer)
/* harmony export */ });
/* harmony import */ var pixi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pixi.js */ "./node_modules/pixi.js/lib/index.mjs");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/game/constants.ts");


class GamePanelContainer extends pixi_js__WEBPACK_IMPORTED_MODULE_0__.Container {
  constructor(options) {
    super();
    this.options = options;
    this.panelScoreContainer = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Container();
    this.panelTimerContainer = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Container();
  }
  render(score, time) {
    const panelScoreSize = this.options.width;
    this.setSize(panelScoreSize, panelScoreSize);
    const panelScoreSprite = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Sprite(pixi_js__WEBPACK_IMPORTED_MODULE_0__.Assets.get(_constants__WEBPACK_IMPORTED_MODULE_1__.ASSETS.PANEL_SCORE.ALIAS));
    panelScoreSprite.width = panelScoreSize;
    panelScoreSprite.height = panelScoreSize;
    const panelScoreScoreWrapper = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Graphics().roundRect(0, 0, 200, 80, 20).fill("#0E3366");
    panelScoreScoreWrapper.position.set((panelScoreSize - 200) / 2, panelScoreSize - 80 - 30);
    const panelScoreScoreTitle = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Text({
      text: "счет:",
      style: {
        fontFamily: "Arial",
        fontSize: 30,
        fill: "white"
      }
    });
    panelScoreScoreTitle.position.set((panelScoreSize - panelScoreScoreTitle.width) / 2, panelScoreSize - 80 - 30);
    const panelTimerScoreWrapper = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Graphics().roundRect(0, 0, 120, 120, 120).fill("#C4398F");
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
  renderScore(score) {
    this.panelScoreContainer.removeChildren();
    const panelScoreScoreValue = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Text({
      text: score,
      style: {
        fontFamily: "Arial",
        fontSize: 50,
        fill: "white"
      }
    });
    panelScoreScoreValue.position.set((this.options.width - panelScoreScoreValue.width) / 2, this.options.width - 80);
    this.panelScoreContainer.addChild(panelScoreScoreValue);
  }
  renderMoves(moves) {
    this.panelTimerContainer.removeChildren();
    const panelMovesValue = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Text({
      text: moves,
      style: {
        fontFamily: "Arial",
        fontSize: 70,
        fill: "white"
      }
    });
    panelMovesValue.position.set((this.options.width - panelMovesValue.width) / 2, 60);
    this.panelTimerContainer.addChild(panelMovesValue);
  }
}

/***/ }),

/***/ "./src/game/ui/index.ts":
/*!******************************!*\
  !*** ./src/game/ui/index.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Game: () => (/* reexport safe */ _game__WEBPACK_IMPORTED_MODULE_0__.Game)
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game/ui/game.ts");


/***/ }),

/***/ "./src/game/utils.ts":
/*!***************************!*\
  !*** ./src/game/utils.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   copyBoard: () => (/* binding */ copyBoard),
/* harmony export */   getCellByCoords: () => (/* binding */ getCellByCoords),
/* harmony export */   getRandomInt: () => (/* binding */ getRandomInt),
/* harmony export */   setCellByCoords: () => (/* binding */ setCellByCoords),
/* harmony export */   wait: () => (/* binding */ wait)
/* harmony export */ });
const getCellByCoords = (board, coords) => {
  return board[coords.y]?.[coords.x] || null;
};
const setCellByCoords = (board, coords, maybeCube) => {
  board[coords.y][coords.x] = maybeCube;
};
const copyBoard = board => {
  return JSON.parse(JSON.stringify(board));
};
function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
const wait = (ms = 1000) => new Promise(resolve => setTimeout(resolve, ms));

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _init__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init */ "./src/init.ts");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", _init__WEBPACK_IMPORTED_MODULE_0__["default"]);
} else {
  (0,_init__WEBPACK_IMPORTED_MODULE_0__["default"])();
}

/***/ }),

/***/ "./src/init.ts":
/*!*********************!*\
  !*** ./src/init.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game/index.ts");

async function init() {
  const varsFromTZ = {
    N: 10,
    M: 10,
    C: 5,
    // K: 3,
    S: 5,
    X: 100,
    Y: 15,
    L: 4,
    R: 2
  };
  const game = new _game__WEBPACK_IMPORTED_MODULE_0__.Game(getGameConfigFromTZVars(varsFromTZ));
  await game.init();
  game.start();
}
function getGameConfigFromTZVars(vars) {
  return {
    boardCols: vars.N,
    boardRows: vars.M,
    cubeColorsCount: vars.C,
    minChainLength: vars.K || 2,
    mixCount: vars.S,
    scoresToWin: vars.X,
    moveCount: vars.Y,
    cubesToSuper: vars.L,
    superBombRadius: vars.R
  };
}

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		// The chunk loading function for additional chunks
/******/ 		// Since all referenced chunks are already included
/******/ 		// in this file, this function is empty here.
/******/ 		__webpack_require__.e = () => (Promise.resolve());
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkblast_game"] = self["webpackChunkblast_game"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendor"], () => (__webpack_require__("./src/index.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNwQmpQLGVBQWUsRUFBRXFQLElBQUksQ0FBQ0g7RUFDeEIsQ0FBQztBQUNIOzs7Ozs7Ozs7OztBQzlDQTs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSwrQkFBK0Isd0NBQXdDO1dBQ3ZFO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUJBQWlCLHFCQUFxQjtXQUN0QztXQUNBO1dBQ0Esa0JBQWtCLHFCQUFxQjtXQUN2QztXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0MzQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NIQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2FwcGxpY2F0aW9uL2NsaWNrQ2VsbC9jbGlja0NlbGwudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2FwcGxpY2F0aW9uL2NsaWNrQ2VsbC9pbmRleC50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvYXBwbGljYXRpb24vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2FwcGxpY2F0aW9uL3N0YXJ0R2FtZS9pbmRleC50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvYXBwbGljYXRpb24vc3RhcnRHYW1lL3N0YXJ0R2FtZS50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvY29uc3RhbnRzLnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vYnVybkN1YmVzL2J1cm5DdWJlcy50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL2J1cm5DdWJlcy9pbmRleC50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL2NoZWNrSGFzTW92ZXMvY2hlY2tIYXNNb3Zlcy50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL2NoZWNrSGFzTW92ZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi9jaGVja0lzV2luL2NoZWNrSXNXaW4udHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi9jaGVja0lzV2luL2luZGV4LnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vY3JlYXRlQ29uZmlnL2NyZWF0ZUNvbmZpZy50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL2NyZWF0ZUNvbmZpZy9pbmRleC50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL2NyZWF0ZUN1YmUvY3JlYXRlQ3ViZS50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL2NyZWF0ZUN1YmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi9jcmVhdGVSYW5kb21DdWJlL2NyZWF0ZVJhbmRvbUN1YmUudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi9jcmVhdGVSYW5kb21DdWJlL2luZGV4LnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vZmFsbEN1YmVzL2ZhbGxDdWJlcy50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL2ZhbGxDdWJlcy9pbmRleC50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL2ZpbGxFbXB0eUNlbGxzL2ZpbGxFbXB0eUNlbGxzLnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vZmlsbEVtcHR5Q2VsbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi9nZW5lcmF0ZUJvYXJkL2dlbmVyYXRlQm9hcmQudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi9nZW5lcmF0ZUJvYXJkL2luZGV4LnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vZ2V0Q3ViZXNDaGFpbi9nZXRDdWJlc0NoYWluLnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vZ2V0Q3ViZXNDaGFpbi9pbmRleC50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL2dldExpbmtlZEN1YmVzL2dldExpbmtlZEN1YmVzLnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vZ2V0TGlua2VkQ3ViZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi9nZXRVcGRhdGVTY29yZS9nZXRVcGRhdGVTY29yZS50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL2dldFVwZGF0ZVNjb3JlL2luZGV4LnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi9sb2dQcml0dHlCb2FyZC9pbmRleC50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL2xvZ1ByaXR0eUJvYXJkL2xvZ1ByaXR0eUJvYXJkLnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vbWl4Q3ViZXNJZk5lZWQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi9taXhDdWJlc0lmTmVlZC9taXhDdWJlc0lmTmVlZC50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL3RyeUJ1cm5DdWRlcy9pbmRleC50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL3RyeUJ1cm5DdWRlcy90cnlCdXJuQ3VkZXMudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi90cnlDcmVhdGVTdXBlckN1YmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi90cnlDcmVhdGVTdXBlckN1YmUvdHJ5Q3JlYXRlU3VwZXJDdWJlLnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vdXBkYXRlQXZpYWxhYmxlQ3ViZXNDb2xvcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi91cGRhdGVBdmlhbGFibGVDdWJlc0NvbG9ycy91cGRhdGVBdmlhbGFibGVDdWJlc0NvbG9ycy50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL3VwZGF0ZUdhbWVTdGF0dXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi91cGRhdGVHYW1lU3RhdHVzL3VwZGF0ZUdhbWVTdGF0dXMudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi91cGRhdGVSZW1haW5pbmdNb3Zlcy9pbmRleC50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL3VwZGF0ZVJlbWFpbmluZ01vdmVzL3VwZGF0ZVJlbWFpbmluZ01vdmVzLnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9pbmRleC50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvdWkvZ2FtZS50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvdWkvZ2FtZUJvYXJkLnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS91aS9nYW1lUGFuZWwudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL3VpL2luZGV4LnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS91dGlscy50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvaW5pdC50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL3N0eWxlLmNzcz9lMzIwIiwid2VicGFjazovL2JsYXN0LWdhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2JsYXN0LWdhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JsYXN0LWdhbWUvd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JsYXN0LWdhbWUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JsYXN0LWdhbWUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JsYXN0LWdhbWUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldENlbGxCeUNvb3JkcyB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuaW1wb3J0IHtcbiAgZmFsbEN1YmVzLFxuICBmaWxsRW1wdHlDZWxscyxcbiAgZ2V0VXBkYXRlU2NvcmUsXG4gIG1peEN1YmVzSWZOZWVkLFxuICB0cnlCdXJuQ3ViZXMsXG4gIHRyeUNyZWF0ZVN1cGVyQ3ViZSxcbiAgdXBkYXRlR2FtZVN0YXR1cyxcbiAgdXBkYXRlUmVtYWluaW5nTW92ZXMsXG59IGZyb20gXCIuLi8uLi9kb21haW5cIjtcbmltcG9ydCB7IENsaWNrQ2VsbCB9IGZyb20gXCIuLi8uLi9wb3J0cy5pbnB1dFwiO1xuaW1wb3J0IHtcbiAgU2F2ZVNjb3JlLFxuICBSZWFkQ29uZmlnLFxuICBSZWFkQm9hcmQsXG4gIFJlYWRTY29yZSxcbiAgU2F2ZUJvYXJkLFxuICBSZWFkQXZpYWxhYmxlQ3ViZXNDb2xvcnMsXG4gIFJlYWRTdGF0dXMsXG4gIFNhdmVTdGF0dXMsXG4gIFNhdmVSZW1haW5pbmdNb3ZlcyxcbiAgUmVhZFJlbWFpbmluZ01vdmVzLFxuICBSZWFkTWl4Q291bnQsXG59IGZyb20gXCIuLi8uLi9wb3J0cy5vdXRwdXRcIjtcbmltcG9ydCB7IEdBTUVfQ1VCRVNfVFlQRSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuaW50ZXJmYWNlIERlcHMge1xuICByZWFkU2NvcmU6IFJlYWRTY29yZTtcbiAgc2F2ZVNjb3JlOiBTYXZlU2NvcmU7XG4gIHJlYWRDb25maWc6IFJlYWRDb25maWc7XG4gIHJlYWRCb2FyZDogUmVhZEJvYXJkO1xuICBzYXZlQm9hcmQ6IFNhdmVCb2FyZDtcbiAgcmVhZEF2aWFsYWJsZUN1YmVzQ29sb3JzOiBSZWFkQXZpYWxhYmxlQ3ViZXNDb2xvcnM7XG4gIHJlYWRTdGF0dXM6IFJlYWRTdGF0dXM7XG4gIHNhdmVTdGF0dXM6IFNhdmVTdGF0dXM7XG4gIHJlYWRSZW1haW5pbmdNb3ZlczogUmVhZFJlbWFpbmluZ01vdmVzO1xuICBzYXZlUmVtYWluaW5nTW92ZXM6IFNhdmVSZW1haW5pbmdNb3ZlcztcbiAgcmVhZE1peENvdW50OiBSZWFkTWl4Q291bnQ7XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDbGlja0NlbGwgPVxuICAoe1xuICAgIHNhdmVTY29yZSxcbiAgICByZWFkQ29uZmlnLFxuICAgIHJlYWRCb2FyZCxcbiAgICByZWFkU2NvcmUsXG4gICAgc2F2ZUJvYXJkLFxuICAgIHJlYWRBdmlhbGFibGVDdWJlc0NvbG9ycyxcbiAgICByZWFkU3RhdHVzLFxuICAgIHNhdmVTdGF0dXMsXG4gICAgcmVhZFJlbWFpbmluZ01vdmVzLFxuICAgIHNhdmVSZW1haW5pbmdNb3ZlcyxcbiAgICByZWFkTWl4Q291bnQsXG4gIH06IERlcHMpOiBDbGlja0NlbGwgPT5cbiAgKGNvb3JkcykgPT4ge1xuICAgIGNvbnN0IGNvbmZpZyA9IHJlYWRDb25maWcoKTtcbiAgICBjb25zdCBib2FyZCA9IHJlYWRCb2FyZCgpO1xuICAgIGNvbnN0IHNjb3JlID0gcmVhZFNjb3JlKCk7XG5cbiAgICBjb25zdCBjbGlja2VkQ3ViZSA9IGdldENlbGxCeUNvb3Jkcyhib2FyZCwgY29vcmRzKTtcblxuICAgIGNvbnN0IG1heWJlQnVybmVkSW5mbyA9IHRyeUJ1cm5DdWJlcyhjb25maWcsIGJvYXJkLCBjbGlja2VkQ3ViZSk7XG4gICAgaWYgKCFtYXliZUJ1cm5lZEluZm8pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGlzQmFzZUN1YmUgPSBjbGlja2VkQ3ViZS50eXBlID09PSBHQU1FX0NVQkVTX1RZUEUuQkFTRTtcblxuICAgIGNvbnN0IHsgYnVybmVkQ3ViZXMsIGJvYXJkOiBib2FyZFdpdGhCdXJuZWQgfSA9IG1heWJlQnVybmVkSW5mbztcbiAgICBjb25zdCB1cGRhdGVkU2NvcmUgPSBnZXRVcGRhdGVTY29yZShidXJuZWRDdWJlcywgc2NvcmUpO1xuXG4gICAgY29uc3QgeyBib2FyZDogYm9hcmRCdXJuZWRXaXRoU3VwZXIsIHN1cGVyQ3ViZXMgfSA9IHRyeUNyZWF0ZVN1cGVyQ3ViZShcbiAgICAgIGNvbmZpZyxcbiAgICAgIGNvb3JkcyxcbiAgICAgIGJ1cm5lZEN1YmVzLFxuICAgICAgYm9hcmRXaXRoQnVybmVkLFxuICAgICAgaXNCYXNlQ3ViZSxcbiAgICApO1xuXG4gICAgY29uc3Qge1xuICAgICAgZmFsbGVkQ3ViZXMsXG4gICAgICBib2FyZDogZmFsbGVkQm9hcmQsXG4gICAgICBib2FyZFdpdGhvdXRNb3ZlZCxcbiAgICB9ID0gZmFsbEN1YmVzKGNvbmZpZywgYm9hcmRCdXJuZWRXaXRoU3VwZXIpO1xuXG4gICAgY29uc3QgYXZpYWxhYmxlQ3ViZXNDb2xvcnMgPSByZWFkQXZpYWxhYmxlQ3ViZXNDb2xvcnMoKTtcblxuICAgIGNvbnN0IHtcbiAgICAgIG5ld0N1YmVzLFxuICAgICAgYm9hcmQ6IGZpbGxlZEJvYXJkLFxuICAgICAgZmFsbGVkTmV3Q3ViZXMsXG4gICAgfSA9IGZpbGxFbXB0eUNlbGxzKGZhbGxlZEJvYXJkLCBhdmlhbGFibGVDdWJlc0NvbG9ycyk7XG5cbiAgICBjb25zdCBtaXhDb3VudCA9IHJlYWRNaXhDb3VudCgpO1xuXG4gICAgY29uc3QgeyBtaXhlZEJvYXJkcywgdXBkYXRlZEJvYXJkIH0gPSBtaXhDdWJlc0lmTmVlZChcbiAgICAgIGNvbmZpZyxcbiAgICAgIGZpbGxlZEJvYXJkLFxuICAgICAgbWl4Q291bnQsXG4gICAgKTtcblxuICAgIGNvbnN0IHN0YXR1cyA9IHJlYWRTdGF0dXMoKTtcbiAgICBjb25zdCBjdXJyZW50TW92ZXMgPSByZWFkUmVtYWluaW5nTW92ZXMoKTtcblxuICAgIGNvbnN0IHVwZGF0ZWRNb3ZlcyA9IHVwZGF0ZVJlbWFpbmluZ01vdmVzKGN1cnJlbnRNb3Zlcyk7XG5cbiAgICBjb25zdCB1cGRhdGVkU3RhdHVzID0gdXBkYXRlR2FtZVN0YXR1cyhcbiAgICAgIGNvbmZpZyxcbiAgICAgIHVwZGF0ZWRCb2FyZCxcbiAgICAgIHVwZGF0ZWRTY29yZSxcbiAgICAgIGNvbmZpZy5zY29yZXNUb1dpbixcbiAgICAgIHN0YXR1cyxcbiAgICAgIHVwZGF0ZWRNb3ZlcyxcbiAgICApO1xuXG4gICAgc2F2ZVNjb3JlKHVwZGF0ZWRTY29yZSk7XG4gICAgc2F2ZUJvYXJkKHVwZGF0ZWRCb2FyZCk7XG4gICAgc2F2ZVN0YXR1cyh1cGRhdGVkU3RhdHVzKTtcbiAgICBzYXZlUmVtYWluaW5nTW92ZXModXBkYXRlZE1vdmVzKTtcblxuICAgIHJldHVybiB7XG4gICAgICBidXJuZWRDdWJlcyxcbiAgICAgIHN1cGVyQ3ViZXMsXG4gICAgICBmYWxsZWRDdWJlcyxcbiAgICAgIGJvYXJkV2l0aEJ1cm5lZCxcbiAgICAgIGJvYXJkQnVybmVkV2l0aFN1cGVyLFxuICAgICAgZmFsbGVkQm9hcmQsXG4gICAgICBib2FyZFdpdGhvdXRNb3ZlZCxcbiAgICAgIGZpbGxlZEJvYXJkLFxuICAgICAgbmV3Q3ViZXMsXG4gICAgICBtaXhlZEJvYXJkcyxcbiAgICAgIHVwZGF0ZWRTY29yZSxcbiAgICAgIGJvYXJkOiB1cGRhdGVkQm9hcmQsXG4gICAgICBmYWxsZWROZXdDdWJlcyxcbiAgICAgIHN0YXR1czogdXBkYXRlZFN0YXR1cyxcbiAgICB9O1xuICB9O1xuIiwiZXhwb3J0IHsgY3JlYXRlQ2xpY2tDZWxsIH0gZnJvbSBcIi4vY2xpY2tDZWxsXCI7XG4iLCJleHBvcnQgeyBjcmVhdGVTdGFydEdhbWUgfSBmcm9tIFwiLi9zdGFydEdhbWVcIjtcbmV4cG9ydCB7IGNyZWF0ZUNsaWNrQ2VsbCB9IGZyb20gXCIuL2NsaWNrQ2VsbFwiO1xuIiwiZXhwb3J0IHsgY3JlYXRlU3RhcnRHYW1lIH0gZnJvbSBcIi4vc3RhcnRHYW1lXCI7XG4iLCJpbXBvcnQgeyBHQU1FX1NUQVRVU0VTIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZ2VuZXJhdGVCb2FyZCwgdXBkYXRlQXZpYWxhYmxlQ3ViZXNDb2xvcnMgfSBmcm9tIFwiLi4vLi4vZG9tYWluXCI7XG5pbXBvcnQge1xuICBTYXZlQXZpYWxhYmxlQ3ViZXNDb2xvcnMsXG4gIFNhdmVCb2FyZCxcbiAgU2F2ZVNjb3JlLFxuICBTYXZlU3RhdHVzLFxuICBSZWFkQ29uZmlnLFxuICBTYXZlUmVtYWluaW5nTW92ZXMsXG59IGZyb20gXCIuLi8uLi9wb3J0cy5vdXRwdXRcIjtcbmltcG9ydCB7IFN0YXJ0R2FtZSB9IGZyb20gXCIuLi8uLi9wb3J0cy5pbnB1dFwiO1xuXG5pbnRlcmZhY2UgRGVwcyB7XG4gIHNhdmVBdmlhbGFibGVDdWJlc0NvbG9yczogU2F2ZUF2aWFsYWJsZUN1YmVzQ29sb3JzO1xuICBzYXZlQm9hcmQ6IFNhdmVCb2FyZDtcbiAgc2F2ZVNjb3JlOiBTYXZlU2NvcmU7XG4gIHNhdmVTdGF0dXM6IFNhdmVTdGF0dXM7XG4gIHJlYWRDb25maWc6IFJlYWRDb25maWc7XG4gIHNhdmVSZW1haW5pbmdNb3ZlczogU2F2ZVJlbWFpbmluZ01vdmVzO1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlU3RhcnRHYW1lID1cbiAgKHtcbiAgICBzYXZlQXZpYWxhYmxlQ3ViZXNDb2xvcnMsXG4gICAgc2F2ZUJvYXJkLFxuICAgIHNhdmVTY29yZSxcbiAgICBzYXZlU3RhdHVzLFxuICAgIHJlYWRDb25maWcsXG4gICAgc2F2ZVJlbWFpbmluZ01vdmVzLFxuICB9OiBEZXBzKTogU3RhcnRHYW1lID0+XG4gICgpID0+IHtcbiAgICBjb25zdCBjb25maWcgPSByZWFkQ29uZmlnKCk7XG4gICAgY29uc3QgYXZpYWxhYmxlQ3ViZXNDb2xvcnMgPSB1cGRhdGVBdmlhbGFibGVDdWJlc0NvbG9ycyhjb25maWcpO1xuICAgIGNvbnN0IGJvYXJkID0gZ2VuZXJhdGVCb2FyZChjb25maWcsIGF2aWFsYWJsZUN1YmVzQ29sb3JzKTtcbiAgICBjb25zdCBzY29yZSA9IDA7XG4gICAgY29uc3Qgc3RhdHVzID0gR0FNRV9TVEFUVVNFUy5QTEFZSU5HO1xuXG4gICAgc2F2ZUJvYXJkKGJvYXJkKTtcbiAgICBzYXZlQXZpYWxhYmxlQ3ViZXNDb2xvcnMoYXZpYWxhYmxlQ3ViZXNDb2xvcnMpO1xuICAgIHNhdmVTY29yZShzY29yZSk7XG4gICAgc2F2ZVN0YXR1cyhzdGF0dXMpO1xuICAgIHNhdmVSZW1haW5pbmdNb3Zlcyhjb25maWcubW92ZUNvdW50KTtcblxuICAgIHJldHVybiB7XG4gICAgICBib2FyZCxcbiAgICAgIGF2aWFsYWJsZUN1YmVzQ29sb3JzLFxuICAgICAgc2NvcmUsXG4gICAgICBzdGF0dXMsXG4gICAgfTtcbiAgfTtcbiIsImV4cG9ydCBjb25zdCBHQU1FX0NVQkVTID0ge1xuICBCTFVFOiBcImJsdWVDdWJlXCIsXG4gIFJFRDogXCJyZWRDdWJlXCIsXG4gIEdSRUVOOiBcImdyZWVuQ3ViZVwiLFxuICBZRUxMT1c6IFwieWVsbG93Q3ViZVwiLFxuICBQVVJQTEU6IFwicHVycGxlQ3ViZVwiLFxufSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IEdBTUVfQ1VCRVNfVFlQRSA9IHtcbiAgQkFTRTogXCJiYXNlXCIsXG4gIENPTDogXCJjb2xcIixcbiAgUk9XOiBcInJvd1wiLFxuICBCT0FSRDogXCJib2FyZFwiLFxuICBSQURJVVM6IFwicmFkaXVzXCIsXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgR0FNRV9TVEFUVVNFUyA9IHtcbiAgV0lOOiBcIndpblwiLFxuICBOT19NT1ZFUzogXCJub01vdmVzXCIsXG4gIFBMQVlJTkc6IFwicGxheWluZ1wiLFxuICBJRExFOiBcImlkbGVcIixcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBBU1NFVFMgPSB7XG4gIEJPQVJEOiB7XG4gICAgQUxJQVM6IFwiYm9hcmRcIixcbiAgICBTUkM6IFwiYXNzZXRzL2JvYXJkLnBuZ1wiLFxuICB9LFxuICBCTFVFX0NVQkU6IHtcbiAgICBBTElBUzogR0FNRV9DVUJFUy5CTFVFLFxuICAgIFNSQzogXCJhc3NldHMvYmx1ZUN1YmUucG5nXCIsXG4gIH0sXG4gIFJFRF9DVUJFOiB7XG4gICAgQUxJQVM6IEdBTUVfQ1VCRVMuUkVELFxuICAgIFNSQzogXCJhc3NldHMvcmVkQ3ViZS5wbmdcIixcbiAgfSxcbiAgR1JFRU5fQ1VCRToge1xuICAgIEFMSUFTOiBHQU1FX0NVQkVTLkdSRUVOLFxuICAgIFNSQzogXCJhc3NldHMvZ3JlZW5DdWJlLnBuZ1wiLFxuICB9LFxuICBZRUxMT1dfQ1VCRToge1xuICAgIEFMSUFTOiBHQU1FX0NVQkVTLllFTExPVyxcbiAgICBTUkM6IFwiYXNzZXRzL3llbGxvd0N1YmUucG5nXCIsXG4gIH0sXG4gIFBVUlBMRV9DVUJFOiB7XG4gICAgQUxJQVM6IEdBTUVfQ1VCRVMuUFVSUExFLFxuICAgIFNSQzogXCJhc3NldHMvcHVycGxlQ3ViZS5wbmdcIixcbiAgfSxcbiAgUEFORUxfU0NPUkU6IHtcbiAgICBBTElBUzogXCJwYW5lbFNjb3JlXCIsXG4gICAgU1JDOiBcImFzc2V0cy9wYW5lbFNjb3JlLnBuZ1wiLFxuICB9LFxufSBhcyBjb25zdDtcbiIsImltcG9ydCB7IGNvcHlCb2FyZCwgZ2V0Q2VsbEJ5Q29vcmRzLCBzZXRDZWxsQnlDb29yZHMgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7XG4gIEdhbWVCb2FyZCxcbiAgR2FtZUJvYXJkRmlsbGVkLFxuICBHYW1lQnVybmVkQ3ViZXMsXG4gIEdhbWVDb25maWcsXG4gIEdhbWVDdWJlLFxuICBHYW1lQ3ViZXMsXG59IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgR0FNRV9DVUJFU19UWVBFIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5mdW5jdGlvbiBidXJuU3VwZXJDdWJlKFxuICBjdWJlOiBHYW1lQ3ViZSxcbiAgYm9hcmRXaXRoQnVybmVkOiBHYW1lQm9hcmQsXG4gIGJ1cm5lZEN1YmVzOiBHYW1lQnVybmVkQ3ViZXMsXG4gIHN1cGVyQm9tYlJhZGl1czogbnVtYmVyLFxuKSB7XG4gIGNvbnN0IGJ1cm5DdWJlID0gKGN1YmVUb0J1cm46IEdhbWVDdWJlKSA9PiB7XG4gICAgYnVybmVkQ3ViZXMucHVzaChjdWJlVG9CdXJuKTtcbiAgICBzZXRDZWxsQnlDb29yZHMoYm9hcmRXaXRoQnVybmVkLCBjdWJlVG9CdXJuLmNvb3JkcywgbnVsbCk7XG5cbiAgICBpZiAoY3ViZVRvQnVybi50eXBlICE9PSBHQU1FX0NVQkVTX1RZUEUuQkFTRSkge1xuICAgICAgYnVyblN1cGVyQ3ViZShjdWJlVG9CdXJuLCBib2FyZFdpdGhCdXJuZWQsIGJ1cm5lZEN1YmVzLCBzdXBlckJvbWJSYWRpdXMpO1xuICAgIH1cbiAgfTtcblxuICBpZiAoY3ViZS50eXBlID09PSBHQU1FX0NVQkVTX1RZUEUuQ09MKSB7XG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgYm9hcmRXaXRoQnVybmVkLmxlbmd0aDsgcm93KyspIHtcbiAgICAgIGNvbnN0IGN1YmVUb0J1cm5Db29yZHMgPSB7XG4gICAgICAgIHk6IHJvdyxcbiAgICAgICAgeDogY3ViZS5jb29yZHMueCxcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGN1YmVUb0J1cm4gPSBnZXRDZWxsQnlDb29yZHMoYm9hcmRXaXRoQnVybmVkLCBjdWJlVG9CdXJuQ29vcmRzKTtcblxuICAgICAgaWYgKGN1YmVUb0J1cm4pIHtcbiAgICAgICAgYnVybkN1YmUoY3ViZVRvQnVybik7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGN1YmUudHlwZSA9PT0gR0FNRV9DVUJFU19UWVBFLlJPVykge1xuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGJvYXJkV2l0aEJ1cm5lZFswXS5sZW5ndGg7IGNvbCsrKSB7XG4gICAgICBjb25zdCBjdWJlVG9CdXJuQ29vcmRzID0ge1xuICAgICAgICB5OiBjdWJlLmNvb3Jkcy55LFxuICAgICAgICB4OiBjb2wsXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBjdWJlVG9CdXJuID0gZ2V0Q2VsbEJ5Q29vcmRzKGJvYXJkV2l0aEJ1cm5lZCwgY3ViZVRvQnVybkNvb3Jkcyk7XG5cbiAgICAgIGlmIChjdWJlVG9CdXJuKSB7XG4gICAgICAgIGJ1cm5DdWJlKGN1YmVUb0J1cm4pO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChjdWJlLnR5cGUgPT09IEdBTUVfQ1VCRVNfVFlQRS5SQURJVVMpIHtcbiAgICBjb25zdCByYWRpdXMgPSBzdXBlckJvbWJSYWRpdXM7XG5cbiAgICBmb3IgKFxuICAgICAgbGV0IHJvdyA9IGN1YmUuY29vcmRzLnkgLSByYWRpdXM7XG4gICAgICByb3cgPD0gY3ViZS5jb29yZHMueSArIHJhZGl1cztcbiAgICAgIHJvdysrXG4gICAgKSB7XG4gICAgICBmb3IgKFxuICAgICAgICBsZXQgY29sID0gY3ViZS5jb29yZHMueCAtIHJhZGl1cztcbiAgICAgICAgY29sIDw9IGN1YmUuY29vcmRzLnggKyByYWRpdXM7XG4gICAgICAgIGNvbCsrXG4gICAgICApIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHJvdyA+PSAwICYmXG4gICAgICAgICAgcm93IDwgYm9hcmRXaXRoQnVybmVkLmxlbmd0aCAmJlxuICAgICAgICAgIGNvbCA+PSAwICYmXG4gICAgICAgICAgY29sIDwgYm9hcmRXaXRoQnVybmVkWzBdLmxlbmd0aFxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBjdWJlVG9CdXJuQ29vcmRzID0ge1xuICAgICAgICAgICAgeTogcm93LFxuICAgICAgICAgICAgeDogY29sLFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBjb25zdCBjdWJlVG9CdXJuID0gZ2V0Q2VsbEJ5Q29vcmRzKGJvYXJkV2l0aEJ1cm5lZCwgY3ViZVRvQnVybkNvb3Jkcyk7XG5cbiAgICAgICAgICBpZiAoY3ViZVRvQnVybikge1xuICAgICAgICAgICAgYnVybkN1YmUoY3ViZVRvQnVybik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGN1YmUudHlwZSA9PT0gR0FNRV9DVUJFU19UWVBFLkJPQVJEKSB7XG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgYm9hcmRXaXRoQnVybmVkLmxlbmd0aDsgcm93KyspIHtcbiAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGJvYXJkV2l0aEJ1cm5lZFswXS5sZW5ndGg7IGNvbCsrKSB7XG4gICAgICAgIGNvbnN0IGN1YmVUb0J1cm5Db29yZHMgPSB7XG4gICAgICAgICAgeTogcm93LFxuICAgICAgICAgIHg6IGNvbCxcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBjdWJlVG9CdXJuID0gZ2V0Q2VsbEJ5Q29vcmRzKGJvYXJkV2l0aEJ1cm5lZCwgY3ViZVRvQnVybkNvb3Jkcyk7XG5cbiAgICAgICAgaWYgKGN1YmVUb0J1cm4pIHtcbiAgICAgICAgICBidXJuQ3ViZShjdWJlVG9CdXJuKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgYnVybkN1YmVzID0gKFxuICBjb25maWc6IEdhbWVDb25maWcsXG4gIGJvYXJkOiBHYW1lQm9hcmRGaWxsZWQsXG4gIGN1YmVzOiBHYW1lQ3ViZXMsXG4pID0+IHtcbiAgY29uc3QgYnVybmVkQ3ViZXM6IEdhbWVCdXJuZWRDdWJlcyA9IFtdO1xuICBjb25zdCBib2FyZENvcHkgPSBjb3B5Qm9hcmQoYm9hcmQpO1xuXG4gIGNvbnN0IHN1cGVyQ3ViZXMgPSBjdWJlcy5maWx0ZXIoKGN1YmUpID0+IGN1YmUudHlwZSAhPT0gR0FNRV9DVUJFU19UWVBFLkJBU0UpO1xuXG4gIHN1cGVyQ3ViZXMuZm9yRWFjaCgoY3ViZSkgPT4ge1xuICAgIGJ1cm5TdXBlckN1YmUoY3ViZSwgYm9hcmRDb3B5LCBidXJuZWRDdWJlcywgY29uZmlnLnN1cGVyQm9tYlJhZGl1cyk7XG4gIH0pO1xuXG4gIGZvciAoY29uc3QgY3ViZSBvZiBjdWJlcykge1xuICAgIGNvbnN0IGFscmVhZHlCdXJuZWQgPSBidXJuZWRDdWJlcy5maW5kKFxuICAgICAgKGJ1cm5lZEN1YmUpID0+XG4gICAgICAgIGJ1cm5lZEN1YmUuY29vcmRzLnggPT09IGN1YmUuY29vcmRzLnggJiZcbiAgICAgICAgYnVybmVkQ3ViZS5jb29yZHMueSA9PT0gY3ViZS5jb29yZHMueSxcbiAgICApO1xuXG4gICAgaWYgKCFhbHJlYWR5QnVybmVkKSB7XG4gICAgICBidXJuZWRDdWJlcy5wdXNoKGN1YmUpO1xuICAgICAgc2V0Q2VsbEJ5Q29vcmRzKGJvYXJkQ29weSwgY3ViZS5jb29yZHMsIG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYnVybmVkQ3ViZXMsXG4gICAgYm9hcmQ6IGJvYXJkQ29weSBhcyBHYW1lQm9hcmQsXG4gIH07XG59O1xuIiwiZXhwb3J0IHsgYnVybkN1YmVzIH0gZnJvbSBcIi4vYnVybkN1YmVzXCI7XG4iLCJpbXBvcnQgeyBnZXRDZWxsQnlDb29yZHMgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7IEdhbWVCb2FyZEZpbGxlZCwgR2FtZUN1YmVJZCwgR2FtZUNvbmZpZyB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgZ2V0TGlua2VkQ3ViZXMgfSBmcm9tIFwiLi4vZ2V0TGlua2VkQ3ViZXNcIjtcblxuZXhwb3J0IGNvbnN0IGNoZWNrSGFzTW92ZXMgPSAoY29uZmlnOiBHYW1lQ29uZmlnLCBib2FyZDogR2FtZUJvYXJkRmlsbGVkKSA9PiB7XG4gIGNvbnN0IGNoZWNrZWRDdWJlczogQXJyYXk8R2FtZUN1YmVJZD4gPSBbXTtcblxuICBjb25zdCB7IGJvYXJkQ29scywgYm9hcmRSb3dzLCBtaW5DaGFpbkxlbmd0aCB9ID0gY29uZmlnO1xuXG4gIGZvciAobGV0IHkgPSAwOyB5IDwgYm9hcmRSb3dzOyB5KyspIHtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGJvYXJkQ29sczsgeCsrKSB7XG4gICAgICBjb25zdCBjdWJlID0gZ2V0Q2VsbEJ5Q29vcmRzKGJvYXJkLCB7IHgsIHkgfSk7XG5cbiAgICAgIGlmIChjdWJlKSB7XG4gICAgICAgIGNvbnN0IGxpbmtlZEN1YmVzID0gZ2V0TGlua2VkQ3ViZXMoXG4gICAgICAgICAgYm9hcmQsXG4gICAgICAgICAgeyB4LCB5IH0sXG4gICAgICAgICAgY3ViZS5jb2xvcixcbiAgICAgICAgICBjaGVja2VkQ3ViZXMsXG4gICAgICAgICk7XG4gICAgICAgIGlmIChsaW5rZWRDdWJlcy5sZW5ndGggPj0gbWluQ2hhaW5MZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGVja2VkQ3ViZXMucHVzaCguLi5saW5rZWRDdWJlcy5tYXAoKGN1YmUpID0+IGN1YmUuaWQpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG4iLCJleHBvcnQgeyBjaGVja0hhc01vdmVzIH0gZnJvbSBcIi4vY2hlY2tIYXNNb3Zlc1wiO1xuIiwiaW1wb3J0IHsgR2FtZVNjb3JlIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBjaGVja0lzV2luID0gKHNjb3JlOiBHYW1lU2NvcmUsIHNjb3Jlc1RvV2luOiBHYW1lU2NvcmUpID0+IHtcbiAgcmV0dXJuIHNjb3JlID49IHNjb3Jlc1RvV2luO1xufTtcbiIsImV4cG9ydCB7IGNoZWNrSXNXaW4gfSBmcm9tIFwiLi9jaGVja0lzV2luXCI7XG4iLCJpbXBvcnQgeyBHQU1FX0NVQkVTIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgR2FtZUNvbmZpZ1BhcmFtcyB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5jb25zdCBtaW5DdWJlQ29sb3JzQ291bnQgPSAyO1xuY29uc3QgbWF4Q3ViZUNvbG9yc0NvdW50ID0gT2JqZWN0LnZhbHVlcyhHQU1FX0NVQkVTKS5sZW5ndGg7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDb25maWcgPSAocGFyYW1zOiBHYW1lQ29uZmlnUGFyYW1zKSA9PiB7XG4gIGNvbnN0IHsgY3ViZUNvbG9yc0NvdW50IH0gPSBwYXJhbXM7XG5cbiAgaWYgKGN1YmVDb2xvcnNDb3VudCA8IG1pbkN1YmVDb2xvcnNDb3VudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBjdWJlQ29sb3JzQ291bnQgc2hvdWxkIGJlIGdyZWF0ZXIgdGhhbiAke21pbkN1YmVDb2xvcnNDb3VudCAtIDF9YCxcbiAgICApO1xuICB9XG5cbiAgaWYgKGN1YmVDb2xvcnNDb3VudCA+IG1heEN1YmVDb2xvcnNDb3VudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBjdWJlQ29sb3JzQ291bnQgc2hvdWxkIGJlIGxlc3MgdGhhbiAke21heEN1YmVDb2xvcnNDb3VudCArIDF9YCxcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIHBhcmFtcztcbn07XG4iLCJleHBvcnQgeyBjcmVhdGVDb25maWcgfSBmcm9tIFwiLi9jcmVhdGVDb25maWdcIjtcbiIsImltcG9ydCB7IEdBTUVfQ1VCRVNfVFlQRSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7XG4gIEdhbWVDdWJlSWQsXG4gIEdhbWVDZWxsQ29vcmRzLFxuICBHYW1lQ3ViZUNvbG9yLFxuICBHYW1lQ3ViZSxcbiAgR2FtZUN1YmVUeXBlLFxufSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxubGV0IGN1YmVJZHggPSAwO1xuXG5pbnRlcmZhY2UgT3B0aW9ucyB7XG4gIGlkPzogR2FtZUN1YmVJZDtcbiAgY29vcmRzOiBHYW1lQ2VsbENvb3JkcztcbiAgY29sb3I6IEdhbWVDdWJlQ29sb3I7XG4gIHR5cGU/OiBHYW1lQ3ViZVR5cGU7XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDdWJlID0gKHsgaWQsIGNvbG9yLCBjb29yZHMsIHR5cGUgfTogT3B0aW9ucyk6IEdhbWVDdWJlID0+IHtcbiAgcmV0dXJuIHtcbiAgICBpZDogaWQgfHwgKGAke2N1YmVJZHgrK31gIGFzIEdhbWVDdWJlSWQpLFxuICAgIGNvbG9yLFxuICAgIGNvb3JkcyxcbiAgICB0eXBlOiB0eXBlIHx8IEdBTUVfQ1VCRVNfVFlQRS5CQVNFLFxuICB9O1xufTtcbiIsImV4cG9ydCB7IGNyZWF0ZUN1YmUgfSBmcm9tIFwiLi9jcmVhdGVDdWJlXCI7XG4iLCJpbXBvcnQgeyBnZXRSYW5kb21JbnQgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7IEdhbWVDZWxsQ29vcmRzLCBHYW1lQ3ViZUNvbG9yLCBHYW1lQ3ViZVR5cGUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGNyZWF0ZUN1YmUgfSBmcm9tIFwiLi4vY3JlYXRlQ3ViZVwiO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlUmFuZG9tQ3ViZSA9IChcbiAgY29vcmRzOiBHYW1lQ2VsbENvb3JkcyxcbiAgYXZpYWxhYmxlQ3ViZXNDb2xvcnM6IEFycmF5PEdhbWVDdWJlQ29sb3I+LFxuICB0eXBlPzogR2FtZUN1YmVUeXBlLFxuKSA9PiB7XG4gIGNvbnN0IGdldFJhbmRvbUNvbG9yID0gKGNvbG9yczogQXJyYXk8R2FtZUN1YmVDb2xvcj4pOiBHYW1lQ3ViZUNvbG9yID0+IHtcbiAgICByZXR1cm4gY29sb3JzW2dldFJhbmRvbUludCgwLCBjb2xvcnMubGVuZ3RoKV07XG4gIH07XG5cbiAgcmV0dXJuIGNyZWF0ZUN1YmUoe1xuICAgIGNvb3JkcyxcbiAgICBjb2xvcjogZ2V0UmFuZG9tQ29sb3IoYXZpYWxhYmxlQ3ViZXNDb2xvcnMpLFxuICAgIHR5cGUsXG4gIH0pO1xufTtcbiIsImV4cG9ydCB7IGNyZWF0ZVJhbmRvbUN1YmUgfSBmcm9tIFwiLi9jcmVhdGVSYW5kb21DdWJlXCI7XG4iLCJpbXBvcnQgeyBHYW1lQ29uZmlnLCBHYW1lQm9hcmQsIEdhbWVGYWxsZWRDdWJlcyB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgY29weUJvYXJkLCBnZXRDZWxsQnlDb29yZHMsIHNldENlbGxCeUNvb3JkcyB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuaW1wb3J0IHsgY3JlYXRlQ3ViZSB9IGZyb20gXCIuLi9jcmVhdGVDdWJlXCI7XG5cbmV4cG9ydCBjb25zdCBmYWxsQ3ViZXMgPSAoY29uZmlnOiBHYW1lQ29uZmlnLCBib2FyZDogR2FtZUJvYXJkKSA9PiB7XG4gIGNvbnN0IGZhbGxlZEN1YmVzOiBHYW1lRmFsbGVkQ3ViZXMgPSBbXTtcbiAgY29uc3QgeyBib2FyZENvbHMsIGJvYXJkUm93cyB9ID0gY29uZmlnO1xuICBjb25zdCBib2FyZENvcHkgPSBjb3B5Qm9hcmQoYm9hcmQpO1xuICBjb25zdCBib2FyZFdpdGhvdXRNb3ZlZCA9IGNvcHlCb2FyZChib2FyZCk7XG5cbiAgZm9yIChsZXQgeSA9IGJvYXJkUm93cyAtIDE7IHkgPj0gMDsgeS0tKSB7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPD0gYm9hcmRDb2xzIC0gMTsgeCsrKSB7XG4gICAgICBjb25zdCBtYXliZUN1YmUgPSBnZXRDZWxsQnlDb29yZHMoYm9hcmRDb3B5LCB7IHgsIHkgfSk7XG4gICAgICBpZiAoIW1heWJlQ3ViZSkge1xuICAgICAgICBsZXQgZmFsbFkgPSB5O1xuICAgICAgICBmb3IgKGxldCBjaGVja1kgPSB5OyBjaGVja1kgPj0gMDsgY2hlY2tZLS0pIHtcbiAgICAgICAgICBjb25zdCB0ZW1wID0gZ2V0Q2VsbEJ5Q29vcmRzKGJvYXJkQ29weSwge1xuICAgICAgICAgICAgeCxcbiAgICAgICAgICAgIHk6IGNoZWNrWSxcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmICh0ZW1wKSB7XG4gICAgICAgICAgICBjb25zdCBmcm9tID0geyB4LCB5OiBjaGVja1kgfTtcbiAgICAgICAgICAgIGNvbnN0IHRvID0geyB4LCB5OiBmYWxsWSB9O1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlZEN1YmUgPSBjcmVhdGVDdWJlKHtcbiAgICAgICAgICAgICAgaWQ6IHRlbXAuaWQsXG4gICAgICAgICAgICAgIGNvb3JkczogdG8sXG4gICAgICAgICAgICAgIGNvbG9yOiB0ZW1wLmNvbG9yLFxuICAgICAgICAgICAgICB0eXBlOiB0ZW1wLnR5cGUsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc2V0Q2VsbEJ5Q29vcmRzKGJvYXJkQ29weSwgdG8sIHVwZGF0ZWRDdWJlKTtcbiAgICAgICAgICAgIHNldENlbGxCeUNvb3Jkcyhib2FyZENvcHksIGZyb20sIG51bGwpO1xuXG4gICAgICAgICAgICBzZXRDZWxsQnlDb29yZHMoYm9hcmRXaXRob3V0TW92ZWQsIHRvLCBudWxsKTtcbiAgICAgICAgICAgIHNldENlbGxCeUNvb3Jkcyhib2FyZFdpdGhvdXRNb3ZlZCwgZnJvbSwgbnVsbCk7XG5cbiAgICAgICAgICAgIGZhbGxlZEN1YmVzLnB1c2goe1xuICAgICAgICAgICAgICBmcm9tLFxuICAgICAgICAgICAgICB0byxcbiAgICAgICAgICAgICAgY3ViZTogdXBkYXRlZEN1YmUsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZmFsbFktLTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGJvYXJkOiBib2FyZENvcHksXG4gICAgZmFsbGVkQ3ViZXMsXG4gICAgYm9hcmRXaXRob3V0TW92ZWQsXG4gIH07XG59O1xuIiwiZXhwb3J0IHsgZmFsbEN1YmVzIH0gZnJvbSBcIi4vZmFsbEN1YmVzXCI7XG4iLCJpbXBvcnQgeyBjb3B5Qm9hcmQsIHNldENlbGxCeUNvb3JkcyB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuaW1wb3J0IHtcbiAgR2FtZUN1YmVzLFxuICBHYW1lQ2VsbENvb3JkcyxcbiAgR2FtZUN1YmVDb2xvcixcbiAgR2FtZUZhbGxlZEN1YmVzLFxuICBHYW1lQm9hcmQsXG59IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgY3JlYXRlUmFuZG9tQ3ViZSB9IGZyb20gXCIuLi9jcmVhdGVSYW5kb21DdWJlXCI7XG5cbmV4cG9ydCBjb25zdCBmaWxsRW1wdHlDZWxscyA9IChcbiAgYm9hcmRXaXRoRW1wdHk6IEdhbWVCb2FyZCxcbiAgYXZpYWxhYmxlQ3ViZXNDb2xvcnM6IEFycmF5PEdhbWVDdWJlQ29sb3I+LFxuKSA9PiB7XG4gIGNvbnN0IG5ld0N1YmVzOiBHYW1lQ3ViZXMgPSBbXTtcbiAgY29uc3QgYm9hcmRDb3B5ID0gY29weUJvYXJkKGJvYXJkV2l0aEVtcHR5KTtcblxuICBjb25zdCBlbXB0eUNlbGxzID0gYm9hcmRXaXRoRW1wdHkucmVkdWNlKChhY2MsIHJvdywgeSkgPT4ge1xuICAgIHJvdy5mb3JFYWNoKChjZWxsLCB4KSA9PiB7XG4gICAgICBpZiAoIWNlbGwpIHtcbiAgICAgICAgYWNjLnB1c2goeyB4LCB5IH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwgW10gYXMgQXJyYXk8R2FtZUNlbGxDb29yZHM+KTtcblxuICBmb3IgKGNvbnN0IGNvb3JkcyBvZiBlbXB0eUNlbGxzKSB7XG4gICAgY29uc3QgbmV3Q3ViZSA9IGNyZWF0ZVJhbmRvbUN1YmUoY29vcmRzLCBhdmlhbGFibGVDdWJlc0NvbG9ycyk7XG4gICAgc2V0Q2VsbEJ5Q29vcmRzKGJvYXJkQ29weSwgY29vcmRzLCBuZXdDdWJlKTtcbiAgICBuZXdDdWJlcy5wdXNoKG5ld0N1YmUpO1xuICB9XG5cbiAgY29uc3QgZ2V0RW1wdHlDb3VudEluQ29sdW1uID0gKHg6IG51bWJlcikgPT4ge1xuICAgIHJldHVybiBib2FyZFdpdGhFbXB0eS5yZWR1Y2UoKGFjYywgcm93KSA9PiB7XG4gICAgICBpZiAoIXJvd1t4XSkge1xuICAgICAgICBhY2MrKztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCAwKTtcbiAgfTtcblxuICBjb25zdCBmYWxsZWROZXdDdWJlcyA9IG5ld0N1YmVzLnJlZHVjZSgoYWNjLCBjdWJlKSA9PiB7XG4gICAgY29uc3QgeyBjb29yZHMgfSA9IGN1YmU7XG5cbiAgICBjb25zdCBmYWxsZWRDdWJlID0ge1xuICAgICAgZnJvbToge1xuICAgICAgICB4OiBjb29yZHMueCxcbiAgICAgICAgeTogY29vcmRzLnkgLSBnZXRFbXB0eUNvdW50SW5Db2x1bW4oY29vcmRzLngpLFxuICAgICAgfSxcbiAgICAgIHRvOiBjb29yZHMsXG4gICAgICBjdWJlLFxuICAgIH07XG5cbiAgICBhY2MucHVzaChmYWxsZWRDdWJlKTtcblxuICAgIHJldHVybiBhY2M7XG4gIH0sIFtdIGFzIEdhbWVGYWxsZWRDdWJlcyk7XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdDdWJlcyxcbiAgICBmYWxsZWROZXdDdWJlcyxcbiAgICBib2FyZDogYm9hcmRDb3B5LFxuICB9O1xufTtcbiIsImV4cG9ydCB7IGZpbGxFbXB0eUNlbGxzIH0gZnJvbSBcIi4vZmlsbEVtcHR5Q2VsbHNcIjtcbiIsImltcG9ydCB7IEdhbWVCb2FyZEZpbGxlZCwgR2FtZUNvbmZpZywgR2FtZUN1YmVDb2xvciB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgY3JlYXRlUmFuZG9tQ3ViZSB9IGZyb20gXCIuLi9jcmVhdGVSYW5kb21DdWJlXCI7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUJvYXJkID0gKFxuICBjb25maWc6IEdhbWVDb25maWcsXG4gIGF2aWFsYWJsZUN1YmVzQ29sb3JzOiBBcnJheTxHYW1lQ3ViZUNvbG9yPixcbik6IEdhbWVCb2FyZEZpbGxlZCA9PiB7XG4gIGNvbnN0IHsgYm9hcmRSb3dzLCBib2FyZENvbHMgfSA9IGNvbmZpZztcbiAgY29uc3QgYm9hcmQ6IEdhbWVCb2FyZEZpbGxlZCA9IFtdO1xuXG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IGJvYXJkUm93czsgcm93KyspIHtcbiAgICBib2FyZFtyb3ddID0gW107XG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgYm9hcmRDb2xzOyBjb2wrKykge1xuICAgICAgY29uc3QgY29vcmRzID0geyB4OiBjb2wsIHk6IHJvdyB9O1xuICAgICAgY29uc3QgY3ViZSA9IGNyZWF0ZVJhbmRvbUN1YmUoY29vcmRzLCBhdmlhbGFibGVDdWJlc0NvbG9ycyk7XG4gICAgICBib2FyZFtyb3ddW2NvbF0gPSBjdWJlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBib2FyZDtcbn07XG4iLCJleHBvcnQgeyBnZW5lcmF0ZUJvYXJkIH0gZnJvbSBcIi4vZ2VuZXJhdGVCb2FyZFwiO1xuIiwiaW1wb3J0IHsgZ2V0Q2VsbEJ5Q29vcmRzIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5pbXBvcnQgeyBHYW1lQ3ViZXMsIEdhbWVDZWxsQ29vcmRzLCBHYW1lQm9hcmRGaWxsZWQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGdldExpbmtlZEN1YmVzIH0gZnJvbSBcIi4uL2dldExpbmtlZEN1YmVzXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRDdWJlc0NoYWluID0gKFxuICBib2FyZDogR2FtZUJvYXJkRmlsbGVkLFxuICBjb29yZHM6IEdhbWVDZWxsQ29vcmRzLFxuKTogR2FtZUN1YmVzID0+IHtcbiAgY29uc3QgY3ViZSA9IGdldENlbGxCeUNvb3Jkcyhib2FyZCwgY29vcmRzKTtcblxuICBjb25zdCBsaW5rZWRDdWJlcyA9IGdldExpbmtlZEN1YmVzKFxuICAgIGJvYXJkLFxuICAgIHsgeDogY29vcmRzLngsIHk6IGNvb3Jkcy55IH0sXG4gICAgY3ViZS5jb2xvcixcbiAgICBbY3ViZS5pZF0sXG4gICk7XG5cbiAgcmV0dXJuIFsuLi5saW5rZWRDdWJlcywgY3ViZV07XG59O1xuIiwiZXhwb3J0IHsgZ2V0Q3ViZXNDaGFpbiB9IGZyb20gXCIuL2dldEN1YmVzQ2hhaW5cIjtcbiIsImltcG9ydCB7XG4gIEdhbWVCb2FyZEZpbGxlZCxcbiAgR2FtZUN1YmVJZCxcbiAgR2FtZUNlbGxDb29yZHMsXG4gIEdhbWVDdWJlQ29sb3IsXG4gIEdhbWVDdWJlcyxcbn0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBnZXRDZWxsQnlDb29yZHMgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcblxuZXhwb3J0IGNvbnN0IGdldExpbmtlZEN1YmVzID0gKFxuICBib2FyZDogR2FtZUJvYXJkRmlsbGVkLFxuICBjb29yZHM6IEdhbWVDZWxsQ29vcmRzLFxuICBjdWJlQ29sb3I6IEdhbWVDdWJlQ29sb3IsXG4gIGNoZWNrZWRDdWJlczogQXJyYXk8R2FtZUN1YmVJZD4sXG4pID0+IHtcbiAgY29uc3QgZ2V0TGlua2VkQ3ViZXMgPSAoXG4gICAgYm9hcmQ6IEdhbWVCb2FyZEZpbGxlZCxcbiAgICBjb29yZHM6IEdhbWVDZWxsQ29vcmRzLFxuICAgIGN1YmVDb2xvcjogR2FtZUN1YmVDb2xvcixcbiAgICBjaGVja2VkQ3ViZXM6IEFycmF5PEdhbWVDdWJlSWQ+LFxuICApID0+IHtcbiAgICBjb25zdCBsaW5rZWRDdWJlczogR2FtZUN1YmVzID0gW107XG5cbiAgICBjb25zdCBnZXRMaW5rZWRDdWJlID0gKGNvb3JkczogR2FtZUNlbGxDb29yZHMpID0+IHtcbiAgICAgIGNvbnN0IGN1YmUgPSBnZXRDZWxsQnlDb29yZHMoYm9hcmQsIGNvb3Jkcyk7XG5cbiAgICAgIGlmIChjdWJlICYmIGN1YmUuY29sb3IgPT09IGN1YmVDb2xvcikge1xuICAgICAgICBpZiAoY2hlY2tlZEN1YmVzLmluY2x1ZGVzKGN1YmUuaWQpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hlY2tlZEN1YmVzLnB1c2goY3ViZS5pZCk7XG5cbiAgICAgICAgbGlua2VkQ3ViZXMucHVzaChcbiAgICAgICAgICBjdWJlLFxuICAgICAgICAgIC4uLmdldExpbmtlZEN1YmVzKGJvYXJkLCBjb29yZHMsIGN1YmVDb2xvciwgY2hlY2tlZEN1YmVzKSxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZ2V0TGlua2VkQ3ViZSh7IHg6IGNvb3Jkcy54LCB5OiBjb29yZHMueSArIDEgfSk7XG4gICAgZ2V0TGlua2VkQ3ViZSh7IHg6IGNvb3Jkcy54IC0gMSwgeTogY29vcmRzLnkgfSk7XG4gICAgZ2V0TGlua2VkQ3ViZSh7IHg6IGNvb3Jkcy54ICsgMSwgeTogY29vcmRzLnkgfSk7XG4gICAgZ2V0TGlua2VkQ3ViZSh7IHg6IGNvb3Jkcy54LCB5OiBjb29yZHMueSAtIDEgfSk7XG5cbiAgICByZXR1cm4gbGlua2VkQ3ViZXM7XG4gIH07XG5cbiAgcmV0dXJuIGdldExpbmtlZEN1YmVzKGJvYXJkLCBjb29yZHMsIGN1YmVDb2xvciwgY2hlY2tlZEN1YmVzKTtcbn07XG4iLCJleHBvcnQgeyBnZXRMaW5rZWRDdWJlcyB9IGZyb20gXCIuL2dldExpbmtlZEN1YmVzXCI7XG4iLCJpbXBvcnQgeyBHYW1lQnVybmVkQ3ViZXMsIEdhbWVTY29yZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0VXBkYXRlU2NvcmUgPSAoXG4gIGJ1cm5lZEN1YmVzOiBHYW1lQnVybmVkQ3ViZXMsXG4gIHNjb3JlOiBHYW1lU2NvcmUsXG4pID0+IHtcbiAgcmV0dXJuIGJ1cm5lZEN1YmVzLmxlbmd0aCArIHNjb3JlO1xufTtcbiIsImV4cG9ydCB7IGdldFVwZGF0ZVNjb3JlIH0gZnJvbSBcIi4vZ2V0VXBkYXRlU2NvcmVcIjtcbiIsImV4cG9ydCB7IGNyZWF0ZUN1YmUgfSBmcm9tIFwiLi9jcmVhdGVDdWJlXCI7XG5leHBvcnQgeyBjcmVhdGVSYW5kb21DdWJlIH0gZnJvbSBcIi4vY3JlYXRlUmFuZG9tQ3ViZVwiO1xuZXhwb3J0IHsgdHJ5Q3JlYXRlU3VwZXJDdWJlIH0gZnJvbSBcIi4vdHJ5Q3JlYXRlU3VwZXJDdWJlXCI7XG5leHBvcnQgeyBnZW5lcmF0ZUJvYXJkIH0gZnJvbSBcIi4vZ2VuZXJhdGVCb2FyZFwiO1xuZXhwb3J0IHsgZ2V0TGlua2VkQ3ViZXMgfSBmcm9tIFwiLi9nZXRMaW5rZWRDdWJlc1wiO1xuZXhwb3J0IHsgZ2V0Q3ViZXNDaGFpbiB9IGZyb20gXCIuL2dldEN1YmVzQ2hhaW5cIjtcbmV4cG9ydCB7IGJ1cm5DdWJlcyB9IGZyb20gXCIuL2J1cm5DdWJlc1wiO1xuZXhwb3J0IHsgZmFsbEN1YmVzIH0gZnJvbSBcIi4vZmFsbEN1YmVzXCI7XG5leHBvcnQgeyBmaWxsRW1wdHlDZWxscyB9IGZyb20gXCIuL2ZpbGxFbXB0eUNlbGxzXCI7XG5leHBvcnQgeyBjaGVja0hhc01vdmVzIH0gZnJvbSBcIi4vY2hlY2tIYXNNb3Zlc1wiO1xuZXhwb3J0IHsgbWl4Q3ViZXNJZk5lZWQgfSBmcm9tIFwiLi9taXhDdWJlc0lmTmVlZFwiO1xuZXhwb3J0IHsgY3JlYXRlQ29uZmlnIH0gZnJvbSBcIi4vY3JlYXRlQ29uZmlnXCI7XG5leHBvcnQgeyB1cGRhdGVBdmlhbGFibGVDdWJlc0NvbG9ycyB9IGZyb20gXCIuL3VwZGF0ZUF2aWFsYWJsZUN1YmVzQ29sb3JzXCI7XG5leHBvcnQgeyB0cnlCdXJuQ3ViZXMgfSBmcm9tIFwiLi90cnlCdXJuQ3VkZXNcIjtcbmV4cG9ydCB7IGdldFVwZGF0ZVNjb3JlIH0gZnJvbSBcIi4vZ2V0VXBkYXRlU2NvcmVcIjtcbmV4cG9ydCB7IGNoZWNrSXNXaW4gfSBmcm9tIFwiLi9jaGVja0lzV2luXCI7XG5leHBvcnQgeyB1cGRhdGVHYW1lU3RhdHVzIH0gZnJvbSBcIi4vdXBkYXRlR2FtZVN0YXR1c1wiO1xuZXhwb3J0IHsgbG9nUHJpdHR5Qm9hcmQgfSBmcm9tIFwiLi9sb2dQcml0dHlCb2FyZFwiO1xuZXhwb3J0IHsgdXBkYXRlUmVtYWluaW5nTW92ZXMgfSBmcm9tIFwiLi91cGRhdGVSZW1haW5pbmdNb3Zlc1wiO1xuIiwiZXhwb3J0IHsgbG9nUHJpdHR5Qm9hcmQgfSBmcm9tIFwiLi9sb2dQcml0dHlCb2FyZFwiO1xuIiwiaW1wb3J0IHsgR2FtZUJvYXJkRmlsbGVkIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBsb2dQcml0dHlCb2FyZCA9IChib2FyZDogR2FtZUJvYXJkRmlsbGVkKSA9PiB7XG4gIGNvbnN0IGNlbGxTdHJMZW4gPSA2O1xuICBjb25zb2xlLmxvZyhcbiAgICBib2FyZC5tYXAoKHJvdykgPT5cbiAgICAgIHJvd1xuICAgICAgICAubWFwKChjZWxsKSA9PiB7XG4gICAgICAgICAgaWYgKCFjZWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJfXCIucmVwZWF0KGNlbGxTdHJMZW4pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGNlbGxTdHIgPSBgJHtjZWxsLmNvbG9yLnNsaWNlKDAsIDEpfV8ke2NlbGwuaWR9YDtcblxuICAgICAgICAgIHJldHVybiBjZWxsU3RyLnBhZEVuZChjZWxsU3RyTGVuLCBcIiBcIik7XG4gICAgICAgIH0pXG4gICAgICAgIC5qb2luKFwiIFwiKSxcbiAgICApLFxuICApO1xufTtcbiIsImV4cG9ydCB7IG1peEN1YmVzSWZOZWVkIH0gZnJvbSBcIi4vbWl4Q3ViZXNJZk5lZWRcIjtcbiIsImltcG9ydCB7IGdldFJhbmRvbUludCwgZ2V0Q2VsbEJ5Q29vcmRzLCBjb3B5Qm9hcmQgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7XG4gIEdhbWVCb2FyZCxcbiAgR2FtZUJvYXJkRmlsbGVkLFxuICBHYW1lQ29uZmlnLFxuICBHYW1lTWl4ZWRCb2FyZCxcbn0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBjaGVja0hhc01vdmVzIH0gZnJvbSBcIi4uL2NoZWNrSGFzTW92ZXNcIjtcbmltcG9ydCB7IGNyZWF0ZUN1YmUgfSBmcm9tIFwiLi4vY3JlYXRlQ3ViZVwiO1xuXG5leHBvcnQgY29uc3QgbWl4Q3ViZXNJZk5lZWQgPSAoXG4gIGNvbmZpZzogR2FtZUNvbmZpZyxcbiAgZmlsbGVkQm9hcmQ6IEdhbWVCb2FyZEZpbGxlZCxcbiAgbWl4Q291bnQ6IG51bWJlcixcbikgPT4ge1xuICBjb25zdCB7IGJvYXJkQ29scywgYm9hcmRSb3dzIH0gPSBjb25maWc7XG5cbiAgY29uc3QgaGFzTW92ZXMgPSBjaGVja0hhc01vdmVzKGNvbmZpZywgZmlsbGVkQm9hcmQpO1xuICBpZiAoaGFzTW92ZXMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbWl4ZWRCb2FyZHM6IFtdLFxuICAgICAgdXBkYXRlZEJvYXJkOiBmaWxsZWRCb2FyZCxcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgbWl4ZWRCb2FyZHM6IEFycmF5PEdhbWVNaXhlZEJvYXJkPiA9IFtdO1xuICBsZXQgcHJldkJvYXJkID0gZmlsbGVkQm9hcmQ7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtaXhDb3VudDsgaSsrKSB7XG4gICAgY29uc3QgbmV3TWl4ZWRCb2FyZDogR2FtZU1peGVkQm9hcmQgPSBbXTtcbiAgICBjb25zdCBuZXdCb2FyZDogR2FtZUJvYXJkID0gQXJyYXkuZnJvbShcbiAgICAgIHtcbiAgICAgICAgbGVuZ3RoOiBib2FyZFJvd3MsXG4gICAgICB9LFxuICAgICAgKCkgPT4gQXJyYXkuZnJvbSh7IGxlbmd0aDogYm9hcmRDb2xzIH0pLFxuICAgICk7XG5cbiAgICBjb25zdCBhdmlhbGFibGVDb29yZHMgPSBBcnJheS5mcm9tKFxuICAgICAge1xuICAgICAgICBsZW5ndGg6IGJvYXJkUm93cyAqIGJvYXJkQ29scyxcbiAgICAgIH0sXG4gICAgICAoXywgaW5kZXgpID0+ICh7XG4gICAgICAgIHg6IGluZGV4ICUgYm9hcmRDb2xzLFxuICAgICAgICB5OiBNYXRoLmZsb29yKGluZGV4IC8gYm9hcmRDb2xzKSxcbiAgICAgIH0pLFxuICAgICk7XG5cbiAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBib2FyZFJvd3M7IHJvdysrKSB7XG4gICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBib2FyZENvbHM7IGNvbCsrKSB7XG4gICAgICAgIGNvbnN0IHJhbmRvbUlkeCA9IGdldFJhbmRvbUludCgwLCBhdmlhbGFibGVDb29yZHMubGVuZ3RoIC0gMSk7XG4gICAgICAgIGNvbnN0IHJhbmRvbUNvb3JkcyA9IGF2aWFsYWJsZUNvb3Jkc1tyYW5kb21JZHhdO1xuICAgICAgICBhdmlhbGFibGVDb29yZHMuc3BsaWNlKHJhbmRvbUlkeCwgMSk7XG5cbiAgICAgICAgY29uc3QgZnJvbUNvb3JkcyA9IHtcbiAgICAgICAgICB4OiBjb2wsXG4gICAgICAgICAgeTogcm93LFxuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IGN1YmUgPSBnZXRDZWxsQnlDb29yZHMocHJldkJvYXJkLCBmcm9tQ29vcmRzKTtcbiAgICAgICAgY29uc3QgdG9Db29yZHMgPSByYW5kb21Db29yZHM7XG5cbiAgICAgICAgY29uc3QgbmV3Q3ViZSA9IGNyZWF0ZUN1YmUoe1xuICAgICAgICAgIGlkOiBjdWJlLmlkLFxuICAgICAgICAgIGNvb3JkczogdG9Db29yZHMsXG4gICAgICAgICAgY29sb3I6IGN1YmUuY29sb3IsXG4gICAgICAgICAgdHlwZTogY3ViZS50eXBlLFxuICAgICAgICB9KTtcblxuICAgICAgICBuZXdCb2FyZFt0b0Nvb3Jkcy55XVt0b0Nvb3Jkcy54XSA9IG5ld0N1YmU7XG4gICAgICAgIG5ld01peGVkQm9hcmQucHVzaCh7XG4gICAgICAgICAgY3ViZTogbmV3Q3ViZSxcbiAgICAgICAgICBmcm9tOiBmcm9tQ29vcmRzLFxuICAgICAgICAgIHRvOiB0b0Nvb3JkcyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWl4ZWRCb2FyZHMucHVzaChuZXdNaXhlZEJvYXJkKTtcblxuICAgIGNvbnN0IGhhc01vdmVzID0gY2hlY2tIYXNNb3Zlcyhjb25maWcsIG5ld0JvYXJkKTtcblxuICAgIGlmIChoYXNNb3ZlcyB8fCBpID09PSBtaXhDb3VudCAtIDEpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1peGVkQm9hcmRzLFxuICAgICAgICB1cGRhdGVkQm9hcmQ6IGNvcHlCb2FyZChuZXdCb2FyZCksXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBwcmV2Qm9hcmQgPSBjb3B5Qm9hcmQobmV3Qm9hcmQpO1xuICAgIH1cbiAgfVxufTtcbiIsImV4cG9ydCB7IHRyeUJ1cm5DdWJlcyB9IGZyb20gXCIuL3RyeUJ1cm5DdWRlc1wiO1xuIiwiaW1wb3J0IHsgR2FtZUJvYXJkRmlsbGVkLCBHYW1lQ29uZmlnLCBHYW1lQ3ViZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgZ2V0Q3ViZXNDaGFpbiB9IGZyb20gXCIuLi9nZXRDdWJlc0NoYWluXCI7XG5pbXBvcnQgeyBidXJuQ3ViZXMgfSBmcm9tIFwiLi4vYnVybkN1YmVzXCI7XG5pbXBvcnQgeyBHQU1FX0NVQkVTX1RZUEUgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBjb25zdCB0cnlCdXJuQ3ViZXMgPSAoXG4gIGNvbmZpZzogR2FtZUNvbmZpZyxcbiAgYm9hcmQ6IEdhbWVCb2FyZEZpbGxlZCxcbiAgY2xpY2tlZEN1YmU6IEdhbWVDdWJlLFxuKSA9PiB7XG4gIGNvbnN0IHsgbWluQ2hhaW5MZW5ndGggfSA9IGNvbmZpZztcblxuICBjb25zdCBjdWJlc0NoYWluID0gZ2V0Q3ViZXNDaGFpbihib2FyZCwgY2xpY2tlZEN1YmUuY29vcmRzKTtcblxuICBjb25zdCBuZWVkQnVybiA9XG4gICAgY3ViZXNDaGFpbi5sZW5ndGggPj0gbWluQ2hhaW5MZW5ndGggfHxcbiAgICBjbGlja2VkQ3ViZS50eXBlICE9PSBHQU1FX0NVQkVTX1RZUEUuQkFTRTtcblxuICBpZiAoIW5lZWRCdXJuKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gYnVybkN1YmVzKGNvbmZpZywgYm9hcmQsIGN1YmVzQ2hhaW4pO1xufTtcbiIsImV4cG9ydCB7IHRyeUNyZWF0ZVN1cGVyQ3ViZSB9IGZyb20gXCIuL3RyeUNyZWF0ZVN1cGVyQ3ViZVwiO1xuIiwiaW1wb3J0IHsgR0FNRV9DVUJFU19UWVBFIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHtcbiAgR2FtZUJvYXJkLFxuICBHYW1lQnVybmVkQ3ViZXMsXG4gIEdhbWVDZWxsQ29vcmRzLFxuICBHYW1lQ29uZmlnLFxufSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGNvcHlCb2FyZCwgZ2V0UmFuZG9tSW50LCBzZXRDZWxsQnlDb29yZHMgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7IGNyZWF0ZUN1YmUgfSBmcm9tIFwiLi4vY3JlYXRlQ3ViZVwiO1xuXG5jb25zdCBnZXRSYW5kb21TdXBlckN1YmVUeXBlID0gKCkgPT4ge1xuICBjb25zdCBzdXBlcnMgPSBPYmplY3QudmFsdWVzKEdBTUVfQ1VCRVNfVFlQRSkuZmlsdGVyKFxuICAgICh0eXBlKSA9PiB0eXBlICE9PSBHQU1FX0NVQkVTX1RZUEUuQkFTRSxcbiAgKTtcblxuICByZXR1cm4gc3VwZXJzW2dldFJhbmRvbUludCgwLCBzdXBlcnMubGVuZ3RoIC0gMSldO1xufTtcblxuZXhwb3J0IGNvbnN0IHRyeUNyZWF0ZVN1cGVyQ3ViZSA9IChcbiAgY29uZmlnOiBHYW1lQ29uZmlnLFxuICBjbGlja0Nvb3JkczogR2FtZUNlbGxDb29yZHMsXG4gIGJ1cm5lZEN1YmVzOiBHYW1lQnVybmVkQ3ViZXMsXG4gIGJvYXJkV2l0aEJ1cm5lZDogR2FtZUJvYXJkLFxuICBlbmFibGU6IGJvb2xlYW4sXG4pID0+IHtcbiAgY29uc3QgeyBjdWJlc1RvU3VwZXIgfSA9IGNvbmZpZztcblxuICBpZiAoYnVybmVkQ3ViZXMubGVuZ3RoIDwgY3ViZXNUb1N1cGVyIHx8ICFlbmFibGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYm9hcmQ6IGJvYXJkV2l0aEJ1cm5lZCxcbiAgICAgIHN1cGVyQ3ViZXM6IFtdLFxuICAgIH07XG4gIH1cblxuICBjb25zdCBidXJuZWRUb1N1cGVyQ3ViZSA9IGJ1cm5lZEN1YmVzLmZpbmQoXG4gICAgKGN1YmUpID0+XG4gICAgICBjdWJlLmNvb3Jkcy54ID09PSBjbGlja0Nvb3Jkcy54ICYmIGN1YmUuY29vcmRzLnkgPT09IGNsaWNrQ29vcmRzLnksXG4gICk7XG5cbiAgY29uc3Qgc3VwZXJDdWJlID0gY3JlYXRlQ3ViZSh7XG4gICAgY29vcmRzOiBidXJuZWRUb1N1cGVyQ3ViZS5jb29yZHMsXG4gICAgY29sb3I6IGJ1cm5lZFRvU3VwZXJDdWJlLmNvbG9yLFxuICAgIHR5cGU6IGdldFJhbmRvbVN1cGVyQ3ViZVR5cGUoKSxcbiAgfSk7XG5cbiAgY29uc3QgYm9hcmRCdXJuZWRXaXRoU3VwZXIgPSBjb3B5Qm9hcmQoYm9hcmRXaXRoQnVybmVkKTtcbiAgc2V0Q2VsbEJ5Q29vcmRzKGJvYXJkQnVybmVkV2l0aFN1cGVyLCBzdXBlckN1YmUuY29vcmRzLCBzdXBlckN1YmUpO1xuXG4gIHJldHVybiB7XG4gICAgYm9hcmQ6IGJvYXJkQnVybmVkV2l0aFN1cGVyLFxuICAgIHN1cGVyQ3ViZXM6IFtzdXBlckN1YmVdLFxuICB9O1xufTtcbiIsImV4cG9ydCB7IHVwZGF0ZUF2aWFsYWJsZUN1YmVzQ29sb3JzIH0gZnJvbSBcIi4vdXBkYXRlQXZpYWxhYmxlQ3ViZXNDb2xvcnNcIjtcbiIsImltcG9ydCB7IEdhbWVDb25maWcgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IEdBTUVfQ1VCRVMgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IGF2aWFsYWJsZUN1YmVzID0gW1xuICBHQU1FX0NVQkVTLlJFRCxcbiAgR0FNRV9DVUJFUy5HUkVFTixcbiAgR0FNRV9DVUJFUy5CTFVFLFxuICBHQU1FX0NVQkVTLllFTExPVyxcbiAgR0FNRV9DVUJFUy5QVVJQTEUsXG5dO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQXZpYWxhYmxlQ3ViZXNDb2xvcnMgPSAoY29uZmlnOiBHYW1lQ29uZmlnKSA9PiB7XG4gIGNvbnN0IHsgY3ViZUNvbG9yc0NvdW50IH0gPSBjb25maWc7XG5cbiAgaWYgKE9iamVjdC5rZXlzKEdBTUVfQ1VCRVMpLmxlbmd0aCA8IGN1YmVDb2xvcnNDb3VudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgY3ViZSBjb2xvcnMgY291bnRcIik7XG4gIH1cblxuICByZXR1cm4gYXZpYWxhYmxlQ3ViZXMuc2xpY2UoMCwgY3ViZUNvbG9yc0NvdW50KTtcbn07XG4iLCJleHBvcnQgeyB1cGRhdGVHYW1lU3RhdHVzIH0gZnJvbSBcIi4vdXBkYXRlR2FtZVN0YXR1c1wiO1xuIiwiaW1wb3J0IHtcbiAgR2FtZUJvYXJkRmlsbGVkLFxuICBHYW1lQ29uZmlnLFxuICBHYW1lTW92ZXMsXG4gIEdhbWVTY29yZSxcbiAgR2FtZVN0YXR1cyxcbn0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBjaGVja0lzV2luIH0gZnJvbSBcIi4uL2NoZWNrSXNXaW5cIjtcbmltcG9ydCB7IEdBTUVfU1RBVFVTRVMgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjaGVja0hhc01vdmVzIH0gZnJvbSBcIi4uL2NoZWNrSGFzTW92ZXNcIjtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUdhbWVTdGF0dXMgPSAoXG4gIGNvbmZpZzogR2FtZUNvbmZpZyxcbiAgYm9hcmQ6IEdhbWVCb2FyZEZpbGxlZCxcbiAgc2NvcmU6IEdhbWVTY29yZSxcbiAgc2NvcmVzVG9XaW46IEdhbWVTY29yZSxcbiAgc3RhdHVzOiBHYW1lU3RhdHVzLFxuICBjdXJyZW50TW92ZXM6IEdhbWVNb3Zlcyxcbik6IEdhbWVTdGF0dXMgPT4ge1xuICBpZiAoY2hlY2tJc1dpbihzY29yZSwgc2NvcmVzVG9XaW4pKSB7XG4gICAgcmV0dXJuIEdBTUVfU1RBVFVTRVMuV0lOO1xuICB9IGVsc2UgaWYgKCFjaGVja0hhc01vdmVzKGNvbmZpZywgYm9hcmQpIHx8IGN1cnJlbnRNb3ZlcyA9PT0gMCkge1xuICAgIHJldHVybiBHQU1FX1NUQVRVU0VTLk5PX01PVkVTO1xuICB9XG5cbiAgcmV0dXJuIHN0YXR1cztcbn07XG4iLCJleHBvcnQgeyB1cGRhdGVSZW1haW5pbmdNb3ZlcyB9IGZyb20gXCIuL3VwZGF0ZVJlbWFpbmluZ01vdmVzXCI7XG4iLCJpbXBvcnQgeyBHYW1lTW92ZXMgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVJlbWFpbmluZ01vdmVzID0gKGN1cnJlbnRNb3ZlczogR2FtZU1vdmVzKSA9PiB7XG4gIGNvbnN0IHVwZGF0ZWQgPSBjdXJyZW50TW92ZXMgLSAxO1xuICByZXR1cm4gdXBkYXRlZDtcbn07XG4iLCJleHBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vdWlcIjtcbiIsImltcG9ydCB7IEFwcGxpY2F0aW9uLCBBc3NldHMsIENvbnRhaW5lciB9IGZyb20gXCJwaXhpLmpzXCI7XG5pbXBvcnQgeyBBU1NFVFMsIEdBTUVfQ1VCRVMsIEdBTUVfU1RBVFVTRVMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQge1xuICBHYW1lQm9hcmQsXG4gIEdhbWVCdXJuZWRDdWJlcyxcbiAgR2FtZUNlbGxDb29yZHMsXG4gIEdhbWVDb25maWcsXG4gIEdhbWVDdWJlQ29sb3IsXG4gIEdhbWVGYWxsZWRDdWJlcyxcbiAgR2FtZU1peGVkQm9hcmQsXG4gIEdhbWVTdGF0dXMsXG4gIEdhbWVTdXBlckN1YmVzLFxufSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IENsaWNrQ2VsbCwgU3RhcnRHYW1lIH0gZnJvbSBcIi4uL3BvcnRzLmlucHV0XCI7XG5pbXBvcnQgeyBjcmVhdGVDbGlja0NlbGwsIGNyZWF0ZVN0YXJ0R2FtZSB9IGZyb20gXCIuLi9hcHBsaWNhdGlvblwiO1xuaW1wb3J0IHsgR2FtZVBhbmVsQ29udGFpbmVyIH0gZnJvbSBcIi4vZ2FtZVBhbmVsXCI7XG5pbXBvcnQgeyBHYW1lQm9hcmRDb250YWluZXIgfSBmcm9tIFwiLi9nYW1lQm9hcmRcIjtcbmltcG9ydCB7IHdhaXQgfSBmcm9tIFwiLi4vdXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIEdhbWUge1xuICBwcml2YXRlIGFwcDogQXBwbGljYXRpb247XG4gIHByaXZhdGUgbWFpbkNvbnRhaW5lcjogQ29udGFpbmVyO1xuXG4gIHByaXZhdGUgZWRpdGFibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBib2FyZDogR2FtZUJvYXJkID0gW107XG4gIHByaXZhdGUgYXZpYWxhYmxlQ3ViZXNDb2xvcnM6IEFycmF5PEdhbWVDdWJlQ29sb3I+ID0gW1xuICAgIEdBTUVfQ1VCRVMuUkVELFxuICAgIEdBTUVfQ1VCRVMuR1JFRU4sXG4gICAgR0FNRV9DVUJFUy5CTFVFLFxuICAgIEdBTUVfQ1VCRVMuWUVMTE9XLFxuICAgIEdBTUVfQ1VCRVMuUFVSUExFLFxuICBdO1xuXG4gIHByaXZhdGUgc2NvcmU6IG51bWJlcjtcbiAgcHJpdmF0ZSBzdGF0dXM6IEdhbWVTdGF0dXM7XG4gIHByaXZhdGUgY29uZmlnOiBHYW1lQ29uZmlnO1xuXG4gIHByaXZhdGUgcmVtYWluaW5nTW92ZXM6IG51bWJlcjtcblxuICBwcml2YXRlIHN0YXJ0R2FtZTogU3RhcnRHYW1lO1xuICBwcml2YXRlIGNsaWNrQ2VsbDogQ2xpY2tDZWxsO1xuXG4gIHByaXZhdGUgZ2FtZUJvYXJkQ29udGFpbmVyOiBHYW1lQm9hcmRDb250YWluZXI7XG4gIHByaXZhdGUgcGFuZWxTY29yZUNvbnRhaW5lcjogR2FtZVBhbmVsQ29udGFpbmVyO1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogR2FtZUNvbmZpZykge1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIHRoaXMucmVtYWluaW5nTW92ZXMgPSBjb25maWcubW92ZUNvdW50O1xuXG4gICAgdGhpcy5hcHAgPSBuZXcgQXBwbGljYXRpb24oKTtcblxuICAgIHRoaXMubWFpbkNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKTtcblxuICAgIHRoaXMuZ2FtZUJvYXJkQ29udGFpbmVyID0gbmV3IEdhbWVCb2FyZENvbnRhaW5lcih0aGlzLmFwcCwge1xuICAgICAgd2lkdGg6IDUwMCxcbiAgICAgIGhlaWdodDogNTAwLFxuICAgICAgcm93czogdGhpcy5jb25maWcuYm9hcmRSb3dzLFxuICAgICAgY29sczogdGhpcy5jb25maWcuYm9hcmRDb2xzLFxuICAgIH0pO1xuXG4gICAgdGhpcy5wYW5lbFNjb3JlQ29udGFpbmVyID0gbmV3IEdhbWVQYW5lbENvbnRhaW5lcih7XG4gICAgICB3aWR0aDogMzAwLFxuICAgICAgaGVpZ2h0OiAzMDAsXG4gICAgfSk7XG5cbiAgICB0aGlzLnN0YXJ0R2FtZSA9IGNyZWF0ZVN0YXJ0R2FtZSh7XG4gICAgICByZWFkQ29uZmlnOiAoKSA9PiB0aGlzLmNvbmZpZyxcbiAgICAgIHNhdmVBdmlhbGFibGVDdWJlc0NvbG9yczogKGF2aWFsYWJsZUN1YmVzQ29sb3JzKSA9PlxuICAgICAgICAodGhpcy5hdmlhbGFibGVDdWJlc0NvbG9ycyA9IGF2aWFsYWJsZUN1YmVzQ29sb3JzKSxcbiAgICAgIHNhdmVCb2FyZDogKGJvYXJkKSA9PiAodGhpcy5ib2FyZCA9IGJvYXJkKSxcbiAgICAgIHNhdmVTY29yZTogKHNjb3JlKSA9PiAodGhpcy5zY29yZSA9IHNjb3JlKSxcbiAgICAgIHNhdmVTdGF0dXM6IChzdGF0dXMpID0+ICh0aGlzLnN0YXR1cyA9IHN0YXR1cyksXG4gICAgICBzYXZlUmVtYWluaW5nTW92ZXM6IChtb3ZlcykgPT4gKHRoaXMucmVtYWluaW5nTW92ZXMgPSBtb3ZlcyksXG4gICAgfSk7XG5cbiAgICB0aGlzLmNsaWNrQ2VsbCA9IGNyZWF0ZUNsaWNrQ2VsbCh7XG4gICAgICByZWFkQ29uZmlnOiAoKSA9PiB0aGlzLmNvbmZpZyxcbiAgICAgIHJlYWRCb2FyZDogKCkgPT4gdGhpcy5ib2FyZCxcbiAgICAgIHJlYWRTY29yZTogKCkgPT4gdGhpcy5zY29yZSxcbiAgICAgIHJlYWRBdmlhbGFibGVDdWJlc0NvbG9yczogKCkgPT4gdGhpcy5hdmlhbGFibGVDdWJlc0NvbG9ycyxcbiAgICAgIHJlYWRTdGF0dXM6ICgpID0+IHRoaXMuc3RhdHVzLFxuICAgICAgcmVhZFJlbWFpbmluZ01vdmVzOiAoKSA9PiB0aGlzLnJlbWFpbmluZ01vdmVzLFxuICAgICAgc2F2ZUJvYXJkOiAoYm9hcmQpID0+ICh0aGlzLmJvYXJkID0gYm9hcmQpLFxuICAgICAgc2F2ZVNjb3JlOiAoc2NvcmUpID0+ICh0aGlzLnNjb3JlID0gc2NvcmUpLFxuICAgICAgc2F2ZVN0YXR1czogKHN0YXR1cykgPT4gKHRoaXMuc3RhdHVzID0gc3RhdHVzKSxcbiAgICAgIHNhdmVSZW1haW5pbmdNb3ZlczogKG1vdmVzKSA9PiAodGhpcy5yZW1haW5pbmdNb3ZlcyA9IG1vdmVzKSxcbiAgICAgIHJlYWRNaXhDb3VudDogKCkgPT4gdGhpcy5jb25maWcubWl4Q291bnQsXG4gICAgfSk7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB0aGlzLmVkaXRhYmxlID0gdHJ1ZTtcbiAgICB0aGlzLnN0YXJ0R2FtZSgpO1xuXG4gICAgdGhpcy5yZW5kZXJJbml0aWFsQm9hcmQoKTtcbiAgICB0aGlzLnJlbmRlckluaXRpYWxQYW5lbCgpO1xuICB9XG5cbiAgYXN5bmMgaW5pdCgpIHtcbiAgICBhd2FpdCB0aGlzLmFwcC5pbml0KHsgYmFja2dyb3VuZDogXCIjQTFBMUExXCIsIHJlc2l6ZVRvOiB3aW5kb3cgfSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmFwcC5jYW52YXMpO1xuXG4gICAgYXdhaXQgdGhpcy5sb2FkQXNzZXRzKCk7XG5cbiAgICBjb25zdCBjb250YWluZXJXaWR0aCA9IDEwMDA7XG4gICAgY29uc3QgY29udGFpbmVySGVpZ2h0ID0gNzAwO1xuXG4gICAgdGhpcy5tYWluQ29udGFpbmVyLnNldFNpemUoY29udGFpbmVyV2lkdGgsIGNvbnRhaW5lckhlaWdodCk7XG4gICAgdGhpcy5tYWluQ29udGFpbmVyLnBvc2l0aW9uLnNldChcbiAgICAgICh0aGlzLmFwcC5zY3JlZW4ud2lkdGggLSBjb250YWluZXJXaWR0aCkgLyAyLFxuICAgICAgKHRoaXMuYXBwLnNjcmVlbi5oZWlnaHQgLSBjb250YWluZXJIZWlnaHQpIC8gMixcbiAgICApO1xuXG4gICAgdGhpcy5wYW5lbFNjb3JlQ29udGFpbmVyLnBvc2l0aW9uLnNldChcbiAgICAgIGNvbnRhaW5lcldpZHRoIC0gNTAgLSAzMDAsXG4gICAgICBjb250YWluZXJIZWlnaHQgLyAyIC0gMzAwIC8gMixcbiAgICApO1xuXG4gICAgdGhpcy5nYW1lQm9hcmRDb250YWluZXIucG9zaXRpb24uc2V0KDUwLCBjb250YWluZXJIZWlnaHQgLSA1MCAtIDUwMCk7XG5cbiAgICB0aGlzLm1haW5Db250YWluZXIuYWRkQ2hpbGQodGhpcy5nYW1lQm9hcmRDb250YWluZXIpO1xuICAgIHRoaXMubWFpbkNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLnBhbmVsU2NvcmVDb250YWluZXIpO1xuICAgIHRoaXMuYXBwLnN0YWdlLmFkZENoaWxkKHRoaXMubWFpbkNvbnRhaW5lcik7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIG9uQ2VsbENsaWNrKGNvb3JkczogR2FtZUNlbGxDb29yZHMpIHtcbiAgICBpZiAoIXRoaXMuZWRpdGFibGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmNsaWNrQ2VsbChjb29yZHMpO1xuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5lZGl0YWJsZSA9IGZhbHNlO1xuXG4gICAgdGhpcy5yZW5kZXJTY29yZSgpO1xuICAgIHRoaXMucmVuZGVyTW92ZXMoKTtcblxuICAgIGF3YWl0IHRoaXMucmVuZGVyQnVybmVkQm9hcmQocmVzdWx0LmJ1cm5lZEN1YmVzLCByZXN1bHQuYm9hcmRXaXRoQnVybmVkKTtcblxuICAgIGF3YWl0IHRoaXMucmVuZGVyU3VwZXJDdWJlcyhyZXN1bHQuc3VwZXJDdWJlcyk7XG5cbiAgICBhd2FpdCB0aGlzLnJlbmRlckZhbGxlZEJvYXJkKFxuICAgICAgcmVzdWx0LmZhbGxlZEN1YmVzLmNvbmNhdChyZXN1bHQuZmFsbGVkTmV3Q3ViZXMpLFxuICAgICAgcmVzdWx0LmJvYXJkV2l0aG91dE1vdmVkLFxuICAgICk7XG5cbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gR0FNRV9TVEFUVVNFUy5XSU4pIHtcbiAgICAgIHdpbmRvdy5hbGVydChcIldJTlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocmVzdWx0Lm1peGVkQm9hcmRzLmxlbmd0aCkge1xuICAgICAgYXdhaXQgdGhpcy5yZW5kZXJNaXhlZEJvYXJkKHJlc3VsdC5taXhlZEJvYXJkcyk7XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IEdBTUVfU1RBVFVTRVMuTk9fTU9WRVMpIHtcbiAgICAgIHdpbmRvdy5hbGVydChcIk5PX01PVkVTXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlckluaXRpYWxCb2FyZCgpO1xuICAgICAgdGhpcy5lZGl0YWJsZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJJbml0aWFsQm9hcmQoKSB7XG4gICAgdGhpcy5nYW1lQm9hcmRDb250YWluZXIucmVuZGVyQ3ViZXMoXG4gICAgICB0aGlzLmJvYXJkLFxuICAgICAgdGhpcy5vbkNlbGxDbGljay5iaW5kKHRoaXMpLFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHJlbmRlckJ1cm5lZEJvYXJkKFxuICAgIGJ1cm5lZDogR2FtZUJ1cm5lZEN1YmVzLFxuICAgIGJvYXJkV2l0aG91dEJ1cm5lZDogR2FtZUJvYXJkLFxuICApIHtcbiAgICB0aGlzLmdhbWVCb2FyZENvbnRhaW5lci5yZW5kZXJDdWJlcyhib2FyZFdpdGhvdXRCdXJuZWQpO1xuICAgIGF3YWl0IHRoaXMuZ2FtZUJvYXJkQ29udGFpbmVyLnJlbmRlckJ1cm5lZChidXJuZWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyByZW5kZXJTdXBlckN1YmVzKHN1cGVyQ3ViZXM6IEdhbWVTdXBlckN1YmVzKSB7XG4gICAgYXdhaXQgdGhpcy5nYW1lQm9hcmRDb250YWluZXIucmVuZGVyU3VwZXJDdWJlcyhzdXBlckN1YmVzKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgcmVuZGVyRmFsbGVkQm9hcmQoXG4gICAgZmFsbGVkOiBHYW1lRmFsbGVkQ3ViZXMsXG4gICAgYm9hcmRXaXRob3V0TW92ZWQ6IEdhbWVCb2FyZCxcbiAgKSB7XG4gICAgdGhpcy5nYW1lQm9hcmRDb250YWluZXIucmVuZGVyQ3ViZXMoYm9hcmRXaXRob3V0TW92ZWQpO1xuICAgIGF3YWl0IHRoaXMuZ2FtZUJvYXJkQ29udGFpbmVyLnJlbmRlckZhbGxlZChmYWxsZWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyByZW5kZXJNaXhlZEJvYXJkKG1peGVkQm9hcmRzOiBBcnJheTxHYW1lTWl4ZWRCb2FyZD4pIHtcbiAgICBmb3IgYXdhaXQgKGNvbnN0IG1peGVkQm9hcmQgb2YgbWl4ZWRCb2FyZHMpIHtcbiAgICAgIGF3YWl0IHRoaXMuZ2FtZUJvYXJkQ29udGFpbmVyLnJlbmRlck1peGVkKG1peGVkQm9hcmQpO1xuXG4gICAgICBhd2FpdCB3YWl0KDIwMCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJJbml0aWFsUGFuZWwoKSB7XG4gICAgdGhpcy5wYW5lbFNjb3JlQ29udGFpbmVyLnJlbmRlcih0aGlzLnNjb3JlLCB0aGlzLnJlbWFpbmluZ01vdmVzKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyU2NvcmUoKSB7XG4gICAgdGhpcy5wYW5lbFNjb3JlQ29udGFpbmVyLnJlbmRlclNjb3JlKHRoaXMuc2NvcmUpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJNb3ZlcygpIHtcbiAgICB0aGlzLnBhbmVsU2NvcmVDb250YWluZXIucmVuZGVyTW92ZXModGhpcy5yZW1haW5pbmdNb3Zlcyk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGxvYWRBc3NldHMoKSB7XG4gICAgQXNzZXRzLmFkZChbXG4gICAgICB7XG4gICAgICAgIGFsaWFzOiBBU1NFVFMuQk9BUkQuQUxJQVMsXG4gICAgICAgIHNyYzogQVNTRVRTLkJPQVJELlNSQyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGFsaWFzOiBBU1NFVFMuQkxVRV9DVUJFLkFMSUFTLFxuICAgICAgICBzcmM6IEFTU0VUUy5CTFVFX0NVQkUuU1JDLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYWxpYXM6IEFTU0VUUy5SRURfQ1VCRS5BTElBUyxcbiAgICAgICAgc3JjOiBBU1NFVFMuUkVEX0NVQkUuU1JDLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYWxpYXM6IEFTU0VUUy5HUkVFTl9DVUJFLkFMSUFTLFxuICAgICAgICBzcmM6IEFTU0VUUy5HUkVFTl9DVUJFLlNSQyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGFsaWFzOiBBU1NFVFMuWUVMTE9XX0NVQkUuQUxJQVMsXG4gICAgICAgIHNyYzogQVNTRVRTLllFTExPV19DVUJFLlNSQyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGFsaWFzOiBBU1NFVFMuUFVSUExFX0NVQkUuQUxJQVMsXG4gICAgICAgIHNyYzogQVNTRVRTLlBVUlBMRV9DVUJFLlNSQyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGFsaWFzOiBBU1NFVFMuUEFORUxfU0NPUkUuQUxJQVMsXG4gICAgICAgIHNyYzogQVNTRVRTLlBBTkVMX1NDT1JFLlNSQyxcbiAgICAgIH0sXG4gICAgXSk7XG5cbiAgICBhd2FpdCBBc3NldHMubG9hZChbXG4gICAgICBBU1NFVFMuQk9BUkQuQUxJQVMsXG4gICAgICBBU1NFVFMuUEFORUxfU0NPUkUuQUxJQVMsXG4gICAgICBBU1NFVFMuQkxVRV9DVUJFLkFMSUFTLFxuICAgICAgQVNTRVRTLlJFRF9DVUJFLkFMSUFTLFxuICAgICAgQVNTRVRTLkdSRUVOX0NVQkUuQUxJQVMsXG4gICAgICBBU1NFVFMuWUVMTE9XX0NVQkUuQUxJQVMsXG4gICAgICBBU1NFVFMuUFVSUExFX0NVQkUuQUxJQVMsXG4gICAgXSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEFwcGxpY2F0aW9uLCBBc3NldHMsIENvbnRhaW5lciwgUG9pbnQsIFNwcml0ZSwgVGlja2VyIH0gZnJvbSBcInBpeGkuanNcIjtcbmltcG9ydCB7IEFTU0VUUywgR0FNRV9DVUJFU19UWVBFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHtcbiAgR2FtZUJvYXJkLFxuICBHYW1lQnVybmVkQ3ViZXMsXG4gIEdhbWVDZWxsQ29vcmRzLFxuICBHYW1lQ3ViZSxcbiAgR2FtZUZhbGxlZEN1YmVzLFxuICBHYW1lTWl4ZWRCb2FyZCxcbiAgR2FtZVN1cGVyQ3ViZXMsXG59IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgY2xhc3MgR2FtZUJvYXJkQ29udGFpbmVyIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhcHA6IEFwcGxpY2F0aW9uLFxuICAgIHByaXZhdGUgb3B0aW9uczoge1xuICAgICAgd2lkdGg6IG51bWJlcjtcbiAgICAgIGhlaWdodDogbnVtYmVyO1xuICAgICAgcm93czogbnVtYmVyO1xuICAgICAgY29sczogbnVtYmVyO1xuICAgIH0sXG4gICkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBnZXQgY3ViZVdpZHRoKCkge1xuICAgIHJldHVybiAodGhpcy5vcHRpb25zLndpZHRoIC0gMzApIC8gdGhpcy5vcHRpb25zLmNvbHM7XG4gIH1cblxuICBnZXQgY3ViZUhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5jdWJlV2lkdGg7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyQ3ViZXMoXG4gICAgYm9hcmQ6IEdhbWVCb2FyZCxcbiAgICBjYWxsYmFjaz86IChjb29yZHM6IEdhbWVDZWxsQ29vcmRzKSA9PiB2b2lkLFxuICApIHtcbiAgICB0aGlzLnJlbW92ZUNoaWxkcmVuKCk7XG4gICAgdGhpcy5yZW5kZXJCb2FyZEJnKCk7XG5cbiAgICBib2FyZC5mb3JFYWNoKChyb3csIGkpID0+IHtcbiAgICAgIHJvdy5mb3JFYWNoKChjdWJlLCBqKSA9PiB7XG4gICAgICAgIGlmICghY3ViZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN1YmVTcHJpdGUgPSB0aGlzLmNyZWF0ZUN1YmUoY3ViZSwgY2FsbGJhY2spO1xuICAgICAgICB0aGlzLmFkZENoaWxkKGN1YmVTcHJpdGUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyQnVybmVkKGJ1cm5lZEN1YmVzOiBHYW1lQnVybmVkQ3ViZXMpIHtcbiAgICBjb25zdCBwcm9taXNlcyA9IGJ1cm5lZEN1YmVzLm1hcCgoYnVybmVkQ3ViZSkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1YmVTcHJpdGUgPSB0aGlzLmNyZWF0ZUN1YmUoYnVybmVkQ3ViZSk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoY3ViZVNwcml0ZSk7XG5cbiAgICAgICAgY29uc3QgYW5pbWF0aW9uTG9naWMgPSAodGlja2VyOiBUaWNrZXIpID0+IHtcbiAgICAgICAgICBpZiAoY3ViZVNwcml0ZS5hbHBoYSA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKGN1YmVTcHJpdGUpO1xuICAgICAgICAgICAgdGhpcy5hcHAudGlja2VyLnJlbW92ZShhbmltYXRpb25Mb2dpYyk7XG4gICAgICAgICAgICByZXNvbHZlKFwiXCIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdWJlU3ByaXRlLndpZHRoIC09IDAuMTtcbiAgICAgICAgICAgIGN1YmVTcHJpdGUuaGVpZ2h0IC09IDAuMTtcbiAgICAgICAgICAgIGN1YmVTcHJpdGUuYWxwaGEgLT0gMC4xICogdGlja2VyLmRlbHRhVGltZTtcbiAgICAgICAgICAgIGN1YmVTcHJpdGUucG9zaXRpb24uc2V0KGN1YmVTcHJpdGUueCArIDAuMDUsIGN1YmVTcHJpdGUueSArIDAuMDUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmFwcC50aWNrZXIuYWRkKGFuaW1hdGlvbkxvZ2ljKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHt9KTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXJTdXBlckN1YmVzKHN1cGVyQ3ViZXM6IEdhbWVTdXBlckN1YmVzKSB7XG4gICAgY29uc3QgcHJvbWlzZXMgPSBzdXBlckN1YmVzLm1hcCgoc3VwZXJDdWJlKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgY29uc3QgY3ViZVNwcml0ZSA9IHRoaXMuY3JlYXRlQ3ViZShzdXBlckN1YmUpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKGN1YmVTcHJpdGUpO1xuXG4gICAgICAgIGNvbnN0IGFuaW1hdGlvbkxvZ2ljID0gKHRpY2tlcjogVGlja2VyKSA9PiB7XG4gICAgICAgICAgaWYgKGN1YmVTcHJpdGUud2lkdGggPj0gdGhpcy5jdWJlV2lkdGggKiAxLjMpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQoY3ViZVNwcml0ZSk7XG4gICAgICAgICAgICB0aGlzLmFwcC50aWNrZXIucmVtb3ZlKGFuaW1hdGlvbkxvZ2ljKTtcbiAgICAgICAgICAgIHJlc29sdmUoXCJcIik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGN1YmVTcHJpdGUud2lkdGggKz0gMC40ICogdGlja2VyLmRlbHRhVGltZTtcbiAgICAgICAgICAgIGN1YmVTcHJpdGUuaGVpZ2h0ICs9IDAuNCAqIHRpY2tlci5kZWx0YVRpbWU7XG4gICAgICAgICAgICBjdWJlU3ByaXRlLnBvc2l0aW9uLnNldChcbiAgICAgICAgICAgICAgY3ViZVNwcml0ZS54IC0gMC4yICogdGlja2VyLmRlbHRhVGltZSxcbiAgICAgICAgICAgICAgY3ViZVNwcml0ZS55IC0gMC4yICogdGlja2VyLmRlbHRhVGltZSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYXBwLnRpY2tlci5hZGQoYW5pbWF0aW9uTG9naWMpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge30pO1xuICB9XG5cbiAgcHVibGljIHJlbmRlckZhbGxlZChmYWxsZWRDdWJlczogR2FtZUZhbGxlZEN1YmVzKSB7XG4gICAgY29uc3QgcHJvbWlzZXMgPSBmYWxsZWRDdWJlcy5tYXAoKGZhbGxlZEN1YmUpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBjb25zdCBjdWJlU3ByaXRlID0gdGhpcy5jcmVhdGVDdWJlKHtcbiAgICAgICAgICAuLi5mYWxsZWRDdWJlLmN1YmUsXG4gICAgICAgICAgY29vcmRzOiBmYWxsZWRDdWJlLmZyb20sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoY3ViZVNwcml0ZSk7XG5cbiAgICAgICAgY29uc3QgYW5pbWF0aW9uTG9naWMgPSAodGlja2VyOiBUaWNrZXIpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGFydFBvc2l0aW9uID0gY3ViZVNwcml0ZS5wb3NpdGlvbjtcbiAgICAgICAgICBjb25zdCBlbmRQb3N0aW9uID0gdGhpcy5nZXRDdWJlUG9zaXRpb25CeUNvb3JkcyhmYWxsZWRDdWJlLnRvKTtcblxuICAgICAgICAgIGNvbnN0IGRpZmYgPSBuZXcgUG9pbnQoXG4gICAgICAgICAgICBzdGFydFBvc2l0aW9uLngsXG4gICAgICAgICAgICBlbmRQb3N0aW9uLnkgLSBzdGFydFBvc2l0aW9uLnksXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGlmIChkaWZmLnkgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuYXBwLnRpY2tlci5yZW1vdmUoYW5pbWF0aW9uTG9naWMpO1xuICAgICAgICAgICAgcmVzb2x2ZShcIlwiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbmV4dFkgPSBNYXRoLm1pbihcbiAgICAgICAgICAgICAgc3RhcnRQb3NpdGlvbi55ICsgNSAqIHRpY2tlci5kZWx0YVRpbWUsXG4gICAgICAgICAgICAgIGVuZFBvc3Rpb24ueSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjdWJlU3ByaXRlLnBvc2l0aW9uLnNldChzdGFydFBvc2l0aW9uLngsIG5leHRZKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5hcHAudGlja2VyLmFkZChhbmltYXRpb25Mb2dpYyk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7fSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgcmVuZGVyTWl4ZWQobWl4ZWRCb2FyZDogR2FtZU1peGVkQm9hcmQpIHtcbiAgICB0aGlzLnJlbW92ZUNoaWxkcmVuKCk7XG4gICAgdGhpcy5yZW5kZXJCb2FyZEJnKCk7XG5cbiAgICBjb25zdCBwcm9taXNlcyA9IG1peGVkQm9hcmQubWFwKChtaXhlZEN1YmUpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBjb25zdCBjdWJlU3ByaXRlID0gdGhpcy5jcmVhdGVDdWJlKG1peGVkQ3ViZS5jdWJlKTtcblxuICAgICAgICBjb25zdCBmcm9tUG9zaXRpb24gPSB0aGlzLmdldEN1YmVQb3NpdGlvbkJ5Q29vcmRzKG1peGVkQ3ViZS5mcm9tKTtcbiAgICAgICAgY29uc3QgdG9Qb3NpdGlvbiA9IHRoaXMuZ2V0Q3ViZVBvc2l0aW9uQnlDb29yZHMobWl4ZWRDdWJlLnRvKTtcblxuICAgICAgICB0aGlzLmFkZENoaWxkKGN1YmVTcHJpdGUpO1xuICAgICAgICBjdWJlU3ByaXRlLnBvc2l0aW9uLnNldChmcm9tUG9zaXRpb24ueCwgZnJvbVBvc2l0aW9uLnkpO1xuXG4gICAgICAgIGNvbnN0IGFuaW1hdGlvbkxvZ2ljID0gKHRpY2tlcjogVGlja2VyKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RhcnRQb3NpdGlvbiA9IGN1YmVTcHJpdGUucG9zaXRpb247XG5cbiAgICAgICAgICBjb25zdCBkaWZmID0gbmV3IFBvaW50KFxuICAgICAgICAgICAgdG9Qb3NpdGlvbi54IC0gc3RhcnRQb3NpdGlvbi54LFxuICAgICAgICAgICAgdG9Qb3NpdGlvbi55IC0gc3RhcnRQb3NpdGlvbi55LFxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBpZiAoZGlmZi54ID09PSAwICYmIGRpZmYueSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5hcHAudGlja2VyLnJlbW92ZShhbmltYXRpb25Mb2dpYyk7XG4gICAgICAgICAgICByZXNvbHZlKFwiXCIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBwZXJUaWNrID0gNTtcblxuICAgICAgICAgICAgY29uc3QgcGVyVGlja1ggPSBmcm9tUG9zaXRpb24ueCA+IHRvUG9zaXRpb24ueCA/IC1wZXJUaWNrIDogcGVyVGljaztcbiAgICAgICAgICAgIGNvbnN0IHBlclRpY2tZID0gZnJvbVBvc2l0aW9uLnkgPiB0b1Bvc2l0aW9uLnkgPyAtcGVyVGljayA6IHBlclRpY2s7XG5cbiAgICAgICAgICAgIGNvbnN0IG5leHRYID0gKGZyb21Qb3NpdGlvbi54ID4gdG9Qb3NpdGlvbi54ID8gTWF0aC5tYXggOiBNYXRoLm1pbikoXG4gICAgICAgICAgICAgIHN0YXJ0UG9zaXRpb24ueCArIHBlclRpY2tYICogdGlja2VyLmRlbHRhVGltZSxcbiAgICAgICAgICAgICAgdG9Qb3NpdGlvbi54LFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc3QgbmV4dFkgPSAoZnJvbVBvc2l0aW9uLnkgPiB0b1Bvc2l0aW9uLnkgPyBNYXRoLm1heCA6IE1hdGgubWluKShcbiAgICAgICAgICAgICAgc3RhcnRQb3NpdGlvbi55ICsgcGVyVGlja1kgKiB0aWNrZXIuZGVsdGFUaW1lLFxuICAgICAgICAgICAgICB0b1Bvc2l0aW9uLnksXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjdWJlU3ByaXRlLnBvc2l0aW9uLnNldChuZXh0WCwgbmV4dFkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmFwcC50aWNrZXIuYWRkKGFuaW1hdGlvbkxvZ2ljKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge30pO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVDdWJlKFxuICAgIGN1YmU6IEdhbWVDdWJlLFxuICAgIGNhbGxiYWNrPzogKGNvb3JkczogR2FtZUNlbGxDb29yZHMpID0+IHZvaWQsXG4gICkge1xuICAgIGNvbnN0IHRleHR1cmUgPSBBc3NldHMuZ2V0KGN1YmUuY29sb3IpO1xuICAgIGNvbnN0IGN1YmVTcHJpdGUgPSBuZXcgU3ByaXRlKHRleHR1cmUpO1xuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5nZXRDdWJlUG9zaXRpb25CeUNvb3JkcyhjdWJlLmNvb3Jkcyk7XG5cbiAgICBjdWJlU3ByaXRlLndpZHRoID0gdGhpcy5jdWJlV2lkdGg7XG4gICAgY3ViZVNwcml0ZS5oZWlnaHQgPSB0aGlzLmN1YmVIZWlnaHQ7XG4gICAgY3ViZVNwcml0ZS5wb3NpdGlvbi5zZXQocG9zaXRpb24ueCwgcG9zaXRpb24ueSk7XG5cbiAgICBpZiAoY3ViZS50eXBlICE9PSBHQU1FX0NVQkVTX1RZUEUuQkFTRSkge1xuICAgICAgY3ViZVNwcml0ZS5hbHBoYSA9IDAuNztcbiAgICB9XG5cbiAgICBjdWJlU3ByaXRlLmV2ZW50TW9kZSA9IFwic3RhdGljXCI7XG4gICAgY3ViZVNwcml0ZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY3ViZVNwcml0ZS5vbihcInBvaW50ZXJkb3duXCIsICgpID0+IGNhbGxiYWNrKGN1YmUuY29vcmRzKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGN1YmVTcHJpdGU7XG4gIH1cblxuICBwcml2YXRlIGdldEN1YmVQb3NpdGlvbkJ5Q29vcmRzKGNvb3JkczogR2FtZUNlbGxDb29yZHMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogY29vcmRzLnggKiB0aGlzLmN1YmVXaWR0aCArIDE1LFxuICAgICAgeTogY29vcmRzLnkgKiB0aGlzLmN1YmVIZWlnaHQgKyAxNSxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJCb2FyZEJnKCkge1xuICAgIGNvbnN0IGJvYXJkU3ByaXRlID0gbmV3IFNwcml0ZShBc3NldHMuZ2V0KEFTU0VUUy5CT0FSRC5BTElBUykpO1xuICAgIGJvYXJkU3ByaXRlLnNldFNpemUodGhpcy5vcHRpb25zLndpZHRoLCB0aGlzLm9wdGlvbnMuaGVpZ2h0KTtcbiAgICB0aGlzLmFkZENoaWxkKGJvYXJkU3ByaXRlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQXNzZXRzLCBUZXh0LCBDb250YWluZXIsIFNwcml0ZSwgR3JhcGhpY3MgfSBmcm9tIFwicGl4aS5qc1wiO1xuaW1wb3J0IHsgQVNTRVRTIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgY2xhc3MgR2FtZVBhbmVsQ29udGFpbmVyIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgcGFuZWxTY29yZUNvbnRhaW5lcjogQ29udGFpbmVyO1xuICBwYW5lbFRpbWVyQ29udGFpbmVyOiBDb250YWluZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvcHRpb25zOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucGFuZWxTY29yZUNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKTtcbiAgICB0aGlzLnBhbmVsVGltZXJDb250YWluZXIgPSBuZXcgQ29udGFpbmVyKCk7XG4gIH1cblxuICByZW5kZXIoc2NvcmU6IG51bWJlciwgdGltZTogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFuZWxTY29yZVNpemUgPSB0aGlzLm9wdGlvbnMud2lkdGg7XG4gICAgdGhpcy5zZXRTaXplKHBhbmVsU2NvcmVTaXplLCBwYW5lbFNjb3JlU2l6ZSk7XG5cbiAgICBjb25zdCBwYW5lbFNjb3JlU3ByaXRlID0gbmV3IFNwcml0ZShBc3NldHMuZ2V0KEFTU0VUUy5QQU5FTF9TQ09SRS5BTElBUykpO1xuICAgIHBhbmVsU2NvcmVTcHJpdGUud2lkdGggPSBwYW5lbFNjb3JlU2l6ZTtcbiAgICBwYW5lbFNjb3JlU3ByaXRlLmhlaWdodCA9IHBhbmVsU2NvcmVTaXplO1xuXG4gICAgY29uc3QgcGFuZWxTY29yZVNjb3JlV3JhcHBlciA9IG5ldyBHcmFwaGljcygpXG4gICAgICAucm91bmRSZWN0KDAsIDAsIDIwMCwgODAsIDIwKVxuICAgICAgLmZpbGwoXCIjMEUzMzY2XCIpO1xuICAgIHBhbmVsU2NvcmVTY29yZVdyYXBwZXIucG9zaXRpb24uc2V0KFxuICAgICAgKHBhbmVsU2NvcmVTaXplIC0gMjAwKSAvIDIsXG4gICAgICBwYW5lbFNjb3JlU2l6ZSAtIDgwIC0gMzAsXG4gICAgKTtcbiAgICBjb25zdCBwYW5lbFNjb3JlU2NvcmVUaXRsZSA9IG5ldyBUZXh0KHtcbiAgICAgIHRleHQ6IFwi0YHRh9C10YI6XCIsXG4gICAgICBzdHlsZToge1xuICAgICAgICBmb250RmFtaWx5OiBcIkFyaWFsXCIsXG4gICAgICAgIGZvbnRTaXplOiAzMCxcbiAgICAgICAgZmlsbDogXCJ3aGl0ZVwiLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBwYW5lbFNjb3JlU2NvcmVUaXRsZS5wb3NpdGlvbi5zZXQoXG4gICAgICAocGFuZWxTY29yZVNpemUgLSBwYW5lbFNjb3JlU2NvcmVUaXRsZS53aWR0aCkgLyAyLFxuICAgICAgcGFuZWxTY29yZVNpemUgLSA4MCAtIDMwLFxuICAgICk7XG5cbiAgICBjb25zdCBwYW5lbFRpbWVyU2NvcmVXcmFwcGVyID0gbmV3IEdyYXBoaWNzKClcbiAgICAgIC5yb3VuZFJlY3QoMCwgMCwgMTIwLCAxMjAsIDEyMClcbiAgICAgIC5maWxsKFwiI0M0Mzk4RlwiKTtcbiAgICBwYW5lbFRpbWVyU2NvcmVXcmFwcGVyLnBvc2l0aW9uLnNldChwYW5lbFNjb3JlU2l6ZSAvIDIgLSA2MCwgNDApO1xuXG4gICAgdGhpcy5hZGRDaGlsZChwYW5lbFNjb3JlU3ByaXRlKTtcbiAgICB0aGlzLmFkZENoaWxkKHBhbmVsU2NvcmVTY29yZVdyYXBwZXIpO1xuICAgIHRoaXMuYWRkQ2hpbGQocGFuZWxTY29yZVNjb3JlVGl0bGUpO1xuICAgIHRoaXMuYWRkQ2hpbGQocGFuZWxUaW1lclNjb3JlV3JhcHBlcik7XG5cbiAgICB0aGlzLmFkZENoaWxkKHRoaXMucGFuZWxUaW1lckNvbnRhaW5lcik7XG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLnBhbmVsU2NvcmVDb250YWluZXIpO1xuXG4gICAgdGhpcy5yZW5kZXJTY29yZShzY29yZSk7XG4gICAgdGhpcy5yZW5kZXJNb3Zlcyh0aW1lKTtcbiAgfVxuXG4gIHJlbmRlclNjb3JlKHNjb3JlOiBudW1iZXIpIHtcbiAgICB0aGlzLnBhbmVsU2NvcmVDb250YWluZXIucmVtb3ZlQ2hpbGRyZW4oKTtcblxuICAgIGNvbnN0IHBhbmVsU2NvcmVTY29yZVZhbHVlID0gbmV3IFRleHQoe1xuICAgICAgdGV4dDogc2NvcmUsXG4gICAgICBzdHlsZToge1xuICAgICAgICBmb250RmFtaWx5OiBcIkFyaWFsXCIsXG4gICAgICAgIGZvbnRTaXplOiA1MCxcbiAgICAgICAgZmlsbDogXCJ3aGl0ZVwiLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBwYW5lbFNjb3JlU2NvcmVWYWx1ZS5wb3NpdGlvbi5zZXQoXG4gICAgICAodGhpcy5vcHRpb25zLndpZHRoIC0gcGFuZWxTY29yZVNjb3JlVmFsdWUud2lkdGgpIC8gMixcbiAgICAgIHRoaXMub3B0aW9ucy53aWR0aCAtIDgwLFxuICAgICk7XG5cbiAgICB0aGlzLnBhbmVsU2NvcmVDb250YWluZXIuYWRkQ2hpbGQocGFuZWxTY29yZVNjb3JlVmFsdWUpO1xuICB9XG5cbiAgcmVuZGVyTW92ZXMobW92ZXM6IG51bWJlcikge1xuICAgIHRoaXMucGFuZWxUaW1lckNvbnRhaW5lci5yZW1vdmVDaGlsZHJlbigpO1xuXG4gICAgY29uc3QgcGFuZWxNb3Zlc1ZhbHVlID0gbmV3IFRleHQoe1xuICAgICAgdGV4dDogbW92ZXMsXG4gICAgICBzdHlsZToge1xuICAgICAgICBmb250RmFtaWx5OiBcIkFyaWFsXCIsXG4gICAgICAgIGZvbnRTaXplOiA3MCxcbiAgICAgICAgZmlsbDogXCJ3aGl0ZVwiLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBwYW5lbE1vdmVzVmFsdWUucG9zaXRpb24uc2V0KFxuICAgICAgKHRoaXMub3B0aW9ucy53aWR0aCAtIHBhbmVsTW92ZXNWYWx1ZS53aWR0aCkgLyAyLFxuICAgICAgNjAsXG4gICAgKTtcblxuICAgIHRoaXMucGFuZWxUaW1lckNvbnRhaW5lci5hZGRDaGlsZChwYW5lbE1vdmVzVmFsdWUpO1xuICB9XG59XG4iLCJleHBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vZ2FtZVwiO1xuIiwiaW1wb3J0IHsgR2FtZUJvYXJkRmlsbGVkLCBHYW1lQ2VsbENvb3JkcywgR2FtZUN1YmUgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2VsbEJ5Q29vcmRzID0gKFxuICBib2FyZDogR2FtZUJvYXJkRmlsbGVkLFxuICBjb29yZHM6IEdhbWVDZWxsQ29vcmRzLFxuKSA9PiB7XG4gIHJldHVybiBib2FyZFtjb29yZHMueV0/Lltjb29yZHMueF0gfHwgbnVsbDtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRDZWxsQnlDb29yZHMgPSAoXG4gIGJvYXJkOiBHYW1lQm9hcmRGaWxsZWQsXG4gIGNvb3JkczogR2FtZUNlbGxDb29yZHMsXG4gIG1heWJlQ3ViZTogR2FtZUN1YmUgfCBudWxsLFxuKSA9PiB7XG4gIGJvYXJkW2Nvb3Jkcy55XVtjb29yZHMueF0gPSBtYXliZUN1YmU7XG59O1xuXG5leHBvcnQgY29uc3QgY29weUJvYXJkID0gKGJvYXJkOiBHYW1lQm9hcmRGaWxsZWQpID0+IHtcbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYm9hcmQpKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21JbnQobWluOiBudW1iZXIsIG1heDogbnVtYmVyKSB7XG4gIGNvbnN0IG1pbkNlaWxlZCA9IE1hdGguY2VpbChtaW4pO1xuICBjb25zdCBtYXhGbG9vcmVkID0gTWF0aC5mbG9vcihtYXgpO1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heEZsb29yZWQgLSBtaW5DZWlsZWQpICsgbWluQ2VpbGVkKTtcbn1cblxuZXhwb3J0IGNvbnN0IHdhaXQgPSAobXM6IG51bWJlciA9IDEwMDApID0+XG4gIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG4iLCJpbXBvcnQgaW5pdCBmcm9tIFwiLi9pbml0XCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5pZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJsb2FkaW5nXCIpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdCk7XG59IGVsc2Uge1xuICBpbml0KCk7XG59XG4iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vZ2FtZVwiO1xuXG5pbnRlcmZhY2UgVFpWYXJzIHtcbiAgTjogbnVtYmVyO1xuICBNOiBudW1iZXI7XG4gIEM6IG51bWJlcjtcbiAgSz86IG51bWJlcjtcbiAgUzogbnVtYmVyO1xuICBYOiBudW1iZXI7XG4gIFk6IG51bWJlcjtcbiAgTDogbnVtYmVyO1xuICBSOiBudW1iZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XG4gIGNvbnN0IHZhcnNGcm9tVFo6IFRaVmFycyA9IHtcbiAgICBOOiAxMCxcbiAgICBNOiAxMCxcbiAgICBDOiA1LFxuICAgIC8vIEs6IDMsXG4gICAgUzogNSxcbiAgICBYOiAxMDAsXG4gICAgWTogMTUsXG4gICAgTDogNCxcbiAgICBSOiAyLFxuICB9O1xuXG4gIGNvbnN0IGdhbWUgPSBuZXcgR2FtZShnZXRHYW1lQ29uZmlnRnJvbVRaVmFycyh2YXJzRnJvbVRaKSk7XG5cbiAgYXdhaXQgZ2FtZS5pbml0KCk7XG5cbiAgZ2FtZS5zdGFydCgpO1xufVxuXG5mdW5jdGlvbiBnZXRHYW1lQ29uZmlnRnJvbVRaVmFycyh2YXJzOiBUWlZhcnMpIHtcbiAgcmV0dXJuIHtcbiAgICBib2FyZENvbHM6IHZhcnMuTixcbiAgICBib2FyZFJvd3M6IHZhcnMuTSxcbiAgICBjdWJlQ29sb3JzQ291bnQ6IHZhcnMuQyxcbiAgICBtaW5DaGFpbkxlbmd0aDogdmFycy5LIHx8IDIsXG4gICAgbWl4Q291bnQ6IHZhcnMuUyxcbiAgICBzY29yZXNUb1dpbjogdmFycy5YLFxuICAgIG1vdmVDb3VudDogdmFycy5ZLFxuICAgIGN1YmVzVG9TdXBlcjogdmFycy5MLFxuICAgIHN1cGVyQm9tYlJhZGl1czogdmFycy5SLFxuICB9O1xufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCIvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3Ncbi8vIFNpbmNlIGFsbCByZWZlcmVuY2VkIGNodW5rcyBhcmUgYWxyZWFkeSBpbmNsdWRlZFxuLy8gaW4gdGhpcyBmaWxlLCB0aGlzIGZ1bmN0aW9uIGlzIGVtcHR5IGhlcmUuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSAoKSA9PiAoUHJvbWlzZS5yZXNvbHZlKCkpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtibGFzdF9nYW1lXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2JsYXN0X2dhbWVcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvclwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbImdldENlbGxCeUNvb3JkcyIsImZhbGxDdWJlcyIsImZpbGxFbXB0eUNlbGxzIiwiZ2V0VXBkYXRlU2NvcmUiLCJtaXhDdWJlc0lmTmVlZCIsInRyeUJ1cm5DdWJlcyIsInRyeUNyZWF0ZVN1cGVyQ3ViZSIsInVwZGF0ZUdhbWVTdGF0dXMiLCJ1cGRhdGVSZW1haW5pbmdNb3ZlcyIsIkdBTUVfQ1VCRVNfVFlQRSIsImNyZWF0ZUNsaWNrQ2VsbCIsInNhdmVTY29yZSIsInJlYWRDb25maWciLCJyZWFkQm9hcmQiLCJyZWFkU2NvcmUiLCJzYXZlQm9hcmQiLCJyZWFkQXZpYWxhYmxlQ3ViZXNDb2xvcnMiLCJyZWFkU3RhdHVzIiwic2F2ZVN0YXR1cyIsInJlYWRSZW1haW5pbmdNb3ZlcyIsInNhdmVSZW1haW5pbmdNb3ZlcyIsInJlYWRNaXhDb3VudCIsImNvb3JkcyIsImNvbmZpZyIsImJvYXJkIiwic2NvcmUiLCJjbGlja2VkQ3ViZSIsIm1heWJlQnVybmVkSW5mbyIsImlzQmFzZUN1YmUiLCJ0eXBlIiwiQkFTRSIsImJ1cm5lZEN1YmVzIiwiYm9hcmRXaXRoQnVybmVkIiwidXBkYXRlZFNjb3JlIiwiYm9hcmRCdXJuZWRXaXRoU3VwZXIiLCJzdXBlckN1YmVzIiwiZmFsbGVkQ3ViZXMiLCJmYWxsZWRCb2FyZCIsImJvYXJkV2l0aG91dE1vdmVkIiwiYXZpYWxhYmxlQ3ViZXNDb2xvcnMiLCJuZXdDdWJlcyIsImZpbGxlZEJvYXJkIiwiZmFsbGVkTmV3Q3ViZXMiLCJtaXhDb3VudCIsIm1peGVkQm9hcmRzIiwidXBkYXRlZEJvYXJkIiwic3RhdHVzIiwiY3VycmVudE1vdmVzIiwidXBkYXRlZE1vdmVzIiwidXBkYXRlZFN0YXR1cyIsInNjb3Jlc1RvV2luIiwiY3JlYXRlU3RhcnRHYW1lIiwiR0FNRV9TVEFUVVNFUyIsImdlbmVyYXRlQm9hcmQiLCJ1cGRhdGVBdmlhbGFibGVDdWJlc0NvbG9ycyIsInNhdmVBdmlhbGFibGVDdWJlc0NvbG9ycyIsIlBMQVlJTkciLCJtb3ZlQ291bnQiLCJHQU1FX0NVQkVTIiwiQkxVRSIsIlJFRCIsIkdSRUVOIiwiWUVMTE9XIiwiUFVSUExFIiwiQ09MIiwiUk9XIiwiQk9BUkQiLCJSQURJVVMiLCJXSU4iLCJOT19NT1ZFUyIsIklETEUiLCJBU1NFVFMiLCJBTElBUyIsIlNSQyIsIkJMVUVfQ1VCRSIsIlJFRF9DVUJFIiwiR1JFRU5fQ1VCRSIsIllFTExPV19DVUJFIiwiUFVSUExFX0NVQkUiLCJQQU5FTF9TQ09SRSIsImNvcHlCb2FyZCIsInNldENlbGxCeUNvb3JkcyIsImJ1cm5TdXBlckN1YmUiLCJjdWJlIiwic3VwZXJCb21iUmFkaXVzIiwiYnVybkN1YmUiLCJjdWJlVG9CdXJuIiwicHVzaCIsInJvdyIsImxlbmd0aCIsImN1YmVUb0J1cm5Db29yZHMiLCJ5IiwieCIsImNvbCIsInJhZGl1cyIsImJ1cm5DdWJlcyIsImN1YmVzIiwiYm9hcmRDb3B5IiwiZmlsdGVyIiwiZm9yRWFjaCIsImFscmVhZHlCdXJuZWQiLCJmaW5kIiwiYnVybmVkQ3ViZSIsImdldExpbmtlZEN1YmVzIiwiY2hlY2tIYXNNb3ZlcyIsImNoZWNrZWRDdWJlcyIsImJvYXJkQ29scyIsImJvYXJkUm93cyIsIm1pbkNoYWluTGVuZ3RoIiwibGlua2VkQ3ViZXMiLCJjb2xvciIsIm1hcCIsImlkIiwiY2hlY2tJc1dpbiIsIm1pbkN1YmVDb2xvcnNDb3VudCIsIm1heEN1YmVDb2xvcnNDb3VudCIsIk9iamVjdCIsInZhbHVlcyIsImNyZWF0ZUNvbmZpZyIsInBhcmFtcyIsImN1YmVDb2xvcnNDb3VudCIsIkVycm9yIiwiY3ViZUlkeCIsImNyZWF0ZUN1YmUiLCJnZXRSYW5kb21JbnQiLCJjcmVhdGVSYW5kb21DdWJlIiwiZ2V0UmFuZG9tQ29sb3IiLCJjb2xvcnMiLCJtYXliZUN1YmUiLCJmYWxsWSIsImNoZWNrWSIsInRlbXAiLCJmcm9tIiwidG8iLCJ1cGRhdGVkQ3ViZSIsImJvYXJkV2l0aEVtcHR5IiwiZW1wdHlDZWxscyIsInJlZHVjZSIsImFjYyIsImNlbGwiLCJuZXdDdWJlIiwiZ2V0RW1wdHlDb3VudEluQ29sdW1uIiwiZmFsbGVkQ3ViZSIsImdldEN1YmVzQ2hhaW4iLCJjdWJlQ29sb3IiLCJnZXRMaW5rZWRDdWJlIiwiaW5jbHVkZXMiLCJsb2dQcml0dHlCb2FyZCIsImNlbGxTdHJMZW4iLCJjb25zb2xlIiwibG9nIiwicmVwZWF0IiwiY2VsbFN0ciIsInNsaWNlIiwicGFkRW5kIiwiam9pbiIsImhhc01vdmVzIiwicHJldkJvYXJkIiwiaSIsIm5ld01peGVkQm9hcmQiLCJuZXdCb2FyZCIsIkFycmF5IiwiYXZpYWxhYmxlQ29vcmRzIiwiXyIsImluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tSWR4IiwicmFuZG9tQ29vcmRzIiwic3BsaWNlIiwiZnJvbUNvb3JkcyIsInRvQ29vcmRzIiwiY3ViZXNDaGFpbiIsIm5lZWRCdXJuIiwiZ2V0UmFuZG9tU3VwZXJDdWJlVHlwZSIsInN1cGVycyIsImNsaWNrQ29vcmRzIiwiZW5hYmxlIiwiY3ViZXNUb1N1cGVyIiwiYnVybmVkVG9TdXBlckN1YmUiLCJzdXBlckN1YmUiLCJhdmlhbGFibGVDdWJlcyIsImtleXMiLCJ1cGRhdGVkIiwiR2FtZSIsIkFwcGxpY2F0aW9uIiwiQXNzZXRzIiwiQ29udGFpbmVyIiwiR2FtZVBhbmVsQ29udGFpbmVyIiwiR2FtZUJvYXJkQ29udGFpbmVyIiwid2FpdCIsImVkaXRhYmxlIiwiY29uc3RydWN0b3IiLCJyZW1haW5pbmdNb3ZlcyIsImFwcCIsIm1haW5Db250YWluZXIiLCJnYW1lQm9hcmRDb250YWluZXIiLCJ3aWR0aCIsImhlaWdodCIsInJvd3MiLCJjb2xzIiwicGFuZWxTY29yZUNvbnRhaW5lciIsInN0YXJ0R2FtZSIsIm1vdmVzIiwiY2xpY2tDZWxsIiwic3RhcnQiLCJyZW5kZXJJbml0aWFsQm9hcmQiLCJyZW5kZXJJbml0aWFsUGFuZWwiLCJpbml0IiwiYmFja2dyb3VuZCIsInJlc2l6ZVRvIiwid2luZG93IiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJjYW52YXMiLCJsb2FkQXNzZXRzIiwiY29udGFpbmVyV2lkdGgiLCJjb250YWluZXJIZWlnaHQiLCJzZXRTaXplIiwicG9zaXRpb24iLCJzZXQiLCJzY3JlZW4iLCJhZGRDaGlsZCIsInN0YWdlIiwib25DZWxsQ2xpY2siLCJyZXN1bHQiLCJyZW5kZXJTY29yZSIsInJlbmRlck1vdmVzIiwicmVuZGVyQnVybmVkQm9hcmQiLCJyZW5kZXJTdXBlckN1YmVzIiwicmVuZGVyRmFsbGVkQm9hcmQiLCJjb25jYXQiLCJhbGVydCIsInJlbmRlck1peGVkQm9hcmQiLCJyZW5kZXJDdWJlcyIsImJpbmQiLCJidXJuZWQiLCJib2FyZFdpdGhvdXRCdXJuZWQiLCJyZW5kZXJCdXJuZWQiLCJmYWxsZWQiLCJyZW5kZXJGYWxsZWQiLCJtaXhlZEJvYXJkIiwicmVuZGVyTWl4ZWQiLCJyZW5kZXIiLCJhZGQiLCJhbGlhcyIsInNyYyIsImxvYWQiLCJQb2ludCIsIlNwcml0ZSIsIm9wdGlvbnMiLCJjdWJlV2lkdGgiLCJjdWJlSGVpZ2h0IiwiY2FsbGJhY2siLCJyZW1vdmVDaGlsZHJlbiIsInJlbmRlckJvYXJkQmciLCJqIiwiY3ViZVNwcml0ZSIsInByb21pc2VzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJhbmltYXRpb25Mb2dpYyIsInRpY2tlciIsImFscGhhIiwicmVtb3ZlQ2hpbGQiLCJyZW1vdmUiLCJkZWx0YVRpbWUiLCJhbGwiLCJ0aGVuIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc3Rpb24iLCJnZXRDdWJlUG9zaXRpb25CeUNvb3JkcyIsImRpZmYiLCJuZXh0WSIsIm1pbiIsIm1peGVkQ3ViZSIsImZyb21Qb3NpdGlvbiIsInRvUG9zaXRpb24iLCJwZXJUaWNrIiwicGVyVGlja1giLCJwZXJUaWNrWSIsIm5leHRYIiwibWF4IiwidGV4dHVyZSIsImdldCIsImV2ZW50TW9kZSIsImN1cnNvciIsIm9uIiwiYm9hcmRTcHJpdGUiLCJUZXh0IiwiR3JhcGhpY3MiLCJwYW5lbFRpbWVyQ29udGFpbmVyIiwidGltZSIsInBhbmVsU2NvcmVTaXplIiwicGFuZWxTY29yZVNwcml0ZSIsInBhbmVsU2NvcmVTY29yZVdyYXBwZXIiLCJyb3VuZFJlY3QiLCJmaWxsIiwicGFuZWxTY29yZVNjb3JlVGl0bGUiLCJ0ZXh0Iiwic3R5bGUiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJwYW5lbFRpbWVyU2NvcmVXcmFwcGVyIiwicGFuZWxTY29yZVNjb3JlVmFsdWUiLCJwYW5lbE1vdmVzVmFsdWUiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJtaW5DZWlsZWQiLCJjZWlsIiwibWF4Rmxvb3JlZCIsInJhbmRvbSIsIm1zIiwic2V0VGltZW91dCIsInJlYWR5U3RhdGUiLCJhZGRFdmVudExpc3RlbmVyIiwidmFyc0Zyb21UWiIsIk4iLCJNIiwiQyIsIlMiLCJYIiwiWSIsIkwiLCJSIiwiZ2FtZSIsImdldEdhbWVDb25maWdGcm9tVFpWYXJzIiwidmFycyIsIksiXSwic291cmNlUm9vdCI6IiJ9