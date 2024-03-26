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
/* harmony import */ var _domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../domain */ "./src/game/domain/index.ts");

const createClickCell = ({ saveScore, readConfig, readBoard, readScore, saveBoard, readAvialableCubesColors, readStatus, saveStatus, readRemainingMoves, saveRemainingMoves, }) => (coords) => {
    const config = readConfig();
    const board = readBoard();
    const score = readScore();
    const maybeBurnedInfo = (0,_domain__WEBPACK_IMPORTED_MODULE_0__.tryBurnCubes)(config, board, coords);
    if (!maybeBurnedInfo) {
        console.log("[DEBUG]: no cubes to burn");
        return null;
    }
    const { burnedCubes, board: boardWithBurned } = maybeBurnedInfo;
    const updatedScore = (0,_domain__WEBPACK_IMPORTED_MODULE_0__.getUpdateScore)(burnedCubes, score);
    const { falledCubes, board: falledBoard, boardWithoutMoved, } = (0,_domain__WEBPACK_IMPORTED_MODULE_0__.fallCubes)(config, boardWithBurned);
    const avialableCubesColors = readAvialableCubesColors();
    const { newCubes, board: filledBoard, falledNewCubes, } = (0,_domain__WEBPACK_IMPORTED_MODULE_0__.fillEmptyCells)(falledBoard, avialableCubesColors);
    const hasMoves = (0,_domain__WEBPACK_IMPORTED_MODULE_0__.checkHasMoves)(config, filledBoard);
    const updatedBoard = hasMoves ? filledBoard : (0,_domain__WEBPACK_IMPORTED_MODULE_0__.mixCubes)(config, filledBoard);
    const mixed = !hasMoves;
    const status = readStatus();
    const currentMoves = readRemainingMoves();
    const updatedMoves = (0,_domain__WEBPACK_IMPORTED_MODULE_0__.updateRemainingMoves)(currentMoves);
    const updatedStatus = (0,_domain__WEBPACK_IMPORTED_MODULE_0__.updateGameStatus)(config, updatedBoard, updatedScore, config.scoresToWin, status, updatedMoves);
    saveScore(updatedScore);
    saveBoard(updatedBoard);
    saveStatus(updatedStatus);
    saveRemainingMoves(updatedMoves);
    return {
        burnedCubes,
        falledCubes,
        boardWithBurned,
        falledBoard,
        boardWithoutMoved,
        mixed,
        filledBoard,
        newCubes,
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
/* harmony export */   GAME_STATUSES: () => (/* binding */ GAME_STATUSES)
/* harmony export */ });
const GAME_CUBES = {
    BLUE: "blueCube",
    RED: "redCube",
    GREEN: "greenCube",
    YELLOW: "yellowCube",
    PURPLE: "purpleCube",
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

const burnCubes = (board, cubes) => {
    const burnedCubes = [];
    const boardCopy = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.copyBoard)(board);
    for (const cube of cubes) {
        burnedCubes.push(cube);
        (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setCellByCoords)(boardCopy, cube.coords, null);
    }
    return {
        burnedCubes,
        board: boardCopy,
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

let cubeIdx = 0;
const createRandomCube = (coords, avialableCubesColors) => {
    const getRandomColor = (colors) => {
        return colors[(0,_utils__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(0, colors.length)];
    };
    return {
        id: `${cubeIdx++}`,
        color: getRandomColor(avialableCubesColors),
        coords,
    };
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
                        const updatedCube = Object.assign(Object.assign({}, temp), { coords: to });
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
    const linkedCubes = (0,_getLinkedCubes__WEBPACK_IMPORTED_MODULE_1__.getLinkedCubes)(board, { x: coords.x, y: coords.y }, cube.color, []);
    return linkedCubes;
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
/* harmony export */   burnCubes: () => (/* reexport safe */ _burnCubes__WEBPACK_IMPORTED_MODULE_4__.burnCubes),
/* harmony export */   checkHasMoves: () => (/* reexport safe */ _checkHasMoves__WEBPACK_IMPORTED_MODULE_7__.checkHasMoves),
/* harmony export */   checkIsWin: () => (/* reexport safe */ _checkIsWin__WEBPACK_IMPORTED_MODULE_13__.checkIsWin),
/* harmony export */   createConfig: () => (/* reexport safe */ _createConfig__WEBPACK_IMPORTED_MODULE_9__.createConfig),
/* harmony export */   createRandomCube: () => (/* reexport safe */ _createRandomCube__WEBPACK_IMPORTED_MODULE_0__.createRandomCube),
/* harmony export */   fallCubes: () => (/* reexport safe */ _fallCubes__WEBPACK_IMPORTED_MODULE_5__.fallCubes),
/* harmony export */   fillEmptyCells: () => (/* reexport safe */ _fillEmptyCells__WEBPACK_IMPORTED_MODULE_6__.fillEmptyCells),
/* harmony export */   generateBoard: () => (/* reexport safe */ _generateBoard__WEBPACK_IMPORTED_MODULE_1__.generateBoard),
/* harmony export */   getCubesChain: () => (/* reexport safe */ _getCubesChain__WEBPACK_IMPORTED_MODULE_3__.getCubesChain),
/* harmony export */   getLinkedCubes: () => (/* reexport safe */ _getLinkedCubes__WEBPACK_IMPORTED_MODULE_2__.getLinkedCubes),
/* harmony export */   getUpdateScore: () => (/* reexport safe */ _getUpdateScore__WEBPACK_IMPORTED_MODULE_12__.getUpdateScore),
/* harmony export */   logPrittyBoard: () => (/* reexport safe */ _logPrittyBoard__WEBPACK_IMPORTED_MODULE_15__.logPrittyBoard),
/* harmony export */   mixCubes: () => (/* reexport safe */ _mixCubes__WEBPACK_IMPORTED_MODULE_8__.mixCubes),
/* harmony export */   tryBurnCubes: () => (/* reexport safe */ _tryBurnCudes__WEBPACK_IMPORTED_MODULE_11__.tryBurnCubes),
/* harmony export */   updateAvialableCubesColors: () => (/* reexport safe */ _updateAvialableCubesColors__WEBPACK_IMPORTED_MODULE_10__.updateAvialableCubesColors),
/* harmony export */   updateGameStatus: () => (/* reexport safe */ _updateGameStatus__WEBPACK_IMPORTED_MODULE_14__.updateGameStatus),
/* harmony export */   updateRemainingMoves: () => (/* reexport safe */ _updateRemainingMoves__WEBPACK_IMPORTED_MODULE_16__.updateRemainingMoves)
/* harmony export */ });
/* harmony import */ var _createRandomCube__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createRandomCube */ "./src/game/domain/createRandomCube/index.ts");
/* harmony import */ var _generateBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generateBoard */ "./src/game/domain/generateBoard/index.ts");
/* harmony import */ var _getLinkedCubes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getLinkedCubes */ "./src/game/domain/getLinkedCubes/index.ts");
/* harmony import */ var _getCubesChain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getCubesChain */ "./src/game/domain/getCubesChain/index.ts");
/* harmony import */ var _burnCubes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./burnCubes */ "./src/game/domain/burnCubes/index.ts");
/* harmony import */ var _fallCubes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fallCubes */ "./src/game/domain/fallCubes/index.ts");
/* harmony import */ var _fillEmptyCells__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fillEmptyCells */ "./src/game/domain/fillEmptyCells/index.ts");
/* harmony import */ var _checkHasMoves__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./checkHasMoves */ "./src/game/domain/checkHasMoves/index.ts");
/* harmony import */ var _mixCubes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mixCubes */ "./src/game/domain/mixCubes/index.ts");
/* harmony import */ var _createConfig__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./createConfig */ "./src/game/domain/createConfig/index.ts");
/* harmony import */ var _updateAvialableCubesColors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./updateAvialableCubesColors */ "./src/game/domain/updateAvialableCubesColors/index.ts");
/* harmony import */ var _tryBurnCudes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tryBurnCudes */ "./src/game/domain/tryBurnCudes/index.ts");
/* harmony import */ var _getUpdateScore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./getUpdateScore */ "./src/game/domain/getUpdateScore/index.ts");
/* harmony import */ var _checkIsWin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./checkIsWin */ "./src/game/domain/checkIsWin/index.ts");
/* harmony import */ var _updateGameStatus__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./updateGameStatus */ "./src/game/domain/updateGameStatus/index.ts");
/* harmony import */ var _logPrittyBoard__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./logPrittyBoard */ "./src/game/domain/logPrittyBoard/index.ts");
/* harmony import */ var _updateRemainingMoves__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./updateRemainingMoves */ "./src/game/domain/updateRemainingMoves/index.ts");



















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

/***/ "./src/game/domain/mixCubes/index.ts":
/*!*******************************************!*\
  !*** ./src/game/domain/mixCubes/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mixCubes: () => (/* reexport safe */ _mixCubes__WEBPACK_IMPORTED_MODULE_0__.mixCubes)
/* harmony export */ });
/* harmony import */ var _mixCubes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mixCubes */ "./src/game/domain/mixCubes/mixCubes.ts");



/***/ }),

/***/ "./src/game/domain/mixCubes/mixCubes.ts":
/*!**********************************************!*\
  !*** ./src/game/domain/mixCubes/mixCubes.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   mixCubes: () => (/* binding */ mixCubes)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils */ "./src/game/utils.ts");

const mixCubes = (config, board) => {
    const { boardCols, boardRows } = config;
    const newBoard = [];
    const avialableCoords = Array.from({
        length: boardRows * boardCols,
    }, (_, index) => ({
        x: index % boardCols,
        y: Math.floor(index / boardCols),
    }));
    for (let row = 0; row < boardRows; row++) {
        newBoard[row] = [];
        for (let col = 0; col < boardCols; col++) {
            const randomIdx = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getRandomInt)(0, avialableCoords.length - 1);
            const randomCoords = avialableCoords[randomIdx];
            avialableCoords.splice(randomIdx, 1);
            const cube = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getCellByCoords)(board, randomCoords);
            newBoard[row][col] = cube;
        }
    }
    return newBoard;
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


const tryBurnCubes = (config, board, coords) => {
    const { minChainLength } = config;
    const cubesChain = (0,_getCubesChain__WEBPACK_IMPORTED_MODULE_0__.getCubesChain)(board, coords);
    if (cubesChain.length < minChainLength) {
        return null;
    }
    return (0,_burnCubes__WEBPACK_IMPORTED_MODULE_1__.burnCubes)(board, cubesChain);
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
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
            minChainLength: 3,
            scoresToWin: 40,
            moveCount: 10,
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
            yield this.renderFalledBoard(result.falledCubes.concat(result.falledNewCubes), result.boardWithoutMoved);
            this.renderInitialBoard();
            if (result.status === _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_STATUSES.WIN) {
                window.alert("WIN");
            }
            else if (result.status === _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_STATUSES.NO_MOVES) {
                window.alert("NO_MOVES");
            }
            else {
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
    renderFalledBoard(falled, boardWithoutMoved) {
        return __awaiter(this, void 0, void 0, function* () {
            this.gameBoardContainer.renderCubes(boardWithoutMoved);
            yield this.gameBoardContainer.renderFalled(falled);
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
    createCube(cube, callback) {
        const texture = pixi_js__WEBPACK_IMPORTED_MODULE_0__.Assets.get(cube.color);
        const cubeSprite = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Sprite(texture);
        cubeSprite.width = this.cubeWidth;
        cubeSprite.height = this.cubeHeight;
        const position = this.getCubePositionByCoords(cube.coords);
        cubeSprite.position.set(position.x, position.y);
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
/* harmony export */   setCellByCoords: () => (/* binding */ setCellByCoords)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFaERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL3N0eWxlLmNzcz9lMzIwIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9hcHBsaWNhdGlvbi9jbGlja0NlbGwvY2xpY2tDZWxsLnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9hcHBsaWNhdGlvbi9jbGlja0NlbGwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2FwcGxpY2F0aW9uL2luZGV4LnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9hcHBsaWNhdGlvbi9zdGFydEdhbWUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2FwcGxpY2F0aW9uL3N0YXJ0R2FtZS9zdGFydEdhbWUudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL2J1cm5DdWJlcy9idXJuQ3ViZXMudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi9idXJuQ3ViZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi9jaGVja0hhc01vdmVzL2NoZWNrSGFzTW92ZXMudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi9jaGVja0hhc01vdmVzL2luZGV4LnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vY2hlY2tJc1dpbi9jaGVja0lzV2luLnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vY2hlY2tJc1dpbi9pbmRleC50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL2NyZWF0ZUNvbmZpZy9jcmVhdGVDb25maWcudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi9jcmVhdGVDb25maWcvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi9jcmVhdGVSYW5kb21DdWJlL2NyZWF0ZVJhbmRvbUN1YmUudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi9jcmVhdGVSYW5kb21DdWJlL2luZGV4LnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vZmFsbEN1YmVzL2ZhbGxDdWJlcy50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL2ZhbGxDdWJlcy9pbmRleC50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL2ZpbGxFbXB0eUNlbGxzL2ZpbGxFbXB0eUNlbGxzLnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vZmlsbEVtcHR5Q2VsbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi9nZW5lcmF0ZUJvYXJkL2dlbmVyYXRlQm9hcmQudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi9nZW5lcmF0ZUJvYXJkL2luZGV4LnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vZ2V0Q3ViZXNDaGFpbi9nZXRDdWJlc0NoYWluLnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vZ2V0Q3ViZXNDaGFpbi9pbmRleC50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL2dldExpbmtlZEN1YmVzL2dldExpbmtlZEN1YmVzLnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vZ2V0TGlua2VkQ3ViZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi9nZXRVcGRhdGVTY29yZS9nZXRVcGRhdGVTY29yZS50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL2dldFVwZGF0ZVNjb3JlL2luZGV4LnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi9sb2dQcml0dHlCb2FyZC9pbmRleC50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL2xvZ1ByaXR0eUJvYXJkL2xvZ1ByaXR0eUJvYXJkLnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vbWl4Q3ViZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi9taXhDdWJlcy9taXhDdWJlcy50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL3RyeUJ1cm5DdWRlcy9pbmRleC50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL3RyeUJ1cm5DdWRlcy90cnlCdXJuQ3VkZXMudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi91cGRhdGVBdmlhbGFibGVDdWJlc0NvbG9ycy9pbmRleC50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL3VwZGF0ZUF2aWFsYWJsZUN1YmVzQ29sb3JzL3VwZGF0ZUF2aWFsYWJsZUN1YmVzQ29sb3JzLnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vdXBkYXRlR2FtZVN0YXR1cy9pbmRleC50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL3VwZGF0ZUdhbWVTdGF0dXMvdXBkYXRlR2FtZVN0YXR1cy50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL3VwZGF0ZVJlbWFpbmluZ01vdmVzL2luZGV4LnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vdXBkYXRlUmVtYWluaW5nTW92ZXMvdXBkYXRlUmVtYWluaW5nTW92ZXMudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2luZGV4LnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS91aS9nYW1lLnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS91aS9nYW1lQm9hcmQudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL3VpL2dhbWVQYW5lbC50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvdWkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL3V0aWxzLnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9pbml0LnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2JsYXN0LWdhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JsYXN0LWdhbWUvd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JsYXN0LWdhbWUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JsYXN0LWdhbWUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JsYXN0LWdhbWUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7XG4gIGNoZWNrSGFzTW92ZXMsXG4gIGZhbGxDdWJlcyxcbiAgZmlsbEVtcHR5Q2VsbHMsXG4gIGdldFVwZGF0ZVNjb3JlLFxuICBtaXhDdWJlcyxcbiAgdHJ5QnVybkN1YmVzLFxuICB1cGRhdGVHYW1lU3RhdHVzLFxuICB1cGRhdGVSZW1haW5pbmdNb3Zlcyxcbn0gZnJvbSBcIi4uLy4uL2RvbWFpblwiO1xuaW1wb3J0IHsgQ2xpY2tDZWxsIH0gZnJvbSBcIi4uLy4uL3BvcnRzLmlucHV0XCI7XG5pbXBvcnQge1xuICBTYXZlU2NvcmUsXG4gIFJlYWRDb25maWcsXG4gIFJlYWRCb2FyZCxcbiAgUmVhZFNjb3JlLFxuICBTYXZlQm9hcmQsXG4gIFJlYWRBdmlhbGFibGVDdWJlc0NvbG9ycyxcbiAgUmVhZFN0YXR1cyxcbiAgU2F2ZVN0YXR1cyxcbiAgU2F2ZVJlbWFpbmluZ01vdmVzLFxuICBSZWFkUmVtYWluaW5nTW92ZXMsXG59IGZyb20gXCIuLi8uLi9wb3J0cy5vdXRwdXRcIjtcblxuaW50ZXJmYWNlIERlcHMge1xuICByZWFkU2NvcmU6IFJlYWRTY29yZTtcbiAgc2F2ZVNjb3JlOiBTYXZlU2NvcmU7XG4gIHJlYWRDb25maWc6IFJlYWRDb25maWc7XG4gIHJlYWRCb2FyZDogUmVhZEJvYXJkO1xuICBzYXZlQm9hcmQ6IFNhdmVCb2FyZDtcbiAgcmVhZEF2aWFsYWJsZUN1YmVzQ29sb3JzOiBSZWFkQXZpYWxhYmxlQ3ViZXNDb2xvcnM7XG4gIHJlYWRTdGF0dXM6IFJlYWRTdGF0dXM7XG4gIHNhdmVTdGF0dXM6IFNhdmVTdGF0dXM7XG4gIHJlYWRSZW1haW5pbmdNb3ZlczogUmVhZFJlbWFpbmluZ01vdmVzO1xuICBzYXZlUmVtYWluaW5nTW92ZXM6IFNhdmVSZW1haW5pbmdNb3Zlcztcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNsaWNrQ2VsbCA9XG4gICh7XG4gICAgc2F2ZVNjb3JlLFxuICAgIHJlYWRDb25maWcsXG4gICAgcmVhZEJvYXJkLFxuICAgIHJlYWRTY29yZSxcbiAgICBzYXZlQm9hcmQsXG4gICAgcmVhZEF2aWFsYWJsZUN1YmVzQ29sb3JzLFxuICAgIHJlYWRTdGF0dXMsXG4gICAgc2F2ZVN0YXR1cyxcbiAgICByZWFkUmVtYWluaW5nTW92ZXMsXG4gICAgc2F2ZVJlbWFpbmluZ01vdmVzLFxuICB9OiBEZXBzKTogQ2xpY2tDZWxsID0+XG4gIChjb29yZHMpID0+IHtcbiAgICBjb25zdCBjb25maWcgPSByZWFkQ29uZmlnKCk7XG4gICAgY29uc3QgYm9hcmQgPSByZWFkQm9hcmQoKTtcbiAgICBjb25zdCBzY29yZSA9IHJlYWRTY29yZSgpO1xuXG4gICAgY29uc3QgbWF5YmVCdXJuZWRJbmZvID0gdHJ5QnVybkN1YmVzKGNvbmZpZywgYm9hcmQsIGNvb3Jkcyk7XG4gICAgaWYgKCFtYXliZUJ1cm5lZEluZm8pIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiW0RFQlVHXTogbm8gY3ViZXMgdG8gYnVyblwiKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHsgYnVybmVkQ3ViZXMsIGJvYXJkOiBib2FyZFdpdGhCdXJuZWQgfSA9IG1heWJlQnVybmVkSW5mbztcbiAgICBjb25zdCB1cGRhdGVkU2NvcmUgPSBnZXRVcGRhdGVTY29yZShidXJuZWRDdWJlcywgc2NvcmUpO1xuXG4gICAgY29uc3Qge1xuICAgICAgZmFsbGVkQ3ViZXMsXG4gICAgICBib2FyZDogZmFsbGVkQm9hcmQsXG4gICAgICBib2FyZFdpdGhvdXRNb3ZlZCxcbiAgICB9ID0gZmFsbEN1YmVzKGNvbmZpZywgYm9hcmRXaXRoQnVybmVkKTtcblxuICAgIGNvbnN0IGF2aWFsYWJsZUN1YmVzQ29sb3JzID0gcmVhZEF2aWFsYWJsZUN1YmVzQ29sb3JzKCk7XG5cbiAgICBjb25zdCB7XG4gICAgICBuZXdDdWJlcyxcbiAgICAgIGJvYXJkOiBmaWxsZWRCb2FyZCxcbiAgICAgIGZhbGxlZE5ld0N1YmVzLFxuICAgIH0gPSBmaWxsRW1wdHlDZWxscyhmYWxsZWRCb2FyZCwgYXZpYWxhYmxlQ3ViZXNDb2xvcnMpO1xuXG4gICAgY29uc3QgaGFzTW92ZXMgPSBjaGVja0hhc01vdmVzKGNvbmZpZywgZmlsbGVkQm9hcmQpO1xuXG4gICAgY29uc3QgdXBkYXRlZEJvYXJkID0gaGFzTW92ZXMgPyBmaWxsZWRCb2FyZCA6IG1peEN1YmVzKGNvbmZpZywgZmlsbGVkQm9hcmQpO1xuICAgIGNvbnN0IG1peGVkID0gIWhhc01vdmVzO1xuXG4gICAgY29uc3Qgc3RhdHVzID0gcmVhZFN0YXR1cygpO1xuICAgIGNvbnN0IGN1cnJlbnRNb3ZlcyA9IHJlYWRSZW1haW5pbmdNb3ZlcygpO1xuXG4gICAgY29uc3QgdXBkYXRlZE1vdmVzID0gdXBkYXRlUmVtYWluaW5nTW92ZXMoY3VycmVudE1vdmVzKTtcblxuICAgIGNvbnN0IHVwZGF0ZWRTdGF0dXMgPSB1cGRhdGVHYW1lU3RhdHVzKFxuICAgICAgY29uZmlnLFxuICAgICAgdXBkYXRlZEJvYXJkLFxuICAgICAgdXBkYXRlZFNjb3JlLFxuICAgICAgY29uZmlnLnNjb3Jlc1RvV2luLFxuICAgICAgc3RhdHVzLFxuICAgICAgdXBkYXRlZE1vdmVzLFxuICAgICk7XG5cbiAgICBzYXZlU2NvcmUodXBkYXRlZFNjb3JlKTtcbiAgICBzYXZlQm9hcmQodXBkYXRlZEJvYXJkKTtcbiAgICBzYXZlU3RhdHVzKHVwZGF0ZWRTdGF0dXMpO1xuICAgIHNhdmVSZW1haW5pbmdNb3Zlcyh1cGRhdGVkTW92ZXMpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGJ1cm5lZEN1YmVzLFxuICAgICAgZmFsbGVkQ3ViZXMsXG4gICAgICBib2FyZFdpdGhCdXJuZWQsXG4gICAgICBmYWxsZWRCb2FyZCxcbiAgICAgIGJvYXJkV2l0aG91dE1vdmVkLFxuICAgICAgbWl4ZWQsXG4gICAgICBmaWxsZWRCb2FyZCxcbiAgICAgIG5ld0N1YmVzLFxuICAgICAgdXBkYXRlZFNjb3JlLFxuICAgICAgYm9hcmQ6IHVwZGF0ZWRCb2FyZCxcbiAgICAgIGZhbGxlZE5ld0N1YmVzLFxuICAgICAgc3RhdHVzOiB1cGRhdGVkU3RhdHVzLFxuICAgIH07XG4gIH07XG4iLCJleHBvcnQgeyBjcmVhdGVDbGlja0NlbGwgfSBmcm9tIFwiLi9jbGlja0NlbGxcIjtcbiIsImV4cG9ydCB7IGNyZWF0ZVN0YXJ0R2FtZSB9IGZyb20gXCIuL3N0YXJ0R2FtZVwiO1xuZXhwb3J0IHsgY3JlYXRlQ2xpY2tDZWxsIH0gZnJvbSBcIi4vY2xpY2tDZWxsXCI7XG4iLCJleHBvcnQgeyBjcmVhdGVTdGFydEdhbWUgfSBmcm9tIFwiLi9zdGFydEdhbWVcIjtcbiIsImltcG9ydCB7IEdBTUVfU1RBVFVTRVMgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZUJvYXJkLCB1cGRhdGVBdmlhbGFibGVDdWJlc0NvbG9ycyB9IGZyb20gXCIuLi8uLi9kb21haW5cIjtcbmltcG9ydCB7XG4gIFNhdmVBdmlhbGFibGVDdWJlc0NvbG9ycyxcbiAgU2F2ZUJvYXJkLFxuICBTYXZlU2NvcmUsXG4gIFNhdmVTdGF0dXMsXG4gIFJlYWRDb25maWcsXG4gIFNhdmVSZW1haW5pbmdNb3Zlcyxcbn0gZnJvbSBcIi4uLy4uL3BvcnRzLm91dHB1dFwiO1xuaW1wb3J0IHsgU3RhcnRHYW1lIH0gZnJvbSBcIi4uLy4uL3BvcnRzLmlucHV0XCI7XG5cbmludGVyZmFjZSBEZXBzIHtcbiAgc2F2ZUF2aWFsYWJsZUN1YmVzQ29sb3JzOiBTYXZlQXZpYWxhYmxlQ3ViZXNDb2xvcnM7XG4gIHNhdmVCb2FyZDogU2F2ZUJvYXJkO1xuICBzYXZlU2NvcmU6IFNhdmVTY29yZTtcbiAgc2F2ZVN0YXR1czogU2F2ZVN0YXR1cztcbiAgcmVhZENvbmZpZzogUmVhZENvbmZpZztcbiAgc2F2ZVJlbWFpbmluZ01vdmVzOiBTYXZlUmVtYWluaW5nTW92ZXM7XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVTdGFydEdhbWUgPVxuICAoe1xuICAgIHNhdmVBdmlhbGFibGVDdWJlc0NvbG9ycyxcbiAgICBzYXZlQm9hcmQsXG4gICAgc2F2ZVNjb3JlLFxuICAgIHNhdmVTdGF0dXMsXG4gICAgcmVhZENvbmZpZyxcbiAgICBzYXZlUmVtYWluaW5nTW92ZXMsXG4gIH06IERlcHMpOiBTdGFydEdhbWUgPT5cbiAgKCkgPT4ge1xuICAgIGNvbnN0IGNvbmZpZyA9IHJlYWRDb25maWcoKTtcbiAgICBjb25zdCBhdmlhbGFibGVDdWJlc0NvbG9ycyA9IHVwZGF0ZUF2aWFsYWJsZUN1YmVzQ29sb3JzKGNvbmZpZyk7XG4gICAgY29uc3QgYm9hcmQgPSBnZW5lcmF0ZUJvYXJkKGNvbmZpZywgYXZpYWxhYmxlQ3ViZXNDb2xvcnMpO1xuICAgIGNvbnN0IHNjb3JlID0gMDtcbiAgICBjb25zdCBzdGF0dXMgPSBHQU1FX1NUQVRVU0VTLlBMQVlJTkc7XG5cbiAgICBzYXZlQm9hcmQoYm9hcmQpO1xuICAgIHNhdmVBdmlhbGFibGVDdWJlc0NvbG9ycyhhdmlhbGFibGVDdWJlc0NvbG9ycyk7XG4gICAgc2F2ZVNjb3JlKHNjb3JlKTtcbiAgICBzYXZlU3RhdHVzKHN0YXR1cyk7XG4gICAgc2F2ZVJlbWFpbmluZ01vdmVzKGNvbmZpZy5tb3ZlQ291bnQpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGJvYXJkLFxuICAgICAgYXZpYWxhYmxlQ3ViZXNDb2xvcnMsXG4gICAgICBzY29yZSxcbiAgICAgIHN0YXR1cyxcbiAgICB9O1xuICB9O1xuIiwiZXhwb3J0IGNvbnN0IEdBTUVfQ1VCRVMgPSB7XG4gIEJMVUU6IFwiYmx1ZUN1YmVcIixcbiAgUkVEOiBcInJlZEN1YmVcIixcbiAgR1JFRU46IFwiZ3JlZW5DdWJlXCIsXG4gIFlFTExPVzogXCJ5ZWxsb3dDdWJlXCIsXG4gIFBVUlBMRTogXCJwdXJwbGVDdWJlXCIsXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgR0FNRV9TVEFUVVNFUyA9IHtcbiAgV0lOOiBcIndpblwiLFxuICBOT19NT1ZFUzogXCJub01vdmVzXCIsXG4gIFBMQVlJTkc6IFwicGxheWluZ1wiLFxuICBJRExFOiBcImlkbGVcIixcbn0gYXMgY29uc3Q7XG5cbmV4cG9ydCBjb25zdCBBU1NFVFMgPSB7XG4gIEJPQVJEOiB7XG4gICAgQUxJQVM6IFwiYm9hcmRcIixcbiAgICBTUkM6IFwiYXNzZXRzL2JvYXJkLnBuZ1wiLFxuICB9LFxuICBCTFVFX0NVQkU6IHtcbiAgICBBTElBUzogR0FNRV9DVUJFUy5CTFVFLFxuICAgIFNSQzogXCJhc3NldHMvYmx1ZUN1YmUucG5nXCIsXG4gIH0sXG4gIFJFRF9DVUJFOiB7XG4gICAgQUxJQVM6IEdBTUVfQ1VCRVMuUkVELFxuICAgIFNSQzogXCJhc3NldHMvcmVkQ3ViZS5wbmdcIixcbiAgfSxcbiAgR1JFRU5fQ1VCRToge1xuICAgIEFMSUFTOiBHQU1FX0NVQkVTLkdSRUVOLFxuICAgIFNSQzogXCJhc3NldHMvZ3JlZW5DdWJlLnBuZ1wiLFxuICB9LFxuICBZRUxMT1dfQ1VCRToge1xuICAgIEFMSUFTOiBHQU1FX0NVQkVTLllFTExPVyxcbiAgICBTUkM6IFwiYXNzZXRzL3llbGxvd0N1YmUucG5nXCIsXG4gIH0sXG4gIFBVUlBMRV9DVUJFOiB7XG4gICAgQUxJQVM6IEdBTUVfQ1VCRVMuUFVSUExFLFxuICAgIFNSQzogXCJhc3NldHMvcHVycGxlQ3ViZS5wbmdcIixcbiAgfSxcbiAgUEFORUxfU0NPUkU6IHtcbiAgICBBTElBUzogXCJwYW5lbFNjb3JlXCIsXG4gICAgU1JDOiBcImFzc2V0cy9wYW5lbFNjb3JlLnBuZ1wiLFxuICB9LFxufSBhcyBjb25zdDtcbiIsImltcG9ydCB7IGNvcHlCb2FyZCwgc2V0Q2VsbEJ5Q29vcmRzIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5pbXBvcnQge1xuICBHYW1lQm9hcmQsXG4gIEdhbWVCb2FyZEZpbGxlZCxcbiAgR2FtZUJ1cm5lZEN1YmVzLFxuICBHYW1lQ3ViZXMsXG59IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgYnVybkN1YmVzID0gKGJvYXJkOiBHYW1lQm9hcmRGaWxsZWQsIGN1YmVzOiBHYW1lQ3ViZXMpID0+IHtcbiAgY29uc3QgYnVybmVkQ3ViZXM6IEdhbWVCdXJuZWRDdWJlcyA9IFtdO1xuICBjb25zdCBib2FyZENvcHkgPSBjb3B5Qm9hcmQoYm9hcmQpO1xuXG4gIGZvciAoY29uc3QgY3ViZSBvZiBjdWJlcykge1xuICAgIGJ1cm5lZEN1YmVzLnB1c2goY3ViZSk7XG4gICAgc2V0Q2VsbEJ5Q29vcmRzKGJvYXJkQ29weSwgY3ViZS5jb29yZHMsIG51bGwpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBidXJuZWRDdWJlcyxcbiAgICBib2FyZDogYm9hcmRDb3B5IGFzIEdhbWVCb2FyZCxcbiAgfTtcbn07XG4iLCJleHBvcnQgeyBidXJuQ3ViZXMgfSBmcm9tIFwiLi9idXJuQ3ViZXNcIjtcbiIsImltcG9ydCB7IGdldENlbGxCeUNvb3JkcyB9IGZyb20gXCJzcmMvZ2FtZS91dGlsc1wiO1xuaW1wb3J0IHsgR2FtZUJvYXJkRmlsbGVkLCBHYW1lQ3ViZUlkLCBHYW1lQ29uZmlnIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBnZXRMaW5rZWRDdWJlcyB9IGZyb20gXCIuLi9nZXRMaW5rZWRDdWJlc1wiO1xuXG5leHBvcnQgY29uc3QgY2hlY2tIYXNNb3ZlcyA9IChjb25maWc6IEdhbWVDb25maWcsIGJvYXJkOiBHYW1lQm9hcmRGaWxsZWQpID0+IHtcbiAgY29uc3QgY2hlY2tlZEN1YmVzOiBBcnJheTxHYW1lQ3ViZUlkPiA9IFtdO1xuXG4gIGNvbnN0IHsgYm9hcmRDb2xzLCBib2FyZFJvd3MsIG1pbkNoYWluTGVuZ3RoIH0gPSBjb25maWc7XG5cbiAgZm9yIChsZXQgeSA9IDA7IHkgPCBib2FyZFJvd3M7IHkrKykge1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgYm9hcmRDb2xzOyB4KyspIHtcbiAgICAgIGNvbnN0IGN1YmUgPSBnZXRDZWxsQnlDb29yZHMoYm9hcmQsIHsgeCwgeSB9KTtcblxuICAgICAgaWYgKGN1YmUpIHtcbiAgICAgICAgY29uc3QgbGlua2VkQ3ViZXMgPSBnZXRMaW5rZWRDdWJlcyhcbiAgICAgICAgICBib2FyZCxcbiAgICAgICAgICB7IHgsIHkgfSxcbiAgICAgICAgICBjdWJlLmNvbG9yLFxuICAgICAgICAgIGNoZWNrZWRDdWJlcyxcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKGxpbmtlZEN1YmVzLmxlbmd0aCA+PSBtaW5DaGFpbkxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNoZWNrZWRDdWJlcy5wdXNoKC4uLmxpbmtlZEN1YmVzLm1hcCgoY3ViZSkgPT4gY3ViZS5pZCkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcbiIsImV4cG9ydCB7IGNoZWNrSGFzTW92ZXMgfSBmcm9tIFwiLi9jaGVja0hhc01vdmVzXCI7XG4iLCJpbXBvcnQgeyBHYW1lU2NvcmUgfSBmcm9tIFwic3JjL2dhbWUvdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IGNoZWNrSXNXaW4gPSAoc2NvcmU6IEdhbWVTY29yZSwgc2NvcmVzVG9XaW46IEdhbWVTY29yZSkgPT4ge1xuICByZXR1cm4gc2NvcmUgPj0gc2NvcmVzVG9XaW47XG59O1xuIiwiZXhwb3J0IHsgY2hlY2tJc1dpbiB9IGZyb20gXCIuL2NoZWNrSXNXaW5cIjtcbiIsImltcG9ydCB7IEdBTUVfQ1VCRVMgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBHYW1lQ29uZmlnUGFyYW1zIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmNvbnN0IG1pbkN1YmVDb2xvcnNDb3VudCA9IDI7XG5jb25zdCBtYXhDdWJlQ29sb3JzQ291bnQgPSBPYmplY3QudmFsdWVzKEdBTUVfQ1VCRVMpLmxlbmd0aDtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNvbmZpZyA9IChwYXJhbXM6IEdhbWVDb25maWdQYXJhbXMpID0+IHtcbiAgY29uc3QgeyBjdWJlQ29sb3JzQ291bnQgfSA9IHBhcmFtcztcblxuICBpZiAoY3ViZUNvbG9yc0NvdW50IDwgbWluQ3ViZUNvbG9yc0NvdW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYGN1YmVDb2xvcnNDb3VudCBzaG91bGQgYmUgZ3JlYXRlciB0aGFuICR7bWluQ3ViZUNvbG9yc0NvdW50IC0gMX1gLFxuICAgICk7XG4gIH1cblxuICBpZiAoY3ViZUNvbG9yc0NvdW50ID4gbWF4Q3ViZUNvbG9yc0NvdW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYGN1YmVDb2xvcnNDb3VudCBzaG91bGQgYmUgbGVzcyB0aGFuICR7bWF4Q3ViZUNvbG9yc0NvdW50ICsgMX1gLFxuICAgICk7XG4gIH1cblxuICByZXR1cm4gcGFyYW1zO1xufTtcbiIsImV4cG9ydCB7IGNyZWF0ZUNvbmZpZyB9IGZyb20gXCIuL2NyZWF0ZUNvbmZpZ1wiO1xuIiwiaW1wb3J0IHsgZ2V0UmFuZG9tSW50IH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5pbXBvcnQgeyBHYW1lQ3ViZUlkLCBHYW1lQ2VsbENvb3JkcywgR2FtZUN1YmVDb2xvciB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5sZXQgY3ViZUlkeCA9IDA7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVSYW5kb21DdWJlID0gKFxuICBjb29yZHM6IEdhbWVDZWxsQ29vcmRzLFxuICBhdmlhbGFibGVDdWJlc0NvbG9yczogQXJyYXk8R2FtZUN1YmVDb2xvcj4sXG4pID0+IHtcbiAgY29uc3QgZ2V0UmFuZG9tQ29sb3IgPSAoY29sb3JzOiBBcnJheTxHYW1lQ3ViZUNvbG9yPik6IEdhbWVDdWJlQ29sb3IgPT4ge1xuICAgIHJldHVybiBjb2xvcnNbZ2V0UmFuZG9tSW50KDAsIGNvbG9ycy5sZW5ndGgpXTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGlkOiBgJHtjdWJlSWR4Kyt9YCBhcyBHYW1lQ3ViZUlkLFxuICAgIGNvbG9yOiBnZXRSYW5kb21Db2xvcihhdmlhbGFibGVDdWJlc0NvbG9ycyksXG4gICAgY29vcmRzLFxuICB9O1xufTtcbiIsImV4cG9ydCB7IGNyZWF0ZVJhbmRvbUN1YmUgfSBmcm9tIFwiLi9jcmVhdGVSYW5kb21DdWJlXCI7XG4iLCJpbXBvcnQgeyBHYW1lQ29uZmlnLCBHYW1lQm9hcmQsIEdhbWVGYWxsZWRDdWJlcyB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgY29weUJvYXJkLCBnZXRDZWxsQnlDb29yZHMsIHNldENlbGxCeUNvb3JkcyB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuXG5leHBvcnQgY29uc3QgZmFsbEN1YmVzID0gKGNvbmZpZzogR2FtZUNvbmZpZywgYm9hcmQ6IEdhbWVCb2FyZCkgPT4ge1xuICBjb25zdCBmYWxsZWRDdWJlczogR2FtZUZhbGxlZEN1YmVzID0gW107XG4gIGNvbnN0IHsgYm9hcmRDb2xzLCBib2FyZFJvd3MgfSA9IGNvbmZpZztcbiAgY29uc3QgYm9hcmRDb3B5ID0gY29weUJvYXJkKGJvYXJkKTtcbiAgY29uc3QgYm9hcmRXaXRob3V0TW92ZWQgPSBjb3B5Qm9hcmQoYm9hcmQpO1xuXG4gIGZvciAobGV0IHkgPSBib2FyZFJvd3MgLSAxOyB5ID49IDA7IHktLSkge1xuICAgIGZvciAobGV0IHggPSAwOyB4IDw9IGJvYXJkQ29scyAtIDE7IHgrKykge1xuICAgICAgY29uc3QgbWF5YmVDdWJlID0gZ2V0Q2VsbEJ5Q29vcmRzKGJvYXJkQ29weSwgeyB4LCB5IH0pO1xuICAgICAgaWYgKCFtYXliZUN1YmUpIHtcbiAgICAgICAgbGV0IGZhbGxZID0geTtcbiAgICAgICAgZm9yIChsZXQgY2hlY2tZID0geTsgY2hlY2tZID49IDA7IGNoZWNrWS0tKSB7XG4gICAgICAgICAgY29uc3QgdGVtcCA9IGdldENlbGxCeUNvb3Jkcyhib2FyZENvcHksIHtcbiAgICAgICAgICAgIHgsXG4gICAgICAgICAgICB5OiBjaGVja1ksXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAodGVtcCkge1xuICAgICAgICAgICAgY29uc3QgZnJvbSA9IHsgeCwgeTogY2hlY2tZIH07XG4gICAgICAgICAgICBjb25zdCB0byA9IHsgeCwgeTogZmFsbFkgfTtcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZWRDdWJlID0ge1xuICAgICAgICAgICAgICAuLi50ZW1wLFxuICAgICAgICAgICAgICBjb29yZHM6IHRvLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgc2V0Q2VsbEJ5Q29vcmRzKGJvYXJkQ29weSwgdG8sIHVwZGF0ZWRDdWJlKTtcbiAgICAgICAgICAgIHNldENlbGxCeUNvb3Jkcyhib2FyZENvcHksIGZyb20sIG51bGwpO1xuXG4gICAgICAgICAgICBzZXRDZWxsQnlDb29yZHMoYm9hcmRXaXRob3V0TW92ZWQsIHRvLCBudWxsKTtcbiAgICAgICAgICAgIHNldENlbGxCeUNvb3Jkcyhib2FyZFdpdGhvdXRNb3ZlZCwgZnJvbSwgbnVsbCk7XG5cbiAgICAgICAgICAgIGZhbGxlZEN1YmVzLnB1c2goe1xuICAgICAgICAgICAgICBmcm9tLFxuICAgICAgICAgICAgICB0byxcbiAgICAgICAgICAgICAgY3ViZTogdXBkYXRlZEN1YmUsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgZmFsbFktLTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGJvYXJkOiBib2FyZENvcHksXG4gICAgZmFsbGVkQ3ViZXMsXG4gICAgYm9hcmRXaXRob3V0TW92ZWQsXG4gIH07XG59O1xuIiwiZXhwb3J0IHsgZmFsbEN1YmVzIH0gZnJvbSBcIi4vZmFsbEN1YmVzXCI7XG4iLCJpbXBvcnQgeyBjb3B5Qm9hcmQsIHNldENlbGxCeUNvb3JkcyB9IGZyb20gXCJzcmMvZ2FtZS91dGlsc1wiO1xuaW1wb3J0IHtcbiAgR2FtZUN1YmVzLFxuICBHYW1lQ2VsbENvb3JkcyxcbiAgR2FtZUN1YmVDb2xvcixcbiAgR2FtZUZhbGxlZEN1YmVzLFxuICBHYW1lQm9hcmQsXG59IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgY3JlYXRlUmFuZG9tQ3ViZSB9IGZyb20gXCIuLi9jcmVhdGVSYW5kb21DdWJlXCI7XG5cbmV4cG9ydCBjb25zdCBmaWxsRW1wdHlDZWxscyA9IChcbiAgYm9hcmRXaXRoRW1wdHk6IEdhbWVCb2FyZCxcbiAgYXZpYWxhYmxlQ3ViZXNDb2xvcnM6IEFycmF5PEdhbWVDdWJlQ29sb3I+LFxuKSA9PiB7XG4gIGNvbnN0IG5ld0N1YmVzOiBHYW1lQ3ViZXMgPSBbXTtcbiAgY29uc3QgYm9hcmRDb3B5ID0gY29weUJvYXJkKGJvYXJkV2l0aEVtcHR5KTtcblxuICBjb25zdCBlbXB0eUNlbGxzID0gYm9hcmRXaXRoRW1wdHkucmVkdWNlKChhY2MsIHJvdywgeSkgPT4ge1xuICAgIHJvdy5mb3JFYWNoKChjZWxsLCB4KSA9PiB7XG4gICAgICBpZiAoIWNlbGwpIHtcbiAgICAgICAgYWNjLnB1c2goeyB4LCB5IH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGFjYztcbiAgfSwgW10gYXMgQXJyYXk8R2FtZUNlbGxDb29yZHM+KTtcblxuICBmb3IgKGNvbnN0IGNvb3JkcyBvZiBlbXB0eUNlbGxzKSB7XG4gICAgY29uc3QgbmV3Q3ViZSA9IGNyZWF0ZVJhbmRvbUN1YmUoY29vcmRzLCBhdmlhbGFibGVDdWJlc0NvbG9ycyk7XG4gICAgc2V0Q2VsbEJ5Q29vcmRzKGJvYXJkQ29weSwgY29vcmRzLCBuZXdDdWJlKTtcbiAgICBuZXdDdWJlcy5wdXNoKG5ld0N1YmUpO1xuICB9XG5cbiAgY29uc3QgZ2V0RW1wdHlDb3VudEluQ29sdW1uID0gKHg6IG51bWJlcikgPT4ge1xuICAgIHJldHVybiBib2FyZFdpdGhFbXB0eS5yZWR1Y2UoKGFjYywgcm93KSA9PiB7XG4gICAgICBpZiAoIXJvd1t4XSkge1xuICAgICAgICBhY2MrKztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCAwKTtcbiAgfTtcblxuICBjb25zdCBmYWxsZWROZXdDdWJlcyA9IG5ld0N1YmVzLnJlZHVjZSgoYWNjLCBjdWJlKSA9PiB7XG4gICAgY29uc3QgeyBjb29yZHMgfSA9IGN1YmU7XG5cbiAgICBjb25zdCBmYWxsZWRDdWJlID0ge1xuICAgICAgZnJvbToge1xuICAgICAgICB4OiBjb29yZHMueCxcbiAgICAgICAgeTogY29vcmRzLnkgLSBnZXRFbXB0eUNvdW50SW5Db2x1bW4oY29vcmRzLngpLFxuICAgICAgfSxcbiAgICAgIHRvOiBjb29yZHMsXG4gICAgICBjdWJlLFxuICAgIH07XG5cbiAgICBhY2MucHVzaChmYWxsZWRDdWJlKTtcblxuICAgIHJldHVybiBhY2M7XG4gIH0sIFtdIGFzIEdhbWVGYWxsZWRDdWJlcyk7XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdDdWJlcyxcbiAgICBmYWxsZWROZXdDdWJlcyxcbiAgICBib2FyZDogYm9hcmRDb3B5LFxuICB9O1xufTtcbiIsImV4cG9ydCB7IGZpbGxFbXB0eUNlbGxzIH0gZnJvbSBcIi4vZmlsbEVtcHR5Q2VsbHNcIjtcbiIsImltcG9ydCB7IEdhbWVCb2FyZEZpbGxlZCwgR2FtZUNvbmZpZywgR2FtZUN1YmVDb2xvciB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgY3JlYXRlUmFuZG9tQ3ViZSB9IGZyb20gXCIuLi9jcmVhdGVSYW5kb21DdWJlXCI7XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUJvYXJkID0gKFxuICBjb25maWc6IEdhbWVDb25maWcsXG4gIGF2aWFsYWJsZUN1YmVzQ29sb3JzOiBBcnJheTxHYW1lQ3ViZUNvbG9yPixcbik6IEdhbWVCb2FyZEZpbGxlZCA9PiB7XG4gIGNvbnN0IHsgYm9hcmRSb3dzLCBib2FyZENvbHMgfSA9IGNvbmZpZztcbiAgY29uc3QgYm9hcmQ6IEdhbWVCb2FyZEZpbGxlZCA9IFtdO1xuXG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IGJvYXJkUm93czsgcm93KyspIHtcbiAgICBib2FyZFtyb3ddID0gW107XG4gICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgYm9hcmRDb2xzOyBjb2wrKykge1xuICAgICAgY29uc3QgY29vcmRzID0geyB4OiBjb2wsIHk6IHJvdyB9O1xuICAgICAgY29uc3QgY3ViZSA9IGNyZWF0ZVJhbmRvbUN1YmUoY29vcmRzLCBhdmlhbGFibGVDdWJlc0NvbG9ycyk7XG4gICAgICBib2FyZFtyb3ddW2NvbF0gPSBjdWJlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBib2FyZDtcbn07XG4iLCJleHBvcnQgeyBnZW5lcmF0ZUJvYXJkIH0gZnJvbSBcIi4vZ2VuZXJhdGVCb2FyZFwiO1xuIiwiaW1wb3J0IHsgZ2V0Q2VsbEJ5Q29vcmRzIH0gZnJvbSBcInNyYy9nYW1lL3V0aWxzXCI7XG5pbXBvcnQgeyBHYW1lQ3ViZXMsIEdhbWVDZWxsQ29vcmRzLCBHYW1lQm9hcmRGaWxsZWQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGdldExpbmtlZEN1YmVzIH0gZnJvbSBcIi4uL2dldExpbmtlZEN1YmVzXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRDdWJlc0NoYWluID0gKFxuICBib2FyZDogR2FtZUJvYXJkRmlsbGVkLFxuICBjb29yZHM6IEdhbWVDZWxsQ29vcmRzLFxuKTogR2FtZUN1YmVzID0+IHtcbiAgY29uc3QgY3ViZSA9IGdldENlbGxCeUNvb3Jkcyhib2FyZCwgY29vcmRzKTtcblxuICBjb25zdCBsaW5rZWRDdWJlcyA9IGdldExpbmtlZEN1YmVzKFxuICAgIGJvYXJkLFxuICAgIHsgeDogY29vcmRzLngsIHk6IGNvb3Jkcy55IH0sXG4gICAgY3ViZS5jb2xvcixcbiAgICBbXSxcbiAgKTtcblxuICByZXR1cm4gbGlua2VkQ3ViZXM7XG59O1xuIiwiZXhwb3J0IHsgZ2V0Q3ViZXNDaGFpbiB9IGZyb20gXCIuL2dldEN1YmVzQ2hhaW5cIjtcbiIsImltcG9ydCB7XG4gIEdhbWVCb2FyZEZpbGxlZCxcbiAgR2FtZUN1YmVJZCxcbiAgR2FtZUNlbGxDb29yZHMsXG4gIEdhbWVDdWJlQ29sb3IsXG4gIEdhbWVDdWJlcyxcbn0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBnZXRDZWxsQnlDb29yZHMgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcblxuZXhwb3J0IGNvbnN0IGdldExpbmtlZEN1YmVzID0gKFxuICBib2FyZDogR2FtZUJvYXJkRmlsbGVkLFxuICBjb29yZHM6IEdhbWVDZWxsQ29vcmRzLFxuICBjdWJlQ29sb3I6IEdhbWVDdWJlQ29sb3IsXG4gIGNoZWNrZWRDdWJlczogQXJyYXk8R2FtZUN1YmVJZD4sXG4pID0+IHtcbiAgY29uc3QgZ2V0TGlua2VkQ3ViZXMgPSAoXG4gICAgYm9hcmQ6IEdhbWVCb2FyZEZpbGxlZCxcbiAgICBjb29yZHM6IEdhbWVDZWxsQ29vcmRzLFxuICAgIGN1YmVDb2xvcjogR2FtZUN1YmVDb2xvcixcbiAgICBjaGVja2VkQ3ViZXM6IEFycmF5PEdhbWVDdWJlSWQ+LFxuICApID0+IHtcbiAgICBjb25zdCBsaW5rZWRDdWJlczogR2FtZUN1YmVzID0gW107XG5cbiAgICBjb25zdCBnZXRMaW5rZWRDdWJlID0gKGNvb3JkczogR2FtZUNlbGxDb29yZHMpID0+IHtcbiAgICAgIGNvbnN0IGN1YmUgPSBnZXRDZWxsQnlDb29yZHMoYm9hcmQsIGNvb3Jkcyk7XG5cbiAgICAgIGlmIChjdWJlICYmIGN1YmUuY29sb3IgPT09IGN1YmVDb2xvcikge1xuICAgICAgICBpZiAoY2hlY2tlZEN1YmVzLmluY2x1ZGVzKGN1YmUuaWQpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hlY2tlZEN1YmVzLnB1c2goY3ViZS5pZCk7XG5cbiAgICAgICAgbGlua2VkQ3ViZXMucHVzaChcbiAgICAgICAgICBjdWJlLFxuICAgICAgICAgIC4uLmdldExpbmtlZEN1YmVzKGJvYXJkLCBjb29yZHMsIGN1YmVDb2xvciwgY2hlY2tlZEN1YmVzKSxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZ2V0TGlua2VkQ3ViZSh7IHg6IGNvb3Jkcy54LCB5OiBjb29yZHMueSArIDEgfSk7XG4gICAgZ2V0TGlua2VkQ3ViZSh7IHg6IGNvb3Jkcy54IC0gMSwgeTogY29vcmRzLnkgfSk7XG4gICAgZ2V0TGlua2VkQ3ViZSh7IHg6IGNvb3Jkcy54ICsgMSwgeTogY29vcmRzLnkgfSk7XG4gICAgZ2V0TGlua2VkQ3ViZSh7IHg6IGNvb3Jkcy54LCB5OiBjb29yZHMueSAtIDEgfSk7XG5cbiAgICByZXR1cm4gbGlua2VkQ3ViZXM7XG4gIH07XG5cbiAgcmV0dXJuIGdldExpbmtlZEN1YmVzKGJvYXJkLCBjb29yZHMsIGN1YmVDb2xvciwgY2hlY2tlZEN1YmVzKTtcbn07XG4iLCJleHBvcnQgeyBnZXRMaW5rZWRDdWJlcyB9IGZyb20gXCIuL2dldExpbmtlZEN1YmVzXCI7XG4iLCJpbXBvcnQgeyBHYW1lQnVybmVkQ3ViZXMsIEdhbWVTY29yZSB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0VXBkYXRlU2NvcmUgPSAoXG4gIGJ1cm5lZEN1YmVzOiBHYW1lQnVybmVkQ3ViZXMsXG4gIHNjb3JlOiBHYW1lU2NvcmUsXG4pID0+IHtcbiAgcmV0dXJuIGJ1cm5lZEN1YmVzLmxlbmd0aCArIHNjb3JlO1xufTtcbiIsImV4cG9ydCB7IGdldFVwZGF0ZVNjb3JlIH0gZnJvbSBcIi4vZ2V0VXBkYXRlU2NvcmVcIjtcbiIsImV4cG9ydCB7IGNyZWF0ZVJhbmRvbUN1YmUgfSBmcm9tIFwiLi9jcmVhdGVSYW5kb21DdWJlXCI7XG5leHBvcnQgeyBnZW5lcmF0ZUJvYXJkIH0gZnJvbSBcIi4vZ2VuZXJhdGVCb2FyZFwiO1xuZXhwb3J0IHsgZ2V0TGlua2VkQ3ViZXMgfSBmcm9tIFwiLi9nZXRMaW5rZWRDdWJlc1wiO1xuZXhwb3J0IHsgZ2V0Q3ViZXNDaGFpbiB9IGZyb20gXCIuL2dldEN1YmVzQ2hhaW5cIjtcbmV4cG9ydCB7IGJ1cm5DdWJlcyB9IGZyb20gXCIuL2J1cm5DdWJlc1wiO1xuZXhwb3J0IHsgZmFsbEN1YmVzIH0gZnJvbSBcIi4vZmFsbEN1YmVzXCI7XG5leHBvcnQgeyBmaWxsRW1wdHlDZWxscyB9IGZyb20gXCIuL2ZpbGxFbXB0eUNlbGxzXCI7XG5leHBvcnQgeyBjaGVja0hhc01vdmVzIH0gZnJvbSBcIi4vY2hlY2tIYXNNb3Zlc1wiO1xuZXhwb3J0IHsgbWl4Q3ViZXMgfSBmcm9tIFwiLi9taXhDdWJlc1wiO1xuZXhwb3J0IHsgY3JlYXRlQ29uZmlnIH0gZnJvbSBcIi4vY3JlYXRlQ29uZmlnXCI7XG5leHBvcnQgeyB1cGRhdGVBdmlhbGFibGVDdWJlc0NvbG9ycyB9IGZyb20gXCIuL3VwZGF0ZUF2aWFsYWJsZUN1YmVzQ29sb3JzXCI7XG5leHBvcnQgeyB0cnlCdXJuQ3ViZXMgfSBmcm9tIFwiLi90cnlCdXJuQ3VkZXNcIjtcbmV4cG9ydCB7IGdldFVwZGF0ZVNjb3JlIH0gZnJvbSBcIi4vZ2V0VXBkYXRlU2NvcmVcIjtcbmV4cG9ydCB7IGNoZWNrSXNXaW4gfSBmcm9tIFwiLi9jaGVja0lzV2luXCI7XG5leHBvcnQgeyB1cGRhdGVHYW1lU3RhdHVzIH0gZnJvbSBcIi4vdXBkYXRlR2FtZVN0YXR1c1wiO1xuZXhwb3J0IHsgbG9nUHJpdHR5Qm9hcmQgfSBmcm9tIFwiLi9sb2dQcml0dHlCb2FyZFwiO1xuZXhwb3J0IHsgdXBkYXRlUmVtYWluaW5nTW92ZXMgfSBmcm9tIFwiLi91cGRhdGVSZW1haW5pbmdNb3Zlc1wiO1xuIiwiZXhwb3J0IHsgbG9nUHJpdHR5Qm9hcmQgfSBmcm9tIFwiLi9sb2dQcml0dHlCb2FyZFwiO1xuIiwiaW1wb3J0IHsgR2FtZUJvYXJkRmlsbGVkIH0gZnJvbSBcInNyYy9nYW1lL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBsb2dQcml0dHlCb2FyZCA9IChib2FyZDogR2FtZUJvYXJkRmlsbGVkKSA9PiB7XG4gIGNvbnN0IGNlbGxTdHJMZW4gPSA2O1xuICBjb25zb2xlLmxvZyhcbiAgICBib2FyZC5tYXAoKHJvdykgPT5cbiAgICAgIHJvd1xuICAgICAgICAubWFwKChjZWxsKSA9PiB7XG4gICAgICAgICAgaWYgKCFjZWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJfXCIucmVwZWF0KGNlbGxTdHJMZW4pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGNlbGxTdHIgPSBgJHtjZWxsLmNvbG9yLnNsaWNlKDAsIDEpfV8ke2NlbGwuaWR9YDtcblxuICAgICAgICAgIHJldHVybiBjZWxsU3RyLnBhZEVuZChjZWxsU3RyTGVuLCBcIiBcIik7XG4gICAgICAgIH0pXG4gICAgICAgIC5qb2luKFwiIFwiKSxcbiAgICApLFxuICApO1xufTtcbiIsImV4cG9ydCB7IG1peEN1YmVzIH0gZnJvbSBcIi4vbWl4Q3ViZXNcIjtcbiIsImltcG9ydCB7IGdldFJhbmRvbUludCwgZ2V0Q2VsbEJ5Q29vcmRzIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5pbXBvcnQgeyBHYW1lQm9hcmRGaWxsZWQsIEdhbWVDb25maWcgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IG1peEN1YmVzID0gKGNvbmZpZzogR2FtZUNvbmZpZywgYm9hcmQ6IEdhbWVCb2FyZEZpbGxlZCkgPT4ge1xuICBjb25zdCB7IGJvYXJkQ29scywgYm9hcmRSb3dzIH0gPSBjb25maWc7XG4gIGNvbnN0IG5ld0JvYXJkOiBHYW1lQm9hcmRGaWxsZWQgPSBbXTtcblxuICBjb25zdCBhdmlhbGFibGVDb29yZHMgPSBBcnJheS5mcm9tKFxuICAgIHtcbiAgICAgIGxlbmd0aDogYm9hcmRSb3dzICogYm9hcmRDb2xzLFxuICAgIH0sXG4gICAgKF8sIGluZGV4KSA9PiAoe1xuICAgICAgeDogaW5kZXggJSBib2FyZENvbHMsXG4gICAgICB5OiBNYXRoLmZsb29yKGluZGV4IC8gYm9hcmRDb2xzKSxcbiAgICB9KSxcbiAgKTtcblxuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBib2FyZFJvd3M7IHJvdysrKSB7XG4gICAgbmV3Qm9hcmRbcm93XSA9IFtdO1xuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGJvYXJkQ29sczsgY29sKyspIHtcbiAgICAgIGNvbnN0IHJhbmRvbUlkeCA9IGdldFJhbmRvbUludCgwLCBhdmlhbGFibGVDb29yZHMubGVuZ3RoIC0gMSk7XG4gICAgICBjb25zdCByYW5kb21Db29yZHMgPSBhdmlhbGFibGVDb29yZHNbcmFuZG9tSWR4XTtcbiAgICAgIGF2aWFsYWJsZUNvb3Jkcy5zcGxpY2UocmFuZG9tSWR4LCAxKTtcblxuICAgICAgY29uc3QgY3ViZSA9IGdldENlbGxCeUNvb3Jkcyhib2FyZCwgcmFuZG9tQ29vcmRzKTtcbiAgICAgIG5ld0JvYXJkW3Jvd11bY29sXSA9IGN1YmU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG5ld0JvYXJkO1xufTtcbiIsImV4cG9ydCB7IHRyeUJ1cm5DdWJlcyB9IGZyb20gXCIuL3RyeUJ1cm5DdWRlc1wiO1xuIiwiaW1wb3J0IHsgR2FtZUJvYXJkRmlsbGVkLCBHYW1lQ2VsbENvb3JkcywgR2FtZUNvbmZpZyB9IGZyb20gXCJzcmMvZ2FtZS90eXBlc1wiO1xuaW1wb3J0IHsgZ2V0Q3ViZXNDaGFpbiB9IGZyb20gXCIuLi9nZXRDdWJlc0NoYWluXCI7XG5pbXBvcnQgeyBidXJuQ3ViZXMgfSBmcm9tIFwiLi4vYnVybkN1YmVzXCI7XG5cbmV4cG9ydCBjb25zdCB0cnlCdXJuQ3ViZXMgPSAoXG4gIGNvbmZpZzogR2FtZUNvbmZpZyxcbiAgYm9hcmQ6IEdhbWVCb2FyZEZpbGxlZCxcbiAgY29vcmRzOiBHYW1lQ2VsbENvb3JkcyxcbikgPT4ge1xuICBjb25zdCB7IG1pbkNoYWluTGVuZ3RoIH0gPSBjb25maWc7XG4gIGNvbnN0IGN1YmVzQ2hhaW4gPSBnZXRDdWJlc0NoYWluKGJvYXJkLCBjb29yZHMpO1xuXG4gIGlmIChjdWJlc0NoYWluLmxlbmd0aCA8IG1pbkNoYWluTGVuZ3RoKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gYnVybkN1YmVzKGJvYXJkLCBjdWJlc0NoYWluKTtcbn07XG4iLCJleHBvcnQgeyB1cGRhdGVBdmlhbGFibGVDdWJlc0NvbG9ycyB9IGZyb20gXCIuL3VwZGF0ZUF2aWFsYWJsZUN1YmVzQ29sb3JzXCI7XG4iLCJpbXBvcnQgeyBHYW1lQ29uZmlnIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBHQU1FX0NVQkVTIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCBhdmlhbGFibGVDdWJlcyA9IFtcbiAgR0FNRV9DVUJFUy5SRUQsXG4gIEdBTUVfQ1VCRVMuR1JFRU4sXG4gIEdBTUVfQ1VCRVMuQkxVRSxcbiAgR0FNRV9DVUJFUy5ZRUxMT1csXG4gIEdBTUVfQ1VCRVMuUFVSUExFLFxuXTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUF2aWFsYWJsZUN1YmVzQ29sb3JzID0gKGNvbmZpZzogR2FtZUNvbmZpZykgPT4ge1xuICBjb25zdCB7IGN1YmVDb2xvcnNDb3VudCB9ID0gY29uZmlnO1xuXG4gIGlmIChPYmplY3Qua2V5cyhHQU1FX0NVQkVTKS5sZW5ndGggPCBjdWJlQ29sb3JzQ291bnQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGN1YmUgY29sb3JzIGNvdW50XCIpO1xuICB9XG5cbiAgcmV0dXJuIGF2aWFsYWJsZUN1YmVzLnNsaWNlKDAsIGN1YmVDb2xvcnNDb3VudCk7XG59O1xuIiwiZXhwb3J0IHsgdXBkYXRlR2FtZVN0YXR1cyB9IGZyb20gXCIuL3VwZGF0ZUdhbWVTdGF0dXNcIjtcbiIsImltcG9ydCB7XG4gIEdhbWVCb2FyZEZpbGxlZCxcbiAgR2FtZUNvbmZpZyxcbiAgR2FtZU1vdmVzLFxuICBHYW1lU2NvcmUsXG4gIEdhbWVTdGF0dXMsXG59IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgY2hlY2tJc1dpbiB9IGZyb20gXCIuLi9jaGVja0lzV2luXCI7XG5pbXBvcnQgeyBHQU1FX1NUQVRVU0VTIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgY2hlY2tIYXNNb3ZlcyB9IGZyb20gXCIuLi9jaGVja0hhc01vdmVzXCI7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVHYW1lU3RhdHVzID0gKFxuICBjb25maWc6IEdhbWVDb25maWcsXG4gIGJvYXJkOiBHYW1lQm9hcmRGaWxsZWQsXG4gIHNjb3JlOiBHYW1lU2NvcmUsXG4gIHNjb3Jlc1RvV2luOiBHYW1lU2NvcmUsXG4gIHN0YXR1czogR2FtZVN0YXR1cyxcbiAgY3VycmVudE1vdmVzOiBHYW1lTW92ZXMsXG4pOiBHYW1lU3RhdHVzID0+IHtcbiAgaWYgKGNoZWNrSXNXaW4oc2NvcmUsIHNjb3Jlc1RvV2luKSkge1xuICAgIHJldHVybiBHQU1FX1NUQVRVU0VTLldJTjtcbiAgfSBlbHNlIGlmICghY2hlY2tIYXNNb3Zlcyhjb25maWcsIGJvYXJkKSB8fCBjdXJyZW50TW92ZXMgPT09IDApIHtcbiAgICByZXR1cm4gR0FNRV9TVEFUVVNFUy5OT19NT1ZFUztcbiAgfVxuXG4gIHJldHVybiBzdGF0dXM7XG59O1xuIiwiZXhwb3J0IHsgdXBkYXRlUmVtYWluaW5nTW92ZXMgfSBmcm9tIFwiLi91cGRhdGVSZW1haW5pbmdNb3Zlc1wiO1xuIiwiaW1wb3J0IHsgR2FtZU1vdmVzIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVSZW1haW5pbmdNb3ZlcyA9IChjdXJyZW50TW92ZXM6IEdhbWVNb3ZlcykgPT4ge1xuICBjb25zdCB1cGRhdGVkID0gY3VycmVudE1vdmVzIC0gMTtcbiAgcmV0dXJuIHVwZGF0ZWQ7XG59O1xuIiwiZXhwb3J0IHsgR2FtZSB9IGZyb20gXCIuL3VpXCI7XG4iLCJpbXBvcnQgeyBBcHBsaWNhdGlvbiwgQXNzZXRzLCBDb250YWluZXIsIFRpY2tlciB9IGZyb20gXCJwaXhpLmpzXCI7XG5pbXBvcnQgeyBBU1NFVFMsIEdBTUVfQ1VCRVMsIEdBTUVfU1RBVFVTRVMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQge1xuICBHYW1lQm9hcmQsXG4gIEdhbWVCdXJuZWRDdWJlcyxcbiAgR2FtZUNlbGxDb29yZHMsXG4gIEdhbWVDb25maWcsXG4gIEdhbWVDdWJlQ29sb3IsXG4gIEdhbWVGYWxsZWRDdWJlcyxcbiAgR2FtZVN0YXR1cyxcbn0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBDbGlja0NlbGwsIFN0YXJ0R2FtZSB9IGZyb20gXCIuLi9wb3J0cy5pbnB1dFwiO1xuaW1wb3J0IHsgY3JlYXRlQ2xpY2tDZWxsLCBjcmVhdGVTdGFydEdhbWUgfSBmcm9tIFwiLi4vYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IEdhbWVQYW5lbENvbnRhaW5lciB9IGZyb20gXCIuL2dhbWVQYW5lbFwiO1xuaW1wb3J0IHsgR2FtZUJvYXJkQ29udGFpbmVyIH0gZnJvbSBcIi4vZ2FtZUJvYXJkXCI7XG5cbmV4cG9ydCBjbGFzcyBHYW1lIHtcbiAgcHJpdmF0ZSBhcHA6IEFwcGxpY2F0aW9uO1xuICBwcml2YXRlIG1haW5Db250YWluZXI6IENvbnRhaW5lcjtcblxuICBwcml2YXRlIGVkaXRhYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgYm9hcmQ6IEdhbWVCb2FyZCA9IFtdO1xuICBwcml2YXRlIGF2aWFsYWJsZUN1YmVzQ29sb3JzOiBBcnJheTxHYW1lQ3ViZUNvbG9yPiA9IFtcbiAgICBHQU1FX0NVQkVTLlJFRCxcbiAgICBHQU1FX0NVQkVTLkdSRUVOLFxuICAgIEdBTUVfQ1VCRVMuQkxVRSxcbiAgICBHQU1FX0NVQkVTLllFTExPVyxcbiAgICBHQU1FX0NVQkVTLlBVUlBMRSxcbiAgXTtcblxuICBwcml2YXRlIHNjb3JlOiBudW1iZXI7XG4gIHByaXZhdGUgc3RhdHVzOiBHYW1lU3RhdHVzO1xuICBwcml2YXRlIGNvbmZpZzogR2FtZUNvbmZpZyA9IHtcbiAgICBib2FyZFJvd3M6IDksXG4gICAgYm9hcmRDb2xzOiA5LFxuICAgIGN1YmVDb2xvcnNDb3VudDogNSxcbiAgICBtaW5DaGFpbkxlbmd0aDogMyxcbiAgICBzY29yZXNUb1dpbjogNDAsXG4gICAgbW92ZUNvdW50OiAxMCxcbiAgfTtcblxuICBwcml2YXRlIHJlbWFpbmluZ01vdmVzID0gdGhpcy5jb25maWcubW92ZUNvdW50O1xuXG4gIHByaXZhdGUgc3RhcnRHYW1lOiBTdGFydEdhbWU7XG4gIHByaXZhdGUgY2xpY2tDZWxsOiBDbGlja0NlbGw7XG5cbiAgcHJpdmF0ZSBnYW1lQm9hcmRDb250YWluZXI6IEdhbWVCb2FyZENvbnRhaW5lcjtcbiAgcHJpdmF0ZSBwYW5lbFNjb3JlQ29udGFpbmVyOiBHYW1lUGFuZWxDb250YWluZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hcHAgPSBuZXcgQXBwbGljYXRpb24oKTtcblxuICAgIHRoaXMubWFpbkNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKTtcblxuICAgIHRoaXMuZ2FtZUJvYXJkQ29udGFpbmVyID0gbmV3IEdhbWVCb2FyZENvbnRhaW5lcih0aGlzLmFwcCwge1xuICAgICAgd2lkdGg6IDUwMCxcbiAgICAgIGhlaWdodDogNTAwLFxuICAgICAgcm93czogdGhpcy5jb25maWcuYm9hcmRSb3dzLFxuICAgICAgY29sczogdGhpcy5jb25maWcuYm9hcmRDb2xzLFxuICAgIH0pO1xuXG4gICAgdGhpcy5wYW5lbFNjb3JlQ29udGFpbmVyID0gbmV3IEdhbWVQYW5lbENvbnRhaW5lcih7XG4gICAgICB3aWR0aDogMzAwLFxuICAgICAgaGVpZ2h0OiAzMDAsXG4gICAgfSk7XG5cbiAgICB0aGlzLnN0YXJ0R2FtZSA9IGNyZWF0ZVN0YXJ0R2FtZSh7XG4gICAgICByZWFkQ29uZmlnOiAoKSA9PiB0aGlzLmNvbmZpZyxcbiAgICAgIHNhdmVBdmlhbGFibGVDdWJlc0NvbG9yczogKGF2aWFsYWJsZUN1YmVzQ29sb3JzKSA9PlxuICAgICAgICAodGhpcy5hdmlhbGFibGVDdWJlc0NvbG9ycyA9IGF2aWFsYWJsZUN1YmVzQ29sb3JzKSxcbiAgICAgIHNhdmVCb2FyZDogKGJvYXJkKSA9PiAodGhpcy5ib2FyZCA9IGJvYXJkKSxcbiAgICAgIHNhdmVTY29yZTogKHNjb3JlKSA9PiAodGhpcy5zY29yZSA9IHNjb3JlKSxcbiAgICAgIHNhdmVTdGF0dXM6IChzdGF0dXMpID0+ICh0aGlzLnN0YXR1cyA9IHN0YXR1cyksXG4gICAgICBzYXZlUmVtYWluaW5nTW92ZXM6IChtb3ZlcykgPT4gKHRoaXMucmVtYWluaW5nTW92ZXMgPSBtb3ZlcyksXG4gICAgfSk7XG5cbiAgICB0aGlzLmNsaWNrQ2VsbCA9IGNyZWF0ZUNsaWNrQ2VsbCh7XG4gICAgICByZWFkQ29uZmlnOiAoKSA9PiB0aGlzLmNvbmZpZyxcbiAgICAgIHJlYWRCb2FyZDogKCkgPT4gdGhpcy5ib2FyZCxcbiAgICAgIHJlYWRTY29yZTogKCkgPT4gdGhpcy5zY29yZSxcbiAgICAgIHJlYWRBdmlhbGFibGVDdWJlc0NvbG9yczogKCkgPT4gdGhpcy5hdmlhbGFibGVDdWJlc0NvbG9ycyxcbiAgICAgIHJlYWRTdGF0dXM6ICgpID0+IHRoaXMuc3RhdHVzLFxuICAgICAgcmVhZFJlbWFpbmluZ01vdmVzOiAoKSA9PiB0aGlzLnJlbWFpbmluZ01vdmVzLFxuICAgICAgc2F2ZUJvYXJkOiAoYm9hcmQpID0+ICh0aGlzLmJvYXJkID0gYm9hcmQpLFxuICAgICAgc2F2ZVNjb3JlOiAoc2NvcmUpID0+ICh0aGlzLnNjb3JlID0gc2NvcmUpLFxuICAgICAgc2F2ZVN0YXR1czogKHN0YXR1cykgPT4gKHRoaXMuc3RhdHVzID0gc3RhdHVzKSxcbiAgICAgIHNhdmVSZW1haW5pbmdNb3ZlczogKG1vdmVzKSA9PiAodGhpcy5yZW1haW5pbmdNb3ZlcyA9IG1vdmVzKSxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIHRoaXMuZWRpdGFibGUgPSB0cnVlO1xuICAgIHRoaXMuc3RhcnRHYW1lKCk7XG5cbiAgICB0aGlzLnJlbmRlckluaXRpYWxCb2FyZCgpO1xuICAgIHRoaXMucmVuZGVySW5pdGlhbFBhbmVsKCk7XG4gIH1cblxuICBhc3luYyBpbml0KCkge1xuICAgIGF3YWl0IHRoaXMuYXBwLmluaXQoeyBiYWNrZ3JvdW5kOiBcIiNBMUExQTFcIiwgcmVzaXplVG86IHdpbmRvdyB9KTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuYXBwLmNhbnZhcyk7XG5cbiAgICBhd2FpdCB0aGlzLmxvYWRBc3NldHMoKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gMTAwMDtcbiAgICBjb25zdCBjb250YWluZXJIZWlnaHQgPSA3MDA7XG5cbiAgICB0aGlzLm1haW5Db250YWluZXIuc2V0U2l6ZShjb250YWluZXJXaWR0aCwgY29udGFpbmVySGVpZ2h0KTtcbiAgICB0aGlzLm1haW5Db250YWluZXIucG9zaXRpb24uc2V0KFxuICAgICAgKHRoaXMuYXBwLnNjcmVlbi53aWR0aCAtIGNvbnRhaW5lcldpZHRoKSAvIDIsXG4gICAgICAodGhpcy5hcHAuc2NyZWVuLmhlaWdodCAtIGNvbnRhaW5lckhlaWdodCkgLyAyLFxuICAgICk7XG5cbiAgICB0aGlzLnBhbmVsU2NvcmVDb250YWluZXIucG9zaXRpb24uc2V0KFxuICAgICAgY29udGFpbmVyV2lkdGggLSA1MCAtIDMwMCxcbiAgICAgIGNvbnRhaW5lckhlaWdodCAvIDIgLSAzMDAgLyAyLFxuICAgICk7XG5cbiAgICB0aGlzLmdhbWVCb2FyZENvbnRhaW5lci5wb3NpdGlvbi5zZXQoNTAsIGNvbnRhaW5lckhlaWdodCAtIDUwIC0gNTAwKTtcblxuICAgIHRoaXMubWFpbkNvbnRhaW5lci5hZGRDaGlsZCh0aGlzLmdhbWVCb2FyZENvbnRhaW5lcik7XG4gICAgdGhpcy5tYWluQ29udGFpbmVyLmFkZENoaWxkKHRoaXMucGFuZWxTY29yZUNvbnRhaW5lcik7XG4gICAgdGhpcy5hcHAuc3RhZ2UuYWRkQ2hpbGQodGhpcy5tYWluQ29udGFpbmVyKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgb25DZWxsQ2xpY2soY29vcmRzOiBHYW1lQ2VsbENvb3Jkcykge1xuICAgIGlmICghdGhpcy5lZGl0YWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuY2xpY2tDZWxsKGNvb3Jkcyk7XG4gICAgaWYgKCFyZXN1bHQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmVkaXRhYmxlID0gZmFsc2U7XG5cbiAgICB0aGlzLnJlbmRlclNjb3JlKCk7XG4gICAgdGhpcy5yZW5kZXJNb3ZlcygpO1xuXG4gICAgYXdhaXQgdGhpcy5yZW5kZXJCdXJuZWRCb2FyZChyZXN1bHQuYnVybmVkQ3ViZXMsIHJlc3VsdC5ib2FyZFdpdGhCdXJuZWQpO1xuXG4gICAgYXdhaXQgdGhpcy5yZW5kZXJGYWxsZWRCb2FyZChcbiAgICAgIHJlc3VsdC5mYWxsZWRDdWJlcy5jb25jYXQocmVzdWx0LmZhbGxlZE5ld0N1YmVzKSxcbiAgICAgIHJlc3VsdC5ib2FyZFdpdGhvdXRNb3ZlZCxcbiAgICApO1xuXG4gICAgdGhpcy5yZW5kZXJJbml0aWFsQm9hcmQoKTtcblxuICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSBHQU1FX1NUQVRVU0VTLldJTikge1xuICAgICAgd2luZG93LmFsZXJ0KFwiV0lOXCIpO1xuICAgIH0gZWxzZSBpZiAocmVzdWx0LnN0YXR1cyA9PT0gR0FNRV9TVEFUVVNFUy5OT19NT1ZFUykge1xuICAgICAgd2luZG93LmFsZXJ0KFwiTk9fTU9WRVNcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWRpdGFibGUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVySW5pdGlhbEJvYXJkKCkge1xuICAgIHRoaXMuZ2FtZUJvYXJkQ29udGFpbmVyLnJlbmRlckN1YmVzKFxuICAgICAgdGhpcy5ib2FyZCxcbiAgICAgIHRoaXMub25DZWxsQ2xpY2suYmluZCh0aGlzKSxcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyByZW5kZXJCdXJuZWRCb2FyZChcbiAgICBidXJuZWQ6IEdhbWVCdXJuZWRDdWJlcyxcbiAgICBib2FyZFdpdGhvdXRCdXJuZWQ6IEdhbWVCb2FyZCxcbiAgKSB7XG4gICAgdGhpcy5nYW1lQm9hcmRDb250YWluZXIucmVuZGVyQ3ViZXMoYm9hcmRXaXRob3V0QnVybmVkKTtcbiAgICBhd2FpdCB0aGlzLmdhbWVCb2FyZENvbnRhaW5lci5yZW5kZXJCdXJuZWQoYnVybmVkKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgcmVuZGVyRmFsbGVkQm9hcmQoXG4gICAgZmFsbGVkOiBHYW1lRmFsbGVkQ3ViZXMsXG4gICAgYm9hcmRXaXRob3V0TW92ZWQ6IEdhbWVCb2FyZCxcbiAgKSB7XG4gICAgdGhpcy5nYW1lQm9hcmRDb250YWluZXIucmVuZGVyQ3ViZXMoYm9hcmRXaXRob3V0TW92ZWQpO1xuICAgIGF3YWl0IHRoaXMuZ2FtZUJvYXJkQ29udGFpbmVyLnJlbmRlckZhbGxlZChmYWxsZWQpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJJbml0aWFsUGFuZWwoKSB7XG4gICAgdGhpcy5wYW5lbFNjb3JlQ29udGFpbmVyLnJlbmRlcih0aGlzLnNjb3JlLCB0aGlzLnJlbWFpbmluZ01vdmVzKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyU2NvcmUoKSB7XG4gICAgdGhpcy5wYW5lbFNjb3JlQ29udGFpbmVyLnJlbmRlclNjb3JlKHRoaXMuc2NvcmUpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJNb3ZlcygpIHtcbiAgICB0aGlzLnBhbmVsU2NvcmVDb250YWluZXIucmVuZGVyTW92ZXModGhpcy5yZW1haW5pbmdNb3Zlcyk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGxvYWRBc3NldHMoKSB7XG4gICAgQXNzZXRzLmFkZChbXG4gICAgICB7XG4gICAgICAgIGFsaWFzOiBBU1NFVFMuQk9BUkQuQUxJQVMsXG4gICAgICAgIHNyYzogQVNTRVRTLkJPQVJELlNSQyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGFsaWFzOiBBU1NFVFMuQkxVRV9DVUJFLkFMSUFTLFxuICAgICAgICBzcmM6IEFTU0VUUy5CTFVFX0NVQkUuU1JDLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYWxpYXM6IEFTU0VUUy5SRURfQ1VCRS5BTElBUyxcbiAgICAgICAgc3JjOiBBU1NFVFMuUkVEX0NVQkUuU1JDLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgYWxpYXM6IEFTU0VUUy5HUkVFTl9DVUJFLkFMSUFTLFxuICAgICAgICBzcmM6IEFTU0VUUy5HUkVFTl9DVUJFLlNSQyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGFsaWFzOiBBU1NFVFMuWUVMTE9XX0NVQkUuQUxJQVMsXG4gICAgICAgIHNyYzogQVNTRVRTLllFTExPV19DVUJFLlNSQyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGFsaWFzOiBBU1NFVFMuUFVSUExFX0NVQkUuQUxJQVMsXG4gICAgICAgIHNyYzogQVNTRVRTLlBVUlBMRV9DVUJFLlNSQyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGFsaWFzOiBBU1NFVFMuUEFORUxfU0NPUkUuQUxJQVMsXG4gICAgICAgIHNyYzogQVNTRVRTLlBBTkVMX1NDT1JFLlNSQyxcbiAgICAgIH0sXG4gICAgXSk7XG5cbiAgICBhd2FpdCBBc3NldHMubG9hZChbXG4gICAgICBBU1NFVFMuQk9BUkQuQUxJQVMsXG4gICAgICBBU1NFVFMuUEFORUxfU0NPUkUuQUxJQVMsXG4gICAgICBBU1NFVFMuQkxVRV9DVUJFLkFMSUFTLFxuICAgICAgQVNTRVRTLlJFRF9DVUJFLkFMSUFTLFxuICAgICAgQVNTRVRTLkdSRUVOX0NVQkUuQUxJQVMsXG4gICAgICBBU1NFVFMuWUVMTE9XX0NVQkUuQUxJQVMsXG4gICAgICBBU1NFVFMuUFVSUExFX0NVQkUuQUxJQVMsXG4gICAgXSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEFwcGxpY2F0aW9uLCBBc3NldHMsIENvbnRhaW5lciwgUG9pbnQsIFNwcml0ZSwgVGlja2VyIH0gZnJvbSBcInBpeGkuanNcIjtcbmltcG9ydCB7IEFTU0VUUyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7XG4gIEdhbWVCb2FyZCxcbiAgR2FtZUJ1cm5lZEN1YmVzLFxuICBHYW1lQ2VsbENvb3JkcyxcbiAgR2FtZUN1YmUsXG4gIEdhbWVGYWxsZWRDdWJlcyxcbn0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBjbGFzcyBHYW1lQm9hcmRDb250YWluZXIgZXh0ZW5kcyBDb250YWluZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFwcDogQXBwbGljYXRpb24sXG4gICAgcHJpdmF0ZSBvcHRpb25zOiB7XG4gICAgICB3aWR0aDogbnVtYmVyO1xuICAgICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgICByb3dzOiBudW1iZXI7XG4gICAgICBjb2xzOiBudW1iZXI7XG4gICAgfSxcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGdldCBjdWJlV2lkdGgoKSB7XG4gICAgcmV0dXJuICh0aGlzLm9wdGlvbnMud2lkdGggLSAzMCkgLyB0aGlzLm9wdGlvbnMuY29scztcbiAgfVxuXG4gIGdldCBjdWJlSGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLmN1YmVXaWR0aDtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXJDdWJlcyhcbiAgICBib2FyZDogR2FtZUJvYXJkLFxuICAgIGNhbGxiYWNrPzogKGNvb3JkczogR2FtZUNlbGxDb29yZHMpID0+IHZvaWQsXG4gICkge1xuICAgIHRoaXMucmVuZGVyQm9hcmRCZygpO1xuXG4gICAgYm9hcmQuZm9yRWFjaCgocm93LCBpKSA9PiB7XG4gICAgICByb3cuZm9yRWFjaCgoY3ViZSwgaikgPT4ge1xuICAgICAgICBpZiAoIWN1YmUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjdWJlU3ByaXRlID0gdGhpcy5jcmVhdGVDdWJlKGN1YmUsIGNhbGxiYWNrKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZChjdWJlU3ByaXRlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIHJlbmRlckJ1cm5lZChidXJuZWRDdWJlczogR2FtZUJ1cm5lZEN1YmVzKSB7XG4gICAgY29uc3QgcHJvbWlzZXMgPSBidXJuZWRDdWJlcy5tYXAoKGJ1cm5lZEN1YmUpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBjb25zdCBjdWJlU3ByaXRlID0gdGhpcy5jcmVhdGVDdWJlKGJ1cm5lZEN1YmUpO1xuICAgICAgICB0aGlzLmFkZENoaWxkKGN1YmVTcHJpdGUpO1xuXG4gICAgICAgIGNvbnN0IGFuaW1hdGlvbkxvZ2ljID0gKHRpY2tlcjogVGlja2VyKSA9PiB7XG4gICAgICAgICAgaWYgKGN1YmVTcHJpdGUuYWxwaGEgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZChjdWJlU3ByaXRlKTtcbiAgICAgICAgICAgIHRoaXMuYXBwLnRpY2tlci5yZW1vdmUoYW5pbWF0aW9uTG9naWMpO1xuICAgICAgICAgICAgcmVzb2x2ZShcIlwiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY3ViZVNwcml0ZS53aWR0aCAtPSAwLjE7XG4gICAgICAgICAgICBjdWJlU3ByaXRlLmhlaWdodCAtPSAwLjE7XG4gICAgICAgICAgICBjdWJlU3ByaXRlLmFscGhhIC09IDAuMSAqIHRpY2tlci5kZWx0YVRpbWU7XG4gICAgICAgICAgICBjdWJlU3ByaXRlLnBvc2l0aW9uLnNldChjdWJlU3ByaXRlLnggKyAwLjA1LCBjdWJlU3ByaXRlLnkgKyAwLjA1KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5hcHAudGlja2VyLmFkZChhbmltYXRpb25Mb2dpYyk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7fSk7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyRmFsbGVkKGZhbGxlZEN1YmVzOiBHYW1lRmFsbGVkQ3ViZXMpIHtcbiAgICBjb25zdCBwcm9taXNlcyA9IGZhbGxlZEN1YmVzLm1hcCgoZmFsbGVkQ3ViZSkgPT4ge1xuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1YmVTcHJpdGUgPSB0aGlzLmNyZWF0ZUN1YmUoe1xuICAgICAgICAgIC4uLmZhbGxlZEN1YmUuY3ViZSxcbiAgICAgICAgICBjb29yZHM6IGZhbGxlZEN1YmUuZnJvbSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5hZGRDaGlsZChjdWJlU3ByaXRlKTtcblxuICAgICAgICBjb25zdCBhbmltYXRpb25Mb2dpYyA9ICh0aWNrZXI6IFRpY2tlcikgPT4ge1xuICAgICAgICAgIGNvbnN0IHN0YXJ0UG9zaXRpb24gPSBjdWJlU3ByaXRlLnBvc2l0aW9uO1xuICAgICAgICAgIGNvbnN0IGVuZFBvc3Rpb24gPSB0aGlzLmdldEN1YmVQb3NpdGlvbkJ5Q29vcmRzKGZhbGxlZEN1YmUudG8pO1xuXG4gICAgICAgICAgY29uc3QgZGlmZiA9IG5ldyBQb2ludChcbiAgICAgICAgICAgIHN0YXJ0UG9zaXRpb24ueCxcbiAgICAgICAgICAgIGVuZFBvc3Rpb24ueSAtIHN0YXJ0UG9zaXRpb24ueSxcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgaWYgKGRpZmYueSA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5hcHAudGlja2VyLnJlbW92ZShhbmltYXRpb25Mb2dpYyk7XG4gICAgICAgICAgICByZXNvbHZlKFwiXCIpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBuZXh0WSA9IE1hdGgubWluKFxuICAgICAgICAgICAgICBzdGFydFBvc2l0aW9uLnkgKyA1ICogdGlja2VyLmRlbHRhVGltZSxcbiAgICAgICAgICAgICAgZW5kUG9zdGlvbi55LFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGN1YmVTcHJpdGUucG9zaXRpb24uc2V0KHN0YXJ0UG9zaXRpb24ueCwgbmV4dFkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmFwcC50aWNrZXIuYWRkKGFuaW1hdGlvbkxvZ2ljKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IHt9KTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlQ3ViZShcbiAgICBjdWJlOiBHYW1lQ3ViZSxcbiAgICBjYWxsYmFjaz86IChjb29yZHM6IEdhbWVDZWxsQ29vcmRzKSA9PiB2b2lkLFxuICApIHtcbiAgICBjb25zdCB0ZXh0dXJlID0gQXNzZXRzLmdldChjdWJlLmNvbG9yKTtcbiAgICBjb25zdCBjdWJlU3ByaXRlID0gbmV3IFNwcml0ZSh0ZXh0dXJlKTtcbiAgICBjdWJlU3ByaXRlLndpZHRoID0gdGhpcy5jdWJlV2lkdGg7XG4gICAgY3ViZVNwcml0ZS5oZWlnaHQgPSB0aGlzLmN1YmVIZWlnaHQ7XG4gICAgY29uc3QgcG9zaXRpb24gPSB0aGlzLmdldEN1YmVQb3NpdGlvbkJ5Q29vcmRzKGN1YmUuY29vcmRzKTtcbiAgICBjdWJlU3ByaXRlLnBvc2l0aW9uLnNldChwb3NpdGlvbi54LCBwb3NpdGlvbi55KTtcblxuICAgIGN1YmVTcHJpdGUuZXZlbnRNb2RlID0gXCJzdGF0aWNcIjtcbiAgICBjdWJlU3ByaXRlLmN1cnNvciA9IFwicG9pbnRlclwiO1xuXG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjdWJlU3ByaXRlLm9uKFwicG9pbnRlcmRvd25cIiwgKCkgPT4gY2FsbGJhY2soY3ViZS5jb29yZHMpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY3ViZVNwcml0ZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q3ViZVBvc2l0aW9uQnlDb29yZHMoY29vcmRzOiBHYW1lQ2VsbENvb3Jkcykge1xuICAgIHJldHVybiB7XG4gICAgICB4OiBjb29yZHMueCAqIHRoaXMuY3ViZVdpZHRoICsgMTUsXG4gICAgICB5OiBjb29yZHMueSAqIHRoaXMuY3ViZUhlaWdodCArIDE1LFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIHJlbmRlckJvYXJkQmcoKSB7XG4gICAgY29uc3QgYm9hcmRTcHJpdGUgPSBuZXcgU3ByaXRlKEFzc2V0cy5nZXQoQVNTRVRTLkJPQVJELkFMSUFTKSk7XG4gICAgYm9hcmRTcHJpdGUuc2V0U2l6ZSh0aGlzLm9wdGlvbnMud2lkdGgsIHRoaXMub3B0aW9ucy5oZWlnaHQpO1xuICAgIHRoaXMuYWRkQ2hpbGQoYm9hcmRTcHJpdGUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBBc3NldHMsIFRleHQsIENvbnRhaW5lciwgU3ByaXRlLCBHcmFwaGljcyB9IGZyb20gXCJwaXhpLmpzXCI7XG5pbXBvcnQgeyBBU1NFVFMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5cbmV4cG9ydCBjbGFzcyBHYW1lUGFuZWxDb250YWluZXIgZXh0ZW5kcyBDb250YWluZXIge1xuICBwYW5lbFNjb3JlQ29udGFpbmVyOiBDb250YWluZXI7XG4gIHBhbmVsVGltZXJDb250YWluZXI6IENvbnRhaW5lcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG9wdGlvbnM6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wYW5lbFNjb3JlQ29udGFpbmVyID0gbmV3IENvbnRhaW5lcigpO1xuICAgIHRoaXMucGFuZWxUaW1lckNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKTtcbiAgfVxuXG4gIHJlbmRlcihzY29yZTogbnVtYmVyLCB0aW1lOiBudW1iZXIpIHtcbiAgICBjb25zdCBwYW5lbFNjb3JlU2l6ZSA9IHRoaXMub3B0aW9ucy53aWR0aDtcbiAgICB0aGlzLnNldFNpemUocGFuZWxTY29yZVNpemUsIHBhbmVsU2NvcmVTaXplKTtcblxuICAgIGNvbnN0IHBhbmVsU2NvcmVTcHJpdGUgPSBuZXcgU3ByaXRlKEFzc2V0cy5nZXQoQVNTRVRTLlBBTkVMX1NDT1JFLkFMSUFTKSk7XG4gICAgcGFuZWxTY29yZVNwcml0ZS53aWR0aCA9IHBhbmVsU2NvcmVTaXplO1xuICAgIHBhbmVsU2NvcmVTcHJpdGUuaGVpZ2h0ID0gcGFuZWxTY29yZVNpemU7XG5cbiAgICBjb25zdCBwYW5lbFNjb3JlU2NvcmVXcmFwcGVyID0gbmV3IEdyYXBoaWNzKClcbiAgICAgIC5yb3VuZFJlY3QoMCwgMCwgMjAwLCA4MCwgMjApXG4gICAgICAuZmlsbChcIiMwRTMzNjZcIik7XG4gICAgcGFuZWxTY29yZVNjb3JlV3JhcHBlci5wb3NpdGlvbi5zZXQoXG4gICAgICAocGFuZWxTY29yZVNpemUgLSAyMDApIC8gMixcbiAgICAgIHBhbmVsU2NvcmVTaXplIC0gODAgLSAzMCxcbiAgICApO1xuICAgIGNvbnN0IHBhbmVsU2NvcmVTY29yZVRpdGxlID0gbmV3IFRleHQoe1xuICAgICAgdGV4dDogXCLRgdGH0LXRgjpcIixcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGZvbnRGYW1pbHk6IFwiQXJpYWxcIixcbiAgICAgICAgZm9udFNpemU6IDMwLFxuICAgICAgICBmaWxsOiBcIndoaXRlXCIsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHBhbmVsU2NvcmVTY29yZVRpdGxlLnBvc2l0aW9uLnNldChcbiAgICAgIChwYW5lbFNjb3JlU2l6ZSAtIHBhbmVsU2NvcmVTY29yZVRpdGxlLndpZHRoKSAvIDIsXG4gICAgICBwYW5lbFNjb3JlU2l6ZSAtIDgwIC0gMzAsXG4gICAgKTtcblxuICAgIGNvbnN0IHBhbmVsVGltZXJTY29yZVdyYXBwZXIgPSBuZXcgR3JhcGhpY3MoKVxuICAgICAgLnJvdW5kUmVjdCgwLCAwLCAxMjAsIDEyMCwgMTIwKVxuICAgICAgLmZpbGwoXCIjQzQzOThGXCIpO1xuICAgIHBhbmVsVGltZXJTY29yZVdyYXBwZXIucG9zaXRpb24uc2V0KHBhbmVsU2NvcmVTaXplIC8gMiAtIDYwLCA0MCk7XG5cbiAgICB0aGlzLmFkZENoaWxkKHBhbmVsU2NvcmVTcHJpdGUpO1xuICAgIHRoaXMuYWRkQ2hpbGQocGFuZWxTY29yZVNjb3JlV3JhcHBlcik7XG4gICAgdGhpcy5hZGRDaGlsZChwYW5lbFNjb3JlU2NvcmVUaXRsZSk7XG4gICAgdGhpcy5hZGRDaGlsZChwYW5lbFRpbWVyU2NvcmVXcmFwcGVyKTtcblxuICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5wYW5lbFRpbWVyQ29udGFpbmVyKTtcbiAgICB0aGlzLmFkZENoaWxkKHRoaXMucGFuZWxTY29yZUNvbnRhaW5lcik7XG5cbiAgICB0aGlzLnJlbmRlclNjb3JlKHNjb3JlKTtcbiAgICB0aGlzLnJlbmRlck1vdmVzKHRpbWUpO1xuICB9XG5cbiAgcmVuZGVyU2NvcmUoc2NvcmU6IG51bWJlcikge1xuICAgIHRoaXMucGFuZWxTY29yZUNvbnRhaW5lci5yZW1vdmVDaGlsZHJlbigpO1xuXG4gICAgY29uc3QgcGFuZWxTY29yZVNjb3JlVmFsdWUgPSBuZXcgVGV4dCh7XG4gICAgICB0ZXh0OiBzY29yZSxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGZvbnRGYW1pbHk6IFwiQXJpYWxcIixcbiAgICAgICAgZm9udFNpemU6IDUwLFxuICAgICAgICBmaWxsOiBcIndoaXRlXCIsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHBhbmVsU2NvcmVTY29yZVZhbHVlLnBvc2l0aW9uLnNldChcbiAgICAgICh0aGlzLm9wdGlvbnMud2lkdGggLSBwYW5lbFNjb3JlU2NvcmVWYWx1ZS53aWR0aCkgLyAyLFxuICAgICAgdGhpcy5vcHRpb25zLndpZHRoIC0gODAsXG4gICAgKTtcblxuICAgIHRoaXMucGFuZWxTY29yZUNvbnRhaW5lci5hZGRDaGlsZChwYW5lbFNjb3JlU2NvcmVWYWx1ZSk7XG4gIH1cblxuICByZW5kZXJNb3Zlcyhtb3ZlczogbnVtYmVyKSB7XG4gICAgdGhpcy5wYW5lbFRpbWVyQ29udGFpbmVyLnJlbW92ZUNoaWxkcmVuKCk7XG5cbiAgICBjb25zdCBwYW5lbE1vdmVzVmFsdWUgPSBuZXcgVGV4dCh7XG4gICAgICB0ZXh0OiBtb3ZlcyxcbiAgICAgIHN0eWxlOiB7XG4gICAgICAgIGZvbnRGYW1pbHk6IFwiQXJpYWxcIixcbiAgICAgICAgZm9udFNpemU6IDcwLFxuICAgICAgICBmaWxsOiBcIndoaXRlXCIsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHBhbmVsTW92ZXNWYWx1ZS5wb3NpdGlvbi5zZXQoXG4gICAgICAodGhpcy5vcHRpb25zLndpZHRoIC0gcGFuZWxNb3Zlc1ZhbHVlLndpZHRoKSAvIDIsXG4gICAgICA2MCxcbiAgICApO1xuXG4gICAgdGhpcy5wYW5lbFRpbWVyQ29udGFpbmVyLmFkZENoaWxkKHBhbmVsTW92ZXNWYWx1ZSk7XG4gIH1cbn1cbiIsImV4cG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9nYW1lXCI7XG4iLCJpbXBvcnQgeyBHYW1lQm9hcmRGaWxsZWQsIEdhbWVDZWxsQ29vcmRzLCBHYW1lQ3ViZSB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRDZWxsQnlDb29yZHMgPSAoXG4gIGJvYXJkOiBHYW1lQm9hcmRGaWxsZWQsXG4gIGNvb3JkczogR2FtZUNlbGxDb29yZHMsXG4pID0+IHtcbiAgcmV0dXJuIGJvYXJkW2Nvb3Jkcy55XT8uW2Nvb3Jkcy54XSB8fCBudWxsO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldENlbGxCeUNvb3JkcyA9IChcbiAgYm9hcmQ6IEdhbWVCb2FyZEZpbGxlZCxcbiAgY29vcmRzOiBHYW1lQ2VsbENvb3JkcyxcbiAgbWF5YmVDdWJlOiBHYW1lQ3ViZSB8IG51bGwsXG4pID0+IHtcbiAgYm9hcmRbY29vcmRzLnldW2Nvb3Jkcy54XSA9IG1heWJlQ3ViZTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb3B5Qm9hcmQgPSAoYm9hcmQ6IEdhbWVCb2FyZEZpbGxlZCkgPT4ge1xuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShib2FyZCkpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUludChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIHtcbiAgY29uc3QgbWluQ2VpbGVkID0gTWF0aC5jZWlsKG1pbik7XG4gIGNvbnN0IG1heEZsb29yZWQgPSBNYXRoLmZsb29yKG1heCk7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4Rmxvb3JlZCAtIG1pbkNlaWxlZCkgKyBtaW5DZWlsZWQpO1xufVxuIiwiaW1wb3J0IGluaXQgZnJvbSBcIi4vaW5pdFwiO1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcblxuaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwibG9hZGluZ1wiKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGluaXQpO1xufSBlbHNlIHtcbiAgaW5pdCgpO1xufVxuIiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCIuL2dhbWVcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaW5pdCgpIHtcbiAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XG5cbiAgYXdhaXQgZ2FtZS5pbml0KCk7XG5cbiAgZ2FtZS5zdGFydCgpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCIvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3Ncbi8vIFNpbmNlIGFsbCByZWZlcmVuY2VkIGNodW5rcyBhcmUgYWxyZWFkeSBpbmNsdWRlZFxuLy8gaW4gdGhpcyBmaWxlLCB0aGlzIGZ1bmN0aW9uIGlzIGVtcHR5IGhlcmUuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSAoKSA9PiAoUHJvbWlzZS5yZXNvbHZlKCkpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtibGFzdF9nYW1lXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2JsYXN0X2dhbWVcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvclwiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC50c1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9