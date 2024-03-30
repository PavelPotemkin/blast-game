/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/game/application/clickCell/clickCell.ts":
/*!*****************************************************!*\
  !*** ./src/game/application/clickCell/clickCell.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createClickCell: () => (/* binding */ createClickCell)
/* harmony export */ });
/* harmony import */ var src_game_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/game/utils */ "./src/game/utils.ts");
/* harmony import */ var _domain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../domain */ "./src/game/domain/index.ts");
/* harmony import */ var src_game_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/game/constants */ "./src/game/constants.ts");



const createClickCell = ({ saveScore, readConfig, readBoard, readScore, saveBoard, readAvialableCubesColors, readStatus, saveStatus, readRemainingMoves, saveRemainingMoves, readMixCount, }) => (coords) => {
    const config = readConfig();
    const board = readBoard();
    const score = readScore();
    const clickedCube = (0,src_game_utils__WEBPACK_IMPORTED_MODULE_0__.getCellByCoords)(board, coords);
    const maybeBurnedInfo = (0,_domain__WEBPACK_IMPORTED_MODULE_1__.tryBurnCubes)(config, board, clickedCube);
    if (!maybeBurnedInfo) {
        return null;
    }
    const isBaseCube = clickedCube.type === src_game_constants__WEBPACK_IMPORTED_MODULE_2__.GAME_CUBES_TYPE.BASE;
    const { burnedCubes, board: boardWithBurned } = maybeBurnedInfo;
    const updatedScore = (0,_domain__WEBPACK_IMPORTED_MODULE_1__.getUpdateScore)(burnedCubes, score);
    const { board: boardBurnedWithSuper, superCubes } = (0,_domain__WEBPACK_IMPORTED_MODULE_1__.tryCreateSuperCube)(config, coords, burnedCubes, boardWithBurned, isBaseCube);
    const { falledCubes, board: falledBoard, boardWithoutMoved, } = (0,_domain__WEBPACK_IMPORTED_MODULE_1__.fallCubes)(config, boardBurnedWithSuper);
    const avialableCubesColors = readAvialableCubesColors();
    const { newCubes, board: filledBoard, falledNewCubes, } = (0,_domain__WEBPACK_IMPORTED_MODULE_1__.fillEmptyCells)(falledBoard, avialableCubesColors);
    const mixCount = readMixCount();
    const { mixedBoards, updatedBoard } = (0,_domain__WEBPACK_IMPORTED_MODULE_1__.mixCubesIfNeed)(config, filledBoard, mixCount);
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
        status: updatedStatus,
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


const createStartGame = ({ saveAvialableCubesColors, saveBoard, saveScore, saveStatus, readConfig, saveRemainingMoves, }) => () => {
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
        status,
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
    PURPLE: "purpleCube",
};
const GAME_CUBES_TYPE = {
    BASE: "base",
    COL: "col",
    ROW: "row",
    BOARD: "board",
    RADIUS: "radius",
};
const GAME_STATUSES = {
    WIN: "win",
    NO_MOVES: "noMoves",
    PLAYING: "playing",
    IDLE: "idle",
};
const ASSETS = {
    BOARD: {
        ALIAS: "board",
        SRC: "assets/board.png",
    },
    BLUE_CUBE: {
        ALIAS: GAME_CUBES.BLUE,
        SRC: "assets/blueCube.png",
    },
    RED_CUBE: {
        ALIAS: GAME_CUBES.RED,
        SRC: "assets/redCube.png",
    },
    GREEN_CUBE: {
        ALIAS: GAME_CUBES.GREEN,
        SRC: "assets/greenCube.png",
    },
    YELLOW_CUBE: {
        ALIAS: GAME_CUBES.YELLOW,
        SRC: "assets/yellowCube.png",
    },
    PURPLE_CUBE: {
        ALIAS: GAME_CUBES.PURPLE,
        SRC: "assets/purpleCube.png",
    },
    PANEL_SCORE: {
        ALIAS: "panelScore",
        SRC: "assets/panelScore.png",
    },
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
/* harmony import */ var src_game_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/game/constants */ "./src/game/constants.ts");


function burnSuperCube(cube, boardWithBurned, burnedCubes, superBombRadius) {
    const burnCube = (cubeToBurn) => {
        burnedCubes.push(cubeToBurn);
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setCellByCoords)(boardWithBurned, cubeToBurn.coords, null);
        if (cubeToBurn.type !== src_game_constants__WEBPACK_IMPORTED_MODULE_1__.GAME_CUBES_TYPE.BASE) {
            burnSuperCube(cubeToBurn, boardWithBurned, burnedCubes, superBombRadius);
        }
    };
    if (cube.type === src_game_constants__WEBPACK_IMPORTED_MODULE_1__.GAME_CUBES_TYPE.COL) {
        for (let row = 0; row < boardWithBurned.length; row++) {
            const cubeToBurnCoords = {
                y: row,
                x: cube.coords.x,
            };
            const cubeToBurn = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getCellByCoords)(boardWithBurned, cubeToBurnCoords);
            if (cubeToBurn) {
                burnCube(cubeToBurn);
            }
        }
    }
    else if (cube.type === src_game_constants__WEBPACK_IMPORTED_MODULE_1__.GAME_CUBES_TYPE.ROW) {
        for (let col = 0; col < boardWithBurned[0].length; col++) {
            const cubeToBurnCoords = {
                y: cube.coords.y,
                x: col,
            };
            const cubeToBurn = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getCellByCoords)(boardWithBurned, cubeToBurnCoords);
            if (cubeToBurn) {
                burnCube(cubeToBurn);
            }
        }
    }
    else if (cube.type === src_game_constants__WEBPACK_IMPORTED_MODULE_1__.GAME_CUBES_TYPE.RADIUS) {
        const radius = superBombRadius;
        for (let row = cube.coords.y - radius; row <= cube.coords.y + radius; row++) {
            for (let col = cube.coords.x - radius; col <= cube.coords.x + radius; col++) {
                if (row >= 0 &&
                    row < boardWithBurned.length &&
                    col >= 0 &&
                    col < boardWithBurned[0].length) {
                    const cubeToBurnCoords = {
                        y: row,
                        x: col,
                    };
                    const cubeToBurn = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getCellByCoords)(boardWithBurned, cubeToBurnCoords);
                    if (cubeToBurn) {
                        burnCube(cubeToBurn);
                    }
                }
            }
        }
    }
    else if (cube.type === src_game_constants__WEBPACK_IMPORTED_MODULE_1__.GAME_CUBES_TYPE.BOARD) {
        for (let row = 0; row < boardWithBurned.length; row++) {
            for (let col = 0; col < boardWithBurned[0].length; col++) {
                const cubeToBurnCoords = {
                    y: row,
                    x: col,
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
    const superCubes = cubes.filter((cube) => cube.type !== src_game_constants__WEBPACK_IMPORTED_MODULE_1__.GAME_CUBES_TYPE.BASE);
    superCubes.forEach((cube) => {
        burnSuperCube(cube, boardCopy, burnedCubes, config.superBombRadius);
    });
    for (const cube of cubes) {
        const alreadyBurned = burnedCubes.find((burnedCube) => burnedCube.coords.x === cube.coords.x &&
            burnedCube.coords.y === cube.coords.y);
        if (!alreadyBurned) {
            burnedCubes.push(cube);
            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setCellByCoords)(boardCopy, cube.coords, null);
        }
    }
    return {
        burnedCubes,
        board: boardCopy,
    };
};
// todo loop ciibes burn


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
/* harmony import */ var src_game_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/game/utils */ "./src/game/utils.ts");
/* harmony import */ var _getLinkedCubes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getLinkedCubes */ "./src/game/domain/getLinkedCubes/index.ts");


const checkHasMoves = (config, board) => {
    const checkedCubes = [];
    const { boardCols, boardRows, minChainLength } = config;
    for (let y = 0; y < boardRows; y++) {
        for (let x = 0; x < boardCols; x++) {
            const cube = (0,src_game_utils__WEBPACK_IMPORTED_MODULE_0__.getCellByCoords)(board, { x, y });
            if (cube) {
                const linkedCubes = (0,_getLinkedCubes__WEBPACK_IMPORTED_MODULE_1__.getLinkedCubes)(board, { x, y }, cube.color, checkedCubes);
                if (linkedCubes.length >= minChainLength) {
                    return true;
                }
                else {
                    checkedCubes.push(...linkedCubes.map((cube) => cube.id));
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
const createConfig = (params) => {
    const { cubeColorsCount } = params;
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
/* harmony import */ var src_game_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/game/constants */ "./src/game/constants.ts");

let cubeIdx = 0;
const createCube = (coords, color, type) => {
    return {
        id: `${cubeIdx++}`,
        color,
        coords,
        type: type || src_game_constants__WEBPACK_IMPORTED_MODULE_0__.GAME_CUBES_TYPE.BASE,
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
    const getRandomColor = (colors) => {
        return colors[(0,_utils__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(0, colors.length)];
    };
    return (0,_createCube__WEBPACK_IMPORTED_MODULE_1__.createCube)(coords, getRandomColor(avialableCubesColors), type);
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
    const { boardCols, boardRows } = config;
    const boardCopy = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.copyBoard)(board);
    const boardWithoutMoved = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.copyBoard)(board);
    for (let y = boardRows - 1; y >= 0; y--) {
        for (let x = 0; x <= boardCols - 1; x++) {
            const maybeCube = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getCellByCoords)(boardCopy, { x, y });
            if (!maybeCube) {
                let fallY = y;
                for (let checkY = y; checkY >= 0; checkY--) {
                    const temp = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getCellByCoords)(boardCopy, {
                        x,
                        y: checkY,
                    });
                    if (temp) {
                        const from = { x, y: checkY };
                        const to = { x, y: fallY };
                        const updatedCube = (0,_createCube__WEBPACK_IMPORTED_MODULE_1__.createCube)(to, temp.color, temp.type);
                        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setCellByCoords)(boardCopy, to, updatedCube);
                        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setCellByCoords)(boardCopy, from, null);
                        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setCellByCoords)(boardWithoutMoved, to, null);
                        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setCellByCoords)(boardWithoutMoved, from, null);
                        falledCubes.push({
                            from,
                            to,
                            cube: updatedCube,
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
        boardWithoutMoved,
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
/* harmony import */ var src_game_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/game/utils */ "./src/game/utils.ts");
/* harmony import */ var _createRandomCube__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../createRandomCube */ "./src/game/domain/createRandomCube/index.ts");


const fillEmptyCells = (boardWithEmpty, avialableCubesColors) => {
    const newCubes = [];
    const boardCopy = (0,src_game_utils__WEBPACK_IMPORTED_MODULE_0__.copyBoard)(boardWithEmpty);
    const emptyCells = boardWithEmpty.reduce((acc, row, y) => {
        row.forEach((cell, x) => {
            if (!cell) {
                acc.push({ x, y });
            }
        });
        return acc;
    }, []);
    for (const coords of emptyCells) {
        const newCube = (0,_createRandomCube__WEBPACK_IMPORTED_MODULE_1__.createRandomCube)(coords, avialableCubesColors);
        (0,src_game_utils__WEBPACK_IMPORTED_MODULE_0__.setCellByCoords)(boardCopy, coords, newCube);
        newCubes.push(newCube);
    }
    const getEmptyCountInColumn = (x) => {
        return boardWithEmpty.reduce((acc, row) => {
            if (!row[x]) {
                acc++;
            }
            return acc;
        }, 0);
    };
    const falledNewCubes = newCubes.reduce((acc, cube) => {
        const { coords } = cube;
        const falledCube = {
            from: {
                x: coords.x,
                y: coords.y - getEmptyCountInColumn(coords.x),
            },
            to: coords,
            cube,
        };
        acc.push(falledCube);
        return acc;
    }, []);
    return {
        newCubes,
        falledNewCubes,
        board: boardCopy,
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
    const { boardRows, boardCols } = config;
    const board = [];
    for (let row = 0; row < boardRows; row++) {
        board[row] = [];
        for (let col = 0; col < boardCols; col++) {
            const coords = { x: col, y: row };
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
/* harmony import */ var src_game_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/game/utils */ "./src/game/utils.ts");
/* harmony import */ var _getLinkedCubes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getLinkedCubes */ "./src/game/domain/getLinkedCubes/index.ts");


const getCubesChain = (board, coords) => {
    const cube = (0,src_game_utils__WEBPACK_IMPORTED_MODULE_0__.getCellByCoords)(board, coords);
    const linkedCubes = (0,_getLinkedCubes__WEBPACK_IMPORTED_MODULE_1__.getLinkedCubes)(board, { x: coords.x, y: coords.y }, cube.color, [cube.id]);
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
        const getLinkedCube = (coords) => {
            const cube = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getCellByCoords)(board, coords);
            if (cube && cube.color === cubeColor) {
                if (checkedCubes.includes(cube.id)) {
                    return;
                }
                checkedCubes.push(cube.id);
                linkedCubes.push(cube, ...getLinkedCubes(board, coords, cubeColor, checkedCubes));
            }
        };
        getLinkedCube({ x: coords.x, y: coords.y + 1 });
        getLinkedCube({ x: coords.x - 1, y: coords.y });
        getLinkedCube({ x: coords.x + 1, y: coords.y });
        getLinkedCube({ x: coords.x, y: coords.y - 1 });
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
const logPrittyBoard = (board) => {
    const cellStrLen = 6;
    console.log(board.map((row) => row
        .map((cell) => {
        if (!cell) {
            return "_".repeat(cellStrLen);
        }
        const cellStr = `${cell.color.slice(0, 1)}_${cell.id}`;
        return cellStr.padEnd(cellStrLen, " ");
    })
        .join(" ")));
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
    const { boardCols, boardRows } = config;
    const hasMoves = (0,_checkHasMoves__WEBPACK_IMPORTED_MODULE_1__.checkHasMoves)(config, filledBoard);
    if (hasMoves) {
        return {
            mixedBoards: [],
            updatedBoard: filledBoard,
        };
    }
    const mixedBoards = [];
    let prevBoard = filledBoard;
    for (let i = 0; i < mixCount; i++) {
        const newMixedBoard = [];
        const newBoard = Array.from({
            length: boardRows,
        }, () => Array.from({ length: boardCols }));
        const avialableCoords = Array.from({
            length: boardRows * boardCols,
        }, (_, index) => ({
            x: index % boardCols,
            y: Math.floor(index / boardCols),
        }));
        for (let row = 0; row < boardRows; row++) {
            for (let col = 0; col < boardCols; col++) {
                const randomIdx = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(0, avialableCoords.length - 1);
                const randomCoords = avialableCoords[randomIdx];
                avialableCoords.splice(randomIdx, 1);
                const fromCoords = {
                    x: col,
                    y: row,
                };
                const cube = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getCellByCoords)(prevBoard, fromCoords);
                const toCoords = randomCoords;
                const newCube = (0,_createCube__WEBPACK_IMPORTED_MODULE_2__.createCube)(toCoords, cube.color, cube.type);
                newBoard[toCoords.y][toCoords.x] = newCube;
                newMixedBoard.push({
                    cube: newCube,
                    from: fromCoords,
                    to: toCoords,
                });
            }
        }
        mixedBoards.push(newMixedBoard);
        const hasMoves = (0,_checkHasMoves__WEBPACK_IMPORTED_MODULE_1__.checkHasMoves)(config, newBoard);
        if (hasMoves || i === mixCount - 1) {
            return {
                mixedBoards,
                updatedBoard: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.copyBoard)(newBoard),
            };
        }
        else {
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
/* harmony import */ var src_game_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/game/constants */ "./src/game/constants.ts");



const tryBurnCubes = (config, board, clickedCube) => {
    const { minChainLength } = config;
    const cubesChain = (0,_getCubesChain__WEBPACK_IMPORTED_MODULE_0__.getCubesChain)(board, clickedCube.coords);
    const needBurn = cubesChain.length >= minChainLength ||
        clickedCube.type !== src_game_constants__WEBPACK_IMPORTED_MODULE_2__.GAME_CUBES_TYPE.BASE;
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
    const supers = Object.values(_constants__WEBPACK_IMPORTED_MODULE_0__.GAME_CUBES_TYPE).filter((type) => type !== _constants__WEBPACK_IMPORTED_MODULE_0__.GAME_CUBES_TYPE.BASE);
    return supers[(0,_utils__WEBPACK_IMPORTED_MODULE_1__.getRandomInt)(0, supers.length - 1)];
};
const tryCreateSuperCube = (config, clickCoords, burnedCubes, boardWithBurned, enable) => {
    const { cubesToSuper } = config;
    if (burnedCubes.length < cubesToSuper || !enable) {
        return {
            board: boardWithBurned,
            superCubes: [],
        };
    }
    const burnedToSuperCube = burnedCubes.find((cube) => cube.coords.x === clickCoords.x && cube.coords.y === clickCoords.y);
    const superCube = (0,_createCube__WEBPACK_IMPORTED_MODULE_2__.createCube)(burnedToSuperCube.coords, burnedToSuperCube.color, getRandomSuperCubeType());
    const boardBurnedWithSuper = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.copyBoard)(boardWithBurned);
    (0,_utils__WEBPACK_IMPORTED_MODULE_1__.setCellByCoords)(boardBurnedWithSuper, superCube.coords, superCube);
    return {
        board: boardBurnedWithSuper,
        superCubes: [superCube],
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

const avialableCubes = [
    _constants__WEBPACK_IMPORTED_MODULE_0__.GAME_CUBES.RED,
    _constants__WEBPACK_IMPORTED_MODULE_0__.GAME_CUBES.GREEN,
    _constants__WEBPACK_IMPORTED_MODULE_0__.GAME_CUBES.BLUE,
    _constants__WEBPACK_IMPORTED_MODULE_0__.GAME_CUBES.YELLOW,
    _constants__WEBPACK_IMPORTED_MODULE_0__.GAME_CUBES.PURPLE,
];
const updateAvialableCubesColors = (config) => {
    const { cubeColorsCount } = config;
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
    }
    else if (!(0,_checkHasMoves__WEBPACK_IMPORTED_MODULE_2__.checkHasMoves)(config, board) || currentMoves === 0) {
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
const updateRemainingMoves = (currentMoves) => {
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __asyncValues = (undefined && undefined.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};






class Game {
    constructor() {
        this.editable = false;
        this.board = [];
        this.avialableCubesColors = [
            _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_CUBES.RED,
            _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_CUBES.GREEN,
            _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_CUBES.BLUE,
            _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_CUBES.YELLOW,
            _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_CUBES.PURPLE,
        ];
        this.config = {
            boardRows: 9,
            boardCols: 9,
            cubeColorsCount: 5,
            minChainLength: 4,
            scoresToWin: 200,
            moveCount: 20,
            mixCount: 2,
            cubesToSuper: 5,
            superBombRadius: 2,
        };
        this.remainingMoves = this.config.moveCount;
        this.app = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Application();
        this.mainContainer = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Container();
        this.gameBoardContainer = new _gameBoard__WEBPACK_IMPORTED_MODULE_4__.GameBoardContainer(this.app, {
            width: 500,
            height: 500,
            rows: this.config.boardRows,
            cols: this.config.boardCols,
        });
        this.panelScoreContainer = new _gamePanel__WEBPACK_IMPORTED_MODULE_3__.GamePanelContainer({
            width: 300,
            height: 300,
        });
        this.startGame = (0,_application__WEBPACK_IMPORTED_MODULE_2__.createStartGame)({
            readConfig: () => this.config,
            saveAvialableCubesColors: (avialableCubesColors) => (this.avialableCubesColors = avialableCubesColors),
            saveBoard: (board) => (this.board = board),
            saveScore: (score) => (this.score = score),
            saveStatus: (status) => (this.status = status),
            saveRemainingMoves: (moves) => (this.remainingMoves = moves),
        });
        this.clickCell = (0,_application__WEBPACK_IMPORTED_MODULE_2__.createClickCell)({
            readConfig: () => this.config,
            readBoard: () => this.board,
            readScore: () => this.score,
            readAvialableCubesColors: () => this.avialableCubesColors,
            readStatus: () => this.status,
            readRemainingMoves: () => this.remainingMoves,
            saveBoard: (board) => (this.board = board),
            saveScore: (score) => (this.score = score),
            saveStatus: (status) => (this.status = status),
            saveRemainingMoves: (moves) => (this.remainingMoves = moves),
            readMixCount: () => this.config.mixCount,
        });
    }
    start() {
        this.editable = true;
        this.startGame();
        this.renderInitialBoard();
        this.renderInitialPanel();
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.app.init({ background: "#A1A1A1", resizeTo: window });
            document.body.appendChild(this.app.canvas);
            yield this.loadAssets();
            const containerWidth = 1000;
            const containerHeight = 700;
            this.mainContainer.setSize(containerWidth, containerHeight);
            this.mainContainer.position.set((this.app.screen.width - containerWidth) / 2, (this.app.screen.height - containerHeight) / 2);
            this.panelScoreContainer.position.set(containerWidth - 50 - 300, containerHeight / 2 - 300 / 2);
            this.gameBoardContainer.position.set(50, containerHeight - 50 - 500);
            this.mainContainer.addChild(this.gameBoardContainer);
            this.mainContainer.addChild(this.panelScoreContainer);
            this.app.stage.addChild(this.mainContainer);
        });
    }
    onCellClick(coords) {
        return __awaiter(this, void 0, void 0, function* () {
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
            yield this.renderBurnedBoard(result.burnedCubes, result.boardWithBurned);
            yield this.renderSuperCubes(result.superCubes);
            yield this.renderFalledBoard(result.falledCubes.concat(result.falledNewCubes), result.boardWithoutMoved);
            if (result.status === _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_STATUSES.WIN) {
                window.alert("WIN");
                return;
            }
            if (result.mixedBoards.length) {
                yield this.renderMixedBoard(result.mixedBoards);
            }
            if (result.status === _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_STATUSES.NO_MOVES) {
                window.alert("NO_MOVES");
            }
            else {
                this.renderInitialBoard();
                this.editable = true;
            }
        });
    }
    renderInitialBoard() {
        this.gameBoardContainer.renderCubes(this.board, this.onCellClick.bind(this));
    }
    renderBurnedBoard(burned, boardWithoutBurned) {
        return __awaiter(this, void 0, void 0, function* () {
            this.gameBoardContainer.renderCubes(boardWithoutBurned);
            yield this.gameBoardContainer.renderBurned(burned);
        });
    }
    renderSuperCubes(superCubes) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.gameBoardContainer.renderSuperCubes(superCubes);
        });
    }
    renderFalledBoard(falled, boardWithoutMoved) {
        return __awaiter(this, void 0, void 0, function* () {
            this.gameBoardContainer.renderCubes(boardWithoutMoved);
            yield this.gameBoardContainer.renderFalled(falled);
        });
    }
    renderMixedBoard(mixedBoards) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, mixedBoards_1, mixedBoards_1_1;
            var _b, e_1, _c, _d;
            try {
                for (_a = true, mixedBoards_1 = __asyncValues(mixedBoards); mixedBoards_1_1 = yield mixedBoards_1.next(), _b = mixedBoards_1_1.done, !_b; _a = true) {
                    _d = mixedBoards_1_1.value;
                    _a = false;
                    const mixedBoard = _d;
                    yield this.gameBoardContainer.renderMixed(mixedBoard);
                    yield (0,_utils__WEBPACK_IMPORTED_MODULE_5__.wait)(200);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (!_a && !_b && (_c = mixedBoards_1.return)) yield _c.call(mixedBoards_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
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
    loadAssets() {
        return __awaiter(this, void 0, void 0, function* () {
            pixi_js__WEBPACK_IMPORTED_MODULE_0__.Assets.add([
                {
                    alias: _constants__WEBPACK_IMPORTED_MODULE_1__.ASSETS.BOARD.ALIAS,
                    src: _constants__WEBPACK_IMPORTED_MODULE_1__.ASSETS.BOARD.SRC,
                },
                {
                    alias: _constants__WEBPACK_IMPORTED_MODULE_1__.ASSETS.BLUE_CUBE.ALIAS,
                    src: _constants__WEBPACK_IMPORTED_MODULE_1__.ASSETS.BLUE_CUBE.SRC,
                },
                {
                    alias: _constants__WEBPACK_IMPORTED_MODULE_1__.ASSETS.RED_CUBE.ALIAS,
                    src: _constants__WEBPACK_IMPORTED_MODULE_1__.ASSETS.RED_CUBE.SRC,
                },
                {
                    alias: _constants__WEBPACK_IMPORTED_MODULE_1__.ASSETS.GREEN_CUBE.ALIAS,
                    src: _constants__WEBPACK_IMPORTED_MODULE_1__.ASSETS.GREEN_CUBE.SRC,
                },
                {
                    alias: _constants__WEBPACK_IMPORTED_MODULE_1__.ASSETS.YELLOW_CUBE.ALIAS,
                    src: _constants__WEBPACK_IMPORTED_MODULE_1__.ASSETS.YELLOW_CUBE.SRC,
                },
                {
                    alias: _constants__WEBPACK_IMPORTED_MODULE_1__.ASSETS.PURPLE_CUBE.ALIAS,
                    src: _constants__WEBPACK_IMPORTED_MODULE_1__.ASSETS.PURPLE_CUBE.SRC,
                },
                {
                    alias: _constants__WEBPACK_IMPORTED_MODULE_1__.ASSETS.PANEL_SCORE.ALIAS,
                    src: _constants__WEBPACK_IMPORTED_MODULE_1__.ASSETS.PANEL_SCORE.SRC,
                },
            ]);
            yield pixi_js__WEBPACK_IMPORTED_MODULE_0__.Assets.load([
                _constants__WEBPACK_IMPORTED_MODULE_1__.ASSETS.BOARD.ALIAS,
                _constants__WEBPACK_IMPORTED_MODULE_1__.ASSETS.PANEL_SCORE.ALIAS,
                _constants__WEBPACK_IMPORTED_MODULE_1__.ASSETS.BLUE_CUBE.ALIAS,
                _constants__WEBPACK_IMPORTED_MODULE_1__.ASSETS.RED_CUBE.ALIAS,
                _constants__WEBPACK_IMPORTED_MODULE_1__.ASSETS.GREEN_CUBE.ALIAS,
                _constants__WEBPACK_IMPORTED_MODULE_1__.ASSETS.YELLOW_CUBE.ALIAS,
                _constants__WEBPACK_IMPORTED_MODULE_1__.ASSETS.PURPLE_CUBE.ALIAS,
            ]);
        });
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


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
        const promises = burnedCubes.map((burnedCube) => {
            return new Promise((resolve) => {
                const cubeSprite = this.createCube(burnedCube);
                this.addChild(cubeSprite);
                const animationLogic = (ticker) => {
                    if (cubeSprite.alpha <= 0) {
                        this.removeChild(cubeSprite);
                        this.app.ticker.remove(animationLogic);
                        resolve("");
                    }
                    else {
                        cubeSprite.width -= 0.1;
                        cubeSprite.height -= 0.1;
                        cubeSprite.alpha -= 0.1 * ticker.deltaTime;
                        cubeSprite.position.set(cubeSprite.x + 0.05, cubeSprite.y + 0.05);
                    }
                };
                this.app.ticker.add(animationLogic);
            });
        });
        return Promise.all(promises).then(() => { });
    }
    renderSuperCubes(superCubes) {
        const promises = superCubes.map((superCube) => {
            return new Promise((resolve) => {
                const cubeSprite = this.createCube(superCube);
                this.addChild(cubeSprite);
                const animationLogic = (ticker) => {
                    if (cubeSprite.width >= this.cubeWidth * 1.3) {
                        this.removeChild(cubeSprite);
                        this.app.ticker.remove(animationLogic);
                        resolve("");
                    }
                    else {
                        cubeSprite.width += 0.4 * ticker.deltaTime;
                        cubeSprite.height += 0.4 * ticker.deltaTime;
                        cubeSprite.position.set(cubeSprite.x - 0.2 * ticker.deltaTime, cubeSprite.y - 0.2 * ticker.deltaTime);
                    }
                };
                this.app.ticker.add(animationLogic);
            });
        });
        return Promise.all(promises).then(() => { });
    }
    renderFalled(falledCubes) {
        const promises = falledCubes.map((falledCube) => {
            return new Promise((resolve) => {
                const cubeSprite = this.createCube(Object.assign(Object.assign({}, falledCube.cube), { coords: falledCube.from }));
                this.addChild(cubeSprite);
                const animationLogic = (ticker) => {
                    const startPosition = cubeSprite.position;
                    const endPostion = this.getCubePositionByCoords(falledCube.to);
                    const diff = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Point(startPosition.x, endPostion.y - startPosition.y);
                    if (diff.y === 0) {
                        this.app.ticker.remove(animationLogic);
                        resolve("");
                    }
                    else {
                        const nextY = Math.min(startPosition.y + 5 * ticker.deltaTime, endPostion.y);
                        cubeSprite.position.set(startPosition.x, nextY);
                    }
                };
                this.app.ticker.add(animationLogic);
            });
        });
        return Promise.all(promises).then(() => { });
    }
    renderMixed(mixedBoard) {
        return __awaiter(this, void 0, void 0, function* () {
            this.removeChildren();
            this.renderBoardBg();
            const promises = mixedBoard.map((mixedCube) => {
                return new Promise((resolve) => {
                    const cubeSprite = this.createCube(mixedCube.cube);
                    const fromPosition = this.getCubePositionByCoords(mixedCube.from);
                    const toPosition = this.getCubePositionByCoords(mixedCube.to);
                    this.addChild(cubeSprite);
                    cubeSprite.position.set(fromPosition.x, fromPosition.y);
                    const animationLogic = (ticker) => {
                        const startPosition = cubeSprite.position;
                        const diff = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Point(toPosition.x - startPosition.x, toPosition.y - startPosition.y);
                        if (diff.x === 0 && diff.y === 0) {
                            this.app.ticker.remove(animationLogic);
                            resolve("");
                        }
                        else {
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
            yield Promise.all(promises).then(() => { });
        });
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
            y: coords.y * this.cubeHeight + 15,
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
        const panelScoreScoreWrapper = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Graphics()
            .roundRect(0, 0, 200, 80, 20)
            .fill("#0E3366");
        panelScoreScoreWrapper.position.set((panelScoreSize - 200) / 2, panelScoreSize - 80 - 30);
        const panelScoreScoreTitle = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Text({
            text: "счет:",
            style: {
                fontFamily: "Arial",
                fontSize: 30,
                fill: "white",
            },
        });
        panelScoreScoreTitle.position.set((panelScoreSize - panelScoreScoreTitle.width) / 2, panelScoreSize - 80 - 30);
        const panelTimerScoreWrapper = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Graphics()
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
    renderScore(score) {
        this.panelScoreContainer.removeChildren();
        const panelScoreScoreValue = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Text({
            text: score,
            style: {
                fontFamily: "Arial",
                fontSize: 50,
                fill: "white",
            },
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
                fill: "white",
            },
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
    var _a;
    return ((_a = board[coords.y]) === null || _a === void 0 ? void 0 : _a[coords.x]) || null;
};
const setCellByCoords = (board, coords, maybeCube) => {
    board[coords.y][coords.x] = maybeCube;
};
const copyBoard = (board) => {
    return JSON.parse(JSON.stringify(board));
};
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
const wait = (ms = 1000) => new Promise((resolve) => setTimeout(resolve, ms));


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
}
else {
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function init() {
    return __awaiter(this, void 0, void 0, function* () {
        const game = new _game__WEBPACK_IMPORTED_MODULE_0__.Game();
        yield game.init();
        game.start();
    });
}


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RXhCLE1BQU0sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBRWxCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNmLENBQUM7Q0FBQTs7Ozs7OztVQ1JEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSwrQkFBK0Isd0NBQXdDO1dBQ3ZFO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUJBQWlCLHFCQUFxQjtXQUN0QztXQUNBO1dBQ0Esa0JBQWtCLHFCQUFxQjtXQUN2QztXQUNBO1dBQ0EsS0FBSztXQUNMO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0MzQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NIQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9zdHlsZS5jc3M/ZTMyMCIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvYXBwbGljYXRpb24vY2xpY2tDZWxsL2NsaWNrQ2VsbC50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvYXBwbGljYXRpb24vY2xpY2tDZWxsL2luZGV4LnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9hcHBsaWNhdGlvbi9pbmRleC50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvYXBwbGljYXRpb24vc3RhcnRHYW1lL2luZGV4LnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9hcHBsaWNhdGlvbi9zdGFydEdhbWUvc3RhcnRHYW1lLnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi9idXJuQ3ViZXMvYnVybkN1YmVzLnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vYnVybkN1YmVzL2luZGV4LnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vY2hlY2tIYXNNb3Zlcy9jaGVja0hhc01vdmVzLnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vY2hlY2tIYXNNb3Zlcy9pbmRleC50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL2NoZWNrSXNXaW4vY2hlY2tJc1dpbi50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL2NoZWNrSXNXaW4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi9jcmVhdGVDb25maWcvY3JlYXRlQ29uZmlnLnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vY3JlYXRlQ29uZmlnL2luZGV4LnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vY3JlYXRlQ3ViZS9jcmVhdGVDdWJlLnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vY3JlYXRlQ3ViZS9pbmRleC50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL2NyZWF0ZVJhbmRvbUN1YmUvY3JlYXRlUmFuZG9tQ3ViZS50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL2NyZWF0ZVJhbmRvbUN1YmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi9mYWxsQ3ViZXMvZmFsbEN1YmVzLnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vZmFsbEN1YmVzL2luZGV4LnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vZmlsbEVtcHR5Q2VsbHMvZmlsbEVtcHR5Q2VsbHMudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi9maWxsRW1wdHlDZWxscy9pbmRleC50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL2dlbmVyYXRlQm9hcmQvZ2VuZXJhdGVCb2FyZC50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL2dlbmVyYXRlQm9hcmQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi9nZXRDdWJlc0NoYWluL2dldEN1YmVzQ2hhaW4udHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi9nZXRDdWJlc0NoYWluL2luZGV4LnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vZ2V0TGlua2VkQ3ViZXMvZ2V0TGlua2VkQ3ViZXMudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi9nZXRMaW5rZWRDdWJlcy9pbmRleC50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL2dldFVwZGF0ZVNjb3JlL2dldFVwZGF0ZVNjb3JlLnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vZ2V0VXBkYXRlU2NvcmUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi9pbmRleC50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL2xvZ1ByaXR0eUJvYXJkL2luZGV4LnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vbG9nUHJpdHR5Qm9hcmQvbG9nUHJpdHR5Qm9hcmQudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi9taXhDdWJlc0lmTmVlZC9pbmRleC50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL21peEN1YmVzSWZOZWVkL21peEN1YmVzSWZOZWVkLnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vdHJ5QnVybkN1ZGVzL2luZGV4LnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vdHJ5QnVybkN1ZGVzL3RyeUJ1cm5DdWRlcy50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL3RyeUNyZWF0ZVN1cGVyQ3ViZS9pbmRleC50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL3RyeUNyZWF0ZVN1cGVyQ3ViZS90cnlDcmVhdGVTdXBlckN1YmUudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi91cGRhdGVBdmlhbGFibGVDdWJlc0NvbG9ycy9pbmRleC50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL3VwZGF0ZUF2aWFsYWJsZUN1YmVzQ29sb3JzL3VwZGF0ZUF2aWFsYWJsZUN1YmVzQ29sb3JzLnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vdXBkYXRlR2FtZVN0YXR1cy9pbmRleC50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL3VwZGF0ZUdhbWVTdGF0dXMvdXBkYXRlR2FtZVN0YXR1cy50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL3VwZGF0ZVJlbWFpbmluZ01vdmVzL2luZGV4LnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vdXBkYXRlUmVtYWluaW5nTW92ZXMvdXBkYXRlUmVtYWluaW5nTW92ZXMudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2luZGV4LnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS91aS9nYW1lLnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS91aS9nYW1lQm9hcmQudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL3VpL2dhbWVQYW5lbC50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvdWkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL3V0aWxzLnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9pbml0LnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2JsYXN0LWdhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JsYXN0LWdhbWUvd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JsYXN0LWdhbWUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JsYXN0LWdhbWUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JsYXN0LWdhbWUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IGdldENlbGxCeUNvb3JkcyB9IGZyb20gXCJzcmMvZ2FtZS91dGlsc1wiO1xuaW1wb3J0IHtcbiAgZmFsbEN1YmVzLFxuICBmaWxsRW1wdHlDZWxscyxcbiAgZ2V0VXBkYXRlU2NvcmUsXG4gIG1peEN1YmVzSWZOZWVkLFxuICB0cnlCdXJuQ3ViZXMsXG4gIHRyeUNyZWF0ZVN1cGVyQ3ViZSxcbiAgdXBkYXRlR2FtZVN0YXR1cyxcbiAgdXBkYXRlUmVtYWluaW5nTW92ZXMsXG59IGZyb20gXCIuLi8uLi9kb21haW5cIjtcbmltcG9ydCB7IENsaWNrQ2VsbCB9IGZyb20gXCIuLi8uLi9wb3J0cy5pbnB1dFwiO1xuaW1wb3J0IHtcbiAgU2F2ZVNjb3JlLFxuICBSZWFkQ29uZmlnLFxuICBSZWFkQm9hcmQsXG4gIFJlYWRTY29yZSxcbiAgU2F2ZUJvYXJkLFxuICBSZWFkQXZpYWxhYmxlQ3ViZXNDb2xvcnMsXG4gIFJlYWRTdGF0dXMsXG4gIFNhdmVTdGF0dXMsXG4gIFNhdmVSZW1haW5pbmdNb3ZlcyxcbiAgUmVhZFJlbWFpbmluZ01vdmVzLFxuICBSZWFkTWl4Q291bnQsXG59IGZyb20gXCIuLi8uLi9wb3J0cy5vdXRwdXRcIjtcbmltcG9ydCB7IEdBTUVfQ1VCRVNfVFlQRSB9IGZyb20gXCJzcmMvZ2FtZS9jb25zdGFudHNcIjtcblxuaW50ZXJmYWNlIERlcHMge1xuICByZWFkU2NvcmU6IFJlYWRTY29yZTtcbiAgc2F2ZVNjb3JlOiBTYXZlU2NvcmU7XG4gIHJlYWRDb25maWc6IFJlYWRDb25maWc7XG4gIHJlYWRCb2FyZDogUmVhZEJvYXJkO1xuICBzYXZlQm9hcmQ6IFNhdmVCb2FyZDtcbiAgcmVhZEF2aWFsYWJsZUN1YmVzQ29sb3JzOiBSZWFkQXZpYWxhYmxlQ3ViZXNDb2xvcnM7XG4gIHJlYWRTdGF0dXM6IFJlYWRTdGF0dXM7XG4gIHNhdmVTdGF0dXM6IFNhdmVTdGF0dXM7XG4gIHJlYWRSZW1haW5pbmdNb3ZlczogUmVhZFJlbWFpbmluZ01vdmVzO1xuICBzYXZlUmVtYWluaW5nTW92ZXM6IFNhdmVSZW1haW5pbmdNb3ZlcztcbiAgcmVhZE1peENvdW50OiBSZWFkTWl4Q291bnQ7XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDbGlja0NlbGwgPVxuICAoe1xuICAgIHNhdmVTY29yZSxcbiAgICByZWFkQ29uZmlnLFxuICAgIHJlYWRCb2FyZCxcbiAgICByZWFkU2NvcmUsXG4gICAgc2F2ZUJvYXJkLFxuICAgIHJlYWRBdmlhbGFibGVDdWJlc0NvbG9ycyxcbiAgICByZWFkU3RhdHVzLFxuICAgIHNhdmVTdGF0dXMsXG4gICAgcmVhZFJlbWFpbmluZ01vdmVzLFxuICAgIHNhdmVSZW1haW5pbmdNb3ZlcyxcbiAgICByZWFkTWl4Q291bnQsXG4gIH06IERlcHMpOiBDbGlja0NlbGwgPT5cbiAgKGNvb3JkcykgPT4ge1xuICAgIGNvbnN0IGNvbmZpZyA9IHJlYWRDb25maWcoKTtcbiAgICBjb25zdCBib2FyZCA9IHJlYWRCb2FyZCgpO1xuICAgIGNvbnN0IHNjb3JlID0gcmVhZFNjb3JlKCk7XG5cbiAgICBjb25zdCBjbGlja2VkQ3ViZSA9IGdldENlbGxCeUNvb3Jkcyhib2FyZCwgY29vcmRzKTtcblxuICAgIGNvbnN0IG1heWJlQnVybmVkSW5mbyA9IHRyeUJ1cm5DdWJlcyhjb25maWcsIGJvYXJkLCBjbGlja2VkQ3ViZSk7XG4gICAgaWYgKCFtYXliZUJ1cm5lZEluZm8pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGlzQmFzZUN1YmUgPSBjbGlja2VkQ3ViZS50eXBlID09PSBHQU1FX0NVQkVTX1RZUEUuQkFTRTtcblxuICAgIGNvbnN0IHsgYnVybmVkQ3ViZXMsIGJvYXJkOiBib2FyZFdpdGhCdXJuZWQgfSA9IG1heWJlQnVybmVkSW5mbztcbiAgICBjb25zdCB1cGRhdGVkU2NvcmUgPSBnZXRVcGRhdGVTY29yZShidXJuZWRDdWJlcywgc2NvcmUpO1xuXG4gICAgY29uc3QgeyBib2FyZDogYm9hcmRCdXJuZWRXaXRoU3VwZXIsIHN1cGVyQ3ViZXMgfSA9IHRyeUNyZWF0ZVN1cGVyQ3ViZShcbiAgICAgIGNvbmZpZyxcbiAgICAgIGNvb3JkcyxcbiAgICAgIGJ1cm5lZEN1YmVzLFxuICAgICAgYm9hcmRXaXRoQnVybmVkLFxuICAgICAgaXNCYXNlQ3ViZSxcbiAgICApO1xuXG4gICAgY29uc3Qge1xuICAgICAgZmFsbGVkQ3ViZXMsXG4gICAgICBib2FyZDogZmFsbGVkQm9hcmQsXG4gICAgICBib2FyZFdpdGhvdXRNb3ZlZCxcbiAgICB9ID0gZmFsbEN1YmVzKGNvbmZpZywgYm9hcmRCdXJuZWRXaXRoU3VwZXIpO1xuXG4gICAgY29uc3QgYXZpYWxhYmxlQ3ViZXNDb2xvcnMgPSByZWFkQXZpYWxhYmxlQ3ViZXNDb2xvcnMoKTtcblxuICAgIGNvbnN0IHtcbiAgICAgIG5ld0N1YmVzLFxuICAgICAgYm9hcmQ6IGZpbGxlZEJvYXJkLFxuICAgICAgZmFsbGVkTmV3Q3ViZXMsXG4gICAgfSA9IGZpbGxFbXB0eUNlbGxzKGZhbGxlZEJvYXJkLCBhdmlhbGFibGVDdWJlc0NvbG9ycyk7XG5cbiAgICBjb25zdCBtaXhDb3VudCA9IHJlYWRNaXhDb3VudCgpO1xuXG4gICAgY29uc3QgeyBtaXhlZEJvYXJkcywgdXBkYXRlZEJvYXJkIH0gPSBtaXhDdWJlc0lmTmVlZChcbiAgICAgIGNvbmZpZyxcbiAgICAgIGZpbGxlZEJvYXJkLFxuICAgICAgbWl4Q291bnQsXG4gICAgKTtcblxuICAgIGNvbnN0IHN0YXR1cyA9IHJlYWRTdGF0dXMoKTtcbiAgICBjb25zdCBjdXJyZW50TW92ZXMgPSByZWFkUmVtYWluaW5nTW92ZXMoKTtcblxuICAgIGNvbnN0IHVwZGF0ZWRNb3ZlcyA9IHVwZGF0ZVJlbWFpbmluZ01vdmVzKGN1cnJlbnRNb3Zlcyk7XG5cbiAgICBjb25zdCB1cGRhdGVkU3RhdHVzID0gdXBkYXRlR2FtZVN0YXR1cyhcbiAgICAgIGNvbmZpZyxcbiAgICAgIHVwZGF0ZWRCb2FyZCxcbiAgICAgIHVwZGF0ZWRTY29yZSxcbiAgICAgIGNvbmZpZy5zY29yZXNUb1dpbixcbiAgICAgIHN0YXR1cyxcbiAgICAgIHVwZGF0ZWRNb3ZlcyxcbiAgICApO1xuXG4gICAgc2F2ZVNjb3JlKHVwZGF0ZWRTY29yZSk7XG4gICAgc2F2ZUJvYXJkKHVwZGF0ZWRCb2FyZCk7XG4gICAgc2F2ZVN0YXR1cyh1cGRhdGVkU3RhdHVzKTtcbiAgICBzYXZlUmVtYWluaW5nTW92ZXModXBkYXRlZE1vdmVzKTtcblxuICAgIHJldHVybiB7XG4gICAgICBidXJuZWRDdWJlcyxcbiAgICAgIHN1cGVyQ3ViZXMsXG4gICAgICBmYWxsZWRDdWJlcyxcbiAgICAgIGJvYXJkV2l0aEJ1cm5lZCxcbiAgICAgIGJvYXJkQnVybmVkV2l0aFN1cGVyLFxuICAgICAgZmFsbGVkQm9hcmQsXG4gICAgICBib2FyZFdpdGhvdXRNb3ZlZCxcbiAgICAgIGZpbGxlZEJvYXJkLFxuICAgICAgbmV3Q3ViZXMsXG4gICAgICBtaXhlZEJvYXJkcyxcbiAgICAgIHVwZGF0ZWRTY29yZSxcbiAgICAgIGJvYXJkOiB1cGRhdGVkQm9hcmQsXG4gICAgICBmYWxsZWROZXdDdWJlcyxcbiAgICAgIHN0YXR1czogdXBkYXRlZFN0YXR1cyxcbiAgICB9O1xuICB9O1xuIiwiZXhwb3J0IHsgY3JlYXRlQ2xpY2tDZWxsIH0gZnJvbSBcIi4vY2xpY2tDZWxsXCI7XG4iLCJleHBvcnQgeyBjcmVhdGVTdGFydEdhbWUgfSBmcm9tIFwiLi9zdGFydEdhbWVcIjtcbmV4cG9ydCB7IGNyZWF0ZUNsaWNrQ2VsbCB9IGZyb20gXCIuL2NsaWNrQ2VsbFwiO1xuIiwiZXhwb3J0IHsgY3JlYXRlU3RhcnRHYW1lIH0gZnJvbSBcIi4vc3RhcnRHYW1lXCI7XG4iLCJpbXBvcnQgeyBHQU1FX1NUQVRVU0VTIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgZ2VuZXJhdGVCb2FyZCwgdXBkYXRlQXZpYWxhYmxlQ3ViZXNDb2xvcnMgfSBmcm9tIFwiLi4vLi4vZG9tYWluXCI7XG5pbXBvcnQge1xuICBTYXZlQXZpYWxhYmxlQ3ViZXNDb2xvcnMsXG4gIFNhdmVCb2FyZCxcbiAgU2F2ZVNjb3JlLFxuICBTYXZlU3RhdHVzLFxuICBSZWFkQ29uZmlnLFxuICBTYXZlUmVtYWluaW5nTW92ZXMsXG59IGZyb20gXCIuLi8uLi9wb3J0cy5vdXRwdXRcIjtcbmltcG9ydCB7IFN0YXJ0R2FtZSB9IGZyb20gXCIuLi8uLi9wb3J0cy5pbnB1dFwiO1xuXG5pbnRlcmZhY2UgRGVwcyB7XG4gIHNhdmVBdmlhbGFibGVDdWJlc0NvbG9yczogU2F2ZUF2aWFsYWJsZUN1YmVzQ29sb3JzO1xuICBzYXZlQm9hcmQ6IFNhdmVCb2FyZDtcbiAgc2F2ZVNjb3JlOiBTYXZlU2NvcmU7XG4gIHNhdmVTdGF0dXM6IFNhdmVTdGF0dXM7XG4gIHJlYWRDb25maWc6IFJlYWRDb25maWc7XG4gIHNhdmVSZW1haW5pbmdNb3ZlczogU2F2ZVJlbWFpbmluZ01vdmVzO1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlU3RhcnRHYW1lID1cbiAgKHtcbiAgICBzYXZlQXZpYWxhYmxlQ3ViZXNDb2xvcnMsXG4gICAgc2F2ZUJvYXJkLFxuICAgIHNhdmVTY29yZSxcbiAgICBzYXZlU3RhdHVzLFxuICAgIHJlYWRDb25maWcsXG4gICAgc2F2ZVJlbWFpbmluZ01vdmVzLFxuICB9OiBEZXBzKTogU3RhcnRHYW1lID0+XG4gICgpID0+IHtcbiAgICBjb25zdCBjb25maWcgPSByZWFkQ29uZmlnKCk7XG4gICAgY29uc3QgYXZpYWxhYmxlQ3ViZXNDb2xvcnMgPSB1cGRhdGVBdmlhbGFibGVDdWJlc0NvbG9ycyhjb25maWcpO1xuICAgIGNvbnN0IGJvYXJkID0gZ2VuZXJhdGVCb2FyZChjb25maWcsIGF2aWFsYWJsZUN1YmVzQ29sb3JzKTtcbiAgICBjb25zdCBzY29yZSA9IDA7XG4gICAgY29uc3Qgc3RhdHVzID0gR0FNRV9TVEFUVVNFUy5QTEFZSU5HO1xuXG4gICAgc2F2ZUJvYXJkKGJvYXJkKTtcbiAgICBzYXZlQXZpYWxhYmxlQ3ViZXNDb2xvcnMoYXZpYWxhYmxlQ3ViZXNDb2xvcnMpO1xuICAgIHNhdmVTY29yZShzY29yZSk7XG4gICAgc2F2ZVN0YXR1cyhzdGF0dXMpO1xuICAgIHNhdmVSZW1haW5pbmdNb3Zlcyhjb25maWcubW92ZUNvdW50KTtcblxuICAgIHJldHVybiB7XG4gICAgICBib2FyZCxcbiAgICAgIGF2aWFsYWJsZUN1YmVzQ29sb3JzLFxuICAgICAgc2NvcmUsXG4gICAgICBzdGF0dXMsXG4gICAgfTtcbiAgfTtcbiIsImV4cG9ydCBjb25zdCBHQU1FX0NVQkVTID0ge1xuICBCTFVFOiBcImJsdWVDdWJlXCIsXG4gIFJFRDogXCJyZWRDdWJlXCIsXG4gIEdSRUVOOiBcImdyZWVuQ3ViZVwiLFxuICBZRUxMT1c6IFwieWVsbG93Q3ViZVwiLFxuICBQVVJQTEU6IFwicHVycGxlQ3ViZVwiLFxufSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IEdBTUVfQ1VCRVNfVFlQRSA9IHtcbiAgQkFTRTogXCJiYXNlXCIsXG4gIENPTDogXCJjb2xcIixcbiAgUk9XOiBcInJvd1wiLFxuICBCT0FSRDogXCJib2FyZFwiLFxuICBSQURJVVM6IFwicmFkaXVzXCIsXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgR0FNRV9TVEFUVVNFUyA9IHtcbiAgV0lOOiBcIndpblwiLFxuICBOT19NT1ZFUzogXCJub01vdmVzXCIsXG4gIFBMQVlJTkc6IFwicGxheWluZ1wiLFxuICBJRExFOiBcImlkbGVcIixcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBBU1NFVFMgPSB7XG4gIEJPQVJEOiB7XG4gICAgQUxJQVM6IFwiYm9hcmRcIixcbiAgICBTUkM6IFwiYXNzZXRzL2JvYXJkLnBuZ1wiLFxuICB9LFxuICBCTFVFX0NVQkU6IHtcbiAgICBBTElBUzogR0FNRV9DVUJFUy5CTFVFLFxuICAgIFNSQzogXCJhc3NldHMvYmx1ZUN1YmUucG5nXCIsXG4gIH0sXG4gIFJFRF9DVUJFOiB7XG4gICAgQUxJQVM6IEdBTUVfQ1VCRVMuUkVELFxuICAgIFNSQzogXCJhc3NldHMvcmVkQ3ViZS5wbmdcIixcbiAgfSxcbiAgR1JFRU5fQ1VCRToge1xuICAgIEFMSUFTOiBHQU1FX0NVQkVTLkdSRUVOLFxuICAgIFNSQzogXCJhc3NldHMvZ3JlZW5DdWJlLnBuZ1wiLFxuICB9LFxuICBZRUxMT1dfQ1VCRToge1xuICAgIEFMSUFTOiBHQU1FX0NVQkVTLllFTExPVyxcbiAgICBTUkM6IFwiYXNzZXRzL3llbGxvd0N1YmUucG5nXCIsXG4gIH0sXG4gIFBVUlBMRV9DVUJFOiB7XG4gICAgQUxJQVM6IEdBTUVfQ1VCRVMuUFVSUExFLFxuICAgIFNSQzogXCJhc3NldHMvcHVycGxlQ3ViZS5wbmdcIixcbiAgfSxcbiAgUEFORUxfU0NPUkU6IHtcbiAgICBBTElBUzogXCJwYW5lbFNjb3JlXCIsXG4gICAgU1JDOiBcImFzc2V0cy9wYW5lbFNjb3JlLnBuZ1wiLFxuICB9LFxufSBhcyBjb25zdDtcbiIsImltcG9ydCB7IGNvcHlCb2FyZCwgZ2V0Q2VsbEJ5Q29vcmRzLCBzZXRDZWxsQnlDb29yZHMgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7XG4gIEdhbWVCb2FyZCxcbiAgR2FtZUJvYXJkRmlsbGVkLFxuICBHYW1lQnVybmVkQ3ViZXMsXG4gIEdhbWVDb25maWcsXG4gIEdhbWVDdWJlLFxuICBHYW1lQ3ViZXMsXG59IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgR0FNRV9DVUJFU19UWVBFIH0gZnJvbSBcInNyYy9nYW1lL2NvbnN0YW50c1wiO1xuXG5mdW5jdGlvbiBidXJuU3VwZXJDdWJlKFxuICBjdWJlOiBHYW1lQ3ViZSxcbiAgYm9hcmRXaXRoQnVybmVkOiBHYW1lQm9hcmQsXG4gIGJ1cm5lZEN1YmVzOiBHYW1lQnVybmVkQ3ViZXMsXG4gIHN1cGVyQm9tYlJhZGl1czogbnVtYmVyLFxuKSB7XG4gIGNvbnN0IGJ1cm5DdWJlID0gKGN1YmVUb0J1cm46IEdhbWVDdWJlKSA9PiB7XG4gICAgYnVybmVkQ3ViZXMucHVzaChjdWJlVG9CdXJuKTtcbiAgICBzZXRDZWxsQnlDb29yZHMoYm9hcmRXaXRoQnVybmVkLCBjdWJlVG9CdXJuLmNvb3JkcywgbnVsbCk7XG5cbiAgICBpZiAoY3ViZVRvQnVybi50eXBlICE9PSBHQU1FX0NVQkVTX1RZUEUuQkFTRSkge1xuICAgICAgYnVyblN1cGVyQ3ViZShjdWJlVG9CdXJuLCBib2FyZFdpdGhCdXJuZWQsIGJ1cm5lZEN1YmVzLCBzdXBlckJvbWJSYWRpdXMpO1xuICAgIH1cbiAgfTtcblxuICBpZiAoY3ViZS50eXBlID09PSBHQU1FX0NVQkVTX1RZUEUuQ09MKSB7XG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgYm9hcmRXaXRoQnVybmVkLmxlbmd0aDsgcm93KyspIHtcbiAgICAgIGNvbnN0IGN1YmVUb0J1cm5Db29yZHMgPSB7XG4gICAgICAgIHk6IHJvdyxcbiAgICAgICAgeDogY3ViZS5jb29yZHMueCxcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGN1YmVUb0J1cm4gPSBnZXRDZWxsQnlDb29yZHMoYm9hcmRXaXRoQnVybmVkLCBjdWJlVG9CdXJuQ29vcmRzKTtcblxuICAgICAgaWYgKGN1YmVUb0J1cm4pIHtcbiAgICAgICAgYnVybkN1YmUoY3ViZVRvQnVybik7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGN1YmUudHlwZSA9PT0gR0FNRV9DVUJFU19UWVBFLlJPVykge1xuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGJvYXJkV2l0aEJ1cm5lZFswXS5sZW5ndGg7IGNvbCsrKSB7XG4gICAgICBjb25zdCBjdWJlVG9CdXJuQ29vcmRzID0ge1xuICAgICAgICB5OiBjdWJlLmNvb3Jkcy55LFxuICAgICAgICB4OiBjb2wsXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBjdWJlVG9CdXJuID0gZ2V0Q2VsbEJ5Q29vcmRzKGJvYXJkV2l0aEJ1cm5lZCwgY3ViZVRvQnVybkNvb3Jkcyk7XG5cbiAgICAgIGlmIChjdWJlVG9CdXJuKSB7XG4gICAgICAgIGJ1cm5DdWJlKGN1YmVUb0J1cm4pO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmIChjdWJlLnR5cGUgPT09IEdBTUVfQ1VCRVNfVFlQRS5SQURJVVMpIHtcbiAgICBjb25zdCByYWRpdXMgPSBzdXBlckJvbWJSYWRpdXM7XG5cbiAgICBmb3IgKFxuICAgICAgbGV0IHJvdyA9IGN1YmUuY29vcmRzLnkgLSByYWRpdXM7XG4gICAgICByb3cgPD0gY3ViZS5jb29yZHMueSArIHJhZGl1cztcbiAgICAgIHJvdysrXG4gICAgKSB7XG4gICAgICBmb3IgKFxuICAgICAgICBsZXQgY29sID0gY3ViZS5jb29yZHMueCAtIHJhZGl1cztcbiAgICAgICAgY29sIDw9IGN1YmUuY29vcmRzLnggKyByYWRpdXM7XG4gICAgICAgIGNvbCsrXG4gICAgICApIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHJvdyA+PSAwICYmXG4gICAgICAgICAgcm93IDwgYm9hcmRXaXRoQnVybmVkLmxlbmd0aCAmJlxuICAgICAgICAgIGNvbCA+PSAwICYmXG4gICAgICAgICAgY29sIDwgYm9hcmRXaXRoQnVybmVkWzBdLmxlbmd0aFxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBjdWJlVG9CdXJuQ29vcmRzID0ge1xuICAgICAgICAgICAgeTogcm93LFxuICAgICAgICAgICAgeDogY29sLFxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBjb25zdCBjdWJlVG9CdXJuID0gZ2V0Q2VsbEJ5Q29vcmRzKGJvYXJkV2l0aEJ1cm5lZCwgY3ViZVRvQnVybkNvb3Jkcyk7XG5cbiAgICAgICAgICBpZiAoY3ViZVRvQnVybikge1xuICAgICAgICAgICAgYnVybkN1YmUoY3ViZVRvQnVybik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2UgaWYgKGN1YmUudHlwZSA9PT0gR0FNRV9DVUJFU19UWVBFLkJPQVJEKSB7XG4gICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgYm9hcmRXaXRoQnVybmVkLmxlbmd0aDsgcm93KyspIHtcbiAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGJvYXJkV2l0aEJ1cm5lZFswXS5sZW5ndGg7IGNvbCsrKSB7XG4gICAgICAgIGNvbnN0IGN1YmVUb0J1cm5Db29yZHMgPSB7XG4gICAgICAgICAgeTogcm93LFxuICAgICAgICAgIHg6IGNvbCxcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBjdWJlVG9CdXJuID0gZ2V0Q2VsbEJ5Q29vcmRzKGJvYXJkV2l0aEJ1cm5lZCwgY3ViZVRvQnVybkNvb3Jkcyk7XG5cbiAgICAgICAgaWYgKGN1YmVUb0J1cm4pIHtcbiAgICAgICAgICBidXJuQ3ViZShjdWJlVG9CdXJuKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgY29uc3QgYnVybkN1YmVzID0gKFxuICBjb25maWc6IEdhbWVDb25maWcsXG4gIGJvYXJkOiBHYW1lQm9hcmRGaWxsZWQsXG4gIGN1YmVzOiBHYW1lQ3ViZXMsXG4pID0+IHtcbiAgY29uc3QgYnVybmVkQ3ViZXM6IEdhbWVCdXJuZWRDdWJlcyA9IFtdO1xuICBjb25zdCBib2FyZENvcHkgPSBjb3B5Qm9hcmQoYm9hcmQpO1xuXG4gIGNvbnN0IHN1cGVyQ3ViZXMgPSBjdWJlcy5maWx0ZXIoKGN1YmUpID0+IGN1YmUudHlwZSAhPT0gR0FNRV9DVUJFU19UWVBFLkJBU0UpO1xuXG4gIHN1cGVyQ3ViZXMuZm9yRWFjaCgoY3ViZSkgPT4ge1xuICAgIGJ1cm5TdXBlckN1YmUoY3ViZSwgYm9hcmRDb3B5LCBidXJuZWRDdWJlcywgY29uZmlnLnN1cGVyQm9tYlJhZGl1cyk7XG4gIH0pO1xuXG4gIGZvciAoY29uc3QgY3ViZSBvZiBjdWJlcykge1xuICAgIGNvbnN0IGFscmVhZHlCdXJuZWQgPSBidXJuZWRDdWJlcy5maW5kKFxuICAgICAgKGJ1cm5lZEN1YmUpID0+XG4gICAgICAgIGJ1cm5lZEN1YmUuY29vcmRzLnggPT09IGN1YmUuY29vcmRzLnggJiZcbiAgICAgICAgYnVybmVkQ3ViZS5jb29yZHMueSA9PT0gY3ViZS5jb29yZHMueSxcbiAgICApO1xuXG4gICAgaWYgKCFhbHJlYWR5QnVybmVkKSB7XG4gICAgICBidXJuZWRDdWJlcy5wdXNoKGN1YmUpO1xuICAgICAgc2V0Q2VsbEJ5Q29vcmRzKGJvYXJkQ29weSwgY3ViZS5jb29yZHMsIG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYnVybmVkQ3ViZXMsXG4gICAgYm9hcmQ6IGJvYXJkQ29weSBhcyBHYW1lQm9hcmQsXG4gIH07XG59O1xuXG4vLyB0b2RvIGxvb3AgY2lpYmVzIGJ1cm5cbiIsImV4cG9ydCB7IGJ1cm5DdWJlcyB9IGZyb20gXCIuL2J1cm5DdWJlc1wiO1xuIiwiaW1wb3J0IHsgZ2V0Q2VsbEJ5Q29vcmRzIH0gZnJvbSBcInNyYy9nYW1lL3V0aWxzXCI7XG5pbXBvcnQgeyBHYW1lQm9hcmRGaWxsZWQsIEdhbWVDdWJlSWQsIEdhbWVDb25maWcgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGdldExpbmtlZEN1YmVzIH0gZnJvbSBcIi4uL2dldExpbmtlZEN1YmVzXCI7XG5cbmV4cG9ydCBjb25zdCBjaGVja0hhc01vdmVzID0gKGNvbmZpZzogR2FtZUNvbmZpZywgYm9hcmQ6IEdhbWVCb2FyZEZpbGxlZCkgPT4ge1xuICBjb25zdCBjaGVja2VkQ3ViZXM6IEFycmF5PEdhbWVDdWJlSWQ+ID0gW107XG5cbiAgY29uc3QgeyBib2FyZENvbHMsIGJvYXJkUm93cywgbWluQ2hhaW5MZW5ndGggfSA9IGNvbmZpZztcblxuICBmb3IgKGxldCB5ID0gMDsgeSA8IGJvYXJkUm93czsgeSsrKSB7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBib2FyZENvbHM7IHgrKykge1xuICAgICAgY29uc3QgY3ViZSA9IGdldENlbGxCeUNvb3Jkcyhib2FyZCwgeyB4LCB5IH0pO1xuXG4gICAgICBpZiAoY3ViZSkge1xuICAgICAgICBjb25zdCBsaW5rZWRDdWJlcyA9IGdldExpbmtlZEN1YmVzKFxuICAgICAgICAgIGJvYXJkLFxuICAgICAgICAgIHsgeCwgeSB9LFxuICAgICAgICAgIGN1YmUuY29sb3IsXG4gICAgICAgICAgY2hlY2tlZEN1YmVzLFxuICAgICAgICApO1xuICAgICAgICBpZiAobGlua2VkQ3ViZXMubGVuZ3RoID49IG1pbkNoYWluTGVuZ3RoKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY2hlY2tlZEN1YmVzLnB1c2goLi4ubGlua2VkQ3ViZXMubWFwKChjdWJlKSA9PiBjdWJlLmlkKSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59O1xuIiwiZXhwb3J0IHsgY2hlY2tIYXNNb3ZlcyB9IGZyb20gXCIuL2NoZWNrSGFzTW92ZXNcIjtcbiIsImltcG9ydCB7IEdhbWVTY29yZSB9IGZyb20gXCJzcmMvZ2FtZS90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgY2hlY2tJc1dpbiA9IChzY29yZTogR2FtZVNjb3JlLCBzY29yZXNUb1dpbjogR2FtZVNjb3JlKSA9PiB7XG4gIHJldHVybiBzY29yZSA+PSBzY29yZXNUb1dpbjtcbn07XG4iLCJleHBvcnQgeyBjaGVja0lzV2luIH0gZnJvbSBcIi4vY2hlY2tJc1dpblwiO1xuIiwiaW1wb3J0IHsgR0FNRV9DVUJFUyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IEdhbWVDb25maWdQYXJhbXMgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuY29uc3QgbWluQ3ViZUNvbG9yc0NvdW50ID0gMjtcbmNvbnN0IG1heEN1YmVDb2xvcnNDb3VudCA9IE9iamVjdC52YWx1ZXMoR0FNRV9DVUJFUykubGVuZ3RoO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlQ29uZmlnID0gKHBhcmFtczogR2FtZUNvbmZpZ1BhcmFtcykgPT4ge1xuICBjb25zdCB7IGN1YmVDb2xvcnNDb3VudCB9ID0gcGFyYW1zO1xuXG4gIGlmIChjdWJlQ29sb3JzQ291bnQgPCBtaW5DdWJlQ29sb3JzQ291bnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgY3ViZUNvbG9yc0NvdW50IHNob3VsZCBiZSBncmVhdGVyIHRoYW4gJHttaW5DdWJlQ29sb3JzQ291bnQgLSAxfWAsXG4gICAgKTtcbiAgfVxuXG4gIGlmIChjdWJlQ29sb3JzQ291bnQgPiBtYXhDdWJlQ29sb3JzQ291bnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICBgY3ViZUNvbG9yc0NvdW50IHNob3VsZCBiZSBsZXNzIHRoYW4gJHttYXhDdWJlQ29sb3JzQ291bnQgKyAxfWAsXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBwYXJhbXM7XG59O1xuIiwiZXhwb3J0IHsgY3JlYXRlQ29uZmlnIH0gZnJvbSBcIi4vY3JlYXRlQ29uZmlnXCI7XG4iLCJpbXBvcnQgeyBHQU1FX0NVQkVTX1RZUEUgfSBmcm9tIFwic3JjL2dhbWUvY29uc3RhbnRzXCI7XG5pbXBvcnQge1xuICBHYW1lQ3ViZUlkLFxuICBHYW1lQ2VsbENvb3JkcyxcbiAgR2FtZUN1YmVDb2xvcixcbiAgR2FtZUN1YmUsXG4gIEdhbWVDdWJlVHlwZSxcbn0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmxldCBjdWJlSWR4ID0gMDtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUN1YmUgPSAoXG4gIGNvb3JkczogR2FtZUNlbGxDb29yZHMsXG4gIGNvbG9yOiBHYW1lQ3ViZUNvbG9yLFxuICB0eXBlPzogR2FtZUN1YmVUeXBlLFxuKTogR2FtZUN1YmUgPT4ge1xuICByZXR1cm4ge1xuICAgIGlkOiBgJHtjdWJlSWR4Kyt9YCBhcyBHYW1lQ3ViZUlkLFxuICAgIGNvbG9yLFxuICAgIGNvb3JkcyxcbiAgICB0eXBlOiB0eXBlIHx8IEdBTUVfQ1VCRVNfVFlQRS5CQVNFLFxuICB9O1xufTtcbiIsImV4cG9ydCB7IGNyZWF0ZUN1YmUgfSBmcm9tIFwiLi9jcmVhdGVDdWJlXCI7XG4iLCJpbXBvcnQgeyBnZXRSYW5kb21JbnQgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7IEdhbWVDZWxsQ29vcmRzLCBHYW1lQ3ViZUNvbG9yLCBHYW1lQ3ViZVR5cGUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGNyZWF0ZUN1YmUgfSBmcm9tIFwiLi4vY3JlYXRlQ3ViZVwiO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlUmFuZG9tQ3ViZSA9IChcbiAgY29vcmRzOiBHYW1lQ2VsbENvb3JkcyxcbiAgYXZpYWxhYmxlQ3ViZXNDb2xvcnM6IEFycmF5PEdhbWVDdWJlQ29sb3I+LFxuICB0eXBlPzogR2FtZUN1YmVUeXBlLFxuKSA9PiB7XG4gIGNvbnN0IGdldFJhbmRvbUNvbG9yID0gKGNvbG9yczogQXJyYXk8R2FtZUN1YmVDb2xvcj4pOiBHYW1lQ3ViZUNvbG9yID0+IHtcbiAgICByZXR1cm4gY29sb3JzW2dldFJhbmRvbUludCgwLCBjb2xvcnMubGVuZ3RoKV07XG4gIH07XG5cbiAgcmV0dXJuIGNyZWF0ZUN1YmUoY29vcmRzLCBnZXRSYW5kb21Db2xvcihhdmlhbGFibGVDdWJlc0NvbG9ycyksIHR5cGUpO1xufTtcbiIsImV4cG9ydCB7IGNyZWF0ZVJhbmRvbUN1YmUgfSBmcm9tIFwiLi9jcmVhdGVSYW5kb21DdWJlXCI7XG4iLCJpbXBvcnQgeyBHYW1lQ29uZmlnLCBHYW1lQm9hcmQsIEdhbWVGYWxsZWRDdWJlcyB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgY29weUJvYXJkLCBnZXRDZWxsQnlDb29yZHMsIHNldENlbGxCeUNvb3JkcyB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuaW1wb3J0IHsgY3JlYXRlQ3ViZSB9IGZyb20gXCIuLi9jcmVhdGVDdWJlXCI7XG5cbmV4cG9ydCBjb25zdCBmYWxsQ3ViZXMgPSAoY29uZmlnOiBHYW1lQ29uZmlnLCBib2FyZDogR2FtZUJvYXJkKSA9PiB7XG4gIGNvbnN0IGZhbGxlZEN1YmVzOiBHYW1lRmFsbGVkQ3ViZXMgPSBbXTtcbiAgY29uc3QgeyBib2FyZENvbHMsIGJvYXJkUm93cyB9ID0gY29uZmlnO1xuICBjb25zdCBib2FyZENvcHkgPSBjb3B5Qm9hcmQoYm9hcmQpO1xuICBjb25zdCBib2FyZFdpdGhvdXRNb3ZlZCA9IGNvcHlCb2FyZChib2FyZCk7XG5cbiAgZm9yIChsZXQgeSA9IGJvYXJkUm93cyAtIDE7IHkgPj0gMDsgeS0tKSB7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPD0gYm9hcmRDb2xzIC0gMTsgeCsrKSB7XG4gICAgICBjb25zdCBtYXliZUN1YmUgPSBnZXRDZWxsQnlDb29yZHMoYm9hcmRDb3B5LCB7IHgsIHkgfSk7XG4gICAgICBpZiAoIW1heWJlQ3ViZSkge1xuICAgICAgICBsZXQgZmFsbFkgPSB5O1xuICAgICAgICBmb3IgKGxldCBjaGVja1kgPSB5OyBjaGVja1kgPj0gMDsgY2hlY2tZLS0pIHtcbiAgICAgICAgICBjb25zdCB0ZW1wID0gZ2V0Q2VsbEJ5Q29vcmRzKGJvYXJkQ29weSwge1xuICAgICAgICAgICAgeCxcbiAgICAgICAgICAgIHk6IGNoZWNrWSxcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmICh0ZW1wKSB7XG4gICAgICAgICAgICBjb25zdCBmcm9tID0geyB4LCB5OiBjaGVja1kgfTtcbiAgICAgICAgICAgIGNvbnN0IHRvID0geyB4LCB5OiBmYWxsWSB9O1xuICAgICAgICAgICAgY29uc3QgdXBkYXRlZEN1YmUgPSBjcmVhdGVDdWJlKHRvLCB0ZW1wLmNvbG9yLCB0ZW1wLnR5cGUpO1xuXG4gICAgICAgICAgICBzZXRDZWxsQnlDb29yZHMoYm9hcmRDb3B5LCB0bywgdXBkYXRlZEN1YmUpO1xuICAgICAgICAgICAgc2V0Q2VsbEJ5Q29vcmRzKGJvYXJkQ29weSwgZnJvbSwgbnVsbCk7XG5cbiAgICAgICAgICAgIHNldENlbGxCeUNvb3Jkcyhib2FyZFdpdGhvdXRNb3ZlZCwgdG8sIG51bGwpO1xuICAgICAgICAgICAgc2V0Q2VsbEJ5Q29vcmRzKGJvYXJkV2l0aG91dE1vdmVkLCBmcm9tLCBudWxsKTtcblxuICAgICAgICAgICAgZmFsbGVkQ3ViZXMucHVzaCh7XG4gICAgICAgICAgICAgIGZyb20sXG4gICAgICAgICAgICAgIHRvLFxuICAgICAgICAgICAgICBjdWJlOiB1cGRhdGVkQ3ViZSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBmYWxsWS0tO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYm9hcmQ6IGJvYXJkQ29weSxcbiAgICBmYWxsZWRDdWJlcyxcbiAgICBib2FyZFdpdGhvdXRNb3ZlZCxcbiAgfTtcbn07XG4iLCJleHBvcnQgeyBmYWxsQ3ViZXMgfSBmcm9tIFwiLi9mYWxsQ3ViZXNcIjtcbiIsImltcG9ydCB7IGNvcHlCb2FyZCwgc2V0Q2VsbEJ5Q29vcmRzIH0gZnJvbSBcInNyYy9nYW1lL3V0aWxzXCI7XG5pbXBvcnQge1xuICBHYW1lQ3ViZXMsXG4gIEdhbWVDZWxsQ29vcmRzLFxuICBHYW1lQ3ViZUNvbG9yLFxuICBHYW1lRmFsbGVkQ3ViZXMsXG4gIEdhbWVCb2FyZCxcbn0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBjcmVhdGVSYW5kb21DdWJlIH0gZnJvbSBcIi4uL2NyZWF0ZVJhbmRvbUN1YmVcIjtcblxuZXhwb3J0IGNvbnN0IGZpbGxFbXB0eUNlbGxzID0gKFxuICBib2FyZFdpdGhFbXB0eTogR2FtZUJvYXJkLFxuICBhdmlhbGFibGVDdWJlc0NvbG9yczogQXJyYXk8R2FtZUN1YmVDb2xvcj4sXG4pID0+IHtcbiAgY29uc3QgbmV3Q3ViZXM6IEdhbWVDdWJlcyA9IFtdO1xuICBjb25zdCBib2FyZENvcHkgPSBjb3B5Qm9hcmQoYm9hcmRXaXRoRW1wdHkpO1xuXG4gIGNvbnN0IGVtcHR5Q2VsbHMgPSBib2FyZFdpdGhFbXB0eS5yZWR1Y2UoKGFjYywgcm93LCB5KSA9PiB7XG4gICAgcm93LmZvckVhY2goKGNlbGwsIHgpID0+IHtcbiAgICAgIGlmICghY2VsbCkge1xuICAgICAgICBhY2MucHVzaCh7IHgsIHkgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCBbXSBhcyBBcnJheTxHYW1lQ2VsbENvb3Jkcz4pO1xuXG4gIGZvciAoY29uc3QgY29vcmRzIG9mIGVtcHR5Q2VsbHMpIHtcbiAgICBjb25zdCBuZXdDdWJlID0gY3JlYXRlUmFuZG9tQ3ViZShjb29yZHMsIGF2aWFsYWJsZUN1YmVzQ29sb3JzKTtcbiAgICBzZXRDZWxsQnlDb29yZHMoYm9hcmRDb3B5LCBjb29yZHMsIG5ld0N1YmUpO1xuICAgIG5ld0N1YmVzLnB1c2gobmV3Q3ViZSk7XG4gIH1cblxuICBjb25zdCBnZXRFbXB0eUNvdW50SW5Db2x1bW4gPSAoeDogbnVtYmVyKSA9PiB7XG4gICAgcmV0dXJuIGJvYXJkV2l0aEVtcHR5LnJlZHVjZSgoYWNjLCByb3cpID0+IHtcbiAgICAgIGlmICghcm93W3hdKSB7XG4gICAgICAgIGFjYysrO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIDApO1xuICB9O1xuXG4gIGNvbnN0IGZhbGxlZE5ld0N1YmVzID0gbmV3Q3ViZXMucmVkdWNlKChhY2MsIGN1YmUpID0+IHtcbiAgICBjb25zdCB7IGNvb3JkcyB9ID0gY3ViZTtcblxuICAgIGNvbnN0IGZhbGxlZEN1YmUgPSB7XG4gICAgICBmcm9tOiB7XG4gICAgICAgIHg6IGNvb3Jkcy54LFxuICAgICAgICB5OiBjb29yZHMueSAtIGdldEVtcHR5Q291bnRJbkNvbHVtbihjb29yZHMueCksXG4gICAgICB9LFxuICAgICAgdG86IGNvb3JkcyxcbiAgICAgIGN1YmUsXG4gICAgfTtcblxuICAgIGFjYy5wdXNoKGZhbGxlZEN1YmUpO1xuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwgW10gYXMgR2FtZUZhbGxlZEN1YmVzKTtcblxuICByZXR1cm4ge1xuICAgIG5ld0N1YmVzLFxuICAgIGZhbGxlZE5ld0N1YmVzLFxuICAgIGJvYXJkOiBib2FyZENvcHksXG4gIH07XG59O1xuIiwiZXhwb3J0IHsgZmlsbEVtcHR5Q2VsbHMgfSBmcm9tIFwiLi9maWxsRW1wdHlDZWxsc1wiO1xuIiwiaW1wb3J0IHsgR2FtZUJvYXJkRmlsbGVkLCBHYW1lQ29uZmlnLCBHYW1lQ3ViZUNvbG9yIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBjcmVhdGVSYW5kb21DdWJlIH0gZnJvbSBcIi4uL2NyZWF0ZVJhbmRvbUN1YmVcIjtcblxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlQm9hcmQgPSAoXG4gIGNvbmZpZzogR2FtZUNvbmZpZyxcbiAgYXZpYWxhYmxlQ3ViZXNDb2xvcnM6IEFycmF5PEdhbWVDdWJlQ29sb3I+LFxuKTogR2FtZUJvYXJkRmlsbGVkID0+IHtcbiAgY29uc3QgeyBib2FyZFJvd3MsIGJvYXJkQ29scyB9ID0gY29uZmlnO1xuICBjb25zdCBib2FyZDogR2FtZUJvYXJkRmlsbGVkID0gW107XG5cbiAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgYm9hcmRSb3dzOyByb3crKykge1xuICAgIGJvYXJkW3Jvd10gPSBbXTtcbiAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBib2FyZENvbHM7IGNvbCsrKSB7XG4gICAgICBjb25zdCBjb29yZHMgPSB7IHg6IGNvbCwgeTogcm93IH07XG4gICAgICBjb25zdCBjdWJlID0gY3JlYXRlUmFuZG9tQ3ViZShjb29yZHMsIGF2aWFsYWJsZUN1YmVzQ29sb3JzKTtcbiAgICAgIGJvYXJkW3Jvd11bY29sXSA9IGN1YmU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGJvYXJkO1xufTtcbiIsImV4cG9ydCB7IGdlbmVyYXRlQm9hcmQgfSBmcm9tIFwiLi9nZW5lcmF0ZUJvYXJkXCI7XG4iLCJpbXBvcnQgeyBnZXRDZWxsQnlDb29yZHMgfSBmcm9tIFwic3JjL2dhbWUvdXRpbHNcIjtcbmltcG9ydCB7IEdhbWVDdWJlcywgR2FtZUNlbGxDb29yZHMsIEdhbWVCb2FyZEZpbGxlZCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgZ2V0TGlua2VkQ3ViZXMgfSBmcm9tIFwiLi4vZ2V0TGlua2VkQ3ViZXNcIjtcblxuZXhwb3J0IGNvbnN0IGdldEN1YmVzQ2hhaW4gPSAoXG4gIGJvYXJkOiBHYW1lQm9hcmRGaWxsZWQsXG4gIGNvb3JkczogR2FtZUNlbGxDb29yZHMsXG4pOiBHYW1lQ3ViZXMgPT4ge1xuICBjb25zdCBjdWJlID0gZ2V0Q2VsbEJ5Q29vcmRzKGJvYXJkLCBjb29yZHMpO1xuXG4gIGNvbnN0IGxpbmtlZEN1YmVzID0gZ2V0TGlua2VkQ3ViZXMoXG4gICAgYm9hcmQsXG4gICAgeyB4OiBjb29yZHMueCwgeTogY29vcmRzLnkgfSxcbiAgICBjdWJlLmNvbG9yLFxuICAgIFtjdWJlLmlkXSxcbiAgKTtcblxuICByZXR1cm4gWy4uLmxpbmtlZEN1YmVzLCBjdWJlXTtcbn07XG4iLCJleHBvcnQgeyBnZXRDdWJlc0NoYWluIH0gZnJvbSBcIi4vZ2V0Q3ViZXNDaGFpblwiO1xuIiwiaW1wb3J0IHtcbiAgR2FtZUJvYXJkRmlsbGVkLFxuICBHYW1lQ3ViZUlkLFxuICBHYW1lQ2VsbENvb3JkcyxcbiAgR2FtZUN1YmVDb2xvcixcbiAgR2FtZUN1YmVzLFxufSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGdldENlbGxCeUNvb3JkcyB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0TGlua2VkQ3ViZXMgPSAoXG4gIGJvYXJkOiBHYW1lQm9hcmRGaWxsZWQsXG4gIGNvb3JkczogR2FtZUNlbGxDb29yZHMsXG4gIGN1YmVDb2xvcjogR2FtZUN1YmVDb2xvcixcbiAgY2hlY2tlZEN1YmVzOiBBcnJheTxHYW1lQ3ViZUlkPixcbikgPT4ge1xuICBjb25zdCBnZXRMaW5rZWRDdWJlcyA9IChcbiAgICBib2FyZDogR2FtZUJvYXJkRmlsbGVkLFxuICAgIGNvb3JkczogR2FtZUNlbGxDb29yZHMsXG4gICAgY3ViZUNvbG9yOiBHYW1lQ3ViZUNvbG9yLFxuICAgIGNoZWNrZWRDdWJlczogQXJyYXk8R2FtZUN1YmVJZD4sXG4gICkgPT4ge1xuICAgIGNvbnN0IGxpbmtlZEN1YmVzOiBHYW1lQ3ViZXMgPSBbXTtcblxuICAgIGNvbnN0IGdldExpbmtlZEN1YmUgPSAoY29vcmRzOiBHYW1lQ2VsbENvb3JkcykgPT4ge1xuICAgICAgY29uc3QgY3ViZSA9IGdldENlbGxCeUNvb3Jkcyhib2FyZCwgY29vcmRzKTtcblxuICAgICAgaWYgKGN1YmUgJiYgY3ViZS5jb2xvciA9PT0gY3ViZUNvbG9yKSB7XG4gICAgICAgIGlmIChjaGVja2VkQ3ViZXMuaW5jbHVkZXMoY3ViZS5pZCkpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjaGVja2VkQ3ViZXMucHVzaChjdWJlLmlkKTtcblxuICAgICAgICBsaW5rZWRDdWJlcy5wdXNoKFxuICAgICAgICAgIGN1YmUsXG4gICAgICAgICAgLi4uZ2V0TGlua2VkQ3ViZXMoYm9hcmQsIGNvb3JkcywgY3ViZUNvbG9yLCBjaGVja2VkQ3ViZXMpLFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBnZXRMaW5rZWRDdWJlKHsgeDogY29vcmRzLngsIHk6IGNvb3Jkcy55ICsgMSB9KTtcbiAgICBnZXRMaW5rZWRDdWJlKHsgeDogY29vcmRzLnggLSAxLCB5OiBjb29yZHMueSB9KTtcbiAgICBnZXRMaW5rZWRDdWJlKHsgeDogY29vcmRzLnggKyAxLCB5OiBjb29yZHMueSB9KTtcbiAgICBnZXRMaW5rZWRDdWJlKHsgeDogY29vcmRzLngsIHk6IGNvb3Jkcy55IC0gMSB9KTtcblxuICAgIHJldHVybiBsaW5rZWRDdWJlcztcbiAgfTtcblxuICByZXR1cm4gZ2V0TGlua2VkQ3ViZXMoYm9hcmQsIGNvb3JkcywgY3ViZUNvbG9yLCBjaGVja2VkQ3ViZXMpO1xufTtcbiIsImV4cG9ydCB7IGdldExpbmtlZEN1YmVzIH0gZnJvbSBcIi4vZ2V0TGlua2VkQ3ViZXNcIjtcbiIsImltcG9ydCB7IEdhbWVCdXJuZWRDdWJlcywgR2FtZVNjb3JlIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRVcGRhdGVTY29yZSA9IChcbiAgYnVybmVkQ3ViZXM6IEdhbWVCdXJuZWRDdWJlcyxcbiAgc2NvcmU6IEdhbWVTY29yZSxcbikgPT4ge1xuICByZXR1cm4gYnVybmVkQ3ViZXMubGVuZ3RoICsgc2NvcmU7XG59O1xuIiwiZXhwb3J0IHsgZ2V0VXBkYXRlU2NvcmUgfSBmcm9tIFwiLi9nZXRVcGRhdGVTY29yZVwiO1xuIiwiZXhwb3J0IHsgY3JlYXRlQ3ViZSB9IGZyb20gXCIuL2NyZWF0ZUN1YmVcIjtcbmV4cG9ydCB7IGNyZWF0ZVJhbmRvbUN1YmUgfSBmcm9tIFwiLi9jcmVhdGVSYW5kb21DdWJlXCI7XG5leHBvcnQgeyB0cnlDcmVhdGVTdXBlckN1YmUgfSBmcm9tIFwiLi90cnlDcmVhdGVTdXBlckN1YmVcIjtcbmV4cG9ydCB7IGdlbmVyYXRlQm9hcmQgfSBmcm9tIFwiLi9nZW5lcmF0ZUJvYXJkXCI7XG5leHBvcnQgeyBnZXRMaW5rZWRDdWJlcyB9IGZyb20gXCIuL2dldExpbmtlZEN1YmVzXCI7XG5leHBvcnQgeyBnZXRDdWJlc0NoYWluIH0gZnJvbSBcIi4vZ2V0Q3ViZXNDaGFpblwiO1xuZXhwb3J0IHsgYnVybkN1YmVzIH0gZnJvbSBcIi4vYnVybkN1YmVzXCI7XG5leHBvcnQgeyBmYWxsQ3ViZXMgfSBmcm9tIFwiLi9mYWxsQ3ViZXNcIjtcbmV4cG9ydCB7IGZpbGxFbXB0eUNlbGxzIH0gZnJvbSBcIi4vZmlsbEVtcHR5Q2VsbHNcIjtcbmV4cG9ydCB7IGNoZWNrSGFzTW92ZXMgfSBmcm9tIFwiLi9jaGVja0hhc01vdmVzXCI7XG5leHBvcnQgeyBtaXhDdWJlc0lmTmVlZCB9IGZyb20gXCIuL21peEN1YmVzSWZOZWVkXCI7XG5leHBvcnQgeyBjcmVhdGVDb25maWcgfSBmcm9tIFwiLi9jcmVhdGVDb25maWdcIjtcbmV4cG9ydCB7IHVwZGF0ZUF2aWFsYWJsZUN1YmVzQ29sb3JzIH0gZnJvbSBcIi4vdXBkYXRlQXZpYWxhYmxlQ3ViZXNDb2xvcnNcIjtcbmV4cG9ydCB7IHRyeUJ1cm5DdWJlcyB9IGZyb20gXCIuL3RyeUJ1cm5DdWRlc1wiO1xuZXhwb3J0IHsgZ2V0VXBkYXRlU2NvcmUgfSBmcm9tIFwiLi9nZXRVcGRhdGVTY29yZVwiO1xuZXhwb3J0IHsgY2hlY2tJc1dpbiB9IGZyb20gXCIuL2NoZWNrSXNXaW5cIjtcbmV4cG9ydCB7IHVwZGF0ZUdhbWVTdGF0dXMgfSBmcm9tIFwiLi91cGRhdGVHYW1lU3RhdHVzXCI7XG5leHBvcnQgeyBsb2dQcml0dHlCb2FyZCB9IGZyb20gXCIuL2xvZ1ByaXR0eUJvYXJkXCI7XG5leHBvcnQgeyB1cGRhdGVSZW1haW5pbmdNb3ZlcyB9IGZyb20gXCIuL3VwZGF0ZVJlbWFpbmluZ01vdmVzXCI7XG4iLCJleHBvcnQgeyBsb2dQcml0dHlCb2FyZCB9IGZyb20gXCIuL2xvZ1ByaXR0eUJvYXJkXCI7XG4iLCJpbXBvcnQgeyBHYW1lQm9hcmRGaWxsZWQgfSBmcm9tIFwic3JjL2dhbWUvdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IGxvZ1ByaXR0eUJvYXJkID0gKGJvYXJkOiBHYW1lQm9hcmRGaWxsZWQpID0+IHtcbiAgY29uc3QgY2VsbFN0ckxlbiA9IDY7XG4gIGNvbnNvbGUubG9nKFxuICAgIGJvYXJkLm1hcCgocm93KSA9PlxuICAgICAgcm93XG4gICAgICAgIC5tYXAoKGNlbGwpID0+IHtcbiAgICAgICAgICBpZiAoIWNlbGwpIHtcbiAgICAgICAgICAgIHJldHVybiBcIl9cIi5yZXBlYXQoY2VsbFN0ckxlbik7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29uc3QgY2VsbFN0ciA9IGAke2NlbGwuY29sb3Iuc2xpY2UoMCwgMSl9XyR7Y2VsbC5pZH1gO1xuXG4gICAgICAgICAgcmV0dXJuIGNlbGxTdHIucGFkRW5kKGNlbGxTdHJMZW4sIFwiIFwiKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmpvaW4oXCIgXCIpLFxuICAgICksXG4gICk7XG59O1xuIiwiZXhwb3J0IHsgbWl4Q3ViZXNJZk5lZWQgfSBmcm9tIFwiLi9taXhDdWJlc0lmTmVlZFwiO1xuIiwiaW1wb3J0IHsgZ2V0UmFuZG9tSW50LCBnZXRDZWxsQnlDb29yZHMsIGNvcHlCb2FyZCB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuaW1wb3J0IHtcbiAgR2FtZUJvYXJkLFxuICBHYW1lQm9hcmRGaWxsZWQsXG4gIEdhbWVDb25maWcsXG4gIEdhbWVNaXhlZEJvYXJkLFxufSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGNoZWNrSGFzTW92ZXMgfSBmcm9tIFwiLi4vY2hlY2tIYXNNb3Zlc1wiO1xuaW1wb3J0IHsgY3JlYXRlQ3ViZSB9IGZyb20gXCIuLi9jcmVhdGVDdWJlXCI7XG5cbmV4cG9ydCBjb25zdCBtaXhDdWJlc0lmTmVlZCA9IChcbiAgY29uZmlnOiBHYW1lQ29uZmlnLFxuICBmaWxsZWRCb2FyZDogR2FtZUJvYXJkRmlsbGVkLFxuICBtaXhDb3VudDogbnVtYmVyLFxuKSA9PiB7XG4gIGNvbnN0IHsgYm9hcmRDb2xzLCBib2FyZFJvd3MgfSA9IGNvbmZpZztcblxuICBjb25zdCBoYXNNb3ZlcyA9IGNoZWNrSGFzTW92ZXMoY29uZmlnLCBmaWxsZWRCb2FyZCk7XG4gIGlmIChoYXNNb3Zlcykge1xuICAgIHJldHVybiB7XG4gICAgICBtaXhlZEJvYXJkczogW10sXG4gICAgICB1cGRhdGVkQm9hcmQ6IGZpbGxlZEJvYXJkLFxuICAgIH07XG4gIH1cblxuICBjb25zdCBtaXhlZEJvYXJkczogQXJyYXk8R2FtZU1peGVkQm9hcmQ+ID0gW107XG4gIGxldCBwcmV2Qm9hcmQgPSBmaWxsZWRCb2FyZDtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG1peENvdW50OyBpKyspIHtcbiAgICBjb25zdCBuZXdNaXhlZEJvYXJkOiBHYW1lTWl4ZWRCb2FyZCA9IFtdO1xuICAgIGNvbnN0IG5ld0JvYXJkOiBHYW1lQm9hcmQgPSBBcnJheS5mcm9tKFxuICAgICAge1xuICAgICAgICBsZW5ndGg6IGJvYXJkUm93cyxcbiAgICAgIH0sXG4gICAgICAoKSA9PiBBcnJheS5mcm9tKHsgbGVuZ3RoOiBib2FyZENvbHMgfSksXG4gICAgKTtcblxuICAgIGNvbnN0IGF2aWFsYWJsZUNvb3JkcyA9IEFycmF5LmZyb20oXG4gICAgICB7XG4gICAgICAgIGxlbmd0aDogYm9hcmRSb3dzICogYm9hcmRDb2xzLFxuICAgICAgfSxcbiAgICAgIChfLCBpbmRleCkgPT4gKHtcbiAgICAgICAgeDogaW5kZXggJSBib2FyZENvbHMsXG4gICAgICAgIHk6IE1hdGguZmxvb3IoaW5kZXggLyBib2FyZENvbHMpLFxuICAgICAgfSksXG4gICAgKTtcblxuICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IGJvYXJkUm93czsgcm93KyspIHtcbiAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGJvYXJkQ29sczsgY29sKyspIHtcbiAgICAgICAgY29uc3QgcmFuZG9tSWR4ID0gZ2V0UmFuZG9tSW50KDAsIGF2aWFsYWJsZUNvb3Jkcy5sZW5ndGggLSAxKTtcbiAgICAgICAgY29uc3QgcmFuZG9tQ29vcmRzID0gYXZpYWxhYmxlQ29vcmRzW3JhbmRvbUlkeF07XG4gICAgICAgIGF2aWFsYWJsZUNvb3Jkcy5zcGxpY2UocmFuZG9tSWR4LCAxKTtcblxuICAgICAgICBjb25zdCBmcm9tQ29vcmRzID0ge1xuICAgICAgICAgIHg6IGNvbCxcbiAgICAgICAgICB5OiByb3csXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgY3ViZSA9IGdldENlbGxCeUNvb3JkcyhwcmV2Qm9hcmQsIGZyb21Db29yZHMpO1xuICAgICAgICBjb25zdCB0b0Nvb3JkcyA9IHJhbmRvbUNvb3JkcztcblxuICAgICAgICBjb25zdCBuZXdDdWJlID0gY3JlYXRlQ3ViZSh0b0Nvb3JkcywgY3ViZS5jb2xvciwgY3ViZS50eXBlKTtcblxuICAgICAgICBuZXdCb2FyZFt0b0Nvb3Jkcy55XVt0b0Nvb3Jkcy54XSA9IG5ld0N1YmU7XG4gICAgICAgIG5ld01peGVkQm9hcmQucHVzaCh7XG4gICAgICAgICAgY3ViZTogbmV3Q3ViZSxcbiAgICAgICAgICBmcm9tOiBmcm9tQ29vcmRzLFxuICAgICAgICAgIHRvOiB0b0Nvb3JkcyxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWl4ZWRCb2FyZHMucHVzaChuZXdNaXhlZEJvYXJkKTtcblxuICAgIGNvbnN0IGhhc01vdmVzID0gY2hlY2tIYXNNb3Zlcyhjb25maWcsIG5ld0JvYXJkKTtcblxuICAgIGlmIChoYXNNb3ZlcyB8fCBpID09PSBtaXhDb3VudCAtIDEpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIG1peGVkQm9hcmRzLFxuICAgICAgICB1cGRhdGVkQm9hcmQ6IGNvcHlCb2FyZChuZXdCb2FyZCksXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBwcmV2Qm9hcmQgPSBjb3B5Qm9hcmQobmV3Qm9hcmQpO1xuICAgIH1cbiAgfVxufTtcbiIsImV4cG9ydCB7IHRyeUJ1cm5DdWJlcyB9IGZyb20gXCIuL3RyeUJ1cm5DdWRlc1wiO1xuIiwiaW1wb3J0IHsgR2FtZUJvYXJkRmlsbGVkLCBHYW1lQ29uZmlnLCBHYW1lQ3ViZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgZ2V0Q3ViZXNDaGFpbiB9IGZyb20gXCIuLi9nZXRDdWJlc0NoYWluXCI7XG5pbXBvcnQgeyBidXJuQ3ViZXMgfSBmcm9tIFwiLi4vYnVybkN1YmVzXCI7XG5pbXBvcnQgeyBHQU1FX0NVQkVTX1RZUEUgfSBmcm9tIFwic3JjL2dhbWUvY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBjb25zdCB0cnlCdXJuQ3ViZXMgPSAoXG4gIGNvbmZpZzogR2FtZUNvbmZpZyxcbiAgYm9hcmQ6IEdhbWVCb2FyZEZpbGxlZCxcbiAgY2xpY2tlZEN1YmU6IEdhbWVDdWJlLFxuKSA9PiB7XG4gIGNvbnN0IHsgbWluQ2hhaW5MZW5ndGggfSA9IGNvbmZpZztcblxuICBjb25zdCBjdWJlc0NoYWluID0gZ2V0Q3ViZXNDaGFpbihib2FyZCwgY2xpY2tlZEN1YmUuY29vcmRzKTtcblxuICBjb25zdCBuZWVkQnVybiA9XG4gICAgY3ViZXNDaGFpbi5sZW5ndGggPj0gbWluQ2hhaW5MZW5ndGggfHxcbiAgICBjbGlja2VkQ3ViZS50eXBlICE9PSBHQU1FX0NVQkVTX1RZUEUuQkFTRTtcblxuICBpZiAoIW5lZWRCdXJuKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gYnVybkN1YmVzKGNvbmZpZywgYm9hcmQsIGN1YmVzQ2hhaW4pO1xufTtcbiIsImV4cG9ydCB7IHRyeUNyZWF0ZVN1cGVyQ3ViZSB9IGZyb20gXCIuL3RyeUNyZWF0ZVN1cGVyQ3ViZVwiO1xuIiwiaW1wb3J0IHsgR0FNRV9DVUJFU19UWVBFIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHtcbiAgR2FtZUJvYXJkLFxuICBHYW1lQnVybmVkQ3ViZXMsXG4gIEdhbWVDZWxsQ29vcmRzLFxuICBHYW1lQ29uZmlnLFxufSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGNvcHlCb2FyZCwgZ2V0UmFuZG9tSW50LCBzZXRDZWxsQnlDb29yZHMgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcbmltcG9ydCB7IGNyZWF0ZUN1YmUgfSBmcm9tIFwiLi4vY3JlYXRlQ3ViZVwiO1xuXG5jb25zdCBnZXRSYW5kb21TdXBlckN1YmVUeXBlID0gKCkgPT4ge1xuICBjb25zdCBzdXBlcnMgPSBPYmplY3QudmFsdWVzKEdBTUVfQ1VCRVNfVFlQRSkuZmlsdGVyKFxuICAgICh0eXBlKSA9PiB0eXBlICE9PSBHQU1FX0NVQkVTX1RZUEUuQkFTRSxcbiAgKTtcblxuICByZXR1cm4gc3VwZXJzW2dldFJhbmRvbUludCgwLCBzdXBlcnMubGVuZ3RoIC0gMSldO1xufTtcblxuZXhwb3J0IGNvbnN0IHRyeUNyZWF0ZVN1cGVyQ3ViZSA9IChcbiAgY29uZmlnOiBHYW1lQ29uZmlnLFxuICBjbGlja0Nvb3JkczogR2FtZUNlbGxDb29yZHMsXG4gIGJ1cm5lZEN1YmVzOiBHYW1lQnVybmVkQ3ViZXMsXG4gIGJvYXJkV2l0aEJ1cm5lZDogR2FtZUJvYXJkLFxuICBlbmFibGU6IGJvb2xlYW4sXG4pID0+IHtcbiAgY29uc3QgeyBjdWJlc1RvU3VwZXIgfSA9IGNvbmZpZztcblxuICBpZiAoYnVybmVkQ3ViZXMubGVuZ3RoIDwgY3ViZXNUb1N1cGVyIHx8ICFlbmFibGUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYm9hcmQ6IGJvYXJkV2l0aEJ1cm5lZCxcbiAgICAgIHN1cGVyQ3ViZXM6IFtdLFxuICAgIH07XG4gIH1cblxuICBjb25zdCBidXJuZWRUb1N1cGVyQ3ViZSA9IGJ1cm5lZEN1YmVzLmZpbmQoXG4gICAgKGN1YmUpID0+XG4gICAgICBjdWJlLmNvb3Jkcy54ID09PSBjbGlja0Nvb3Jkcy54ICYmIGN1YmUuY29vcmRzLnkgPT09IGNsaWNrQ29vcmRzLnksXG4gICk7XG5cbiAgY29uc3Qgc3VwZXJDdWJlID0gY3JlYXRlQ3ViZShcbiAgICBidXJuZWRUb1N1cGVyQ3ViZS5jb29yZHMsXG4gICAgYnVybmVkVG9TdXBlckN1YmUuY29sb3IsXG4gICAgZ2V0UmFuZG9tU3VwZXJDdWJlVHlwZSgpLFxuICApO1xuXG4gIGNvbnN0IGJvYXJkQnVybmVkV2l0aFN1cGVyID0gY29weUJvYXJkKGJvYXJkV2l0aEJ1cm5lZCk7XG4gIHNldENlbGxCeUNvb3Jkcyhib2FyZEJ1cm5lZFdpdGhTdXBlciwgc3VwZXJDdWJlLmNvb3Jkcywgc3VwZXJDdWJlKTtcblxuICByZXR1cm4ge1xuICAgIGJvYXJkOiBib2FyZEJ1cm5lZFdpdGhTdXBlcixcbiAgICBzdXBlckN1YmVzOiBbc3VwZXJDdWJlXSxcbiAgfTtcbn07XG4iLCJleHBvcnQgeyB1cGRhdGVBdmlhbGFibGVDdWJlc0NvbG9ycyB9IGZyb20gXCIuL3VwZGF0ZUF2aWFsYWJsZUN1YmVzQ29sb3JzXCI7XG4iLCJpbXBvcnQgeyBHYW1lQ29uZmlnIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBHQU1FX0NVQkVTIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBhdmlhbGFibGVDdWJlcyA9IFtcbiAgR0FNRV9DVUJFUy5SRUQsXG4gIEdBTUVfQ1VCRVMuR1JFRU4sXG4gIEdBTUVfQ1VCRVMuQkxVRSxcbiAgR0FNRV9DVUJFUy5ZRUxMT1csXG4gIEdBTUVfQ1VCRVMuUFVSUExFLFxuXTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUF2aWFsYWJsZUN1YmVzQ29sb3JzID0gKGNvbmZpZzogR2FtZUNvbmZpZykgPT4ge1xuICBjb25zdCB7IGN1YmVDb2xvcnNDb3VudCB9ID0gY29uZmlnO1xuXG4gIGlmIChPYmplY3Qua2V5cyhHQU1FX0NVQkVTKS5sZW5ndGggPCBjdWJlQ29sb3JzQ291bnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGN1YmUgY29sb3JzIGNvdW50XCIpO1xuICB9XG5cbiAgcmV0dXJuIGF2aWFsYWJsZUN1YmVzLnNsaWNlKDAsIGN1YmVDb2xvcnNDb3VudCk7XG59O1xuIiwiZXhwb3J0IHsgdXBkYXRlR2FtZVN0YXR1cyB9IGZyb20gXCIuL3VwZGF0ZUdhbWVTdGF0dXNcIjtcbiIsImltcG9ydCB7XG4gIEdhbWVCb2FyZEZpbGxlZCxcbiAgR2FtZUNvbmZpZyxcbiAgR2FtZU1vdmVzLFxuICBHYW1lU2NvcmUsXG4gIEdhbWVTdGF0dXMsXG59IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgY2hlY2tJc1dpbiB9IGZyb20gXCIuLi9jaGVja0lzV2luXCI7XG5pbXBvcnQgeyBHQU1FX1NUQVRVU0VTIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgY2hlY2tIYXNNb3ZlcyB9IGZyb20gXCIuLi9jaGVja0hhc01vdmVzXCI7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVHYW1lU3RhdHVzID0gKFxuICBjb25maWc6IEdhbWVDb25maWcsXG4gIGJvYXJkOiBHYW1lQm9hcmRGaWxsZWQsXG4gIHNjb3JlOiBHYW1lU2NvcmUsXG4gIHNjb3Jlc1RvV2luOiBHYW1lU2NvcmUsXG4gIHN0YXR1czogR2FtZVN0YXR1cyxcbiAgY3VycmVudE1vdmVzOiBHYW1lTW92ZXMsXG4pOiBHYW1lU3RhdHVzID0+IHtcbiAgaWYgKGNoZWNrSXNXaW4oc2NvcmUsIHNjb3Jlc1RvV2luKSkge1xuICAgIHJldHVybiBHQU1FX1NUQVRVU0VTLldJTjtcbiAgfSBlbHNlIGlmICghY2hlY2tIYXNNb3Zlcyhjb25maWcsIGJvYXJkKSB8fCBjdXJyZW50TW92ZXMgPT09IDApIHtcbiAgICByZXR1cm4gR0FNRV9TVEFUVVNFUy5OT19NT1ZFUztcbiAgfVxuXG4gIHJldHVybiBzdGF0dXM7XG59O1xuIiwiZXhwb3J0IHsgdXBkYXRlUmVtYWluaW5nTW92ZXMgfSBmcm9tIFwiLi91cGRhdGVSZW1haW5pbmdNb3Zlc1wiO1xuIiwiaW1wb3J0IHsgR2FtZU1vdmVzIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVSZW1haW5pbmdNb3ZlcyA9IChjdXJyZW50TW92ZXM6IEdhbWVNb3ZlcykgPT4ge1xuICBjb25zdCB1cGRhdGVkID0gY3VycmVudE1vdmVzIC0gMTtcbiAgcmV0dXJuIHVwZGF0ZWQ7XG59O1xuIiwiZXhwb3J0IHsgR2FtZSB9IGZyb20gXCIuL3VpXCI7XG4iLCJpbXBvcnQgeyBBcHBsaWNhdGlvbiwgQXNzZXRzLCBDb250YWluZXIgfSBmcm9tIFwicGl4aS5qc1wiO1xuaW1wb3J0IHsgQVNTRVRTLCBHQU1FX0NVQkVTLCBHQU1FX1NUQVRVU0VTIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHtcbiAgR2FtZUJvYXJkLFxuICBHYW1lQnVybmVkQ3ViZXMsXG4gIEdhbWVDZWxsQ29vcmRzLFxuICBHYW1lQ29uZmlnLFxuICBHYW1lQ3ViZUNvbG9yLFxuICBHYW1lRmFsbGVkQ3ViZXMsXG4gIEdhbWVNaXhlZEJvYXJkLFxuICBHYW1lU3RhdHVzLFxuICBHYW1lU3VwZXJDdWJlcyxcbn0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBDbGlja0NlbGwsIFN0YXJ0R2FtZSB9IGZyb20gXCIuLi9wb3J0cy5pbnB1dFwiO1xuaW1wb3J0IHsgY3JlYXRlQ2xpY2tDZWxsLCBjcmVhdGVTdGFydEdhbWUgfSBmcm9tIFwiLi4vYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IEdhbWVQYW5lbENvbnRhaW5lciB9IGZyb20gXCIuL2dhbWVQYW5lbFwiO1xuaW1wb3J0IHsgR2FtZUJvYXJkQ29udGFpbmVyIH0gZnJvbSBcIi4vZ2FtZUJvYXJkXCI7XG5pbXBvcnQgeyB3YWl0IH0gZnJvbSBcIi4uL3V0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBHYW1lIHtcbiAgcHJpdmF0ZSBhcHA6IEFwcGxpY2F0aW9uO1xuICBwcml2YXRlIG1haW5Db250YWluZXI6IENvbnRhaW5lcjtcblxuICBwcml2YXRlIGVkaXRhYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgYm9hcmQ6IEdhbWVCb2FyZCA9IFtdO1xuICBwcml2YXRlIGF2aWFsYWJsZUN1YmVzQ29sb3JzOiBBcnJheTxHYW1lQ3ViZUNvbG9yPiA9IFtcbiAgICBHQU1FX0NVQkVTLlJFRCxcbiAgICBHQU1FX0NVQkVTLkdSRUVOLFxuICAgIEdBTUVfQ1VCRVMuQkxVRSxcbiAgICBHQU1FX0NVQkVTLllFTExPVyxcbiAgICBHQU1FX0NVQkVTLlBVUlBMRSxcbiAgXTtcblxuICBwcml2YXRlIHNjb3JlOiBudW1iZXI7XG4gIHByaXZhdGUgc3RhdHVzOiBHYW1lU3RhdHVzO1xuICBwcml2YXRlIGNvbmZpZzogR2FtZUNvbmZpZyA9IHtcbiAgICBib2FyZFJvd3M6IDksXG4gICAgYm9hcmRDb2xzOiA5LFxuICAgIGN1YmVDb2xvcnNDb3VudDogNSxcbiAgICBtaW5DaGFpbkxlbmd0aDogNCxcbiAgICBzY29yZXNUb1dpbjogMjAwLFxuICAgIG1vdmVDb3VudDogMjAsXG4gICAgbWl4Q291bnQ6IDIsXG4gICAgY3ViZXNUb1N1cGVyOiA1LFxuICAgIHN1cGVyQm9tYlJhZGl1czogMixcbiAgfTtcblxuICBwcml2YXRlIHJlbWFpbmluZ01vdmVzID0gdGhpcy5jb25maWcubW92ZUNvdW50O1xuXG4gIHByaXZhdGUgc3RhcnRHYW1lOiBTdGFydEdhbWU7XG4gIHByaXZhdGUgY2xpY2tDZWxsOiBDbGlja0NlbGw7XG5cbiAgcHJpdmF0ZSBnYW1lQm9hcmRDb250YWluZXI6IEdhbWVCb2FyZENvbnRhaW5lcjtcbiAgcHJpdmF0ZSBwYW5lbFNjb3JlQ29udGFpbmVyOiBHYW1lUGFuZWxDb250YWluZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hcHAgPSBuZXcgQXBwbGljYXRpb24oKTtcblxuICAgIHRoaXMubWFpbkNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKTtcblxuICAgIHRoaXMuZ2FtZUJvYXJkQ29udGFpbmVyID0gbmV3IEdhbWVCb2FyZENvbnRhaW5lcih0aGlzLmFwcCwge1xuICAgICAgd2lkdGg6IDUwMCxcbiAgICAgIGhlaWdodDogNTAwLFxuICAgICAgcm93czogdGhpcy5jb25maWcuYm9hcmRSb3dzLFxuICAgICAgY29sczogdGhpcy5jb25maWcuYm9hcmRDb2xzLFxuICAgIH0pO1xuXG4gICAgdGhpcy5wYW5lbFNjb3JlQ29udGFpbmVyID0gbmV3IEdhbWVQYW5lbENvbnRhaW5lcih7XG4gICAgICB3aWR0aDogMzAwLFxuICAgICAgaGVpZ2h0OiAzMDAsXG4gICAgfSk7XG5cbiAgICB0aGlzLnN0YXJ0R2FtZSA9IGNyZWF0ZVN0YXJ0R2FtZSh7XG4gICAgICByZWFkQ29uZmlnOiAoKSA9PiB0aGlzLmNvbmZpZyxcbiAgICAgIHNhdmVBdmlhbGFibGVDdWJlc0NvbG9yczogKGF2aWFsYWJsZUN1YmVzQ29sb3JzKSA9PlxuICAgICAgICAodGhpcy5hdmlhbGFibGVDdWJlc0NvbG9ycyA9IGF2aWFsYWJsZUN1YmVzQ29sb3JzKSxcbiAgICAgIHNhdmVCb2FyZDogKGJvYXJkKSA9PiAodGhpcy5ib2FyZCA9IGJvYXJkKSxcbiAgICAgIHNhdmVTY29yZTogKHNjb3JlKSA9PiAodGhpcy5zY29yZSA9IHNjb3JlKSxcbiAgICAgIHNhdmVTdGF0dXM6IChzdGF0dXMpID0+ICh0aGlzLnN0YXR1cyA9IHN0YXR1cyksXG4gICAgICBzYXZlUmVtYWluaW5nTW92ZXM6IChtb3ZlcykgPT4gKHRoaXMucmVtYWluaW5nTW92ZXMgPSBtb3ZlcyksXG4gICAgfSk7XG5cbiAgICB0aGlzLmNsaWNrQ2VsbCA9IGNyZWF0ZUNsaWNrQ2VsbCh7XG4gICAgICByZWFkQ29uZmlnOiAoKSA9PiB0aGlzLmNvbmZpZyxcbiAgICAgIHJlYWRCb2FyZDogKCkgPT4gdGhpcy5ib2FyZCxcbiAgICAgIHJlYWRTY29yZTogKCkgPT4gdGhpcy5zY29yZSxcbiAgICAgIHJlYWRBdmlhbGFibGVDdWJlc0NvbG9yczogKCkgPT4gdGhpcy5hdmlhbGFibGVDdWJlc0NvbG9ycyxcbiAgICAgIHJlYWRTdGF0dXM6ICgpID0+IHRoaXMuc3RhdHVzLFxuICAgICAgcmVhZFJlbWFpbmluZ01vdmVzOiAoKSA9PiB0aGlzLnJlbWFpbmluZ01vdmVzLFxuICAgICAgc2F2ZUJvYXJkOiAoYm9hcmQpID0+ICh0aGlzLmJvYXJkID0gYm9hcmQpLFxuICAgICAgc2F2ZVNjb3JlOiAoc2NvcmUpID0+ICh0aGlzLnNjb3JlID0gc2NvcmUpLFxuICAgICAgc2F2ZVN0YXR1czogKHN0YXR1cykgPT4gKHRoaXMuc3RhdHVzID0gc3RhdHVzKSxcbiAgICAgIHNhdmVSZW1haW5pbmdNb3ZlczogKG1vdmVzKSA9PiAodGhpcy5yZW1haW5pbmdNb3ZlcyA9IG1vdmVzKSxcbiAgICAgIHJlYWRNaXhDb3VudDogKCkgPT4gdGhpcy5jb25maWcubWl4Q291bnQsXG4gICAgfSk7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB0aGlzLmVkaXRhYmxlID0gdHJ1ZTtcbiAgICB0aGlzLnN0YXJ0R2FtZSgpO1xuXG4gICAgdGhpcy5yZW5kZXJJbml0aWFsQm9hcmQoKTtcbiAgICB0aGlzLnJlbmRlckluaXRpYWxQYW5lbCgpO1xuICB9XG5cbiAgYXN5bmMgaW5pdCgpIHtcbiAgICBhd2FpdCB0aGlzLmFwcC5pbml0KHsgYmFja2dyb3VuZDogXCIjQTFBMUExXCIsIHJlc2l6ZVRvOiB3aW5kb3cgfSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmFwcC5jYW52YXMpO1xuXG4gICAgYXdhaXQgdGhpcy5sb2FkQXNzZXRzKCk7XG5cbiAgICBjb25zdCBjb250YWluZXJXaWR0aCA9IDEwMDA7XG4gICAgY29uc3QgY29udGFpbmVySGVpZ2h0ID0gNzAwO1xuXG4gICAgdGhpcy5tYWluQ29udGFpbmVyLnNldFNpemUoY29udGFpbmVyV2lkdGgsIGNvbnRhaW5lckhlaWdodCk7XG4gICAgdGhpcy5tYWluQ29udGFpbmVyLnBvc2l0aW9uLnNldChcbiAgICAgICh0aGlzLmFwcC5zY3JlZW4ud2lkdGggLSBjb250YWluZXJXaWR0aCkgLyAyLFxuICAgICAgKHRoaXMuYXBwLnNjcmVlbi5oZWlnaHQgLSBjb250YWluZXJIZWlnaHQpIC8gMixcbiAgICApO1xuXG4gICAgdGhpcy5wYW5lbFNjb3JlQ29udGFpbmVyLnBvc2l0aW9uLnNldChcbiAgICAgIGNvbnRhaW5lcldpZHRoIC0gNTAgLSAzMDAsXG4gICAgICBjb250YWluZXJIZWlnaHQgLyAyIC0gMzAwIC8gMixcbiAgICApO1xuXG4gICAgdGhpcy5nYW1lQm9hcmRDb250YWluZXIucG9zaXRpb24uc2V0KDUwLCBjb250YWluZXJIZWlnaHQgLSA1MCAtIDUwMCk7XG5cbiAgICB0aGlzLm1haW5Db250YWluZXIuYWRkQ2hpbGQodGhpcy5nYW1lQm9hcmRDb250YWluZXIpO1xuICAgIHRoaXMubWFpbkNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLnBhbmVsU2NvcmVDb250YWluZXIpO1xuICAgIHRoaXMuYXBwLnN0YWdlLmFkZENoaWxkKHRoaXMubWFpbkNvbnRhaW5lcik7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIG9uQ2VsbENsaWNrKGNvb3JkczogR2FtZUNlbGxDb29yZHMpIHtcbiAgICBpZiAoIXRoaXMuZWRpdGFibGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmNsaWNrQ2VsbChjb29yZHMpO1xuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5lZGl0YWJsZSA9IGZhbHNlO1xuXG4gICAgdGhpcy5yZW5kZXJTY29yZSgpO1xuICAgIHRoaXMucmVuZGVyTW92ZXMoKTtcblxuICAgIGF3YWl0IHRoaXMucmVuZGVyQnVybmVkQm9hcmQocmVzdWx0LmJ1cm5lZEN1YmVzLCByZXN1bHQuYm9hcmRXaXRoQnVybmVkKTtcblxuICAgIGF3YWl0IHRoaXMucmVuZGVyU3VwZXJDdWJlcyhyZXN1bHQuc3VwZXJDdWJlcyk7XG5cbiAgICBhd2FpdCB0aGlzLnJlbmRlckZhbGxlZEJvYXJkKFxuICAgICAgcmVzdWx0LmZhbGxlZEN1YmVzLmNvbmNhdChyZXN1bHQuZmFsbGVkTmV3Q3ViZXMpLFxuICAgICAgcmVzdWx0LmJvYXJkV2l0aG91dE1vdmVkLFxuICAgICk7XG5cbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gR0FNRV9TVEFUVVNFUy5XSU4pIHtcbiAgICAgIHdpbmRvdy5hbGVydChcIldJTlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAocmVzdWx0Lm1peGVkQm9hcmRzLmxlbmd0aCkge1xuICAgICAgYXdhaXQgdGhpcy5yZW5kZXJNaXhlZEJvYXJkKHJlc3VsdC5taXhlZEJvYXJkcyk7XG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IEdBTUVfU1RBVFVTRVMuTk9fTU9WRVMpIHtcbiAgICAgIHdpbmRvdy5hbGVydChcIk5PX01PVkVTXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlckluaXRpYWxCb2FyZCgpO1xuICAgICAgdGhpcy5lZGl0YWJsZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJJbml0aWFsQm9hcmQoKSB7XG4gICAgdGhpcy5nYW1lQm9hcmRDb250YWluZXIucmVuZGVyQ3ViZXMoXG4gICAgICB0aGlzLmJvYXJkLFxuICAgICAgdGhpcy5vbkNlbGxDbGljay5iaW5kKHRoaXMpLFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHJlbmRlckJ1cm5lZEJvYXJkKFxuICAgIGJ1cm5lZDogR2FtZUJ1cm5lZEN1YmVzLFxuICAgIGJvYXJkV2l0aG91dEJ1cm5lZDogR2FtZUJvYXJkLFxuICApIHtcbiAgICB0aGlzLmdhbWVCb2FyZENvbnRhaW5lci5yZW5kZXJDdWJlcyhib2FyZFdpdGhvdXRCdXJuZWQpO1xuICAgIGF3YWl0IHRoaXMuZ2FtZUJvYXJkQ29udGFpbmVyLnJlbmRlckJ1cm5lZChidXJuZWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyByZW5kZXJTdXBlckN1YmVzKHN1cGVyQ3ViZXM6IEdhbWVTdXBlckN1YmVzKSB7XG4gICAgYXdhaXQgdGhpcy5nYW1lQm9hcmRDb250YWluZXIucmVuZGVyU3VwZXJDdWJlcyhzdXBlckN1YmVzKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgcmVuZGVyRmFsbGVkQm9hcmQoXG4gICAgZmFsbGVkOiBHYW1lRmFsbGVkQ3ViZXMsXG4gICAgYm9hcmRXaXRob3V0TW92ZWQ6IEdhbWVCb2FyZCxcbiAgKSB7XG4gICAgdGhpcy5nYW1lQm9hcmRDb250YWluZXIucmVuZGVyQ3ViZXMoYm9hcmRXaXRob3V0TW92ZWQpO1xuICAgIGF3YWl0IHRoaXMuZ2FtZUJvYXJkQ29udGFpbmVyLnJlbmRlckZhbGxlZChmYWxsZWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyByZW5kZXJNaXhlZEJvYXJkKG1peGVkQm9hcmRzOiBBcnJheTxHYW1lTWl4ZWRCb2FyZD4pIHtcbiAgICBmb3IgYXdhaXQgKGNvbnN0IG1peGVkQm9hcmQgb2YgbWl4ZWRCb2FyZHMpIHtcbiAgICAgIGF3YWl0IHRoaXMuZ2FtZUJvYXJkQ29udGFpbmVyLnJlbmRlck1peGVkKG1peGVkQm9hcmQpO1xuXG4gICAgICBhd2FpdCB3YWl0KDIwMCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJJbml0aWFsUGFuZWwoKSB7XG4gICAgdGhpcy5wYW5lbFNjb3JlQ29udGFpbmVyLnJlbmRlcih0aGlzLnNjb3JlLCB0aGlzLnJlbWFpbmluZ01vdmVzKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyU2NvcmUoKSB7XG4gICAgdGhpcy5wYW5lbFNjb3JlQ29udGFpbmVyLnJlbmRlclNjb3JlKHRoaXMuc2NvcmUpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJNb3ZlcygpIHtcbiAgICB0aGlzLnBhbmVsU2NvcmVDb250YWluZXIucmVuZGVyTW92ZXModGhpcy5yZW1haW5pbmdNb3Zlcyk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGxvYWRBc3NldHMoKSB7XG4gICAgQXNzZXRzLmFkZChbXG4gICAgICB7XG4gICAgICAgIGFsaWFzOiBBU1NFVFMuQk9BUkQuQUxJQVMsXG4gICAgICAgIHNyYzogQVNTRVRTLkJPQVJELlNSQyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGFsaWFzOiBBU1NFVFMuQkxVRV9DVUJFLkFMSUFTLFxuICAgICAgICBzcmM6IEFTU0VUUy5CTFVFX0NVQkUuU1JDLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYWxpYXM6IEFTU0VUUy5SRURfQ1VCRS5BTElBUyxcbiAgICAgICAgc3JjOiBBU1NFVFMuUkVEX0NVQkUuU1JDLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYWxpYXM6IEFTU0VUUy5HUkVFTl9DVUJFLkFMSUFTLFxuICAgICAgICBzcmM6IEFTU0VUUy5HUkVFTl9DVUJFLlNSQyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGFsaWFzOiBBU1NFVFMuWUVMTE9XX0NVQkUuQUxJQVMsXG4gICAgICAgIHNyYzogQVNTRVRTLllFTExPV19DVUJFLlNSQyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGFsaWFzOiBBU1NFVFMuUFVSUExFX0NVQkUuQUxJQVMsXG4gICAgICAgIHNyYzogQVNTRVRTLlBVUlBMRV9DVUJFLlNSQyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGFsaWFzOiBBU1NFVFMuUEFORUxfU0NPUkUuQUxJQVMsXG4gICAgICAgIHNyYzogQVNTRVRTLlBBTkVMX1NDT1JFLlNSQyxcbiAgICAgIH0sXG4gICAgXSk7XG5cbiAgICBhd2FpdCBBc3NldHMubG9hZChbXG4gICAgICBBU1NFVFMuQk9BUkQuQUxJQVMsXG4gICAgICBBU1NFVFMuUEFORUxfU0NPUkUuQUxJQVMsXG4gICAgICBBU1NFVFMuQkxVRV9DVUJFLkFMSUFTLFxuICAgICAgQVNTRVRTLlJFRF9DVUJFLkFMSUFTLFxuICAgICAgQVNTRVRTLkdSRUVOX0NVQkUuQUxJQVMsXG4gICAgICBBU1NFVFMuWUVMTE9XX0NVQkUuQUxJQVMsXG4gICAgICBBU1NFVFMuUFVSUExFX0NVQkUuQUxJQVMsXG4gICAgXSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEFwcGxpY2F0aW9uLCBBc3NldHMsIENvbnRhaW5lciwgUG9pbnQsIFNwcml0ZSwgVGlja2VyIH0gZnJvbSBcInBpeGkuanNcIjtcbmltcG9ydCB7IEFTU0VUUywgR0FNRV9DVUJFU19UWVBFIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHtcbiAgR2FtZUJvYXJkLFxuICBHYW1lQnVybmVkQ3ViZXMsXG4gIEdhbWVDZWxsQ29vcmRzLFxuICBHYW1lQ3ViZSxcbiAgR2FtZUZhbGxlZEN1YmVzLFxuICBHYW1lTWl4ZWRCb2FyZCxcbiAgR2FtZVN1cGVyQ3ViZXMsXG59IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgY2xhc3MgR2FtZUJvYXJkQ29udGFpbmVyIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhcHA6IEFwcGxpY2F0aW9uLFxuICAgIHByaXZhdGUgb3B0aW9uczoge1xuICAgICAgd2lkdGg6IG51bWJlcjtcbiAgICAgIGhlaWdodDogbnVtYmVyO1xuICAgICAgcm93czogbnVtYmVyO1xuICAgICAgY29sczogbnVtYmVyO1xuICAgIH0sXG4gICkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBnZXQgY3ViZVdpZHRoKCkge1xuICAgIHJldHVybiAodGhpcy5vcHRpb25zLndpZHRoIC0gMzApIC8gdGhpcy5vcHRpb25zLmNvbHM7XG4gIH1cblxuICBnZXQgY3ViZUhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5jdWJlV2lkdGg7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyQ3ViZXMoXG4gICAgYm9hcmQ6IEdhbWVCb2FyZCxcbiAgICBjYWxsYmFjaz86IChjb29yZHM6IEdhbWVDZWxsQ29vcmRzKSA9PiB2b2lkLFxuICApIHtcbiAgICB0aGlzLnJlbW92ZUNoaWxkcmVuKCk7XG4gICAgdGhpcy5yZW5kZXJCb2FyZEJnKCk7XG5cbiAgICBib2FyZC5mb3JFYWNoKChyb3csIGkpID0+IHtcbiAgICAgIHJvdy5mb3JFYWNoKChjdWJlLCBqKSA9PiB7XG4gICAgICAgIGlmICghY3ViZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGN1YmVTcHJpdGUgPSB0aGlzLmNyZWF0ZUN1YmUoY3ViZSwgY2FsbGJhY2spO1xuICAgICAgICB0aGlzLmFkZENoaWxkKGN1YmVTcHJpdGUpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyQnVybmVkKGJ1cm5lZEN1YmVzOiBHYW1lQnVybmVkQ3ViZXMpIHtcbiAgICBjb25zdCBwcm9taXNlcyA9IGJ1cm5lZEN1YmVzLm1hcCgoYnVybmVkQ3ViZSkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1YmVTcHJpdGUgPSB0aGlzLmNyZWF0ZUN1YmUoYnVybmVkQ3ViZSk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoY3ViZVNwcml0ZSk7XG5cbiAgICAgICAgY29uc3QgYW5pbWF0aW9uTG9naWMgPSAodGlja2VyOiBUaWNrZXIpID0+IHtcbiAgICAgICAgICBpZiAoY3ViZVNwcml0ZS5hbHBoYSA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKGN1YmVTcHJpdGUpO1xuICAgICAgICAgICAgdGhpcy5hcHAudGlja2VyLnJlbW92ZShhbmltYXRpb25Mb2dpYyk7XG4gICAgICAgICAgICByZXNvbHZlKFwiXCIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjdWJlU3ByaXRlLndpZHRoIC09IDAuMTtcbiAgICAgICAgICAgIGN1YmVTcHJpdGUuaGVpZ2h0IC09IDAuMTtcbiAgICAgICAgICAgIGN1YmVTcHJpdGUuYWxwaGEgLT0gMC4xICogdGlja2VyLmRlbHRhVGltZTtcbiAgICAgICAgICAgIGN1YmVTcHJpdGUucG9zaXRpb24uc2V0KGN1YmVTcHJpdGUueCArIDAuMDUsIGN1YmVTcHJpdGUueSArIDAuMDUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmFwcC50aWNrZXIuYWRkKGFuaW1hdGlvbkxvZ2ljKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHt9KTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXJTdXBlckN1YmVzKHN1cGVyQ3ViZXM6IEdhbWVTdXBlckN1YmVzKSB7XG4gICAgY29uc3QgcHJvbWlzZXMgPSBzdXBlckN1YmVzLm1hcCgoc3VwZXJDdWJlKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgY29uc3QgY3ViZVNwcml0ZSA9IHRoaXMuY3JlYXRlQ3ViZShzdXBlckN1YmUpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKGN1YmVTcHJpdGUpO1xuXG4gICAgICAgIGNvbnN0IGFuaW1hdGlvbkxvZ2ljID0gKHRpY2tlcjogVGlja2VyKSA9PiB7XG4gICAgICAgICAgaWYgKGN1YmVTcHJpdGUud2lkdGggPj0gdGhpcy5jdWJlV2lkdGggKiAxLjMpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQoY3ViZVNwcml0ZSk7XG4gICAgICAgICAgICB0aGlzLmFwcC50aWNrZXIucmVtb3ZlKGFuaW1hdGlvbkxvZ2ljKTtcbiAgICAgICAgICAgIHJlc29sdmUoXCJcIik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGN1YmVTcHJpdGUud2lkdGggKz0gMC40ICogdGlja2VyLmRlbHRhVGltZTtcbiAgICAgICAgICAgIGN1YmVTcHJpdGUuaGVpZ2h0ICs9IDAuNCAqIHRpY2tlci5kZWx0YVRpbWU7XG4gICAgICAgICAgICBjdWJlU3ByaXRlLnBvc2l0aW9uLnNldChcbiAgICAgICAgICAgICAgY3ViZVNwcml0ZS54IC0gMC4yICogdGlja2VyLmRlbHRhVGltZSxcbiAgICAgICAgICAgICAgY3ViZVNwcml0ZS55IC0gMC4yICogdGlja2VyLmRlbHRhVGltZSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYXBwLnRpY2tlci5hZGQoYW5pbWF0aW9uTG9naWMpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge30pO1xuICB9XG5cbiAgcHVibGljIHJlbmRlckZhbGxlZChmYWxsZWRDdWJlczogR2FtZUZhbGxlZEN1YmVzKSB7XG4gICAgY29uc3QgcHJvbWlzZXMgPSBmYWxsZWRDdWJlcy5tYXAoKGZhbGxlZEN1YmUpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBjb25zdCBjdWJlU3ByaXRlID0gdGhpcy5jcmVhdGVDdWJlKHtcbiAgICAgICAgICAuLi5mYWxsZWRDdWJlLmN1YmUsXG4gICAgICAgICAgY29vcmRzOiBmYWxsZWRDdWJlLmZyb20sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoY3ViZVNwcml0ZSk7XG5cbiAgICAgICAgY29uc3QgYW5pbWF0aW9uTG9naWMgPSAodGlja2VyOiBUaWNrZXIpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGFydFBvc2l0aW9uID0gY3ViZVNwcml0ZS5wb3NpdGlvbjtcbiAgICAgICAgICBjb25zdCBlbmRQb3N0aW9uID0gdGhpcy5nZXRDdWJlUG9zaXRpb25CeUNvb3JkcyhmYWxsZWRDdWJlLnRvKTtcblxuICAgICAgICAgIGNvbnN0IGRpZmYgPSBuZXcgUG9pbnQoXG4gICAgICAgICAgICBzdGFydFBvc2l0aW9uLngsXG4gICAgICAgICAgICBlbmRQb3N0aW9uLnkgLSBzdGFydFBvc2l0aW9uLnksXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGlmIChkaWZmLnkgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuYXBwLnRpY2tlci5yZW1vdmUoYW5pbWF0aW9uTG9naWMpO1xuICAgICAgICAgICAgcmVzb2x2ZShcIlwiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbmV4dFkgPSBNYXRoLm1pbihcbiAgICAgICAgICAgICAgc3RhcnRQb3NpdGlvbi55ICsgNSAqIHRpY2tlci5kZWx0YVRpbWUsXG4gICAgICAgICAgICAgIGVuZFBvc3Rpb24ueSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjdWJlU3ByaXRlLnBvc2l0aW9uLnNldChzdGFydFBvc2l0aW9uLngsIG5leHRZKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5hcHAudGlja2VyLmFkZChhbmltYXRpb25Mb2dpYyk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7fSk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgcmVuZGVyTWl4ZWQobWl4ZWRCb2FyZDogR2FtZU1peGVkQm9hcmQpIHtcbiAgICB0aGlzLnJlbW92ZUNoaWxkcmVuKCk7XG4gICAgdGhpcy5yZW5kZXJCb2FyZEJnKCk7XG5cbiAgICBjb25zdCBwcm9taXNlcyA9IG1peGVkQm9hcmQubWFwKChtaXhlZEN1YmUpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBjb25zdCBjdWJlU3ByaXRlID0gdGhpcy5jcmVhdGVDdWJlKG1peGVkQ3ViZS5jdWJlKTtcblxuICAgICAgICBjb25zdCBmcm9tUG9zaXRpb24gPSB0aGlzLmdldEN1YmVQb3NpdGlvbkJ5Q29vcmRzKG1peGVkQ3ViZS5mcm9tKTtcbiAgICAgICAgY29uc3QgdG9Qb3NpdGlvbiA9IHRoaXMuZ2V0Q3ViZVBvc2l0aW9uQnlDb29yZHMobWl4ZWRDdWJlLnRvKTtcblxuICAgICAgICB0aGlzLmFkZENoaWxkKGN1YmVTcHJpdGUpO1xuICAgICAgICBjdWJlU3ByaXRlLnBvc2l0aW9uLnNldChmcm9tUG9zaXRpb24ueCwgZnJvbVBvc2l0aW9uLnkpO1xuXG4gICAgICAgIGNvbnN0IGFuaW1hdGlvbkxvZ2ljID0gKHRpY2tlcjogVGlja2VyKSA9PiB7XG4gICAgICAgICAgY29uc3Qgc3RhcnRQb3NpdGlvbiA9IGN1YmVTcHJpdGUucG9zaXRpb247XG5cbiAgICAgICAgICBjb25zdCBkaWZmID0gbmV3IFBvaW50KFxuICAgICAgICAgICAgdG9Qb3NpdGlvbi54IC0gc3RhcnRQb3NpdGlvbi54LFxuICAgICAgICAgICAgdG9Qb3NpdGlvbi55IC0gc3RhcnRQb3NpdGlvbi55LFxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBpZiAoZGlmZi54ID09PSAwICYmIGRpZmYueSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5hcHAudGlja2VyLnJlbW92ZShhbmltYXRpb25Mb2dpYyk7XG4gICAgICAgICAgICByZXNvbHZlKFwiXCIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBwZXJUaWNrID0gNTtcblxuICAgICAgICAgICAgY29uc3QgcGVyVGlja1ggPSBmcm9tUG9zaXRpb24ueCA+IHRvUG9zaXRpb24ueCA/IC1wZXJUaWNrIDogcGVyVGljaztcbiAgICAgICAgICAgIGNvbnN0IHBlclRpY2tZID0gZnJvbVBvc2l0aW9uLnkgPiB0b1Bvc2l0aW9uLnkgPyAtcGVyVGljayA6IHBlclRpY2s7XG5cbiAgICAgICAgICAgIGNvbnN0IG5leHRYID0gKGZyb21Qb3NpdGlvbi54ID4gdG9Qb3NpdGlvbi54ID8gTWF0aC5tYXggOiBNYXRoLm1pbikoXG4gICAgICAgICAgICAgIHN0YXJ0UG9zaXRpb24ueCArIHBlclRpY2tYICogdGlja2VyLmRlbHRhVGltZSxcbiAgICAgICAgICAgICAgdG9Qb3NpdGlvbi54LFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgY29uc3QgbmV4dFkgPSAoZnJvbVBvc2l0aW9uLnkgPiB0b1Bvc2l0aW9uLnkgPyBNYXRoLm1heCA6IE1hdGgubWluKShcbiAgICAgICAgICAgICAgc3RhcnRQb3NpdGlvbi55ICsgcGVyVGlja1kgKiB0aWNrZXIuZGVsdGFUaW1lLFxuICAgICAgICAgICAgICB0b1Bvc2l0aW9uLnksXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjdWJlU3ByaXRlLnBvc2l0aW9uLnNldChuZXh0WCwgbmV4dFkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmFwcC50aWNrZXIuYWRkKGFuaW1hdGlvbkxvZ2ljKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge30pO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVDdWJlKFxuICAgIGN1YmU6IEdhbWVDdWJlLFxuICAgIGNhbGxiYWNrPzogKGNvb3JkczogR2FtZUNlbGxDb29yZHMpID0+IHZvaWQsXG4gICkge1xuICAgIGNvbnN0IHRleHR1cmUgPSBBc3NldHMuZ2V0KGN1YmUuY29sb3IpO1xuICAgIGNvbnN0IGN1YmVTcHJpdGUgPSBuZXcgU3ByaXRlKHRleHR1cmUpO1xuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5nZXRDdWJlUG9zaXRpb25CeUNvb3JkcyhjdWJlLmNvb3Jkcyk7XG5cbiAgICBjdWJlU3ByaXRlLndpZHRoID0gdGhpcy5jdWJlV2lkdGg7XG4gICAgY3ViZVNwcml0ZS5oZWlnaHQgPSB0aGlzLmN1YmVIZWlnaHQ7XG4gICAgY3ViZVNwcml0ZS5wb3NpdGlvbi5zZXQocG9zaXRpb24ueCwgcG9zaXRpb24ueSk7XG5cbiAgICBpZiAoY3ViZS50eXBlICE9PSBHQU1FX0NVQkVTX1RZUEUuQkFTRSkge1xuICAgICAgY3ViZVNwcml0ZS5hbHBoYSA9IDAuNztcbiAgICB9XG5cbiAgICBjdWJlU3ByaXRlLmV2ZW50TW9kZSA9IFwic3RhdGljXCI7XG4gICAgY3ViZVNwcml0ZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY3ViZVNwcml0ZS5vbihcInBvaW50ZXJkb3duXCIsICgpID0+IGNhbGxiYWNrKGN1YmUuY29vcmRzKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGN1YmVTcHJpdGU7XG4gIH1cblxuICBwcml2YXRlIGdldEN1YmVQb3NpdGlvbkJ5Q29vcmRzKGNvb3JkczogR2FtZUNlbGxDb29yZHMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogY29vcmRzLnggKiB0aGlzLmN1YmVXaWR0aCArIDE1LFxuICAgICAgeTogY29vcmRzLnkgKiB0aGlzLmN1YmVIZWlnaHQgKyAxNSxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJCb2FyZEJnKCkge1xuICAgIGNvbnN0IGJvYXJkU3ByaXRlID0gbmV3IFNwcml0ZShBc3NldHMuZ2V0KEFTU0VUUy5CT0FSRC5BTElBUykpO1xuICAgIGJvYXJkU3ByaXRlLnNldFNpemUodGhpcy5vcHRpb25zLndpZHRoLCB0aGlzLm9wdGlvbnMuaGVpZ2h0KTtcbiAgICB0aGlzLmFkZENoaWxkKGJvYXJkU3ByaXRlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQXNzZXRzLCBUZXh0LCBDb250YWluZXIsIFNwcml0ZSwgR3JhcGhpY3MgfSBmcm9tIFwicGl4aS5qc1wiO1xuaW1wb3J0IHsgQVNTRVRTIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgY2xhc3MgR2FtZVBhbmVsQ29udGFpbmVyIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgcGFuZWxTY29yZUNvbnRhaW5lcjogQ29udGFpbmVyO1xuICBwYW5lbFRpbWVyQ29udGFpbmVyOiBDb250YWluZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvcHRpb25zOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucGFuZWxTY29yZUNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKTtcbiAgICB0aGlzLnBhbmVsVGltZXJDb250YWluZXIgPSBuZXcgQ29udGFpbmVyKCk7XG4gIH1cblxuICByZW5kZXIoc2NvcmU6IG51bWJlciwgdGltZTogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFuZWxTY29yZVNpemUgPSB0aGlzLm9wdGlvbnMud2lkdGg7XG4gICAgdGhpcy5zZXRTaXplKHBhbmVsU2NvcmVTaXplLCBwYW5lbFNjb3JlU2l6ZSk7XG5cbiAgICBjb25zdCBwYW5lbFNjb3JlU3ByaXRlID0gbmV3IFNwcml0ZShBc3NldHMuZ2V0KEFTU0VUUy5QQU5FTF9TQ09SRS5BTElBUykpO1xuICAgIHBhbmVsU2NvcmVTcHJpdGUud2lkdGggPSBwYW5lbFNjb3JlU2l6ZTtcbiAgICBwYW5lbFNjb3JlU3ByaXRlLmhlaWdodCA9IHBhbmVsU2NvcmVTaXplO1xuXG4gICAgY29uc3QgcGFuZWxTY29yZVNjb3JlV3JhcHBlciA9IG5ldyBHcmFwaGljcygpXG4gICAgICAucm91bmRSZWN0KDAsIDAsIDIwMCwgODAsIDIwKVxuICAgICAgLmZpbGwoXCIjMEUzMzY2XCIpO1xuICAgIHBhbmVsU2NvcmVTY29yZVdyYXBwZXIucG9zaXRpb24uc2V0KFxuICAgICAgKHBhbmVsU2NvcmVTaXplIC0gMjAwKSAvIDIsXG4gICAgICBwYW5lbFNjb3JlU2l6ZSAtIDgwIC0gMzAsXG4gICAgKTtcbiAgICBjb25zdCBwYW5lbFNjb3JlU2NvcmVUaXRsZSA9IG5ldyBUZXh0KHtcbiAgICAgIHRleHQ6IFwi0YHRh9C10YI6XCIsXG4gICAgICBzdHlsZToge1xuICAgICAgICBmb250RmFtaWx5OiBcIkFyaWFsXCIsXG4gICAgICAgIGZvbnRTaXplOiAzMCxcbiAgICAgICAgZmlsbDogXCJ3aGl0ZVwiLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBwYW5lbFNjb3JlU2NvcmVUaXRsZS5wb3NpdGlvbi5zZXQoXG4gICAgICAocGFuZWxTY29yZVNpemUgLSBwYW5lbFNjb3JlU2NvcmVUaXRsZS53aWR0aCkgLyAyLFxuICAgICAgcGFuZWxTY29yZVNpemUgLSA4MCAtIDMwLFxuICAgICk7XG5cbiAgICBjb25zdCBwYW5lbFRpbWVyU2NvcmVXcmFwcGVyID0gbmV3IEdyYXBoaWNzKClcbiAgICAgIC5yb3VuZFJlY3QoMCwgMCwgMTIwLCAxMjAsIDEyMClcbiAgICAgIC5maWxsKFwiI0M0Mzk4RlwiKTtcbiAgICBwYW5lbFRpbWVyU2NvcmVXcmFwcGVyLnBvc2l0aW9uLnNldChwYW5lbFNjb3JlU2l6ZSAvIDIgLSA2MCwgNDApO1xuXG4gICAgdGhpcy5hZGRDaGlsZChwYW5lbFNjb3JlU3ByaXRlKTtcbiAgICB0aGlzLmFkZENoaWxkKHBhbmVsU2NvcmVTY29yZVdyYXBwZXIpO1xuICAgIHRoaXMuYWRkQ2hpbGQocGFuZWxTY29yZVNjb3JlVGl0bGUpO1xuICAgIHRoaXMuYWRkQ2hpbGQocGFuZWxUaW1lclNjb3JlV3JhcHBlcik7XG5cbiAgICB0aGlzLmFkZENoaWxkKHRoaXMucGFuZWxUaW1lckNvbnRhaW5lcik7XG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLnBhbmVsU2NvcmVDb250YWluZXIpO1xuXG4gICAgdGhpcy5yZW5kZXJTY29yZShzY29yZSk7XG4gICAgdGhpcy5yZW5kZXJNb3Zlcyh0aW1lKTtcbiAgfVxuXG4gIHJlbmRlclNjb3JlKHNjb3JlOiBudW1iZXIpIHtcbiAgICB0aGlzLnBhbmVsU2NvcmVDb250YWluZXIucmVtb3ZlQ2hpbGRyZW4oKTtcblxuICAgIGNvbnN0IHBhbmVsU2NvcmVTY29yZVZhbHVlID0gbmV3IFRleHQoe1xuICAgICAgdGV4dDogc2NvcmUsXG4gICAgICBzdHlsZToge1xuICAgICAgICBmb250RmFtaWx5OiBcIkFyaWFsXCIsXG4gICAgICAgIGZvbnRTaXplOiA1MCxcbiAgICAgICAgZmlsbDogXCJ3aGl0ZVwiLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBwYW5lbFNjb3JlU2NvcmVWYWx1ZS5wb3NpdGlvbi5zZXQoXG4gICAgICAodGhpcy5vcHRpb25zLndpZHRoIC0gcGFuZWxTY29yZVNjb3JlVmFsdWUud2lkdGgpIC8gMixcbiAgICAgIHRoaXMub3B0aW9ucy53aWR0aCAtIDgwLFxuICAgICk7XG5cbiAgICB0aGlzLnBhbmVsU2NvcmVDb250YWluZXIuYWRkQ2hpbGQocGFuZWxTY29yZVNjb3JlVmFsdWUpO1xuICB9XG5cbiAgcmVuZGVyTW92ZXMobW92ZXM6IG51bWJlcikge1xuICAgIHRoaXMucGFuZWxUaW1lckNvbnRhaW5lci5yZW1vdmVDaGlsZHJlbigpO1xuXG4gICAgY29uc3QgcGFuZWxNb3Zlc1ZhbHVlID0gbmV3IFRleHQoe1xuICAgICAgdGV4dDogbW92ZXMsXG4gICAgICBzdHlsZToge1xuICAgICAgICBmb250RmFtaWx5OiBcIkFyaWFsXCIsXG4gICAgICAgIGZvbnRTaXplOiA3MCxcbiAgICAgICAgZmlsbDogXCJ3aGl0ZVwiLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBwYW5lbE1vdmVzVmFsdWUucG9zaXRpb24uc2V0KFxuICAgICAgKHRoaXMub3B0aW9ucy53aWR0aCAtIHBhbmVsTW92ZXNWYWx1ZS53aWR0aCkgLyAyLFxuICAgICAgNjAsXG4gICAgKTtcblxuICAgIHRoaXMucGFuZWxUaW1lckNvbnRhaW5lci5hZGRDaGlsZChwYW5lbE1vdmVzVmFsdWUpO1xuICB9XG59XG4iLCJleHBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vZ2FtZVwiO1xuIiwiaW1wb3J0IHsgR2FtZUJvYXJkRmlsbGVkLCBHYW1lQ2VsbENvb3JkcywgR2FtZUN1YmUgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0Q2VsbEJ5Q29vcmRzID0gKFxuICBib2FyZDogR2FtZUJvYXJkRmlsbGVkLFxuICBjb29yZHM6IEdhbWVDZWxsQ29vcmRzLFxuKSA9PiB7XG4gIHJldHVybiBib2FyZFtjb29yZHMueV0/Lltjb29yZHMueF0gfHwgbnVsbDtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRDZWxsQnlDb29yZHMgPSAoXG4gIGJvYXJkOiBHYW1lQm9hcmRGaWxsZWQsXG4gIGNvb3JkczogR2FtZUNlbGxDb29yZHMsXG4gIG1heWJlQ3ViZTogR2FtZUN1YmUgfCBudWxsLFxuKSA9PiB7XG4gIGJvYXJkW2Nvb3Jkcy55XVtjb29yZHMueF0gPSBtYXliZUN1YmU7XG59O1xuXG5leHBvcnQgY29uc3QgY29weUJvYXJkID0gKGJvYXJkOiBHYW1lQm9hcmRGaWxsZWQpID0+IHtcbiAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoYm9hcmQpKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21JbnQobWluOiBudW1iZXIsIG1heDogbnVtYmVyKSB7XG4gIGNvbnN0IG1pbkNlaWxlZCA9IE1hdGguY2VpbChtaW4pO1xuICBjb25zdCBtYXhGbG9vcmVkID0gTWF0aC5mbG9vcihtYXgpO1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heEZsb29yZWQgLSBtaW5DZWlsZWQpICsgbWluQ2VpbGVkKTtcbn1cblxuZXhwb3J0IGNvbnN0IHdhaXQgPSAobXM6IG51bWJlciA9IDEwMDApID0+XG4gIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XG4iLCJpbXBvcnQgaW5pdCBmcm9tIFwiLi9pbml0XCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5pZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJsb2FkaW5nXCIpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdCk7XG59IGVsc2Uge1xuICBpbml0KCk7XG59XG4iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vZ2FtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBpbml0KCkge1xuICBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcblxuICBhd2FpdCBnYW1lLmluaXQoKTtcblxuICBnYW1lLnN0YXJ0KCk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuLy8gU2luY2UgYWxsIHJlZmVyZW5jZWQgY2h1bmtzIGFyZSBhbHJlYWR5IGluY2x1ZGVkXG4vLyBpbiB0aGlzIGZpbGUsIHRoaXMgZnVuY3Rpb24gaXMgZW1wdHkgaGVyZS5cbl9fd2VicGFja19yZXF1aXJlX18uZSA9ICgpID0+IChQcm9taXNlLnJlc29sdmUoKSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2JsYXN0X2dhbWVcIl0gPSBzZWxmW1wid2VicGFja0NodW5rYmxhc3RfZ2FtZVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=