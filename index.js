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
  config = {
    boardRows: 9,
    boardCols: 9,
    cubeColorsCount: 5,
    minChainLength: 4,
    scoresToWin: 200,
    moveCount: 20,
    mixCount: 2,
    cubesToSuper: 5,
    superBombRadius: 2
  };
  remainingMoves = this.config.moveCount;
  constructor() {
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
  const game = new _game__WEBPACK_IMPORTED_MODULE_0__.Game();
  await game.init();
  game.start();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dDUEE7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDSEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9hcHBsaWNhdGlvbi9jbGlja0NlbGwvY2xpY2tDZWxsLnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9hcHBsaWNhdGlvbi9jbGlja0NlbGwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2FwcGxpY2F0aW9uL2luZGV4LnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9hcHBsaWNhdGlvbi9zdGFydEdhbWUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2FwcGxpY2F0aW9uL3N0YXJ0R2FtZS9zdGFydEdhbWUudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL2J1cm5DdWJlcy9idXJuQ3ViZXMudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi9idXJuQ3ViZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi9jaGVja0hhc01vdmVzL2NoZWNrSGFzTW92ZXMudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi9jaGVja0hhc01vdmVzL2luZGV4LnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vY2hlY2tJc1dpbi9jaGVja0lzV2luLnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vY2hlY2tJc1dpbi9pbmRleC50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL2NyZWF0ZUNvbmZpZy9jcmVhdGVDb25maWcudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi9jcmVhdGVDb25maWcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi9jcmVhdGVDdWJlL2NyZWF0ZUN1YmUudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi9jcmVhdGVDdWJlL2luZGV4LnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vY3JlYXRlUmFuZG9tQ3ViZS9jcmVhdGVSYW5kb21DdWJlLnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vY3JlYXRlUmFuZG9tQ3ViZS9pbmRleC50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL2ZhbGxDdWJlcy9mYWxsQ3ViZXMudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi9mYWxsQ3ViZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi9maWxsRW1wdHlDZWxscy9maWxsRW1wdHlDZWxscy50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL2ZpbGxFbXB0eUNlbGxzL2luZGV4LnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vZ2VuZXJhdGVCb2FyZC9nZW5lcmF0ZUJvYXJkLnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vZ2VuZXJhdGVCb2FyZC9pbmRleC50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL2dldEN1YmVzQ2hhaW4vZ2V0Q3ViZXNDaGFpbi50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL2dldEN1YmVzQ2hhaW4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi9nZXRMaW5rZWRDdWJlcy9nZXRMaW5rZWRDdWJlcy50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL2dldExpbmtlZEN1YmVzL2luZGV4LnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vZ2V0VXBkYXRlU2NvcmUvZ2V0VXBkYXRlU2NvcmUudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi9nZXRVcGRhdGVTY29yZS9pbmRleC50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL2luZGV4LnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vbG9nUHJpdHR5Qm9hcmQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi9sb2dQcml0dHlCb2FyZC9sb2dQcml0dHlCb2FyZC50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL21peEN1YmVzSWZOZWVkL2luZGV4LnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vbWl4Q3ViZXNJZk5lZWQvbWl4Q3ViZXNJZk5lZWQudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi90cnlCdXJuQ3VkZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi90cnlCdXJuQ3VkZXMvdHJ5QnVybkN1ZGVzLnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vdHJ5Q3JlYXRlU3VwZXJDdWJlL2luZGV4LnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vdHJ5Q3JlYXRlU3VwZXJDdWJlL3RyeUNyZWF0ZVN1cGVyQ3ViZS50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL3VwZGF0ZUF2aWFsYWJsZUN1YmVzQ29sb3JzL2luZGV4LnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vdXBkYXRlQXZpYWxhYmxlQ3ViZXNDb2xvcnMvdXBkYXRlQXZpYWxhYmxlQ3ViZXNDb2xvcnMudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi91cGRhdGVHYW1lU3RhdHVzL2luZGV4LnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vdXBkYXRlR2FtZVN0YXR1cy91cGRhdGVHYW1lU3RhdHVzLnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vdXBkYXRlUmVtYWluaW5nTW92ZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi91cGRhdGVSZW1haW5pbmdNb3Zlcy91cGRhdGVSZW1haW5pbmdNb3Zlcy50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL3VpL2dhbWUudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL3VpL2dhbWVCb2FyZC50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvdWkvZ2FtZVBhbmVsLnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS91aS9pbmRleC50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2luaXQudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9zdHlsZS5jc3M/ZTMyMCIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JsYXN0LWdhbWUvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lL3dlYnBhY2svcnVudGltZS9lbnN1cmUgY2h1bmsiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JsYXN0LWdhbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2JsYXN0LWdhbWUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRDZWxsQnlDb29yZHMgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7XG4gIGZhbGxDdWJlcyxcbiAgZmlsbEVtcHR5Q2VsbHMsXG4gIGdldFVwZGF0ZVNjb3JlLFxuICBtaXhDdWJlc0lmTmVlZCxcbiAgdHJ5QnVybkN1YmVzLFxuICB0cnlDcmVhdGVTdXBlckN1YmUsXG4gIHVwZGF0ZUdhbWVTdGF0dXMsXG4gIHVwZGF0ZVJlbWFpbmluZ01vdmVzLFxufSBmcm9tIFwiLi4vLi4vZG9tYWluXCI7XG5pbXBvcnQgeyBDbGlja0NlbGwgfSBmcm9tIFwiLi4vLi4vcG9ydHMuaW5wdXRcIjtcbmltcG9ydCB7XG4gIFNhdmVTY29yZSxcbiAgUmVhZENvbmZpZyxcbiAgUmVhZEJvYXJkLFxuICBSZWFkU2NvcmUsXG4gIFNhdmVCb2FyZCxcbiAgUmVhZEF2aWFsYWJsZUN1YmVzQ29sb3JzLFxuICBSZWFkU3RhdHVzLFxuICBTYXZlU3RhdHVzLFxuICBTYXZlUmVtYWluaW5nTW92ZXMsXG4gIFJlYWRSZW1haW5pbmdNb3ZlcyxcbiAgUmVhZE1peENvdW50LFxufSBmcm9tIFwiLi4vLi4vcG9ydHMub3V0cHV0XCI7XG5pbXBvcnQgeyBHQU1FX0NVQkVTX1RZUEUgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5cbmludGVyZmFjZSBEZXBzIHtcbiAgcmVhZFNjb3JlOiBSZWFkU2NvcmU7XG4gIHNhdmVTY29yZTogU2F2ZVNjb3JlO1xuICByZWFkQ29uZmlnOiBSZWFkQ29uZmlnO1xuICByZWFkQm9hcmQ6IFJlYWRCb2FyZDtcbiAgc2F2ZUJvYXJkOiBTYXZlQm9hcmQ7XG4gIHJlYWRBdmlhbGFibGVDdWJlc0NvbG9yczogUmVhZEF2aWFsYWJsZUN1YmVzQ29sb3JzO1xuICByZWFkU3RhdHVzOiBSZWFkU3RhdHVzO1xuICBzYXZlU3RhdHVzOiBTYXZlU3RhdHVzO1xuICByZWFkUmVtYWluaW5nTW92ZXM6IFJlYWRSZW1haW5pbmdNb3ZlcztcbiAgc2F2ZVJlbWFpbmluZ01vdmVzOiBTYXZlUmVtYWluaW5nTW92ZXM7XG4gIHJlYWRNaXhDb3VudDogUmVhZE1peENvdW50O1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlQ2xpY2tDZWxsID1cbiAgKHtcbiAgICBzYXZlU2NvcmUsXG4gICAgcmVhZENvbmZpZyxcbiAgICByZWFkQm9hcmQsXG4gICAgcmVhZFNjb3JlLFxuICAgIHNhdmVCb2FyZCxcbiAgICByZWFkQXZpYWxhYmxlQ3ViZXNDb2xvcnMsXG4gICAgcmVhZFN0YXR1cyxcbiAgICBzYXZlU3RhdHVzLFxuICAgIHJlYWRSZW1haW5pbmdNb3ZlcyxcbiAgICBzYXZlUmVtYWluaW5nTW92ZXMsXG4gICAgcmVhZE1peENvdW50LFxuICB9OiBEZXBzKTogQ2xpY2tDZWxsID0+XG4gIChjb29yZHMpID0+IHtcbiAgICBjb25zdCBjb25maWcgPSByZWFkQ29uZmlnKCk7XG4gICAgY29uc3QgYm9hcmQgPSByZWFkQm9hcmQoKTtcbiAgICBjb25zdCBzY29yZSA9IHJlYWRTY29yZSgpO1xuXG4gICAgY29uc3QgY2xpY2tlZEN1YmUgPSBnZXRDZWxsQnlDb29yZHMoYm9hcmQsIGNvb3Jkcyk7XG5cbiAgICBjb25zdCBtYXliZUJ1cm5lZEluZm8gPSB0cnlCdXJuQ3ViZXMoY29uZmlnLCBib2FyZCwgY2xpY2tlZEN1YmUpO1xuICAgIGlmICghbWF5YmVCdXJuZWRJbmZvKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBpc0Jhc2VDdWJlID0gY2xpY2tlZEN1YmUudHlwZSA9PT0gR0FNRV9DVUJFU19UWVBFLkJBU0U7XG5cbiAgICBjb25zdCB7IGJ1cm5lZEN1YmVzLCBib2FyZDogYm9hcmRXaXRoQnVybmVkIH0gPSBtYXliZUJ1cm5lZEluZm87XG4gICAgY29uc3QgdXBkYXRlZFNjb3JlID0gZ2V0VXBkYXRlU2NvcmUoYnVybmVkQ3ViZXMsIHNjb3JlKTtcblxuICAgIGNvbnN0IHsgYm9hcmQ6IGJvYXJkQnVybmVkV2l0aFN1cGVyLCBzdXBlckN1YmVzIH0gPSB0cnlDcmVhdGVTdXBlckN1YmUoXG4gICAgICBjb25maWcsXG4gICAgICBjb29yZHMsXG4gICAgICBidXJuZWRDdWJlcyxcbiAgICAgIGJvYXJkV2l0aEJ1cm5lZCxcbiAgICAgIGlzQmFzZUN1YmUsXG4gICAgKTtcblxuICAgIGNvbnN0IHtcbiAgICAgIGZhbGxlZEN1YmVzLFxuICAgICAgYm9hcmQ6IGZhbGxlZEJvYXJkLFxuICAgICAgYm9hcmRXaXRob3V0TW92ZWQsXG4gICAgfSA9IGZhbGxDdWJlcyhjb25maWcsIGJvYXJkQnVybmVkV2l0aFN1cGVyKTtcblxuICAgIGNvbnN0IGF2aWFsYWJsZUN1YmVzQ29sb3JzID0gcmVhZEF2aWFsYWJsZUN1YmVzQ29sb3JzKCk7XG5cbiAgICBjb25zdCB7XG4gICAgICBuZXdDdWJlcyxcbiAgICAgIGJvYXJkOiBmaWxsZWRCb2FyZCxcbiAgICAgIGZhbGxlZE5ld0N1YmVzLFxuICAgIH0gPSBmaWxsRW1wdHlDZWxscyhmYWxsZWRCb2FyZCwgYXZpYWxhYmxlQ3ViZXNDb2xvcnMpO1xuXG4gICAgY29uc3QgbWl4Q291bnQgPSByZWFkTWl4Q291bnQoKTtcblxuICAgIGNvbnN0IHsgbWl4ZWRCb2FyZHMsIHVwZGF0ZWRCb2FyZCB9ID0gbWl4Q3ViZXNJZk5lZWQoXG4gICAgICBjb25maWcsXG4gICAgICBmaWxsZWRCb2FyZCxcbiAgICAgIG1peENvdW50LFxuICAgICk7XG5cbiAgICBjb25zdCBzdGF0dXMgPSByZWFkU3RhdHVzKCk7XG4gICAgY29uc3QgY3VycmVudE1vdmVzID0gcmVhZFJlbWFpbmluZ01vdmVzKCk7XG5cbiAgICBjb25zdCB1cGRhdGVkTW92ZXMgPSB1cGRhdGVSZW1haW5pbmdNb3ZlcyhjdXJyZW50TW92ZXMpO1xuXG4gICAgY29uc3QgdXBkYXRlZFN0YXR1cyA9IHVwZGF0ZUdhbWVTdGF0dXMoXG4gICAgICBjb25maWcsXG4gICAgICB1cGRhdGVkQm9hcmQsXG4gICAgICB1cGRhdGVkU2NvcmUsXG4gICAgICBjb25maWcuc2NvcmVzVG9XaW4sXG4gICAgICBzdGF0dXMsXG4gICAgICB1cGRhdGVkTW92ZXMsXG4gICAgKTtcblxuICAgIHNhdmVTY29yZSh1cGRhdGVkU2NvcmUpO1xuICAgIHNhdmVCb2FyZCh1cGRhdGVkQm9hcmQpO1xuICAgIHNhdmVTdGF0dXModXBkYXRlZFN0YXR1cyk7XG4gICAgc2F2ZVJlbWFpbmluZ01vdmVzKHVwZGF0ZWRNb3Zlcyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYnVybmVkQ3ViZXMsXG4gICAgICBzdXBlckN1YmVzLFxuICAgICAgZmFsbGVkQ3ViZXMsXG4gICAgICBib2FyZFdpdGhCdXJuZWQsXG4gICAgICBib2FyZEJ1cm5lZFdpdGhTdXBlcixcbiAgICAgIGZhbGxlZEJvYXJkLFxuICAgICAgYm9hcmRXaXRob3V0TW92ZWQsXG4gICAgICBmaWxsZWRCb2FyZCxcbiAgICAgIG5ld0N1YmVzLFxuICAgICAgbWl4ZWRCb2FyZHMsXG4gICAgICB1cGRhdGVkU2NvcmUsXG4gICAgICBib2FyZDogdXBkYXRlZEJvYXJkLFxuICAgICAgZmFsbGVkTmV3Q3ViZXMsXG4gICAgICBzdGF0dXM6IHVwZGF0ZWRTdGF0dXMsXG4gICAgfTtcbiAgfTtcbiIsImV4cG9ydCB7IGNyZWF0ZUNsaWNrQ2VsbCB9IGZyb20gXCIuL2NsaWNrQ2VsbFwiO1xuIiwiZXhwb3J0IHsgY3JlYXRlU3RhcnRHYW1lIH0gZnJvbSBcIi4vc3RhcnRHYW1lXCI7XG5leHBvcnQgeyBjcmVhdGVDbGlja0NlbGwgfSBmcm9tIFwiLi9jbGlja0NlbGxcIjtcbiIsImV4cG9ydCB7IGNyZWF0ZVN0YXJ0R2FtZSB9IGZyb20gXCIuL3N0YXJ0R2FtZVwiO1xuIiwiaW1wb3J0IHsgR0FNRV9TVEFUVVNFUyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IGdlbmVyYXRlQm9hcmQsIHVwZGF0ZUF2aWFsYWJsZUN1YmVzQ29sb3JzIH0gZnJvbSBcIi4uLy4uL2RvbWFpblwiO1xuaW1wb3J0IHtcbiAgU2F2ZUF2aWFsYWJsZUN1YmVzQ29sb3JzLFxuICBTYXZlQm9hcmQsXG4gIFNhdmVTY29yZSxcbiAgU2F2ZVN0YXR1cyxcbiAgUmVhZENvbmZpZyxcbiAgU2F2ZVJlbWFpbmluZ01vdmVzLFxufSBmcm9tIFwiLi4vLi4vcG9ydHMub3V0cHV0XCI7XG5pbXBvcnQgeyBTdGFydEdhbWUgfSBmcm9tIFwiLi4vLi4vcG9ydHMuaW5wdXRcIjtcblxuaW50ZXJmYWNlIERlcHMge1xuICBzYXZlQXZpYWxhYmxlQ3ViZXNDb2xvcnM6IFNhdmVBdmlhbGFibGVDdWJlc0NvbG9ycztcbiAgc2F2ZUJvYXJkOiBTYXZlQm9hcmQ7XG4gIHNhdmVTY29yZTogU2F2ZVNjb3JlO1xuICBzYXZlU3RhdHVzOiBTYXZlU3RhdHVzO1xuICByZWFkQ29uZmlnOiBSZWFkQ29uZmlnO1xuICBzYXZlUmVtYWluaW5nTW92ZXM6IFNhdmVSZW1haW5pbmdNb3Zlcztcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVN0YXJ0R2FtZSA9XG4gICh7XG4gICAgc2F2ZUF2aWFsYWJsZUN1YmVzQ29sb3JzLFxuICAgIHNhdmVCb2FyZCxcbiAgICBzYXZlU2NvcmUsXG4gICAgc2F2ZVN0YXR1cyxcbiAgICByZWFkQ29uZmlnLFxuICAgIHNhdmVSZW1haW5pbmdNb3ZlcyxcbiAgfTogRGVwcyk6IFN0YXJ0R2FtZSA9PlxuICAoKSA9PiB7XG4gICAgY29uc3QgY29uZmlnID0gcmVhZENvbmZpZygpO1xuICAgIGNvbnN0IGF2aWFsYWJsZUN1YmVzQ29sb3JzID0gdXBkYXRlQXZpYWxhYmxlQ3ViZXNDb2xvcnMoY29uZmlnKTtcbiAgICBjb25zdCBib2FyZCA9IGdlbmVyYXRlQm9hcmQoY29uZmlnLCBhdmlhbGFibGVDdWJlc0NvbG9ycyk7XG4gICAgY29uc3Qgc2NvcmUgPSAwO1xuICAgIGNvbnN0IHN0YXR1cyA9IEdBTUVfU1RBVFVTRVMuUExBWUlORztcblxuICAgIHNhdmVCb2FyZChib2FyZCk7XG4gICAgc2F2ZUF2aWFsYWJsZUN1YmVzQ29sb3JzKGF2aWFsYWJsZUN1YmVzQ29sb3JzKTtcbiAgICBzYXZlU2NvcmUoc2NvcmUpO1xuICAgIHNhdmVTdGF0dXMoc3RhdHVzKTtcbiAgICBzYXZlUmVtYWluaW5nTW92ZXMoY29uZmlnLm1vdmVDb3VudCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgYm9hcmQsXG4gICAgICBhdmlhbGFibGVDdWJlc0NvbG9ycyxcbiAgICAgIHNjb3JlLFxuICAgICAgc3RhdHVzLFxuICAgIH07XG4gIH07XG4iLCJleHBvcnQgY29uc3QgR0FNRV9DVUJFUyA9IHtcbiAgQkxVRTogXCJibHVlQ3ViZVwiLFxuICBSRUQ6IFwicmVkQ3ViZVwiLFxuICBHUkVFTjogXCJncmVlbkN1YmVcIixcbiAgWUVMTE9XOiBcInllbGxvd0N1YmVcIixcbiAgUFVSUExFOiBcInB1cnBsZUN1YmVcIixcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBHQU1FX0NVQkVTX1RZUEUgPSB7XG4gIEJBU0U6IFwiYmFzZVwiLFxuICBDT0w6IFwiY29sXCIsXG4gIFJPVzogXCJyb3dcIixcbiAgQk9BUkQ6IFwiYm9hcmRcIixcbiAgUkFESVVTOiBcInJhZGl1c1wiLFxufSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IEdBTUVfU1RBVFVTRVMgPSB7XG4gIFdJTjogXCJ3aW5cIixcbiAgTk9fTU9WRVM6IFwibm9Nb3Zlc1wiLFxuICBQTEFZSU5HOiBcInBsYXlpbmdcIixcbiAgSURMRTogXCJpZGxlXCIsXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgQVNTRVRTID0ge1xuICBCT0FSRDoge1xuICAgIEFMSUFTOiBcImJvYXJkXCIsXG4gICAgU1JDOiBcImFzc2V0cy9ib2FyZC5wbmdcIixcbiAgfSxcbiAgQkxVRV9DVUJFOiB7XG4gICAgQUxJQVM6IEdBTUVfQ1VCRVMuQkxVRSxcbiAgICBTUkM6IFwiYXNzZXRzL2JsdWVDdWJlLnBuZ1wiLFxuICB9LFxuICBSRURfQ1VCRToge1xuICAgIEFMSUFTOiBHQU1FX0NVQkVTLlJFRCxcbiAgICBTUkM6IFwiYXNzZXRzL3JlZEN1YmUucG5nXCIsXG4gIH0sXG4gIEdSRUVOX0NVQkU6IHtcbiAgICBBTElBUzogR0FNRV9DVUJFUy5HUkVFTixcbiAgICBTUkM6IFwiYXNzZXRzL2dyZWVuQ3ViZS5wbmdcIixcbiAgfSxcbiAgWUVMTE9XX0NVQkU6IHtcbiAgICBBTElBUzogR0FNRV9DVUJFUy5ZRUxMT1csXG4gICAgU1JDOiBcImFzc2V0cy95ZWxsb3dDdWJlLnBuZ1wiLFxuICB9LFxuICBQVVJQTEVfQ1VCRToge1xuICAgIEFMSUFTOiBHQU1FX0NVQkVTLlBVUlBMRSxcbiAgICBTUkM6IFwiYXNzZXRzL3B1cnBsZUN1YmUucG5nXCIsXG4gIH0sXG4gIFBBTkVMX1NDT1JFOiB7XG4gICAgQUxJQVM6IFwicGFuZWxTY29yZVwiLFxuICAgIFNSQzogXCJhc3NldHMvcGFuZWxTY29yZS5wbmdcIixcbiAgfSxcbn0gYXMgY29uc3Q7XG4iLCJpbXBvcnQgeyBjb3B5Qm9hcmQsIGdldENlbGxCeUNvb3Jkcywgc2V0Q2VsbEJ5Q29vcmRzIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5pbXBvcnQge1xuICBHYW1lQm9hcmQsXG4gIEdhbWVCb2FyZEZpbGxlZCxcbiAgR2FtZUJ1cm5lZEN1YmVzLFxuICBHYW1lQ29uZmlnLFxuICBHYW1lQ3ViZSxcbiAgR2FtZUN1YmVzLFxufSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IEdBTUVfQ1VCRVNfVFlQRSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuZnVuY3Rpb24gYnVyblN1cGVyQ3ViZShcbiAgY3ViZTogR2FtZUN1YmUsXG4gIGJvYXJkV2l0aEJ1cm5lZDogR2FtZUJvYXJkLFxuICBidXJuZWRDdWJlczogR2FtZUJ1cm5lZEN1YmVzLFxuICBzdXBlckJvbWJSYWRpdXM6IG51bWJlcixcbikge1xuICBjb25zdCBidXJuQ3ViZSA9IChjdWJlVG9CdXJuOiBHYW1lQ3ViZSkgPT4ge1xuICAgIGJ1cm5lZEN1YmVzLnB1c2goY3ViZVRvQnVybik7XG4gICAgc2V0Q2VsbEJ5Q29vcmRzKGJvYXJkV2l0aEJ1cm5lZCwgY3ViZVRvQnVybi5jb29yZHMsIG51bGwpO1xuXG4gICAgaWYgKGN1YmVUb0J1cm4udHlwZSAhPT0gR0FNRV9DVUJFU19UWVBFLkJBU0UpIHtcbiAgICAgIGJ1cm5TdXBlckN1YmUoY3ViZVRvQnVybiwgYm9hcmRXaXRoQnVybmVkLCBidXJuZWRDdWJlcywgc3VwZXJCb21iUmFkaXVzKTtcbiAgICB9XG4gIH07XG5cbiAgaWYgKGN1YmUudHlwZSA9PT0gR0FNRV9DVUJFU19UWVBFLkNPTCkge1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IGJvYXJkV2l0aEJ1cm5lZC5sZW5ndGg7IHJvdysrKSB7XG4gICAgICBjb25zdCBjdWJlVG9CdXJuQ29vcmRzID0ge1xuICAgICAgICB5OiByb3csXG4gICAgICAgIHg6IGN1YmUuY29vcmRzLngsXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBjdWJlVG9CdXJuID0gZ2V0Q2VsbEJ5Q29vcmRzKGJvYXJkV2l0aEJ1cm5lZCwgY3ViZVRvQnVybkNvb3Jkcyk7XG5cbiAgICAgIGlmIChjdWJlVG9CdXJuKSB7XG4gICAgICAgIGJ1cm5DdWJlKGN1YmVUb0J1cm4pO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChjdWJlLnR5cGUgPT09IEdBTUVfQ1VCRVNfVFlQRS5ST1cpIHtcbiAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBib2FyZFdpdGhCdXJuZWRbMF0ubGVuZ3RoOyBjb2wrKykge1xuICAgICAgY29uc3QgY3ViZVRvQnVybkNvb3JkcyA9IHtcbiAgICAgICAgeTogY3ViZS5jb29yZHMueSxcbiAgICAgICAgeDogY29sLFxuICAgICAgfTtcblxuICAgICAgY29uc3QgY3ViZVRvQnVybiA9IGdldENlbGxCeUNvb3Jkcyhib2FyZFdpdGhCdXJuZWQsIGN1YmVUb0J1cm5Db29yZHMpO1xuXG4gICAgICBpZiAoY3ViZVRvQnVybikge1xuICAgICAgICBidXJuQ3ViZShjdWJlVG9CdXJuKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoY3ViZS50eXBlID09PSBHQU1FX0NVQkVTX1RZUEUuUkFESVVTKSB7XG4gICAgY29uc3QgcmFkaXVzID0gc3VwZXJCb21iUmFkaXVzO1xuXG4gICAgZm9yIChcbiAgICAgIGxldCByb3cgPSBjdWJlLmNvb3Jkcy55IC0gcmFkaXVzO1xuICAgICAgcm93IDw9IGN1YmUuY29vcmRzLnkgKyByYWRpdXM7XG4gICAgICByb3crK1xuICAgICkge1xuICAgICAgZm9yIChcbiAgICAgICAgbGV0IGNvbCA9IGN1YmUuY29vcmRzLnggLSByYWRpdXM7XG4gICAgICAgIGNvbCA8PSBjdWJlLmNvb3Jkcy54ICsgcmFkaXVzO1xuICAgICAgICBjb2wrK1xuICAgICAgKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICByb3cgPj0gMCAmJlxuICAgICAgICAgIHJvdyA8IGJvYXJkV2l0aEJ1cm5lZC5sZW5ndGggJiZcbiAgICAgICAgICBjb2wgPj0gMCAmJlxuICAgICAgICAgIGNvbCA8IGJvYXJkV2l0aEJ1cm5lZFswXS5sZW5ndGhcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgY3ViZVRvQnVybkNvb3JkcyA9IHtcbiAgICAgICAgICAgIHk6IHJvdyxcbiAgICAgICAgICAgIHg6IGNvbCxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgY29uc3QgY3ViZVRvQnVybiA9IGdldENlbGxCeUNvb3Jkcyhib2FyZFdpdGhCdXJuZWQsIGN1YmVUb0J1cm5Db29yZHMpO1xuXG4gICAgICAgICAgaWYgKGN1YmVUb0J1cm4pIHtcbiAgICAgICAgICAgIGJ1cm5DdWJlKGN1YmVUb0J1cm4pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChjdWJlLnR5cGUgPT09IEdBTUVfQ1VCRVNfVFlQRS5CT0FSRCkge1xuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IGJvYXJkV2l0aEJ1cm5lZC5sZW5ndGg7IHJvdysrKSB7XG4gICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBib2FyZFdpdGhCdXJuZWRbMF0ubGVuZ3RoOyBjb2wrKykge1xuICAgICAgICBjb25zdCBjdWJlVG9CdXJuQ29vcmRzID0ge1xuICAgICAgICAgIHk6IHJvdyxcbiAgICAgICAgICB4OiBjb2wsXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgY3ViZVRvQnVybiA9IGdldENlbGxCeUNvb3Jkcyhib2FyZFdpdGhCdXJuZWQsIGN1YmVUb0J1cm5Db29yZHMpO1xuXG4gICAgICAgIGlmIChjdWJlVG9CdXJuKSB7XG4gICAgICAgICAgYnVybkN1YmUoY3ViZVRvQnVybik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGJ1cm5DdWJlcyA9IChcbiAgY29uZmlnOiBHYW1lQ29uZmlnLFxuICBib2FyZDogR2FtZUJvYXJkRmlsbGVkLFxuICBjdWJlczogR2FtZUN1YmVzLFxuKSA9PiB7XG4gIGNvbnN0IGJ1cm5lZEN1YmVzOiBHYW1lQnVybmVkQ3ViZXMgPSBbXTtcbiAgY29uc3QgYm9hcmRDb3B5ID0gY29weUJvYXJkKGJvYXJkKTtcblxuICBjb25zdCBzdXBlckN1YmVzID0gY3ViZXMuZmlsdGVyKChjdWJlKSA9PiBjdWJlLnR5cGUgIT09IEdBTUVfQ1VCRVNfVFlQRS5CQVNFKTtcblxuICBzdXBlckN1YmVzLmZvckVhY2goKGN1YmUpID0+IHtcbiAgICBidXJuU3VwZXJDdWJlKGN1YmUsIGJvYXJkQ29weSwgYnVybmVkQ3ViZXMsIGNvbmZpZy5zdXBlckJvbWJSYWRpdXMpO1xuICB9KTtcblxuICBmb3IgKGNvbnN0IGN1YmUgb2YgY3ViZXMpIHtcbiAgICBjb25zdCBhbHJlYWR5QnVybmVkID0gYnVybmVkQ3ViZXMuZmluZChcbiAgICAgIChidXJuZWRDdWJlKSA9PlxuICAgICAgICBidXJuZWRDdWJlLmNvb3Jkcy54ID09PSBjdWJlLmNvb3Jkcy54ICYmXG4gICAgICAgIGJ1cm5lZEN1YmUuY29vcmRzLnkgPT09IGN1YmUuY29vcmRzLnksXG4gICAgKTtcblxuICAgIGlmICghYWxyZWFkeUJ1cm5lZCkge1xuICAgICAgYnVybmVkQ3ViZXMucHVzaChjdWJlKTtcbiAgICAgIHNldENlbGxCeUNvb3Jkcyhib2FyZENvcHksIGN1YmUuY29vcmRzLCBudWxsKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGJ1cm5lZEN1YmVzLFxuICAgIGJvYXJkOiBib2FyZENvcHkgYXMgR2FtZUJvYXJkLFxuICB9O1xufTtcbiIsImV4cG9ydCB7IGJ1cm5DdWJlcyB9IGZyb20gXCIuL2J1cm5DdWJlc1wiO1xuIiwiaW1wb3J0IHsgZ2V0Q2VsbEJ5Q29vcmRzIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5pbXBvcnQgeyBHYW1lQm9hcmRGaWxsZWQsIEdhbWVDdWJlSWQsIEdhbWVDb25maWcgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGdldExpbmtlZEN1YmVzIH0gZnJvbSBcIi4uL2dldExpbmtlZEN1YmVzXCI7XG5cbmV4cG9ydCBjb25zdCBjaGVja0hhc01vdmVzID0gKGNvbmZpZzogR2FtZUNvbmZpZywgYm9hcmQ6IEdhbWVCb2FyZEZpbGxlZCkgPT4ge1xuICBjb25zdCBjaGVja2VkQ3ViZXM6IEFycmF5PEdhbWVDdWJlSWQ+ID0gW107XG5cbiAgY29uc3QgeyBib2FyZENvbHMsIGJvYXJkUm93cywgbWluQ2hhaW5MZW5ndGggfSA9IGNvbmZpZztcblxuICBmb3IgKGxldCB5ID0gMDsgeSA8IGJvYXJkUm93czsgeSsrKSB7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBib2FyZENvbHM7IHgrKykge1xuICAgICAgY29uc3QgY3ViZSA9IGdldENlbGxCeUNvb3Jkcyhib2FyZCwgeyB4LCB5IH0pO1xuXG4gICAgICBpZiAoY3ViZSkge1xuICAgICAgICBjb25zdCBsaW5rZWRDdWJlcyA9IGdldExpbmtlZEN1YmVzKFxuICAgICAgICAgIGJvYXJkLFxuICAgICAgICAgIHsgeCwgeSB9LFxuICAgICAgICAgIGN1YmUuY29sb3IsXG4gICAgICAgICAgY2hlY2tlZEN1YmVzLFxuICAgICAgICApO1xuICAgICAgICBpZiAobGlua2VkQ3ViZXMubGVuZ3RoID49IG1pbkNoYWluTGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hlY2tlZEN1YmVzLnB1c2goLi4ubGlua2VkQ3ViZXMubWFwKChjdWJlKSA9PiBjdWJlLmlkKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuIiwiZXhwb3J0IHsgY2hlY2tIYXNNb3ZlcyB9IGZyb20gXCIuL2NoZWNrSGFzTW92ZXNcIjtcbiIsImltcG9ydCB7IEdhbWVTY29yZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgY2hlY2tJc1dpbiA9IChzY29yZTogR2FtZVNjb3JlLCBzY29yZXNUb1dpbjogR2FtZVNjb3JlKSA9PiB7XG4gIHJldHVybiBzY29yZSA+PSBzY29yZXNUb1dpbjtcbn07XG4iLCJleHBvcnQgeyBjaGVja0lzV2luIH0gZnJvbSBcIi4vY2hlY2tJc1dpblwiO1xuIiwiaW1wb3J0IHsgR0FNRV9DVUJFUyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEdhbWVDb25maWdQYXJhbXMgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuY29uc3QgbWluQ3ViZUNvbG9yc0NvdW50ID0gMjtcbmNvbnN0IG1heEN1YmVDb2xvcnNDb3VudCA9IE9iamVjdC52YWx1ZXMoR0FNRV9DVUJFUykubGVuZ3RoO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlQ29uZmlnID0gKHBhcmFtczogR2FtZUNvbmZpZ1BhcmFtcykgPT4ge1xuICBjb25zdCB7IGN1YmVDb2xvcnNDb3VudCB9ID0gcGFyYW1zO1xuXG4gIGlmIChjdWJlQ29sb3JzQ291bnQgPCBtaW5DdWJlQ29sb3JzQ291bnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgY3ViZUNvbG9yc0NvdW50IHNob3VsZCBiZSBncmVhdGVyIHRoYW4gJHttaW5DdWJlQ29sb3JzQ291bnQgLSAxfWAsXG4gICAgKTtcbiAgfVxuXG4gIGlmIChjdWJlQ29sb3JzQ291bnQgPiBtYXhDdWJlQ29sb3JzQ291bnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgY3ViZUNvbG9yc0NvdW50IHNob3VsZCBiZSBsZXNzIHRoYW4gJHttYXhDdWJlQ29sb3JzQ291bnQgKyAxfWAsXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBwYXJhbXM7XG59O1xuIiwiZXhwb3J0IHsgY3JlYXRlQ29uZmlnIH0gZnJvbSBcIi4vY3JlYXRlQ29uZmlnXCI7XG4iLCJpbXBvcnQgeyBHQU1FX0NVQkVTX1RZUEUgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQge1xuICBHYW1lQ3ViZUlkLFxuICBHYW1lQ2VsbENvb3JkcyxcbiAgR2FtZUN1YmVDb2xvcixcbiAgR2FtZUN1YmUsXG4gIEdhbWVDdWJlVHlwZSxcbn0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmxldCBjdWJlSWR4ID0gMDtcblxuaW50ZXJmYWNlIE9wdGlvbnMge1xuICBpZD86IEdhbWVDdWJlSWQ7XG4gIGNvb3JkczogR2FtZUNlbGxDb29yZHM7XG4gIGNvbG9yOiBHYW1lQ3ViZUNvbG9yO1xuICB0eXBlPzogR2FtZUN1YmVUeXBlO1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlQ3ViZSA9ICh7IGlkLCBjb2xvciwgY29vcmRzLCB0eXBlIH06IE9wdGlvbnMpOiBHYW1lQ3ViZSA9PiB7XG4gIHJldHVybiB7XG4gICAgaWQ6IGlkIHx8IChgJHtjdWJlSWR4Kyt9YCBhcyBHYW1lQ3ViZUlkKSxcbiAgICBjb2xvcixcbiAgICBjb29yZHMsXG4gICAgdHlwZTogdHlwZSB8fCBHQU1FX0NVQkVTX1RZUEUuQkFTRSxcbiAgfTtcbn07XG4iLCJleHBvcnQgeyBjcmVhdGVDdWJlIH0gZnJvbSBcIi4vY3JlYXRlQ3ViZVwiO1xuIiwiaW1wb3J0IHsgZ2V0UmFuZG9tSW50IH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5pbXBvcnQgeyBHYW1lQ2VsbENvb3JkcywgR2FtZUN1YmVDb2xvciwgR2FtZUN1YmVUeXBlIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBjcmVhdGVDdWJlIH0gZnJvbSBcIi4uL2NyZWF0ZUN1YmVcIjtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJhbmRvbUN1YmUgPSAoXG4gIGNvb3JkczogR2FtZUNlbGxDb29yZHMsXG4gIGF2aWFsYWJsZUN1YmVzQ29sb3JzOiBBcnJheTxHYW1lQ3ViZUNvbG9yPixcbiAgdHlwZT86IEdhbWVDdWJlVHlwZSxcbikgPT4ge1xuICBjb25zdCBnZXRSYW5kb21Db2xvciA9IChjb2xvcnM6IEFycmF5PEdhbWVDdWJlQ29sb3I+KTogR2FtZUN1YmVDb2xvciA9PiB7XG4gICAgcmV0dXJuIGNvbG9yc1tnZXRSYW5kb21JbnQoMCwgY29sb3JzLmxlbmd0aCldO1xuICB9O1xuXG4gIHJldHVybiBjcmVhdGVDdWJlKHtcbiAgICBjb29yZHMsXG4gICAgY29sb3I6IGdldFJhbmRvbUNvbG9yKGF2aWFsYWJsZUN1YmVzQ29sb3JzKSxcbiAgICB0eXBlLFxuICB9KTtcbn07XG4iLCJleHBvcnQgeyBjcmVhdGVSYW5kb21DdWJlIH0gZnJvbSBcIi4vY3JlYXRlUmFuZG9tQ3ViZVwiO1xuIiwiaW1wb3J0IHsgR2FtZUNvbmZpZywgR2FtZUJvYXJkLCBHYW1lRmFsbGVkQ3ViZXMgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGNvcHlCb2FyZCwgZ2V0Q2VsbEJ5Q29vcmRzLCBzZXRDZWxsQnlDb29yZHMgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7IGNyZWF0ZUN1YmUgfSBmcm9tIFwiLi4vY3JlYXRlQ3ViZVwiO1xuXG5leHBvcnQgY29uc3QgZmFsbEN1YmVzID0gKGNvbmZpZzogR2FtZUNvbmZpZywgYm9hcmQ6IEdhbWVCb2FyZCkgPT4ge1xuICBjb25zdCBmYWxsZWRDdWJlczogR2FtZUZhbGxlZEN1YmVzID0gW107XG4gIGNvbnN0IHsgYm9hcmRDb2xzLCBib2FyZFJvd3MgfSA9IGNvbmZpZztcbiAgY29uc3QgYm9hcmRDb3B5ID0gY29weUJvYXJkKGJvYXJkKTtcbiAgY29uc3QgYm9hcmRXaXRob3V0TW92ZWQgPSBjb3B5Qm9hcmQoYm9hcmQpO1xuXG4gIGZvciAobGV0IHkgPSBib2FyZFJvd3MgLSAxOyB5ID49IDA7IHktLSkge1xuICAgIGZvciAobGV0IHggPSAwOyB4IDw9IGJvYXJkQ29scyAtIDE7IHgrKykge1xuICAgICAgY29uc3QgbWF5YmVDdWJlID0gZ2V0Q2VsbEJ5Q29vcmRzKGJvYXJkQ29weSwgeyB4LCB5IH0pO1xuICAgICAgaWYgKCFtYXliZUN1YmUpIHtcbiAgICAgICAgbGV0IGZhbGxZID0geTtcbiAgICAgICAgZm9yIChsZXQgY2hlY2tZID0geTsgY2hlY2tZID49IDA7IGNoZWNrWS0tKSB7XG4gICAgICAgICAgY29uc3QgdGVtcCA9IGdldENlbGxCeUNvb3Jkcyhib2FyZENvcHksIHtcbiAgICAgICAgICAgIHgsXG4gICAgICAgICAgICB5OiBjaGVja1ksXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAodGVtcCkge1xuICAgICAgICAgICAgY29uc3QgZnJvbSA9IHsgeCwgeTogY2hlY2tZIH07XG4gICAgICAgICAgICBjb25zdCB0byA9IHsgeCwgeTogZmFsbFkgfTtcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRDdWJlID0gY3JlYXRlQ3ViZSh7XG4gICAgICAgICAgICAgIGlkOiB0ZW1wLmlkLFxuICAgICAgICAgICAgICBjb29yZHM6IHRvLFxuICAgICAgICAgICAgICBjb2xvcjogdGVtcC5jb2xvcixcbiAgICAgICAgICAgICAgdHlwZTogdGVtcC50eXBlLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNldENlbGxCeUNvb3Jkcyhib2FyZENvcHksIHRvLCB1cGRhdGVkQ3ViZSk7XG4gICAgICAgICAgICBzZXRDZWxsQnlDb29yZHMoYm9hcmRDb3B5LCBmcm9tLCBudWxsKTtcblxuICAgICAgICAgICAgc2V0Q2VsbEJ5Q29vcmRzKGJvYXJkV2l0aG91dE1vdmVkLCB0bywgbnVsbCk7XG4gICAgICAgICAgICBzZXRDZWxsQnlDb29yZHMoYm9hcmRXaXRob3V0TW92ZWQsIGZyb20sIG51bGwpO1xuXG4gICAgICAgICAgICBmYWxsZWRDdWJlcy5wdXNoKHtcbiAgICAgICAgICAgICAgZnJvbSxcbiAgICAgICAgICAgICAgdG8sXG4gICAgICAgICAgICAgIGN1YmU6IHVwZGF0ZWRDdWJlLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGZhbGxZLS07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBib2FyZDogYm9hcmRDb3B5LFxuICAgIGZhbGxlZEN1YmVzLFxuICAgIGJvYXJkV2l0aG91dE1vdmVkLFxuICB9O1xufTtcbiIsImV4cG9ydCB7IGZhbGxDdWJlcyB9IGZyb20gXCIuL2ZhbGxDdWJlc1wiO1xuIiwiaW1wb3J0IHsgY29weUJvYXJkLCBzZXRDZWxsQnlDb29yZHMgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7XG4gIEdhbWVDdWJlcyxcbiAgR2FtZUNlbGxDb29yZHMsXG4gIEdhbWVDdWJlQ29sb3IsXG4gIEdhbWVGYWxsZWRDdWJlcyxcbiAgR2FtZUJvYXJkLFxufSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGNyZWF0ZVJhbmRvbUN1YmUgfSBmcm9tIFwiLi4vY3JlYXRlUmFuZG9tQ3ViZVwiO1xuXG5leHBvcnQgY29uc3QgZmlsbEVtcHR5Q2VsbHMgPSAoXG4gIGJvYXJkV2l0aEVtcHR5OiBHYW1lQm9hcmQsXG4gIGF2aWFsYWJsZUN1YmVzQ29sb3JzOiBBcnJheTxHYW1lQ3ViZUNvbG9yPixcbikgPT4ge1xuICBjb25zdCBuZXdDdWJlczogR2FtZUN1YmVzID0gW107XG4gIGNvbnN0IGJvYXJkQ29weSA9IGNvcHlCb2FyZChib2FyZFdpdGhFbXB0eSk7XG5cbiAgY29uc3QgZW1wdHlDZWxscyA9IGJvYXJkV2l0aEVtcHR5LnJlZHVjZSgoYWNjLCByb3csIHkpID0+IHtcbiAgICByb3cuZm9yRWFjaCgoY2VsbCwgeCkgPT4ge1xuICAgICAgaWYgKCFjZWxsKSB7XG4gICAgICAgIGFjYy5wdXNoKHsgeCwgeSB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBhY2M7XG4gIH0sIFtdIGFzIEFycmF5PEdhbWVDZWxsQ29vcmRzPik7XG5cbiAgZm9yIChjb25zdCBjb29yZHMgb2YgZW1wdHlDZWxscykge1xuICAgIGNvbnN0IG5ld0N1YmUgPSBjcmVhdGVSYW5kb21DdWJlKGNvb3JkcywgYXZpYWxhYmxlQ3ViZXNDb2xvcnMpO1xuICAgIHNldENlbGxCeUNvb3Jkcyhib2FyZENvcHksIGNvb3JkcywgbmV3Q3ViZSk7XG4gICAgbmV3Q3ViZXMucHVzaChuZXdDdWJlKTtcbiAgfVxuXG4gIGNvbnN0IGdldEVtcHR5Q291bnRJbkNvbHVtbiA9ICh4OiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4gYm9hcmRXaXRoRW1wdHkucmVkdWNlKChhY2MsIHJvdykgPT4ge1xuICAgICAgaWYgKCFyb3dbeF0pIHtcbiAgICAgICAgYWNjKys7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgMCk7XG4gIH07XG5cbiAgY29uc3QgZmFsbGVkTmV3Q3ViZXMgPSBuZXdDdWJlcy5yZWR1Y2UoKGFjYywgY3ViZSkgPT4ge1xuICAgIGNvbnN0IHsgY29vcmRzIH0gPSBjdWJlO1xuXG4gICAgY29uc3QgZmFsbGVkQ3ViZSA9IHtcbiAgICAgIGZyb206IHtcbiAgICAgICAgeDogY29vcmRzLngsXG4gICAgICAgIHk6IGNvb3Jkcy55IC0gZ2V0RW1wdHlDb3VudEluQ29sdW1uKGNvb3Jkcy54KSxcbiAgICAgIH0sXG4gICAgICB0bzogY29vcmRzLFxuICAgICAgY3ViZSxcbiAgICB9O1xuXG4gICAgYWNjLnB1c2goZmFsbGVkQ3ViZSk7XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCBbXSBhcyBHYW1lRmFsbGVkQ3ViZXMpO1xuXG4gIHJldHVybiB7XG4gICAgbmV3Q3ViZXMsXG4gICAgZmFsbGVkTmV3Q3ViZXMsXG4gICAgYm9hcmQ6IGJvYXJkQ29weSxcbiAgfTtcbn07XG4iLCJleHBvcnQgeyBmaWxsRW1wdHlDZWxscyB9IGZyb20gXCIuL2ZpbGxFbXB0eUNlbGxzXCI7XG4iLCJpbXBvcnQgeyBHYW1lQm9hcmRGaWxsZWQsIEdhbWVDb25maWcsIEdhbWVDdWJlQ29sb3IgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGNyZWF0ZVJhbmRvbUN1YmUgfSBmcm9tIFwiLi4vY3JlYXRlUmFuZG9tQ3ViZVwiO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVCb2FyZCA9IChcbiAgY29uZmlnOiBHYW1lQ29uZmlnLFxuICBhdmlhbGFibGVDdWJlc0NvbG9yczogQXJyYXk8R2FtZUN1YmVDb2xvcj4sXG4pOiBHYW1lQm9hcmRGaWxsZWQgPT4ge1xuICBjb25zdCB7IGJvYXJkUm93cywgYm9hcmRDb2xzIH0gPSBjb25maWc7XG4gIGNvbnN0IGJvYXJkOiBHYW1lQm9hcmRGaWxsZWQgPSBbXTtcblxuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBib2FyZFJvd3M7IHJvdysrKSB7XG4gICAgYm9hcmRbcm93XSA9IFtdO1xuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGJvYXJkQ29sczsgY29sKyspIHtcbiAgICAgIGNvbnN0IGNvb3JkcyA9IHsgeDogY29sLCB5OiByb3cgfTtcbiAgICAgIGNvbnN0IGN1YmUgPSBjcmVhdGVSYW5kb21DdWJlKGNvb3JkcywgYXZpYWxhYmxlQ3ViZXNDb2xvcnMpO1xuICAgICAgYm9hcmRbcm93XVtjb2xdID0gY3ViZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYm9hcmQ7XG59O1xuIiwiZXhwb3J0IHsgZ2VuZXJhdGVCb2FyZCB9IGZyb20gXCIuL2dlbmVyYXRlQm9hcmRcIjtcbiIsImltcG9ydCB7IGdldENlbGxCeUNvb3JkcyB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuaW1wb3J0IHsgR2FtZUN1YmVzLCBHYW1lQ2VsbENvb3JkcywgR2FtZUJvYXJkRmlsbGVkIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBnZXRMaW5rZWRDdWJlcyB9IGZyb20gXCIuLi9nZXRMaW5rZWRDdWJlc1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0Q3ViZXNDaGFpbiA9IChcbiAgYm9hcmQ6IEdhbWVCb2FyZEZpbGxlZCxcbiAgY29vcmRzOiBHYW1lQ2VsbENvb3Jkcyxcbik6IEdhbWVDdWJlcyA9PiB7XG4gIGNvbnN0IGN1YmUgPSBnZXRDZWxsQnlDb29yZHMoYm9hcmQsIGNvb3Jkcyk7XG5cbiAgY29uc3QgbGlua2VkQ3ViZXMgPSBnZXRMaW5rZWRDdWJlcyhcbiAgICBib2FyZCxcbiAgICB7IHg6IGNvb3Jkcy54LCB5OiBjb29yZHMueSB9LFxuICAgIGN1YmUuY29sb3IsXG4gICAgW2N1YmUuaWRdLFxuICApO1xuXG4gIHJldHVybiBbLi4ubGlua2VkQ3ViZXMsIGN1YmVdO1xufTtcbiIsImV4cG9ydCB7IGdldEN1YmVzQ2hhaW4gfSBmcm9tIFwiLi9nZXRDdWJlc0NoYWluXCI7XG4iLCJpbXBvcnQge1xuICBHYW1lQm9hcmRGaWxsZWQsXG4gIEdhbWVDdWJlSWQsXG4gIEdhbWVDZWxsQ29vcmRzLFxuICBHYW1lQ3ViZUNvbG9yLFxuICBHYW1lQ3ViZXMsXG59IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgZ2V0Q2VsbEJ5Q29vcmRzIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRMaW5rZWRDdWJlcyA9IChcbiAgYm9hcmQ6IEdhbWVCb2FyZEZpbGxlZCxcbiAgY29vcmRzOiBHYW1lQ2VsbENvb3JkcyxcbiAgY3ViZUNvbG9yOiBHYW1lQ3ViZUNvbG9yLFxuICBjaGVja2VkQ3ViZXM6IEFycmF5PEdhbWVDdWJlSWQ+LFxuKSA9PiB7XG4gIGNvbnN0IGdldExpbmtlZEN1YmVzID0gKFxuICAgIGJvYXJkOiBHYW1lQm9hcmRGaWxsZWQsXG4gICAgY29vcmRzOiBHYW1lQ2VsbENvb3JkcyxcbiAgICBjdWJlQ29sb3I6IEdhbWVDdWJlQ29sb3IsXG4gICAgY2hlY2tlZEN1YmVzOiBBcnJheTxHYW1lQ3ViZUlkPixcbiAgKSA9PiB7XG4gICAgY29uc3QgbGlua2VkQ3ViZXM6IEdhbWVDdWJlcyA9IFtdO1xuXG4gICAgY29uc3QgZ2V0TGlua2VkQ3ViZSA9IChjb29yZHM6IEdhbWVDZWxsQ29vcmRzKSA9PiB7XG4gICAgICBjb25zdCBjdWJlID0gZ2V0Q2VsbEJ5Q29vcmRzKGJvYXJkLCBjb29yZHMpO1xuXG4gICAgICBpZiAoY3ViZSAmJiBjdWJlLmNvbG9yID09PSBjdWJlQ29sb3IpIHtcbiAgICAgICAgaWYgKGNoZWNrZWRDdWJlcy5pbmNsdWRlcyhjdWJlLmlkKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoZWNrZWRDdWJlcy5wdXNoKGN1YmUuaWQpO1xuXG4gICAgICAgIGxpbmtlZEN1YmVzLnB1c2goXG4gICAgICAgICAgY3ViZSxcbiAgICAgICAgICAuLi5nZXRMaW5rZWRDdWJlcyhib2FyZCwgY29vcmRzLCBjdWJlQ29sb3IsIGNoZWNrZWRDdWJlcyksXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGdldExpbmtlZEN1YmUoeyB4OiBjb29yZHMueCwgeTogY29vcmRzLnkgKyAxIH0pO1xuICAgIGdldExpbmtlZEN1YmUoeyB4OiBjb29yZHMueCAtIDEsIHk6IGNvb3Jkcy55IH0pO1xuICAgIGdldExpbmtlZEN1YmUoeyB4OiBjb29yZHMueCArIDEsIHk6IGNvb3Jkcy55IH0pO1xuICAgIGdldExpbmtlZEN1YmUoeyB4OiBjb29yZHMueCwgeTogY29vcmRzLnkgLSAxIH0pO1xuXG4gICAgcmV0dXJuIGxpbmtlZEN1YmVzO1xuICB9O1xuXG4gIHJldHVybiBnZXRMaW5rZWRDdWJlcyhib2FyZCwgY29vcmRzLCBjdWJlQ29sb3IsIGNoZWNrZWRDdWJlcyk7XG59O1xuIiwiZXhwb3J0IHsgZ2V0TGlua2VkQ3ViZXMgfSBmcm9tIFwiLi9nZXRMaW5rZWRDdWJlc1wiO1xuIiwiaW1wb3J0IHsgR2FtZUJ1cm5lZEN1YmVzLCBHYW1lU2NvcmUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IGdldFVwZGF0ZVNjb3JlID0gKFxuICBidXJuZWRDdWJlczogR2FtZUJ1cm5lZEN1YmVzLFxuICBzY29yZTogR2FtZVNjb3JlLFxuKSA9PiB7XG4gIHJldHVybiBidXJuZWRDdWJlcy5sZW5ndGggKyBzY29yZTtcbn07XG4iLCJleHBvcnQgeyBnZXRVcGRhdGVTY29yZSB9IGZyb20gXCIuL2dldFVwZGF0ZVNjb3JlXCI7XG4iLCJleHBvcnQgeyBjcmVhdGVDdWJlIH0gZnJvbSBcIi4vY3JlYXRlQ3ViZVwiO1xuZXhwb3J0IHsgY3JlYXRlUmFuZG9tQ3ViZSB9IGZyb20gXCIuL2NyZWF0ZVJhbmRvbUN1YmVcIjtcbmV4cG9ydCB7IHRyeUNyZWF0ZVN1cGVyQ3ViZSB9IGZyb20gXCIuL3RyeUNyZWF0ZVN1cGVyQ3ViZVwiO1xuZXhwb3J0IHsgZ2VuZXJhdGVCb2FyZCB9IGZyb20gXCIuL2dlbmVyYXRlQm9hcmRcIjtcbmV4cG9ydCB7IGdldExpbmtlZEN1YmVzIH0gZnJvbSBcIi4vZ2V0TGlua2VkQ3ViZXNcIjtcbmV4cG9ydCB7IGdldEN1YmVzQ2hhaW4gfSBmcm9tIFwiLi9nZXRDdWJlc0NoYWluXCI7XG5leHBvcnQgeyBidXJuQ3ViZXMgfSBmcm9tIFwiLi9idXJuQ3ViZXNcIjtcbmV4cG9ydCB7IGZhbGxDdWJlcyB9IGZyb20gXCIuL2ZhbGxDdWJlc1wiO1xuZXhwb3J0IHsgZmlsbEVtcHR5Q2VsbHMgfSBmcm9tIFwiLi9maWxsRW1wdHlDZWxsc1wiO1xuZXhwb3J0IHsgY2hlY2tIYXNNb3ZlcyB9IGZyb20gXCIuL2NoZWNrSGFzTW92ZXNcIjtcbmV4cG9ydCB7IG1peEN1YmVzSWZOZWVkIH0gZnJvbSBcIi4vbWl4Q3ViZXNJZk5lZWRcIjtcbmV4cG9ydCB7IGNyZWF0ZUNvbmZpZyB9IGZyb20gXCIuL2NyZWF0ZUNvbmZpZ1wiO1xuZXhwb3J0IHsgdXBkYXRlQXZpYWxhYmxlQ3ViZXNDb2xvcnMgfSBmcm9tIFwiLi91cGRhdGVBdmlhbGFibGVDdWJlc0NvbG9yc1wiO1xuZXhwb3J0IHsgdHJ5QnVybkN1YmVzIH0gZnJvbSBcIi4vdHJ5QnVybkN1ZGVzXCI7XG5leHBvcnQgeyBnZXRVcGRhdGVTY29yZSB9IGZyb20gXCIuL2dldFVwZGF0ZVNjb3JlXCI7XG5leHBvcnQgeyBjaGVja0lzV2luIH0gZnJvbSBcIi4vY2hlY2tJc1dpblwiO1xuZXhwb3J0IHsgdXBkYXRlR2FtZVN0YXR1cyB9IGZyb20gXCIuL3VwZGF0ZUdhbWVTdGF0dXNcIjtcbmV4cG9ydCB7IGxvZ1ByaXR0eUJvYXJkIH0gZnJvbSBcIi4vbG9nUHJpdHR5Qm9hcmRcIjtcbmV4cG9ydCB7IHVwZGF0ZVJlbWFpbmluZ01vdmVzIH0gZnJvbSBcIi4vdXBkYXRlUmVtYWluaW5nTW92ZXNcIjtcbiIsImV4cG9ydCB7IGxvZ1ByaXR0eUJvYXJkIH0gZnJvbSBcIi4vbG9nUHJpdHR5Qm9hcmRcIjtcbiIsImltcG9ydCB7IEdhbWVCb2FyZEZpbGxlZCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgbG9nUHJpdHR5Qm9hcmQgPSAoYm9hcmQ6IEdhbWVCb2FyZEZpbGxlZCkgPT4ge1xuICBjb25zdCBjZWxsU3RyTGVuID0gNjtcbiAgY29uc29sZS5sb2coXG4gICAgYm9hcmQubWFwKChyb3cpID0+XG4gICAgICByb3dcbiAgICAgICAgLm1hcCgoY2VsbCkgPT4ge1xuICAgICAgICAgIGlmICghY2VsbCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiX1wiLnJlcGVhdChjZWxsU3RyTGVuKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBjZWxsU3RyID0gYCR7Y2VsbC5jb2xvci5zbGljZSgwLCAxKX1fJHtjZWxsLmlkfWA7XG5cbiAgICAgICAgICByZXR1cm4gY2VsbFN0ci5wYWRFbmQoY2VsbFN0ckxlbiwgXCIgXCIpO1xuICAgICAgICB9KVxuICAgICAgICAuam9pbihcIiBcIiksXG4gICAgKSxcbiAgKTtcbn07XG4iLCJleHBvcnQgeyBtaXhDdWJlc0lmTmVlZCB9IGZyb20gXCIuL21peEN1YmVzSWZOZWVkXCI7XG4iLCJpbXBvcnQgeyBnZXRSYW5kb21JbnQsIGdldENlbGxCeUNvb3JkcywgY29weUJvYXJkIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5pbXBvcnQge1xuICBHYW1lQm9hcmQsXG4gIEdhbWVCb2FyZEZpbGxlZCxcbiAgR2FtZUNvbmZpZyxcbiAgR2FtZU1peGVkQm9hcmQsXG59IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgY2hlY2tIYXNNb3ZlcyB9IGZyb20gXCIuLi9jaGVja0hhc01vdmVzXCI7XG5pbXBvcnQgeyBjcmVhdGVDdWJlIH0gZnJvbSBcIi4uL2NyZWF0ZUN1YmVcIjtcblxuZXhwb3J0IGNvbnN0IG1peEN1YmVzSWZOZWVkID0gKFxuICBjb25maWc6IEdhbWVDb25maWcsXG4gIGZpbGxlZEJvYXJkOiBHYW1lQm9hcmRGaWxsZWQsXG4gIG1peENvdW50OiBudW1iZXIsXG4pID0+IHtcbiAgY29uc3QgeyBib2FyZENvbHMsIGJvYXJkUm93cyB9ID0gY29uZmlnO1xuXG4gIGNvbnN0IGhhc01vdmVzID0gY2hlY2tIYXNNb3Zlcyhjb25maWcsIGZpbGxlZEJvYXJkKTtcbiAgaWYgKGhhc01vdmVzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1peGVkQm9hcmRzOiBbXSxcbiAgICAgIHVwZGF0ZWRCb2FyZDogZmlsbGVkQm9hcmQsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IG1peGVkQm9hcmRzOiBBcnJheTxHYW1lTWl4ZWRCb2FyZD4gPSBbXTtcbiAgbGV0IHByZXZCb2FyZCA9IGZpbGxlZEJvYXJkO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbWl4Q291bnQ7IGkrKykge1xuICAgIGNvbnN0IG5ld01peGVkQm9hcmQ6IEdhbWVNaXhlZEJvYXJkID0gW107XG4gICAgY29uc3QgbmV3Qm9hcmQ6IEdhbWVCb2FyZCA9IEFycmF5LmZyb20oXG4gICAgICB7XG4gICAgICAgIGxlbmd0aDogYm9hcmRSb3dzLFxuICAgICAgfSxcbiAgICAgICgpID0+IEFycmF5LmZyb20oeyBsZW5ndGg6IGJvYXJkQ29scyB9KSxcbiAgICApO1xuXG4gICAgY29uc3QgYXZpYWxhYmxlQ29vcmRzID0gQXJyYXkuZnJvbShcbiAgICAgIHtcbiAgICAgICAgbGVuZ3RoOiBib2FyZFJvd3MgKiBib2FyZENvbHMsXG4gICAgICB9LFxuICAgICAgKF8sIGluZGV4KSA9PiAoe1xuICAgICAgICB4OiBpbmRleCAlIGJvYXJkQ29scyxcbiAgICAgICAgeTogTWF0aC5mbG9vcihpbmRleCAvIGJvYXJkQ29scyksXG4gICAgICB9KSxcbiAgICApO1xuXG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgYm9hcmRSb3dzOyByb3crKykge1xuICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgYm9hcmRDb2xzOyBjb2wrKykge1xuICAgICAgICBjb25zdCByYW5kb21JZHggPSBnZXRSYW5kb21JbnQoMCwgYXZpYWxhYmxlQ29vcmRzLmxlbmd0aCAtIDEpO1xuICAgICAgICBjb25zdCByYW5kb21Db29yZHMgPSBhdmlhbGFibGVDb29yZHNbcmFuZG9tSWR4XTtcbiAgICAgICAgYXZpYWxhYmxlQ29vcmRzLnNwbGljZShyYW5kb21JZHgsIDEpO1xuXG4gICAgICAgIGNvbnN0IGZyb21Db29yZHMgPSB7XG4gICAgICAgICAgeDogY29sLFxuICAgICAgICAgIHk6IHJvdyxcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBjdWJlID0gZ2V0Q2VsbEJ5Q29vcmRzKHByZXZCb2FyZCwgZnJvbUNvb3Jkcyk7XG4gICAgICAgIGNvbnN0IHRvQ29vcmRzID0gcmFuZG9tQ29vcmRzO1xuXG4gICAgICAgIGNvbnN0IG5ld0N1YmUgPSBjcmVhdGVDdWJlKHtcbiAgICAgICAgICBpZDogY3ViZS5pZCxcbiAgICAgICAgICBjb29yZHM6IHRvQ29vcmRzLFxuICAgICAgICAgIGNvbG9yOiBjdWJlLmNvbG9yLFxuICAgICAgICAgIHR5cGU6IGN1YmUudHlwZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbmV3Qm9hcmRbdG9Db29yZHMueV1bdG9Db29yZHMueF0gPSBuZXdDdWJlO1xuICAgICAgICBuZXdNaXhlZEJvYXJkLnB1c2goe1xuICAgICAgICAgIGN1YmU6IG5ld0N1YmUsXG4gICAgICAgICAgZnJvbTogZnJvbUNvb3JkcyxcbiAgICAgICAgICB0bzogdG9Db29yZHMsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1peGVkQm9hcmRzLnB1c2gobmV3TWl4ZWRCb2FyZCk7XG5cbiAgICBjb25zdCBoYXNNb3ZlcyA9IGNoZWNrSGFzTW92ZXMoY29uZmlnLCBuZXdCb2FyZCk7XG5cbiAgICBpZiAoaGFzTW92ZXMgfHwgaSA9PT0gbWl4Q291bnQgLSAxKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtaXhlZEJvYXJkcyxcbiAgICAgICAgdXBkYXRlZEJvYXJkOiBjb3B5Qm9hcmQobmV3Qm9hcmQpLFxuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJldkJvYXJkID0gY29weUJvYXJkKG5ld0JvYXJkKTtcbiAgICB9XG4gIH1cbn07XG4iLCJleHBvcnQgeyB0cnlCdXJuQ3ViZXMgfSBmcm9tIFwiLi90cnlCdXJuQ3VkZXNcIjtcbiIsImltcG9ydCB7IEdhbWVCb2FyZEZpbGxlZCwgR2FtZUNvbmZpZywgR2FtZUN1YmUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGdldEN1YmVzQ2hhaW4gfSBmcm9tIFwiLi4vZ2V0Q3ViZXNDaGFpblwiO1xuaW1wb3J0IHsgYnVybkN1YmVzIH0gZnJvbSBcIi4uL2J1cm5DdWJlc1wiO1xuaW1wb3J0IHsgR0FNRV9DVUJFU19UWVBFIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgY29uc3QgdHJ5QnVybkN1YmVzID0gKFxuICBjb25maWc6IEdhbWVDb25maWcsXG4gIGJvYXJkOiBHYW1lQm9hcmRGaWxsZWQsXG4gIGNsaWNrZWRDdWJlOiBHYW1lQ3ViZSxcbikgPT4ge1xuICBjb25zdCB7IG1pbkNoYWluTGVuZ3RoIH0gPSBjb25maWc7XG5cbiAgY29uc3QgY3ViZXNDaGFpbiA9IGdldEN1YmVzQ2hhaW4oYm9hcmQsIGNsaWNrZWRDdWJlLmNvb3Jkcyk7XG5cbiAgY29uc3QgbmVlZEJ1cm4gPVxuICAgIGN1YmVzQ2hhaW4ubGVuZ3RoID49IG1pbkNoYWluTGVuZ3RoIHx8XG4gICAgY2xpY2tlZEN1YmUudHlwZSAhPT0gR0FNRV9DVUJFU19UWVBFLkJBU0U7XG5cbiAgaWYgKCFuZWVkQnVybikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGJ1cm5DdWJlcyhjb25maWcsIGJvYXJkLCBjdWJlc0NoYWluKTtcbn07XG4iLCJleHBvcnQgeyB0cnlDcmVhdGVTdXBlckN1YmUgfSBmcm9tIFwiLi90cnlDcmVhdGVTdXBlckN1YmVcIjtcbiIsImltcG9ydCB7IEdBTUVfQ1VCRVNfVFlQRSB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7XG4gIEdhbWVCb2FyZCxcbiAgR2FtZUJ1cm5lZEN1YmVzLFxuICBHYW1lQ2VsbENvb3JkcyxcbiAgR2FtZUNvbmZpZyxcbn0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBjb3B5Qm9hcmQsIGdldFJhbmRvbUludCwgc2V0Q2VsbEJ5Q29vcmRzIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5pbXBvcnQgeyBjcmVhdGVDdWJlIH0gZnJvbSBcIi4uL2NyZWF0ZUN1YmVcIjtcblxuY29uc3QgZ2V0UmFuZG9tU3VwZXJDdWJlVHlwZSA9ICgpID0+IHtcbiAgY29uc3Qgc3VwZXJzID0gT2JqZWN0LnZhbHVlcyhHQU1FX0NVQkVTX1RZUEUpLmZpbHRlcihcbiAgICAodHlwZSkgPT4gdHlwZSAhPT0gR0FNRV9DVUJFU19UWVBFLkJBU0UsXG4gICk7XG5cbiAgcmV0dXJuIHN1cGVyc1tnZXRSYW5kb21JbnQoMCwgc3VwZXJzLmxlbmd0aCAtIDEpXTtcbn07XG5cbmV4cG9ydCBjb25zdCB0cnlDcmVhdGVTdXBlckN1YmUgPSAoXG4gIGNvbmZpZzogR2FtZUNvbmZpZyxcbiAgY2xpY2tDb29yZHM6IEdhbWVDZWxsQ29vcmRzLFxuICBidXJuZWRDdWJlczogR2FtZUJ1cm5lZEN1YmVzLFxuICBib2FyZFdpdGhCdXJuZWQ6IEdhbWVCb2FyZCxcbiAgZW5hYmxlOiBib29sZWFuLFxuKSA9PiB7XG4gIGNvbnN0IHsgY3ViZXNUb1N1cGVyIH0gPSBjb25maWc7XG5cbiAgaWYgKGJ1cm5lZEN1YmVzLmxlbmd0aCA8IGN1YmVzVG9TdXBlciB8fCAhZW5hYmxlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJvYXJkOiBib2FyZFdpdGhCdXJuZWQsXG4gICAgICBzdXBlckN1YmVzOiBbXSxcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgYnVybmVkVG9TdXBlckN1YmUgPSBidXJuZWRDdWJlcy5maW5kKFxuICAgIChjdWJlKSA9PlxuICAgICAgY3ViZS5jb29yZHMueCA9PT0gY2xpY2tDb29yZHMueCAmJiBjdWJlLmNvb3Jkcy55ID09PSBjbGlja0Nvb3Jkcy55LFxuICApO1xuXG4gIGNvbnN0IHN1cGVyQ3ViZSA9IGNyZWF0ZUN1YmUoe1xuICAgIGNvb3JkczogYnVybmVkVG9TdXBlckN1YmUuY29vcmRzLFxuICAgIGNvbG9yOiBidXJuZWRUb1N1cGVyQ3ViZS5jb2xvcixcbiAgICB0eXBlOiBnZXRSYW5kb21TdXBlckN1YmVUeXBlKCksXG4gIH0pO1xuXG4gIGNvbnN0IGJvYXJkQnVybmVkV2l0aFN1cGVyID0gY29weUJvYXJkKGJvYXJkV2l0aEJ1cm5lZCk7XG4gIHNldENlbGxCeUNvb3Jkcyhib2FyZEJ1cm5lZFdpdGhTdXBlciwgc3VwZXJDdWJlLmNvb3Jkcywgc3VwZXJDdWJlKTtcblxuICByZXR1cm4ge1xuICAgIGJvYXJkOiBib2FyZEJ1cm5lZFdpdGhTdXBlcixcbiAgICBzdXBlckN1YmVzOiBbc3VwZXJDdWJlXSxcbiAgfTtcbn07XG4iLCJleHBvcnQgeyB1cGRhdGVBdmlhbGFibGVDdWJlc0NvbG9ycyB9IGZyb20gXCIuL3VwZGF0ZUF2aWFsYWJsZUN1YmVzQ29sb3JzXCI7XG4iLCJpbXBvcnQgeyBHYW1lQ29uZmlnIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBHQU1FX0NVQkVTIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBhdmlhbGFibGVDdWJlcyA9IFtcbiAgR0FNRV9DVUJFUy5SRUQsXG4gIEdBTUVfQ1VCRVMuR1JFRU4sXG4gIEdBTUVfQ1VCRVMuQkxVRSxcbiAgR0FNRV9DVUJFUy5ZRUxMT1csXG4gIEdBTUVfQ1VCRVMuUFVSUExFLFxuXTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUF2aWFsYWJsZUN1YmVzQ29sb3JzID0gKGNvbmZpZzogR2FtZUNvbmZpZykgPT4ge1xuICBjb25zdCB7IGN1YmVDb2xvcnNDb3VudCB9ID0gY29uZmlnO1xuXG4gIGlmIChPYmplY3Qua2V5cyhHQU1FX0NVQkVTKS5sZW5ndGggPCBjdWJlQ29sb3JzQ291bnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGN1YmUgY29sb3JzIGNvdW50XCIpO1xuICB9XG5cbiAgcmV0dXJuIGF2aWFsYWJsZUN1YmVzLnNsaWNlKDAsIGN1YmVDb2xvcnNDb3VudCk7XG59O1xuIiwiZXhwb3J0IHsgdXBkYXRlR2FtZVN0YXR1cyB9IGZyb20gXCIuL3VwZGF0ZUdhbWVTdGF0dXNcIjtcbiIsImltcG9ydCB7XG4gIEdhbWVCb2FyZEZpbGxlZCxcbiAgR2FtZUNvbmZpZyxcbiAgR2FtZU1vdmVzLFxuICBHYW1lU2NvcmUsXG4gIEdhbWVTdGF0dXMsXG59IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgY2hlY2tJc1dpbiB9IGZyb20gXCIuLi9jaGVja0lzV2luXCI7XG5pbXBvcnQgeyBHQU1FX1NUQVRVU0VTIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgY2hlY2tIYXNNb3ZlcyB9IGZyb20gXCIuLi9jaGVja0hhc01vdmVzXCI7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVHYW1lU3RhdHVzID0gKFxuICBjb25maWc6IEdhbWVDb25maWcsXG4gIGJvYXJkOiBHYW1lQm9hcmRGaWxsZWQsXG4gIHNjb3JlOiBHYW1lU2NvcmUsXG4gIHNjb3Jlc1RvV2luOiBHYW1lU2NvcmUsXG4gIHN0YXR1czogR2FtZVN0YXR1cyxcbiAgY3VycmVudE1vdmVzOiBHYW1lTW92ZXMsXG4pOiBHYW1lU3RhdHVzID0+IHtcbiAgaWYgKGNoZWNrSXNXaW4oc2NvcmUsIHNjb3Jlc1RvV2luKSkge1xuICAgIHJldHVybiBHQU1FX1NUQVRVU0VTLldJTjtcbiAgfSBlbHNlIGlmICghY2hlY2tIYXNNb3Zlcyhjb25maWcsIGJvYXJkKSB8fCBjdXJyZW50TW92ZXMgPT09IDApIHtcbiAgICByZXR1cm4gR0FNRV9TVEFUVVNFUy5OT19NT1ZFUztcbiAgfVxuXG4gIHJldHVybiBzdGF0dXM7XG59O1xuIiwiZXhwb3J0IHsgdXBkYXRlUmVtYWluaW5nTW92ZXMgfSBmcm9tIFwiLi91cGRhdGVSZW1haW5pbmdNb3Zlc1wiO1xuIiwiaW1wb3J0IHsgR2FtZU1vdmVzIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVSZW1haW5pbmdNb3ZlcyA9IChjdXJyZW50TW92ZXM6IEdhbWVNb3ZlcykgPT4ge1xuICBjb25zdCB1cGRhdGVkID0gY3VycmVudE1vdmVzIC0gMTtcbiAgcmV0dXJuIHVwZGF0ZWQ7XG59O1xuIiwiZXhwb3J0IHsgR2FtZSB9IGZyb20gXCIuL3VpXCI7XG4iLCJpbXBvcnQgeyBBcHBsaWNhdGlvbiwgQXNzZXRzLCBDb250YWluZXIgfSBmcm9tIFwicGl4aS5qc1wiO1xuaW1wb3J0IHsgQVNTRVRTLCBHQU1FX0NVQkVTLCBHQU1FX1NUQVRVU0VTIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHtcbiAgR2FtZUJvYXJkLFxuICBHYW1lQnVybmVkQ3ViZXMsXG4gIEdhbWVDZWxsQ29vcmRzLFxuICBHYW1lQ29uZmlnLFxuICBHYW1lQ3ViZUNvbG9yLFxuICBHYW1lRmFsbGVkQ3ViZXMsXG4gIEdhbWVNaXhlZEJvYXJkLFxuICBHYW1lU3RhdHVzLFxuICBHYW1lU3VwZXJDdWJlcyxcbn0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBDbGlja0NlbGwsIFN0YXJ0R2FtZSB9IGZyb20gXCIuLi9wb3J0cy5pbnB1dFwiO1xuaW1wb3J0IHsgY3JlYXRlQ2xpY2tDZWxsLCBjcmVhdGVTdGFydEdhbWUgfSBmcm9tIFwiLi4vYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IEdhbWVQYW5lbENvbnRhaW5lciB9IGZyb20gXCIuL2dhbWVQYW5lbFwiO1xuaW1wb3J0IHsgR2FtZUJvYXJkQ29udGFpbmVyIH0gZnJvbSBcIi4vZ2FtZUJvYXJkXCI7XG5pbXBvcnQgeyB3YWl0IH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBHYW1lIHtcbiAgcHJpdmF0ZSBhcHA6IEFwcGxpY2F0aW9uO1xuICBwcml2YXRlIG1haW5Db250YWluZXI6IENvbnRhaW5lcjtcblxuICBwcml2YXRlIGVkaXRhYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgYm9hcmQ6IEdhbWVCb2FyZCA9IFtdO1xuICBwcml2YXRlIGF2aWFsYWJsZUN1YmVzQ29sb3JzOiBBcnJheTxHYW1lQ3ViZUNvbG9yPiA9IFtcbiAgICBHQU1FX0NVQkVTLlJFRCxcbiAgICBHQU1FX0NVQkVTLkdSRUVOLFxuICAgIEdBTUVfQ1VCRVMuQkxVRSxcbiAgICBHQU1FX0NVQkVTLllFTExPVyxcbiAgICBHQU1FX0NVQkVTLlBVUlBMRSxcbiAgXTtcblxuICBwcml2YXRlIHNjb3JlOiBudW1iZXI7XG4gIHByaXZhdGUgc3RhdHVzOiBHYW1lU3RhdHVzO1xuICBwcml2YXRlIGNvbmZpZzogR2FtZUNvbmZpZyA9IHtcbiAgICBib2FyZFJvd3M6IDksXG4gICAgYm9hcmRDb2xzOiA5LFxuICAgIGN1YmVDb2xvcnNDb3VudDogNSxcbiAgICBtaW5DaGFpbkxlbmd0aDogNCxcbiAgICBzY29yZXNUb1dpbjogMjAwLFxuICAgIG1vdmVDb3VudDogMjAsXG4gICAgbWl4Q291bnQ6IDIsXG4gICAgY3ViZXNUb1N1cGVyOiA1LFxuICAgIHN1cGVyQm9tYlJhZGl1czogMixcbiAgfTtcblxuICBwcml2YXRlIHJlbWFpbmluZ01vdmVzID0gdGhpcy5jb25maWcubW92ZUNvdW50O1xuXG4gIHByaXZhdGUgc3RhcnRHYW1lOiBTdGFydEdhbWU7XG4gIHByaXZhdGUgY2xpY2tDZWxsOiBDbGlja0NlbGw7XG5cbiAgcHJpdmF0ZSBnYW1lQm9hcmRDb250YWluZXI6IEdhbWVCb2FyZENvbnRhaW5lcjtcbiAgcHJpdmF0ZSBwYW5lbFNjb3JlQ29udGFpbmVyOiBHYW1lUGFuZWxDb250YWluZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hcHAgPSBuZXcgQXBwbGljYXRpb24oKTtcblxuICAgIHRoaXMubWFpbkNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKTtcblxuICAgIHRoaXMuZ2FtZUJvYXJkQ29udGFpbmVyID0gbmV3IEdhbWVCb2FyZENvbnRhaW5lcih0aGlzLmFwcCwge1xuICAgICAgd2lkdGg6IDUwMCxcbiAgICAgIGhlaWdodDogNTAwLFxuICAgICAgcm93czogdGhpcy5jb25maWcuYm9hcmRSb3dzLFxuICAgICAgY29sczogdGhpcy5jb25maWcuYm9hcmRDb2xzLFxuICAgIH0pO1xuXG4gICAgdGhpcy5wYW5lbFNjb3JlQ29udGFpbmVyID0gbmV3IEdhbWVQYW5lbENvbnRhaW5lcih7XG4gICAgICB3aWR0aDogMzAwLFxuICAgICAgaGVpZ2h0OiAzMDAsXG4gICAgfSk7XG5cbiAgICB0aGlzLnN0YXJ0R2FtZSA9IGNyZWF0ZVN0YXJ0R2FtZSh7XG4gICAgICByZWFkQ29uZmlnOiAoKSA9PiB0aGlzLmNvbmZpZyxcbiAgICAgIHNhdmVBdmlhbGFibGVDdWJlc0NvbG9yczogKGF2aWFsYWJsZUN1YmVzQ29sb3JzKSA9PlxuICAgICAgICAodGhpcy5hdmlhbGFibGVDdWJlc0NvbG9ycyA9IGF2aWFsYWJsZUN1YmVzQ29sb3JzKSxcbiAgICAgIHNhdmVCb2FyZDogKGJvYXJkKSA9PiAodGhpcy5ib2FyZCA9IGJvYXJkKSxcbiAgICAgIHNhdmVTY29yZTogKHNjb3JlKSA9PiAodGhpcy5zY29yZSA9IHNjb3JlKSxcbiAgICAgIHNhdmVTdGF0dXM6IChzdGF0dXMpID0+ICh0aGlzLnN0YXR1cyA9IHN0YXR1cyksXG4gICAgICBzYXZlUmVtYWluaW5nTW92ZXM6IChtb3ZlcykgPT4gKHRoaXMucmVtYWluaW5nTW92ZXMgPSBtb3ZlcyksXG4gICAgfSk7XG5cbiAgICB0aGlzLmNsaWNrQ2VsbCA9IGNyZWF0ZUNsaWNrQ2VsbCh7XG4gICAgICByZWFkQ29uZmlnOiAoKSA9PiB0aGlzLmNvbmZpZyxcbiAgICAgIHJlYWRCb2FyZDogKCkgPT4gdGhpcy5ib2FyZCxcbiAgICAgIHJlYWRTY29yZTogKCkgPT4gdGhpcy5zY29yZSxcbiAgICAgIHJlYWRBdmlhbGFibGVDdWJlc0NvbG9yczogKCkgPT4gdGhpcy5hdmlhbGFibGVDdWJlc0NvbG9ycyxcbiAgICAgIHJlYWRTdGF0dXM6ICgpID0+IHRoaXMuc3RhdHVzLFxuICAgICAgcmVhZFJlbWFpbmluZ01vdmVzOiAoKSA9PiB0aGlzLnJlbWFpbmluZ01vdmVzLFxuICAgICAgc2F2ZUJvYXJkOiAoYm9hcmQpID0+ICh0aGlzLmJvYXJkID0gYm9hcmQpLFxuICAgICAgc2F2ZVNjb3JlOiAoc2NvcmUpID0+ICh0aGlzLnNjb3JlID0gc2NvcmUpLFxuICAgICAgc2F2ZVN0YXR1czogKHN0YXR1cykgPT4gKHRoaXMuc3RhdHVzID0gc3RhdHVzKSxcbiAgICAgIHNhdmVSZW1haW5pbmdNb3ZlczogKG1vdmVzKSA9PiAodGhpcy5yZW1haW5pbmdNb3ZlcyA9IG1vdmVzKSxcbiAgICAgIHJlYWRNaXhDb3VudDogKCkgPT4gdGhpcy5jb25maWcubWl4Q291bnQsXG4gICAgfSk7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB0aGlzLmVkaXRhYmxlID0gdHJ1ZTtcbiAgICB0aGlzLnN0YXJ0R2FtZSgpO1xuXG4gICAgdGhpcy5yZW5kZXJJbml0aWFsQm9hcmQoKTtcbiAgICB0aGlzLnJlbmRlckluaXRpYWxQYW5lbCgpO1xuICB9XG5cbiAgYXN5bmMgaW5pdCgpIHtcbiAgICBhd2FpdCB0aGlzLmFwcC5pbml0KHsgYmFja2dyb3VuZDogXCIjQTFBMUExXCIsIHJlc2l6ZVRvOiB3aW5kb3cgfSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmFwcC5jYW52YXMpO1xuXG4gICAgYXdhaXQgdGhpcy5sb2FkQXNzZXRzKCk7XG5cbiAgICBjb25zdCBjb250YWluZXJXaWR0aCA9IDEwMDA7XG4gICAgY29uc3QgY29udGFpbmVySGVpZ2h0ID0gNzAwO1xuXG4gICAgdGhpcy5tYWluQ29udGFpbmVyLnNldFNpemUoY29udGFpbmVyV2lkdGgsIGNvbnRhaW5lckhlaWdodCk7XG4gICAgdGhpcy5tYWluQ29udGFpbmVyLnBvc2l0aW9uLnNldChcbiAgICAgICh0aGlzLmFwcC5zY3JlZW4ud2lkdGggLSBjb250YWluZXJXaWR0aCkgLyAyLFxuICAgICAgKHRoaXMuYXBwLnNjcmVlbi5oZWlnaHQgLSBjb250YWluZXJIZWlnaHQpIC8gMixcbiAgICApO1xuXG4gICAgdGhpcy5wYW5lbFNjb3JlQ29udGFpbmVyLnBvc2l0aW9uLnNldChcbiAgICAgIGNvbnRhaW5lcldpZHRoIC0gNTAgLSAzMDAsXG4gICAgICBjb250YWluZXJIZWlnaHQgLyAyIC0gMzAwIC8gMixcbiAgICApO1xuXG4gICAgdGhpcy5nYW1lQm9hcmRDb250YWluZXIucG9zaXRpb24uc2V0KDUwLCBjb250YWluZXJIZWlnaHQgLSA1MCAtIDUwMCk7XG5cbiAgICB0aGlzLm1haW5Db250YWluZXIuYWRkQ2hpbGQodGhpcy5nYW1lQm9hcmRDb250YWluZXIpO1xuICAgIHRoaXMubWFpbkNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLnBhbmVsU2NvcmVDb250YWluZXIpO1xuICAgIHRoaXMuYXBwLnN0YWdlLmFkZENoaWxkKHRoaXMubWFpbkNvbnRhaW5lcik7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIG9uQ2VsbENsaWNrKGNvb3JkczogR2FtZUNlbGxDb29yZHMpIHtcbiAgICBpZiAoIXRoaXMuZWRpdGFibGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmNsaWNrQ2VsbChjb29yZHMpO1xuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5lZGl0YWJsZSA9IGZhbHNlO1xuXG4gICAgdGhpcy5yZW5kZXJTY29yZSgpO1xuICAgIHRoaXMucmVuZGVyTW92ZXMoKTtcblxuICAgIGF3YWl0IHRoaXMucmVuZGVyQnVybmVkQm9hcmQocmVzdWx0LmJ1cm5lZEN1YmVzLCByZXN1bHQuYm9hcmRXaXRoQnVybmVkKTtcblxuICAgIGF3YWl0IHRoaXMucmVuZGVyU3VwZXJDdWJlcyhyZXN1bHQuc3VwZXJDdWJlcyk7XG5cbiAgICBhd2FpdCB0aGlzLnJlbmRlckZhbGxlZEJvYXJkKFxuICAgICAgcmVzdWx0LmZhbGxlZEN1YmVzLmNvbmNhdChyZXN1bHQuZmFsbGVkTmV3Q3ViZXMpLFxuICAgICAgcmVzdWx0LmJvYXJkV2l0aG91dE1vdmVkLFxuICAgICk7XG5cbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gR0FNRV9TVEFUVVNFUy5XSU4pIHtcbiAgICAgIHdpbmRvdy5hbGVydChcIldJTlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocmVzdWx0Lm1peGVkQm9hcmRzLmxlbmd0aCkge1xuICAgICAgYXdhaXQgdGhpcy5yZW5kZXJNaXhlZEJvYXJkKHJlc3VsdC5taXhlZEJvYXJkcyk7XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IEdBTUVfU1RBVFVTRVMuTk9fTU9WRVMpIHtcbiAgICAgIHdpbmRvdy5hbGVydChcIk5PX01PVkVTXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlckluaXRpYWxCb2FyZCgpO1xuICAgICAgdGhpcy5lZGl0YWJsZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJJbml0aWFsQm9hcmQoKSB7XG4gICAgdGhpcy5nYW1lQm9hcmRDb250YWluZXIucmVuZGVyQ3ViZXMoXG4gICAgICB0aGlzLmJvYXJkLFxuICAgICAgdGhpcy5vbkNlbGxDbGljay5iaW5kKHRoaXMpLFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHJlbmRlckJ1cm5lZEJvYXJkKFxuICAgIGJ1cm5lZDogR2FtZUJ1cm5lZEN1YmVzLFxuICAgIGJvYXJkV2l0aG91dEJ1cm5lZDogR2FtZUJvYXJkLFxuICApIHtcbiAgICB0aGlzLmdhbWVCb2FyZENvbnRhaW5lci5yZW5kZXJDdWJlcyhib2FyZFdpdGhvdXRCdXJuZWQpO1xuICAgIGF3YWl0IHRoaXMuZ2FtZUJvYXJkQ29udGFpbmVyLnJlbmRlckJ1cm5lZChidXJuZWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyByZW5kZXJTdXBlckN1YmVzKHN1cGVyQ3ViZXM6IEdhbWVTdXBlckN1YmVzKSB7XG4gICAgYXdhaXQgdGhpcy5nYW1lQm9hcmRDb250YWluZXIucmVuZGVyU3VwZXJDdWJlcyhzdXBlckN1YmVzKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgcmVuZGVyRmFsbGVkQm9hcmQoXG4gICAgZmFsbGVkOiBHYW1lRmFsbGVkQ3ViZXMsXG4gICAgYm9hcmRXaXRob3V0TW92ZWQ6IEdhbWVCb2FyZCxcbiAgKSB7XG4gICAgdGhpcy5nYW1lQm9hcmRDb250YWluZXIucmVuZGVyQ3ViZXMoYm9hcmRXaXRob3V0TW92ZWQpO1xuICAgIGF3YWl0IHRoaXMuZ2FtZUJvYXJkQ29udGFpbmVyLnJlbmRlckZhbGxlZChmYWxsZWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyByZW5kZXJNaXhlZEJvYXJkKG1peGVkQm9hcmRzOiBBcnJheTxHYW1lTWl4ZWRCb2FyZD4pIHtcbiAgICBmb3IgYXdhaXQgKGNvbnN0IG1peGVkQm9hcmQgb2YgbWl4ZWRCb2FyZHMpIHtcbiAgICAgIGF3YWl0IHRoaXMuZ2FtZUJvYXJkQ29udGFpbmVyLnJlbmRlck1peGVkKG1peGVkQm9hcmQpO1xuXG4gICAgICBhd2FpdCB3YWl0KDIwMCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJJbml0aWFsUGFuZWwoKSB7XG4gICAgdGhpcy5wYW5lbFNjb3JlQ29udGFpbmVyLnJlbmRlcih0aGlzLnNjb3JlLCB0aGlzLnJlbWFpbmluZ01vdmVzKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyU2NvcmUoKSB7XG4gICAgdGhpcy5wYW5lbFNjb3JlQ29udGFpbmVyLnJlbmRlclNjb3JlKHRoaXMuc2NvcmUpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJNb3ZlcygpIHtcbiAgICB0aGlzLnBhbmVsU2NvcmVDb250YWluZXIucmVuZGVyTW92ZXModGhpcy5yZW1haW5pbmdNb3Zlcyk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGxvYWRBc3NldHMoKSB7XG4gICAgQXNzZXRzLmFkZChbXG4gICAgICB7XG4gICAgICAgIGFsaWFzOiBBU1NFVFMuQk9BUkQuQUxJQVMsXG4gICAgICAgIHNyYzogQVNTRVRTLkJPQVJELlNSQyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGFsaWFzOiBBU1NFVFMuQkxVRV9DVUJFLkFMSUFTLFxuICAgICAgICBzcmM6IEFTU0VUUy5CTFVFX0NVQkUuU1JDLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYWxpYXM6IEFTU0VUUy5SRURfQ1VCRS5BTElBUyxcbiAgICAgICAgc3JjOiBBU1NFVFMuUkVEX0NVQkUuU1JDLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYWxpYXM6IEFTU0VUUy5HUkVFTl9DVUJFLkFMSUFTLFxuICAgICAgICBzcmM6IEFTU0VUUy5HUkVFTl9DVUJFLlNSQyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGFsaWFzOiBBU1NFVFMuWUVMTE9XX0NVQkUuQUxJQVMsXG4gICAgICAgIHNyYzogQVNTRVRTLllFTExPV19DVUJFLlNSQyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGFsaWFzOiBBU1NFVFMuUFVSUExFX0NVQkUuQUxJQVMsXG4gICAgICAgIHNyYzogQVNTRVRTLlBVUlBMRV9DVUJFLlNSQyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGFsaWFzOiBBU1NFVFMuUEFORUxfU0NPUkUuQUxJQVMsXG4gICAgICAgIHNyYzogQVNTRVRTLlBBTkVMX1NDT1JFLlNSQyxcbiAgICAgIH0sXG4gICAgXSk7XG5cbiAgICBhd2FpdCBBc3NldHMubG9hZChbXG4gICAgICBBU1NFVFMuQk9BUkQuQUxJQVMsXG4gICAgICBBU1NFVFMuUEFORUxfU0NPUkUuQUxJQVMsXG4gICAgICBBU1NFVFMuQkxVRV9DVUJFLkFMSUFTLFxuICAgICAgQVNTRVRTLlJFRF9DVUJFLkFMSUFTLFxuICAgICAgQVNTRVRTLkdSRUVOX0NVQkUuQUxJQVMsXG4gICAgICBBU1NFVFMuWUVMTE9XX0NVQkUuQUxJQVMsXG4gICAgICBBU1NFVFMuUFVSUExFX0NVQkUuQUxJQVMsXG4gICAgXSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEFwcGxpY2F0aW9uLCBBc3NldHMsIENvbnRhaW5lciwgUG9pbnQsIFNwcml0ZSwgVGlja2VyIH0gZnJvbSBcInBpeGkuanNcIjtcbmltcG9ydCB7IEFTU0VUUywgR0FNRV9DVUJFU19UWVBFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHtcbiAgR2FtZUJvYXJkLFxuICBHYW1lQnVybmVkQ3ViZXMsXG4gIEdhbWVDZWxsQ29vcmRzLFxuICBHYW1lQ3ViZSxcbiAgR2FtZUZhbGxlZEN1YmVzLFxuICBHYW1lTWl4ZWRCb2FyZCxcbiAgR2FtZVN1cGVyQ3ViZXMsXG59IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgY2xhc3MgR2FtZUJvYXJkQ29udGFpbmVyIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhcHA6IEFwcGxpY2F0aW9uLFxuICAgIHByaXZhdGUgb3B0aW9uczoge1xuICAgICAgd2lkdGg6IG51bWJlcjtcbiAgICAgIGhlaWdodDogbnVtYmVyO1xuICAgICAgcm93czogbnVtYmVyO1xuICAgICAgY29sczogbnVtYmVyO1xuICAgIH0sXG4gICkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBnZXQgY3ViZVdpZHRoKCkge1xuICAgIHJldHVybiAodGhpcy5vcHRpb25zLndpZHRoIC0gMzApIC8gdGhpcy5vcHRpb25zLmNvbHM7XG4gIH1cblxuICBnZXQgY3ViZUhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5jdWJlV2lkdGg7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyQ3ViZXMoXG4gICAgYm9hcmQ6IEdhbWVCb2FyZCxcbiAgICBjYWxsYmFjaz86IChjb29yZHM6IEdhbWVDZWxsQ29vcmRzKSA9PiB2b2lkLFxuICApIHtcbiAgICB0aGlzLnJlbW92ZUNoaWxkcmVuKCk7XG4gICAgdGhpcy5yZW5kZXJCb2FyZEJnKCk7XG5cbiAgICBib2FyZC5mb3JFYWNoKChyb3csIGkpID0+IHtcbiAgICAgIHJvdy5mb3JFYWNoKChjdWJlLCBqKSA9PiB7XG4gICAgICAgIGlmICghY3ViZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN1YmVTcHJpdGUgPSB0aGlzLmNyZWF0ZUN1YmUoY3ViZSwgY2FsbGJhY2spO1xuICAgICAgICB0aGlzLmFkZENoaWxkKGN1YmVTcHJpdGUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyQnVybmVkKGJ1cm5lZEN1YmVzOiBHYW1lQnVybmVkQ3ViZXMpIHtcbiAgICBjb25zdCBwcm9taXNlcyA9IGJ1cm5lZEN1YmVzLm1hcCgoYnVybmVkQ3ViZSkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1YmVTcHJpdGUgPSB0aGlzLmNyZWF0ZUN1YmUoYnVybmVkQ3ViZSk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoY3ViZVNwcml0ZSk7XG5cbiAgICAgICAgY29uc3QgYW5pbWF0aW9uTG9naWMgPSAodGlja2VyOiBUaWNrZXIpID0+IHtcbiAgICAgICAgICBpZiAoY3ViZVNwcml0ZS5hbHBoYSA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKGN1YmVTcHJpdGUpO1xuICAgICAgICAgICAgdGhpcy5hcHAudGlja2VyLnJlbW92ZShhbmltYXRpb25Mb2dpYyk7XG4gICAgICAgICAgICByZXNvbHZlKFwiXCIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdWJlU3ByaXRlLndpZHRoIC09IDAuMTtcbiAgICAgICAgICAgIGN1YmVTcHJpdGUuaGVpZ2h0IC09IDAuMTtcbiAgICAgICAgICAgIGN1YmVTcHJpdGUuYWxwaGEgLT0gMC4xICogdGlja2VyLmRlbHRhVGltZTtcbiAgICAgICAgICAgIGN1YmVTcHJpdGUucG9zaXRpb24uc2V0KGN1YmVTcHJpdGUueCArIDAuMDUsIGN1YmVTcHJpdGUueSArIDAuMDUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmFwcC50aWNrZXIuYWRkKGFuaW1hdGlvbkxvZ2ljKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHt9KTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXJTdXBlckN1YmVzKHN1cGVyQ3ViZXM6IEdhbWVTdXBlckN1YmVzKSB7XG4gICAgY29uc3QgcHJvbWlzZXMgPSBzdXBlckN1YmVzLm1hcCgoc3VwZXJDdWJlKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgY29uc3QgY3ViZVNwcml0ZSA9IHRoaXMuY3JlYXRlQ3ViZShzdXBlckN1YmUpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKGN1YmVTcHJpdGUpO1xuXG4gICAgICAgIGNvbnN0IGFuaW1hdGlvbkxvZ2ljID0gKHRpY2tlcjogVGlja2VyKSA9PiB7XG4gICAgICAgICAgaWYgKGN1YmVTcHJpdGUud2lkdGggPj0gdGhpcy5jdWJlV2lkdGggKiAxLjMpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQoY3ViZVNwcml0ZSk7XG4gICAgICAgICAgICB0aGlzLmFwcC50aWNrZXIucmVtb3ZlKGFuaW1hdGlvbkxvZ2ljKTtcbiAgICAgICAgICAgIHJlc29sdmUoXCJcIik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGN1YmVTcHJpdGUud2lkdGggKz0gMC40ICogdGlja2VyLmRlbHRhVGltZTtcbiAgICAgICAgICAgIGN1YmVTcHJpdGUuaGVpZ2h0ICs9IDAuNCAqIHRpY2tlci5kZWx0YVRpbWU7XG4gICAgICAgICAgICBjdWJlU3ByaXRlLnBvc2l0aW9uLnNldChcbiAgICAgICAgICAgICAgY3ViZVNwcml0ZS54IC0gMC4yICogdGlja2VyLmRlbHRhVGltZSxcbiAgICAgICAgICAgICAgY3ViZVNwcml0ZS55IC0gMC4yICogdGlja2VyLmRlbHRhVGltZSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYXBwLnRpY2tlci5hZGQoYW5pbWF0aW9uTG9naWMpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge30pO1xuICB9XG5cbiAgcHVibGljIHJlbmRlckZhbGxlZChmYWxsZWRDdWJlczogR2FtZUZhbGxlZEN1YmVzKSB7XG4gICAgY29uc3QgcHJvbWlzZXMgPSBmYWxsZWRDdWJlcy5tYXAoKGZhbGxlZEN1YmUpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBjb25zdCBjdWJlU3ByaXRlID0gdGhpcy5jcmVhdGVDdWJlKHtcbiAgICAgICAgICAuLi5mYWxsZWRDdWJlLmN1YmUsXG4gICAgICAgICAgY29vcmRzOiBmYWxsZWRDdWJlLmZyb20sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoY3ViZVNwcml0ZSk7XG5cbiAgICAgICAgY29uc3QgYW5pbWF0aW9uTG9naWMgPSAodGlja2VyOiBUaWNrZXIpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGFydFBvc2l0aW9uID0gY3ViZVNwcml0ZS5wb3NpdGlvbjtcbiAgICAgICAgICBjb25zdCBlbmRQb3N0aW9uID0gdGhpcy5nZXRDdWJlUG9zaXRpb25CeUNvb3JkcyhmYWxsZWRDdWJlLnRvKTtcblxuICAgICAgICAgIGNvbnN0IGRpZmYgPSBuZXcgUG9pbnQoXG4gICAgICAgICAgICBzdGFydFBvc2l0aW9uLngsXG4gICAgICAgICAgICBlbmRQb3N0aW9uLnkgLSBzdGFydFBvc2l0aW9uLnksXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGlmIChkaWZmLnkgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuYXBwLnRpY2tlci5yZW1vdmUoYW5pbWF0aW9uTG9naWMpO1xuICAgICAgICAgICAgcmVzb2x2ZShcIlwiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbmV4dFkgPSBNYXRoLm1pbihcbiAgICAgICAgICAgICAgc3RhcnRQb3NpdGlvbi55ICsgNSAqIHRpY2tlci5kZWx0YVRpbWUsXG4gICAgICAgICAgICAgIGVuZFBvc3Rpb24ueSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjdWJlU3ByaXRlLnBvc2l0aW9uLnNldChzdGFydFBvc2l0aW9uLngsIG5leHRZKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5hcHAudGlja2VyLmFkZChhbmltYXRpb25Mb2dpYyk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7fSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgcmVuZGVyTWl4ZWQobWl4ZWRCb2FyZDogR2FtZU1peGVkQm9hcmQpIHtcbiAgICB0aGlzLnJlbW92ZUNoaWxkcmVuKCk7XG4gICAgdGhpcy5yZW5kZXJCb2FyZEJnKCk7XG5cbiAgICBjb25zdCBwcm9taXNlcyA9IG1peGVkQm9hcmQubWFwKChtaXhlZEN1YmUpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBjb25zdCBjdWJlU3ByaXRlID0gdGhpcy5jcmVhdGVDdWJlKG1peGVkQ3ViZS5jdWJlKTtcblxuICAgICAgICBjb25zdCBmcm9tUG9zaXRpb24gPSB0aGlzLmdldEN1YmVQb3NpdGlvbkJ5Q29vcmRzKG1peGVkQ3ViZS5mcm9tKTtcbiAgICAgICAgY29uc3QgdG9Qb3NpdGlvbiA9IHRoaXMuZ2V0Q3ViZVBvc2l0aW9uQnlDb29yZHMobWl4ZWRDdWJlLnRvKTtcblxuICAgICAgICB0aGlzLmFkZENoaWxkKGN1YmVTcHJpdGUpO1xuICAgICAgICBjdWJlU3ByaXRlLnBvc2l0aW9uLnNldChmcm9tUG9zaXRpb24ueCwgZnJvbVBvc2l0aW9uLnkpO1xuXG4gICAgICAgIGNvbnN0IGFuaW1hdGlvbkxvZ2ljID0gKHRpY2tlcjogVGlja2VyKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RhcnRQb3NpdGlvbiA9IGN1YmVTcHJpdGUucG9zaXRpb247XG5cbiAgICAgICAgICBjb25zdCBkaWZmID0gbmV3IFBvaW50KFxuICAgICAgICAgICAgdG9Qb3NpdGlvbi54IC0gc3RhcnRQb3NpdGlvbi54LFxuICAgICAgICAgICAgdG9Qb3NpdGlvbi55IC0gc3RhcnRQb3NpdGlvbi55LFxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBpZiAoZGlmZi54ID09PSAwICYmIGRpZmYueSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5hcHAudGlja2VyLnJlbW92ZShhbmltYXRpb25Mb2dpYyk7XG4gICAgICAgICAgICByZXNvbHZlKFwiXCIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBwZXJUaWNrID0gNTtcblxuICAgICAgICAgICAgY29uc3QgcGVyVGlja1ggPSBmcm9tUG9zaXRpb24ueCA+IHRvUG9zaXRpb24ueCA/IC1wZXJUaWNrIDogcGVyVGljaztcbiAgICAgICAgICAgIGNvbnN0IHBlclRpY2tZID0gZnJvbVBvc2l0aW9uLnkgPiB0b1Bvc2l0aW9uLnkgPyAtcGVyVGljayA6IHBlclRpY2s7XG5cbiAgICAgICAgICAgIGNvbnN0IG5leHRYID0gKGZyb21Qb3NpdGlvbi54ID4gdG9Qb3NpdGlvbi54ID8gTWF0aC5tYXggOiBNYXRoLm1pbikoXG4gICAgICAgICAgICAgIHN0YXJ0UG9zaXRpb24ueCArIHBlclRpY2tYICogdGlja2VyLmRlbHRhVGltZSxcbiAgICAgICAgICAgICAgdG9Qb3NpdGlvbi54LFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc3QgbmV4dFkgPSAoZnJvbVBvc2l0aW9uLnkgPiB0b1Bvc2l0aW9uLnkgPyBNYXRoLm1heCA6IE1hdGgubWluKShcbiAgICAgICAgICAgICAgc3RhcnRQb3NpdGlvbi55ICsgcGVyVGlja1kgKiB0aWNrZXIuZGVsdGFUaW1lLFxuICAgICAgICAgICAgICB0b1Bvc2l0aW9uLnksXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjdWJlU3ByaXRlLnBvc2l0aW9uLnNldChuZXh0WCwgbmV4dFkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmFwcC50aWNrZXIuYWRkKGFuaW1hdGlvbkxvZ2ljKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge30pO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVDdWJlKFxuICAgIGN1YmU6IEdhbWVDdWJlLFxuICAgIGNhbGxiYWNrPzogKGNvb3JkczogR2FtZUNlbGxDb29yZHMpID0+IHZvaWQsXG4gICkge1xuICAgIGNvbnN0IHRleHR1cmUgPSBBc3NldHMuZ2V0KGN1YmUuY29sb3IpO1xuICAgIGNvbnN0IGN1YmVTcHJpdGUgPSBuZXcgU3ByaXRlKHRleHR1cmUpO1xuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5nZXRDdWJlUG9zaXRpb25CeUNvb3JkcyhjdWJlLmNvb3Jkcyk7XG5cbiAgICBjdWJlU3ByaXRlLndpZHRoID0gdGhpcy5jdWJlV2lkdGg7XG4gICAgY3ViZVNwcml0ZS5oZWlnaHQgPSB0aGlzLmN1YmVIZWlnaHQ7XG4gICAgY3ViZVNwcml0ZS5wb3NpdGlvbi5zZXQocG9zaXRpb24ueCwgcG9zaXRpb24ueSk7XG5cbiAgICBpZiAoY3ViZS50eXBlICE9PSBHQU1FX0NVQkVTX1RZUEUuQkFTRSkge1xuICAgICAgY3ViZVNwcml0ZS5hbHBoYSA9IDAuNztcbiAgICB9XG5cbiAgICBjdWJlU3ByaXRlLmV2ZW50TW9kZSA9IFwic3RhdGljXCI7XG4gICAgY3ViZVNwcml0ZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY3ViZVNwcml0ZS5vbihcInBvaW50ZXJkb3duXCIsICgpID0+IGNhbGxiYWNrKGN1YmUuY29vcmRzKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGN1YmVTcHJpdGU7XG4gIH1cblxuICBwcml2YXRlIGdldEN1YmVQb3NpdGlvbkJ5Q29vcmRzKGNvb3JkczogR2FtZUNlbGxDb29yZHMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogY29vcmRzLnggKiB0aGlzLmN1YmVXaWR0aCArIDE1LFxuICAgICAgeTogY29vcmRzLnkgKiB0aGlzLmN1YmVIZWlnaHQgKyAxNSxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJCb2FyZEJnKCkge1xuICAgIGNvbnN0IGJvYXJkU3ByaXRlID0gbmV3IFNwcml0ZShBc3NldHMuZ2V0KEFTU0VUUy5CT0FSRC5BTElBUykpO1xuICAgIGJvYXJkU3ByaXRlLnNldFNpemUodGhpcy5vcHRpb25zLndpZHRoLCB0aGlzLm9wdGlvbnMuaGVpZ2h0KTtcbiAgICB0aGlzLmFkZENoaWxkKGJvYXJkU3ByaXRlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQXNzZXRzLCBUZXh0LCBDb250YWluZXIsIFNwcml0ZSwgR3JhcGhpY3MgfSBmcm9tIFwicGl4aS5qc1wiO1xuaW1wb3J0IHsgQVNTRVRTIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgY2xhc3MgR2FtZVBhbmVsQ29udGFpbmVyIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgcGFuZWxTY29yZUNvbnRhaW5lcjogQ29udGFpbmVyO1xuICBwYW5lbFRpbWVyQ29udGFpbmVyOiBDb250YWluZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvcHRpb25zOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucGFuZWxTY29yZUNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKTtcbiAgICB0aGlzLnBhbmVsVGltZXJDb250YWluZXIgPSBuZXcgQ29udGFpbmVyKCk7XG4gIH1cblxuICByZW5kZXIoc2NvcmU6IG51bWJlciwgdGltZTogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFuZWxTY29yZVNpemUgPSB0aGlzLm9wdGlvbnMud2lkdGg7XG4gICAgdGhpcy5zZXRTaXplKHBhbmVsU2NvcmVTaXplLCBwYW5lbFNjb3JlU2l6ZSk7XG5cbiAgICBjb25zdCBwYW5lbFNjb3JlU3ByaXRlID0gbmV3IFNwcml0ZShBc3NldHMuZ2V0KEFTU0VUUy5QQU5FTF9TQ09SRS5BTElBUykpO1xuICAgIHBhbmVsU2NvcmVTcHJpdGUud2lkdGggPSBwYW5lbFNjb3JlU2l6ZTtcbiAgICBwYW5lbFNjb3JlU3ByaXRlLmhlaWdodCA9IHBhbmVsU2NvcmVTaXplO1xuXG4gICAgY29uc3QgcGFuZWxTY29yZVNjb3JlV3JhcHBlciA9IG5ldyBHcmFwaGljcygpXG4gICAgICAucm91bmRSZWN0KDAsIDAsIDIwMCwgODAsIDIwKVxuICAgICAgLmZpbGwoXCIjMEUzMzY2XCIpO1xuICAgIHBhbmVsU2NvcmVTY29yZVdyYXBwZXIucG9zaXRpb24uc2V0KFxuICAgICAgKHBhbmVsU2NvcmVTaXplIC0gMjAwKSAvIDIsXG4gICAgICBwYW5lbFNjb3JlU2l6ZSAtIDgwIC0gMzAsXG4gICAgKTtcbiAgICBjb25zdCBwYW5lbFNjb3JlU2NvcmVUaXRsZSA9IG5ldyBUZXh0KHtcbiAgICAgIHRleHQ6IFwi0YHRh9C10YI6XCIsXG4gICAgICBzdHlsZToge1xuICAgICAgICBmb250RmFtaWx5OiBcIkFyaWFsXCIsXG4gICAgICAgIGZvbnRTaXplOiAzMCxcbiAgICAgICAgZmlsbDogXCJ3aGl0ZVwiLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBwYW5lbFNjb3JlU2NvcmVUaXRsZS5wb3NpdGlvbi5zZXQoXG4gICAgICAocGFuZWxTY29yZVNpemUgLSBwYW5lbFNjb3JlU2NvcmVUaXRsZS53aWR0aCkgLyAyLFxuICAgICAgcGFuZWxTY29yZVNpemUgLSA4MCAtIDMwLFxuICAgICk7XG5cbiAgICBjb25zdCBwYW5lbFRpbWVyU2NvcmVXcmFwcGVyID0gbmV3IEdyYXBoaWNzKClcbiAgICAgIC5yb3VuZFJlY3QoMCwgMCwgMTIwLCAxMjAsIDEyMClcbiAgICAgIC5maWxsKFwiI0M0Mzk4RlwiKTtcbiAgICBwYW5lbFRpbWVyU2NvcmVXcmFwcGVyLnBvc2l0aW9uLnNldChwYW5lbFNjb3JlU2l6ZSAvIDIgLSA2MCwgNDApO1xuXG4gICAgdGhpcy5hZGRDaGlsZChwYW5lbFNjb3JlU3ByaXRlKTtcbiAgICB0aGlzLmFkZENoaWxkKHBhbmVsU2NvcmVTY29yZVdyYXBwZXIpO1xuICAgIHRoaXMuYWRkQ2hpbGQocGFuZWxTY29yZVNjb3JlVGl0bGUpO1xuICAgIHRoaXMuYWRkQ2hpbGQocGFuZWxUaW1lclNjb3JlV3JhcHBlcik7XG5cbiAgICB0aGlzLmFkZENoaWxkKHRoaXMucGFuZWxUaW1lckNvbnRhaW5lcik7XG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLnBhbmVsU2NvcmVDb250YWluZXIpO1xuXG4gICAgdGhpcy5yZW5kZXJTY29yZShzY29yZSk7XG4gICAgdGhpcy5yZW5kZXJNb3Zlcyh0aW1lKTtcbiAgfVxuXG4gIHJlbmRlclNjb3JlKHNjb3JlOiBudW1iZXIpIHtcbiAgICB0aGlzLnBhbmVsU2NvcmVDb250YWluZXIucmVtb3ZlQ2hpbGRyZW4oKTtcblxuICAgIGNvbnN0IHBhbmVsU2NvcmVTY29yZVZhbHVlID0gbmV3IFRleHQoe1xuICAgICAgdGV4dDogc2NvcmUsXG4gICAgICBzdHlsZToge1xuICAgICAgICBmb250RmFtaWx5OiBcIkFyaWFsXCIsXG4gICAgICAgIGZvbnRTaXplOiA1MCxcbiAgICAgICAgZmlsbDogXCJ3aGl0ZVwiLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBwYW5lbFNjb3JlU2NvcmVWYWx1ZS5wb3NpdGlvbi5zZXQoXG4gICAgICAodGhpcy5vcHRpb25zLndpZHRoIC0gcGFuZWxTY29yZVNjb3JlVmFsdWUud2lkdGgpIC8gMixcbiAgICAgIHRoaXMub3B0aW9ucy53aWR0aCAtIDgwLFxuICAgICk7XG5cbiAgICB0aGlzLnBhbmVsU2NvcmVDb250YWluZXIuYWRkQ2hpbGQocGFuZWxTY29yZVNjb3JlVmFsdWUpO1xuICB9XG5cbiAgcmVuZGVyTW92ZXMobW92ZXM6IG51bWJlcikge1xuICAgIHRoaXMucGFuZWxUaW1lckNvbnRhaW5lci5yZW1vdmVDaGlsZHJlbigpO1xuXG4gICAgY29uc3QgcGFuZWxNb3Zlc1ZhbHVlID0gbmV3IFRleHQoe1xuICAgICAgdGV4dDogbW92ZXMsXG4gICAgICBzdHlsZToge1xuICAgICAgICBmb250RmFtaWx5OiBcIkFyaWFsXCIsXG4gICAgICAgIGZvbnRTaXplOiA3MCxcbiAgICAgICAgZmlsbDogXCJ3aGl0ZVwiLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBwYW5lbE1vdmVzVmFsdWUucG9zaXRpb24uc2V0KFxuICAgICAgKHRoaXMub3B0aW9ucy53aWR0aCAtIHBhbmVsTW92ZXNWYWx1ZS53aWR0aCkgLyAyLFxuICAgICAgNjAsXG4gICAgKTtcblxuICAgIHRoaXMucGFuZWxUaW1lckNvbnRhaW5lci5hZGRDaGlsZChwYW5lbE1vdmVzVmFsdWUpO1xuICB9XG59XG4iLCJleHBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vZ2FtZVwiO1xuIiwiaW1wb3J0IHsgR2FtZUJvYXJkRmlsbGVkLCBHYW1lQ2VsbENvb3JkcywgR2FtZUN1YmUgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2VsbEJ5Q29vcmRzID0gKFxuICBib2FyZDogR2FtZUJvYXJkRmlsbGVkLFxuICBjb29yZHM6IEdhbWVDZWxsQ29vcmRzLFxuKSA9PiB7XG4gIHJldHVybiBib2FyZFtjb29yZHMueV0/Lltjb29yZHMueF0gfHwgbnVsbDtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRDZWxsQnlDb29yZHMgPSAoXG4gIGJvYXJkOiBHYW1lQm9hcmRGaWxsZWQsXG4gIGNvb3JkczogR2FtZUNlbGxDb29yZHMsXG4gIG1heWJlQ3ViZTogR2FtZUN1YmUgfCBudWxsLFxuKSA9PiB7XG4gIGJvYXJkW2Nvb3Jkcy55XVtjb29yZHMueF0gPSBtYXliZUN1YmU7XG59O1xuXG5leHBvcnQgY29uc3QgY29weUJvYXJkID0gKGJvYXJkOiBHYW1lQm9hcmRGaWxsZWQpID0+IHtcbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYm9hcmQpKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21JbnQobWluOiBudW1iZXIsIG1heDogbnVtYmVyKSB7XG4gIGNvbnN0IG1pbkNlaWxlZCA9IE1hdGguY2VpbChtaW4pO1xuICBjb25zdCBtYXhGbG9vcmVkID0gTWF0aC5mbG9vcihtYXgpO1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heEZsb29yZWQgLSBtaW5DZWlsZWQpICsgbWluQ2VpbGVkKTtcbn1cblxuZXhwb3J0IGNvbnN0IHdhaXQgPSAobXM6IG51bWJlciA9IDEwMDApID0+XG4gIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG4iLCJpbXBvcnQgaW5pdCBmcm9tIFwiLi9pbml0XCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5pZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJsb2FkaW5nXCIpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdCk7XG59IGVsc2Uge1xuICBpbml0KCk7XG59XG4iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vZ2FtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBpbml0KCkge1xuICBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcblxuICBhd2FpdCBnYW1lLmluaXQoKTtcblxuICBnYW1lLnN0YXJ0KCk7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuLy8gU2luY2UgYWxsIHJlZmVyZW5jZWQgY2h1bmtzIGFyZSBhbHJlYWR5IGluY2x1ZGVkXG4vLyBpbiB0aGlzIGZpbGUsIHRoaXMgZnVuY3Rpb24gaXMgZW1wdHkgaGVyZS5cbl9fd2VicGFja19yZXF1aXJlX18uZSA9ICgpID0+IChQcm9taXNlLnJlc29sdmUoKSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2JsYXN0X2dhbWVcIl0gPSBzZWxmW1wid2VicGFja0NodW5rYmxhc3RfZ2FtZVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsiZ2V0Q2VsbEJ5Q29vcmRzIiwiZmFsbEN1YmVzIiwiZmlsbEVtcHR5Q2VsbHMiLCJnZXRVcGRhdGVTY29yZSIsIm1peEN1YmVzSWZOZWVkIiwidHJ5QnVybkN1YmVzIiwidHJ5Q3JlYXRlU3VwZXJDdWJlIiwidXBkYXRlR2FtZVN0YXR1cyIsInVwZGF0ZVJlbWFpbmluZ01vdmVzIiwiR0FNRV9DVUJFU19UWVBFIiwiY3JlYXRlQ2xpY2tDZWxsIiwic2F2ZVNjb3JlIiwicmVhZENvbmZpZyIsInJlYWRCb2FyZCIsInJlYWRTY29yZSIsInNhdmVCb2FyZCIsInJlYWRBdmlhbGFibGVDdWJlc0NvbG9ycyIsInJlYWRTdGF0dXMiLCJzYXZlU3RhdHVzIiwicmVhZFJlbWFpbmluZ01vdmVzIiwic2F2ZVJlbWFpbmluZ01vdmVzIiwicmVhZE1peENvdW50IiwiY29vcmRzIiwiY29uZmlnIiwiYm9hcmQiLCJzY29yZSIsImNsaWNrZWRDdWJlIiwibWF5YmVCdXJuZWRJbmZvIiwiaXNCYXNlQ3ViZSIsInR5cGUiLCJCQVNFIiwiYnVybmVkQ3ViZXMiLCJib2FyZFdpdGhCdXJuZWQiLCJ1cGRhdGVkU2NvcmUiLCJib2FyZEJ1cm5lZFdpdGhTdXBlciIsInN1cGVyQ3ViZXMiLCJmYWxsZWRDdWJlcyIsImZhbGxlZEJvYXJkIiwiYm9hcmRXaXRob3V0TW92ZWQiLCJhdmlhbGFibGVDdWJlc0NvbG9ycyIsIm5ld0N1YmVzIiwiZmlsbGVkQm9hcmQiLCJmYWxsZWROZXdDdWJlcyIsIm1peENvdW50IiwibWl4ZWRCb2FyZHMiLCJ1cGRhdGVkQm9hcmQiLCJzdGF0dXMiLCJjdXJyZW50TW92ZXMiLCJ1cGRhdGVkTW92ZXMiLCJ1cGRhdGVkU3RhdHVzIiwic2NvcmVzVG9XaW4iLCJjcmVhdGVTdGFydEdhbWUiLCJHQU1FX1NUQVRVU0VTIiwiZ2VuZXJhdGVCb2FyZCIsInVwZGF0ZUF2aWFsYWJsZUN1YmVzQ29sb3JzIiwic2F2ZUF2aWFsYWJsZUN1YmVzQ29sb3JzIiwiUExBWUlORyIsIm1vdmVDb3VudCIsIkdBTUVfQ1VCRVMiLCJCTFVFIiwiUkVEIiwiR1JFRU4iLCJZRUxMT1ciLCJQVVJQTEUiLCJDT0wiLCJST1ciLCJCT0FSRCIsIlJBRElVUyIsIldJTiIsIk5PX01PVkVTIiwiSURMRSIsIkFTU0VUUyIsIkFMSUFTIiwiU1JDIiwiQkxVRV9DVUJFIiwiUkVEX0NVQkUiLCJHUkVFTl9DVUJFIiwiWUVMTE9XX0NVQkUiLCJQVVJQTEVfQ1VCRSIsIlBBTkVMX1NDT1JFIiwiY29weUJvYXJkIiwic2V0Q2VsbEJ5Q29vcmRzIiwiYnVyblN1cGVyQ3ViZSIsImN1YmUiLCJzdXBlckJvbWJSYWRpdXMiLCJidXJuQ3ViZSIsImN1YmVUb0J1cm4iLCJwdXNoIiwicm93IiwibGVuZ3RoIiwiY3ViZVRvQnVybkNvb3JkcyIsInkiLCJ4IiwiY29sIiwicmFkaXVzIiwiYnVybkN1YmVzIiwiY3ViZXMiLCJib2FyZENvcHkiLCJmaWx0ZXIiLCJmb3JFYWNoIiwiYWxyZWFkeUJ1cm5lZCIsImZpbmQiLCJidXJuZWRDdWJlIiwiZ2V0TGlua2VkQ3ViZXMiLCJjaGVja0hhc01vdmVzIiwiY2hlY2tlZEN1YmVzIiwiYm9hcmRDb2xzIiwiYm9hcmRSb3dzIiwibWluQ2hhaW5MZW5ndGgiLCJsaW5rZWRDdWJlcyIsImNvbG9yIiwibWFwIiwiaWQiLCJjaGVja0lzV2luIiwibWluQ3ViZUNvbG9yc0NvdW50IiwibWF4Q3ViZUNvbG9yc0NvdW50IiwiT2JqZWN0IiwidmFsdWVzIiwiY3JlYXRlQ29uZmlnIiwicGFyYW1zIiwiY3ViZUNvbG9yc0NvdW50IiwiRXJyb3IiLCJjdWJlSWR4IiwiY3JlYXRlQ3ViZSIsImdldFJhbmRvbUludCIsImNyZWF0ZVJhbmRvbUN1YmUiLCJnZXRSYW5kb21Db2xvciIsImNvbG9ycyIsIm1heWJlQ3ViZSIsImZhbGxZIiwiY2hlY2tZIiwidGVtcCIsImZyb20iLCJ0byIsInVwZGF0ZWRDdWJlIiwiYm9hcmRXaXRoRW1wdHkiLCJlbXB0eUNlbGxzIiwicmVkdWNlIiwiYWNjIiwiY2VsbCIsIm5ld0N1YmUiLCJnZXRFbXB0eUNvdW50SW5Db2x1bW4iLCJmYWxsZWRDdWJlIiwiZ2V0Q3ViZXNDaGFpbiIsImN1YmVDb2xvciIsImdldExpbmtlZEN1YmUiLCJpbmNsdWRlcyIsImxvZ1ByaXR0eUJvYXJkIiwiY2VsbFN0ckxlbiIsImNvbnNvbGUiLCJsb2ciLCJyZXBlYXQiLCJjZWxsU3RyIiwic2xpY2UiLCJwYWRFbmQiLCJqb2luIiwiaGFzTW92ZXMiLCJwcmV2Qm9hcmQiLCJpIiwibmV3TWl4ZWRCb2FyZCIsIm5ld0JvYXJkIiwiQXJyYXkiLCJhdmlhbGFibGVDb29yZHMiLCJfIiwiaW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb21JZHgiLCJyYW5kb21Db29yZHMiLCJzcGxpY2UiLCJmcm9tQ29vcmRzIiwidG9Db29yZHMiLCJjdWJlc0NoYWluIiwibmVlZEJ1cm4iLCJnZXRSYW5kb21TdXBlckN1YmVUeXBlIiwic3VwZXJzIiwiY2xpY2tDb29yZHMiLCJlbmFibGUiLCJjdWJlc1RvU3VwZXIiLCJidXJuZWRUb1N1cGVyQ3ViZSIsInN1cGVyQ3ViZSIsImF2aWFsYWJsZUN1YmVzIiwia2V5cyIsInVwZGF0ZWQiLCJHYW1lIiwiQXBwbGljYXRpb24iLCJBc3NldHMiLCJDb250YWluZXIiLCJHYW1lUGFuZWxDb250YWluZXIiLCJHYW1lQm9hcmRDb250YWluZXIiLCJ3YWl0IiwiZWRpdGFibGUiLCJyZW1haW5pbmdNb3ZlcyIsImNvbnN0cnVjdG9yIiwiYXBwIiwibWFpbkNvbnRhaW5lciIsImdhbWVCb2FyZENvbnRhaW5lciIsIndpZHRoIiwiaGVpZ2h0Iiwicm93cyIsImNvbHMiLCJwYW5lbFNjb3JlQ29udGFpbmVyIiwic3RhcnRHYW1lIiwibW92ZXMiLCJjbGlja0NlbGwiLCJzdGFydCIsInJlbmRlckluaXRpYWxCb2FyZCIsInJlbmRlckluaXRpYWxQYW5lbCIsImluaXQiLCJiYWNrZ3JvdW5kIiwicmVzaXplVG8iLCJ3aW5kb3ciLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNhbnZhcyIsImxvYWRBc3NldHMiLCJjb250YWluZXJXaWR0aCIsImNvbnRhaW5lckhlaWdodCIsInNldFNpemUiLCJwb3NpdGlvbiIsInNldCIsInNjcmVlbiIsImFkZENoaWxkIiwic3RhZ2UiLCJvbkNlbGxDbGljayIsInJlc3VsdCIsInJlbmRlclNjb3JlIiwicmVuZGVyTW92ZXMiLCJyZW5kZXJCdXJuZWRCb2FyZCIsInJlbmRlclN1cGVyQ3ViZXMiLCJyZW5kZXJGYWxsZWRCb2FyZCIsImNvbmNhdCIsImFsZXJ0IiwicmVuZGVyTWl4ZWRCb2FyZCIsInJlbmRlckN1YmVzIiwiYmluZCIsImJ1cm5lZCIsImJvYXJkV2l0aG91dEJ1cm5lZCIsInJlbmRlckJ1cm5lZCIsImZhbGxlZCIsInJlbmRlckZhbGxlZCIsIm1peGVkQm9hcmQiLCJyZW5kZXJNaXhlZCIsInJlbmRlciIsImFkZCIsImFsaWFzIiwic3JjIiwibG9hZCIsIlBvaW50IiwiU3ByaXRlIiwib3B0aW9ucyIsImN1YmVXaWR0aCIsImN1YmVIZWlnaHQiLCJjYWxsYmFjayIsInJlbW92ZUNoaWxkcmVuIiwicmVuZGVyQm9hcmRCZyIsImoiLCJjdWJlU3ByaXRlIiwicHJvbWlzZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsImFuaW1hdGlvbkxvZ2ljIiwidGlja2VyIiwiYWxwaGEiLCJyZW1vdmVDaGlsZCIsInJlbW92ZSIsImRlbHRhVGltZSIsImFsbCIsInRoZW4iLCJzdGFydFBvc2l0aW9uIiwiZW5kUG9zdGlvbiIsImdldEN1YmVQb3NpdGlvbkJ5Q29vcmRzIiwiZGlmZiIsIm5leHRZIiwibWluIiwibWl4ZWRDdWJlIiwiZnJvbVBvc2l0aW9uIiwidG9Qb3NpdGlvbiIsInBlclRpY2siLCJwZXJUaWNrWCIsInBlclRpY2tZIiwibmV4dFgiLCJtYXgiLCJ0ZXh0dXJlIiwiZ2V0IiwiZXZlbnRNb2RlIiwiY3Vyc29yIiwib24iLCJib2FyZFNwcml0ZSIsIlRleHQiLCJHcmFwaGljcyIsInBhbmVsVGltZXJDb250YWluZXIiLCJ0aW1lIiwicGFuZWxTY29yZVNpemUiLCJwYW5lbFNjb3JlU3ByaXRlIiwicGFuZWxTY29yZVNjb3JlV3JhcHBlciIsInJvdW5kUmVjdCIsImZpbGwiLCJwYW5lbFNjb3JlU2NvcmVUaXRsZSIsInRleHQiLCJzdHlsZSIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsInBhbmVsVGltZXJTY29yZVdyYXBwZXIiLCJwYW5lbFNjb3JlU2NvcmVWYWx1ZSIsInBhbmVsTW92ZXNWYWx1ZSIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsIm1pbkNlaWxlZCIsImNlaWwiLCJtYXhGbG9vcmVkIiwicmFuZG9tIiwibXMiLCJzZXRUaW1lb3V0IiwicmVhZHlTdGF0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJnYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==