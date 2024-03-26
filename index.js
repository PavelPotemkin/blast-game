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

const createClickCell = ({ saveScore, readConfig, readBoard, readScore, saveBoard, readAvialableCubesColors, readStatus, saveStatus, }) => (coords) => {
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
    const updatedStatus = (0,_domain__WEBPACK_IMPORTED_MODULE_0__.updateGameStatus)(config, updatedBoard, updatedScore, config.scoresToWin, status);
    saveScore(updatedScore);
    saveBoard(updatedBoard);
    saveStatus(updatedStatus);
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


const createStartGame = ({ saveAvialableCubesColors, saveBoard, saveScore, saveStatus, readConfig, }) => () => {
    const config = readConfig();
    const avialableCubesColors = (0,_domain__WEBPACK_IMPORTED_MODULE_1__.updateAvialableCubesColors)(config);
    const board = (0,_domain__WEBPACK_IMPORTED_MODULE_1__.generateBoard)(config, avialableCubesColors);
    const score = 0;
    const status = _constants__WEBPACK_IMPORTED_MODULE_0__.GAME_STATUSES.PLAYING;
    saveBoard(board);
    saveAvialableCubesColors(avialableCubesColors);
    saveScore(score);
    saveStatus(status);
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
/* harmony export */   updateGameStatus: () => (/* reexport safe */ _updateGameStatus__WEBPACK_IMPORTED_MODULE_14__.updateGameStatus)
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



const updateGameStatus = (config, board, score, scoresToWin, status) => {
    if ((0,_checkIsWin__WEBPACK_IMPORTED_MODULE_0__.checkIsWin)(score, scoresToWin)) {
        return _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_STATUSES.WIN;
    }
    else if (!(0,_checkHasMoves__WEBPACK_IMPORTED_MODULE_2__.checkHasMoves)(config, board)) {
        return _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_STATUSES.NO_MOVES;
    }
    return status;
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
            scoresToWin: 50,
            countdownSeconds: 60,
        };
        this.countdownSeconds = this.config.countdownSeconds;
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
        });
        this.clickCell = (0,_application__WEBPACK_IMPORTED_MODULE_2__.createClickCell)({
            readConfig: () => this.config,
            readBoard: () => this.board,
            readScore: () => this.score,
            readAvialableCubesColors: () => this.avialableCubesColors,
            readStatus: () => this.status,
            saveBoard: (board) => (this.board = board),
            saveScore: (score) => (this.score = score),
            saveStatus: (status) => (this.status = status),
        });
    }
    start() {
        this.editable = true;
        this.startGame();
        this.renderInitialBoard();
        this.renderInitialPanel();
        this.startTimer();
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
            yield this.renderBurnedBoard(result.burnedCubes, result.boardWithBurned);
            yield this.renderFalledBoard(result.falledCubes.concat(result.falledNewCubes), result.boardWithoutMoved);
            this.renderInitialBoard();
            if (result.status === _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_STATUSES.WIN) {
                this.stopTimer();
                window.alert("WIN");
            }
            else if (result.status === _constants__WEBPACK_IMPORTED_MODULE_1__.GAME_STATUSES.NO_MOVES) {
                this.stopTimer();
                window.alert("NO_MOVES");
            }
            else {
                this.editable = true;
            }
        });
    }
    startTimer() {
        this.app.ticker.add(this.timerCallback.bind(this));
    }
    stopTimer() {
        this.app.ticker.stop();
    }
    timerCallback(ticker) {
        this.renderTimer();
        if (this.leftSeconds <= 0) {
            this.stopTimer();
            this.editable = false;
        }
        this.countdownSeconds -= ticker.deltaTime / 100;
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
        this.panelScoreContainer.render(this.score, this.config.countdownSeconds);
    }
    renderScore() {
        this.panelScoreContainer.renderScore(this.score);
    }
    renderTimer() {
        this.panelScoreContainer.renderTimer(this.leftSeconds);
    }
    get leftSeconds() {
        return Math.max(0, Math.round(this.countdownSeconds));
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
        this.renderTimer(time);
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
    renderTimer(time) {
        this.panelTimerContainer.removeChildren();
        const panelTimerValue = new pixi_js__WEBPACK_IMPORTED_MODULE_0__.Text({
            text: time,
            style: {
                fontFamily: "Arial",
                fontSize: 70,
                fill: "white",
            },
        });
        panelTimerValue.position.set((this.options.width - panelTimerValue.width) / 2, 60);
        this.panelTimerContainer.addChild(panelTimerValue);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7Ozs7V0NIQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9zdHlsZS5jc3M/ZTMyMCIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvYXBwbGljYXRpb24vY2xpY2tDZWxsL2NsaWNrQ2VsbC50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvYXBwbGljYXRpb24vY2xpY2tDZWxsL2luZGV4LnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9hcHBsaWNhdGlvbi9pbmRleC50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvYXBwbGljYXRpb24vc3RhcnRHYW1lL2luZGV4LnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9hcHBsaWNhdGlvbi9zdGFydEdhbWUvc3RhcnRHYW1lLnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi9idXJuQ3ViZXMvYnVybkN1YmVzLnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vYnVybkN1YmVzL2luZGV4LnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vY2hlY2tIYXNNb3Zlcy9jaGVja0hhc01vdmVzLnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vY2hlY2tIYXNNb3Zlcy9pbmRleC50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL2NoZWNrSXNXaW4vY2hlY2tJc1dpbi50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL2NoZWNrSXNXaW4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi9jcmVhdGVDb25maWcvY3JlYXRlQ29uZmlnLnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vY3JlYXRlQ29uZmlnL2luZGV4LnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vY3JlYXRlUmFuZG9tQ3ViZS9jcmVhdGVSYW5kb21DdWJlLnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vY3JlYXRlUmFuZG9tQ3ViZS9pbmRleC50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL2ZhbGxDdWJlcy9mYWxsQ3ViZXMudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi9mYWxsQ3ViZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi9maWxsRW1wdHlDZWxscy9maWxsRW1wdHlDZWxscy50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL2ZpbGxFbXB0eUNlbGxzL2luZGV4LnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vZ2VuZXJhdGVCb2FyZC9nZW5lcmF0ZUJvYXJkLnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vZ2VuZXJhdGVCb2FyZC9pbmRleC50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL2dldEN1YmVzQ2hhaW4vZ2V0Q3ViZXNDaGFpbi50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL2dldEN1YmVzQ2hhaW4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi9nZXRMaW5rZWRDdWJlcy9nZXRMaW5rZWRDdWJlcy50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL2dldExpbmtlZEN1YmVzL2luZGV4LnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vZ2V0VXBkYXRlU2NvcmUvZ2V0VXBkYXRlU2NvcmUudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi9nZXRVcGRhdGVTY29yZS9pbmRleC50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL2luZGV4LnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vbG9nUHJpdHR5Qm9hcmQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi9sb2dQcml0dHlCb2FyZC9sb2dQcml0dHlCb2FyZC50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL21peEN1YmVzL2luZGV4LnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vbWl4Q3ViZXMvbWl4Q3ViZXMudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi90cnlCdXJuQ3VkZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi90cnlCdXJuQ3VkZXMvdHJ5QnVybkN1ZGVzLnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS9kb21haW4vdXBkYXRlQXZpYWxhYmxlQ3ViZXNDb2xvcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi91cGRhdGVBdmlhbGFibGVDdWJlc0NvbG9ycy91cGRhdGVBdmlhbGFibGVDdWJlc0NvbG9ycy50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvZG9tYWluL3VwZGF0ZUdhbWVTdGF0dXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2RvbWFpbi91cGRhdGVHYW1lU3RhdHVzL3VwZGF0ZUdhbWVTdGF0dXMudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL2luZGV4LnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS91aS9nYW1lLnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvZ2FtZS91aS9nYW1lQm9hcmQudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL3VpL2dhbWVQYW5lbC50cyIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lLy4vc3JjL2dhbWUvdWkvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9nYW1lL3V0aWxzLnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS8uL3NyYy9pbml0LnRzIiwid2VicGFjazovL2JsYXN0LWdhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL2JsYXN0LWdhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JsYXN0LWdhbWUvd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly9ibGFzdC1nYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JsYXN0LWdhbWUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vYmxhc3QtZ2FtZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2JsYXN0LWdhbWUvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL2JsYXN0LWdhbWUvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7XG4gIGNoZWNrSGFzTW92ZXMsXG4gIGZhbGxDdWJlcyxcbiAgZmlsbEVtcHR5Q2VsbHMsXG4gIGdldFVwZGF0ZVNjb3JlLFxuICBtaXhDdWJlcyxcbiAgdHJ5QnVybkN1YmVzLFxuICB1cGRhdGVHYW1lU3RhdHVzLFxufSBmcm9tIFwiLi4vLi4vZG9tYWluXCI7XG5pbXBvcnQgeyBDbGlja0NlbGwgfSBmcm9tIFwiLi4vLi4vcG9ydHMuaW5wdXRcIjtcbmltcG9ydCB7XG4gIFNhdmVTY29yZSxcbiAgUmVhZENvbmZpZyxcbiAgUmVhZEJvYXJkLFxuICBSZWFkU2NvcmUsXG4gIFNhdmVCb2FyZCxcbiAgUmVhZEF2aWFsYWJsZUN1YmVzQ29sb3JzLFxuICBSZWFkU3RhdHVzLFxuICBTYXZlU3RhdHVzLFxufSBmcm9tIFwiLi4vLi4vcG9ydHMub3V0cHV0XCI7XG5cbmludGVyZmFjZSBEZXBzIHtcbiAgcmVhZFNjb3JlOiBSZWFkU2NvcmU7XG4gIHNhdmVTY29yZTogU2F2ZVNjb3JlO1xuICByZWFkQ29uZmlnOiBSZWFkQ29uZmlnO1xuICByZWFkQm9hcmQ6IFJlYWRCb2FyZDtcbiAgc2F2ZUJvYXJkOiBTYXZlQm9hcmQ7XG4gIHJlYWRBdmlhbGFibGVDdWJlc0NvbG9yczogUmVhZEF2aWFsYWJsZUN1YmVzQ29sb3JzO1xuICByZWFkU3RhdHVzOiBSZWFkU3RhdHVzO1xuICBzYXZlU3RhdHVzOiBTYXZlU3RhdHVzO1xufVxuXG5leHBvcnQgY29uc3QgY3JlYXRlQ2xpY2tDZWxsID1cbiAgKHtcbiAgICBzYXZlU2NvcmUsXG4gICAgcmVhZENvbmZpZyxcbiAgICByZWFkQm9hcmQsXG4gICAgcmVhZFNjb3JlLFxuICAgIHNhdmVCb2FyZCxcbiAgICByZWFkQXZpYWxhYmxlQ3ViZXNDb2xvcnMsXG4gICAgcmVhZFN0YXR1cyxcbiAgICBzYXZlU3RhdHVzLFxuICB9OiBEZXBzKTogQ2xpY2tDZWxsID0+XG4gIChjb29yZHMpID0+IHtcbiAgICBjb25zdCBjb25maWcgPSByZWFkQ29uZmlnKCk7XG4gICAgY29uc3QgYm9hcmQgPSByZWFkQm9hcmQoKTtcbiAgICBjb25zdCBzY29yZSA9IHJlYWRTY29yZSgpO1xuXG4gICAgY29uc3QgbWF5YmVCdXJuZWRJbmZvID0gdHJ5QnVybkN1YmVzKGNvbmZpZywgYm9hcmQsIGNvb3Jkcyk7XG4gICAgaWYgKCFtYXliZUJ1cm5lZEluZm8pIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiW0RFQlVHXTogbm8gY3ViZXMgdG8gYnVyblwiKTtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHsgYnVybmVkQ3ViZXMsIGJvYXJkOiBib2FyZFdpdGhCdXJuZWQgfSA9IG1heWJlQnVybmVkSW5mbztcbiAgICBjb25zdCB1cGRhdGVkU2NvcmUgPSBnZXRVcGRhdGVTY29yZShidXJuZWRDdWJlcywgc2NvcmUpO1xuXG4gICAgY29uc3Qge1xuICAgICAgZmFsbGVkQ3ViZXMsXG4gICAgICBib2FyZDogZmFsbGVkQm9hcmQsXG4gICAgICBib2FyZFdpdGhvdXRNb3ZlZCxcbiAgICB9ID0gZmFsbEN1YmVzKGNvbmZpZywgYm9hcmRXaXRoQnVybmVkKTtcblxuICAgIGNvbnN0IGF2aWFsYWJsZUN1YmVzQ29sb3JzID0gcmVhZEF2aWFsYWJsZUN1YmVzQ29sb3JzKCk7XG5cbiAgICBjb25zdCB7XG4gICAgICBuZXdDdWJlcyxcbiAgICAgIGJvYXJkOiBmaWxsZWRCb2FyZCxcbiAgICAgIGZhbGxlZE5ld0N1YmVzLFxuICAgIH0gPSBmaWxsRW1wdHlDZWxscyhmYWxsZWRCb2FyZCwgYXZpYWxhYmxlQ3ViZXNDb2xvcnMpO1xuXG4gICAgY29uc3QgaGFzTW92ZXMgPSBjaGVja0hhc01vdmVzKGNvbmZpZywgZmlsbGVkQm9hcmQpO1xuXG4gICAgY29uc3QgdXBkYXRlZEJvYXJkID0gaGFzTW92ZXMgPyBmaWxsZWRCb2FyZCA6IG1peEN1YmVzKGNvbmZpZywgZmlsbGVkQm9hcmQpO1xuICAgIGNvbnN0IG1peGVkID0gIWhhc01vdmVzO1xuXG4gICAgY29uc3Qgc3RhdHVzID0gcmVhZFN0YXR1cygpO1xuICAgIGNvbnN0IHVwZGF0ZWRTdGF0dXMgPSB1cGRhdGVHYW1lU3RhdHVzKFxuICAgICAgY29uZmlnLFxuICAgICAgdXBkYXRlZEJvYXJkLFxuICAgICAgdXBkYXRlZFNjb3JlLFxuICAgICAgY29uZmlnLnNjb3Jlc1RvV2luLFxuICAgICAgc3RhdHVzLFxuICAgICk7XG5cbiAgICBzYXZlU2NvcmUodXBkYXRlZFNjb3JlKTtcbiAgICBzYXZlQm9hcmQodXBkYXRlZEJvYXJkKTtcbiAgICBzYXZlU3RhdHVzKHVwZGF0ZWRTdGF0dXMpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGJ1cm5lZEN1YmVzLFxuICAgICAgZmFsbGVkQ3ViZXMsXG4gICAgICBib2FyZFdpdGhCdXJuZWQsXG4gICAgICBmYWxsZWRCb2FyZCxcbiAgICAgIGJvYXJkV2l0aG91dE1vdmVkLFxuICAgICAgbWl4ZWQsXG4gICAgICBmaWxsZWRCb2FyZCxcbiAgICAgIG5ld0N1YmVzLFxuICAgICAgdXBkYXRlZFNjb3JlLFxuICAgICAgYm9hcmQ6IHVwZGF0ZWRCb2FyZCxcbiAgICAgIGZhbGxlZE5ld0N1YmVzLFxuICAgICAgc3RhdHVzOiB1cGRhdGVkU3RhdHVzLFxuICAgIH07XG4gIH07XG4iLCJleHBvcnQgeyBjcmVhdGVDbGlja0NlbGwgfSBmcm9tIFwiLi9jbGlja0NlbGxcIjtcbiIsImV4cG9ydCB7IGNyZWF0ZVN0YXJ0R2FtZSB9IGZyb20gXCIuL3N0YXJ0R2FtZVwiO1xuZXhwb3J0IHsgY3JlYXRlQ2xpY2tDZWxsIH0gZnJvbSBcIi4vY2xpY2tDZWxsXCI7XG4iLCJleHBvcnQgeyBjcmVhdGVTdGFydEdhbWUgfSBmcm9tIFwiLi9zdGFydEdhbWVcIjtcbiIsImltcG9ydCB7IEdBTUVfU1RBVFVTRVMgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZUJvYXJkLCB1cGRhdGVBdmlhbGFibGVDdWJlc0NvbG9ycyB9IGZyb20gXCIuLi8uLi9kb21haW5cIjtcbmltcG9ydCB7XG4gIFNhdmVBdmlhbGFibGVDdWJlc0NvbG9ycyxcbiAgU2F2ZUJvYXJkLFxuICBTYXZlU2NvcmUsXG4gIFNhdmVTdGF0dXMsXG4gIFJlYWRDb25maWcsXG59IGZyb20gXCIuLi8uLi9wb3J0cy5vdXRwdXRcIjtcbmltcG9ydCB7IFN0YXJ0R2FtZSB9IGZyb20gXCIuLi8uLi9wb3J0cy5pbnB1dFwiO1xuXG5pbnRlcmZhY2UgRGVwcyB7XG4gIHNhdmVBdmlhbGFibGVDdWJlc0NvbG9yczogU2F2ZUF2aWFsYWJsZUN1YmVzQ29sb3JzO1xuICBzYXZlQm9hcmQ6IFNhdmVCb2FyZDtcbiAgc2F2ZVNjb3JlOiBTYXZlU2NvcmU7XG4gIHNhdmVTdGF0dXM6IFNhdmVTdGF0dXM7XG4gIHJlYWRDb25maWc6IFJlYWRDb25maWc7XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVTdGFydEdhbWUgPVxuICAoe1xuICAgIHNhdmVBdmlhbGFibGVDdWJlc0NvbG9ycyxcbiAgICBzYXZlQm9hcmQsXG4gICAgc2F2ZVNjb3JlLFxuICAgIHNhdmVTdGF0dXMsXG4gICAgcmVhZENvbmZpZyxcbiAgfTogRGVwcyk6IFN0YXJ0R2FtZSA9PlxuICAoKSA9PiB7XG4gICAgY29uc3QgY29uZmlnID0gcmVhZENvbmZpZygpO1xuICAgIGNvbnN0IGF2aWFsYWJsZUN1YmVzQ29sb3JzID0gdXBkYXRlQXZpYWxhYmxlQ3ViZXNDb2xvcnMoY29uZmlnKTtcbiAgICBjb25zdCBib2FyZCA9IGdlbmVyYXRlQm9hcmQoY29uZmlnLCBhdmlhbGFibGVDdWJlc0NvbG9ycyk7XG4gICAgY29uc3Qgc2NvcmUgPSAwO1xuICAgIGNvbnN0IHN0YXR1cyA9IEdBTUVfU1RBVFVTRVMuUExBWUlORztcblxuICAgIHNhdmVCb2FyZChib2FyZCk7XG4gICAgc2F2ZUF2aWFsYWJsZUN1YmVzQ29sb3JzKGF2aWFsYWJsZUN1YmVzQ29sb3JzKTtcbiAgICBzYXZlU2NvcmUoc2NvcmUpO1xuICAgIHNhdmVTdGF0dXMoc3RhdHVzKTtcblxuICAgIHJldHVybiB7XG4gICAgICBib2FyZCxcbiAgICAgIGF2aWFsYWJsZUN1YmVzQ29sb3JzLFxuICAgICAgc2NvcmUsXG4gICAgICBzdGF0dXMsXG4gICAgfTtcbiAgfTtcbiIsImV4cG9ydCBjb25zdCBHQU1FX0NVQkVTID0ge1xuICBCTFVFOiBcImJsdWVDdWJlXCIsXG4gIFJFRDogXCJyZWRDdWJlXCIsXG4gIEdSRUVOOiBcImdyZWVuQ3ViZVwiLFxuICBZRUxMT1c6IFwieWVsbG93Q3ViZVwiLFxuICBQVVJQTEU6IFwicHVycGxlQ3ViZVwiLFxufSBhcyBjb25zdDtcblxuZXhwb3J0IGNvbnN0IEdBTUVfU1RBVFVTRVMgPSB7XG4gIFdJTjogXCJ3aW5cIixcbiAgTk9fTU9WRVM6IFwibm9Nb3Zlc1wiLFxuICBQTEFZSU5HOiBcInBsYXlpbmdcIixcbiAgSURMRTogXCJpZGxlXCIsXG59IGFzIGNvbnN0O1xuXG5leHBvcnQgY29uc3QgQVNTRVRTID0ge1xuICBCT0FSRDoge1xuICAgIEFMSUFTOiBcImJvYXJkXCIsXG4gICAgU1JDOiBcImFzc2V0cy9ib2FyZC5wbmdcIixcbiAgfSxcbiAgQkxVRV9DVUJFOiB7XG4gICAgQUxJQVM6IEdBTUVfQ1VCRVMuQkxVRSxcbiAgICBTUkM6IFwiYXNzZXRzL2JsdWVDdWJlLnBuZ1wiLFxuICB9LFxuICBSRURfQ1VCRToge1xuICAgIEFMSUFTOiBHQU1FX0NVQkVTLlJFRCxcbiAgICBTUkM6IFwiYXNzZXRzL3JlZEN1YmUucG5nXCIsXG4gIH0sXG4gIEdSRUVOX0NVQkU6IHtcbiAgICBBTElBUzogR0FNRV9DVUJFUy5HUkVFTixcbiAgICBTUkM6IFwiYXNzZXRzL2dyZWVuQ3ViZS5wbmdcIixcbiAgfSxcbiAgWUVMTE9XX0NVQkU6IHtcbiAgICBBTElBUzogR0FNRV9DVUJFUy5ZRUxMT1csXG4gICAgU1JDOiBcImFzc2V0cy95ZWxsb3dDdWJlLnBuZ1wiLFxuICB9LFxuICBQVVJQTEVfQ1VCRToge1xuICAgIEFMSUFTOiBHQU1FX0NVQkVTLlBVUlBMRSxcbiAgICBTUkM6IFwiYXNzZXRzL3B1cnBsZUN1YmUucG5nXCIsXG4gIH0sXG4gIFBBTkVMX1NDT1JFOiB7XG4gICAgQUxJQVM6IFwicGFuZWxTY29yZVwiLFxuICAgIFNSQzogXCJhc3NldHMvcGFuZWxTY29yZS5wbmdcIixcbiAgfSxcbn0gYXMgY29uc3Q7XG4iLCJpbXBvcnQgeyBjb3B5Qm9hcmQsIHNldENlbGxCeUNvb3JkcyB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuaW1wb3J0IHtcbiAgR2FtZUJvYXJkLFxuICBHYW1lQm9hcmRGaWxsZWQsXG4gIEdhbWVCdXJuZWRDdWJlcyxcbiAgR2FtZUN1YmVzLFxufSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IGJ1cm5DdWJlcyA9IChib2FyZDogR2FtZUJvYXJkRmlsbGVkLCBjdWJlczogR2FtZUN1YmVzKSA9PiB7XG4gIGNvbnN0IGJ1cm5lZEN1YmVzOiBHYW1lQnVybmVkQ3ViZXMgPSBbXTtcbiAgY29uc3QgYm9hcmRDb3B5ID0gY29weUJvYXJkKGJvYXJkKTtcblxuICBmb3IgKGNvbnN0IGN1YmUgb2YgY3ViZXMpIHtcbiAgICBidXJuZWRDdWJlcy5wdXNoKGN1YmUpO1xuICAgIHNldENlbGxCeUNvb3Jkcyhib2FyZENvcHksIGN1YmUuY29vcmRzLCBudWxsKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYnVybmVkQ3ViZXMsXG4gICAgYm9hcmQ6IGJvYXJkQ29weSBhcyBHYW1lQm9hcmQsXG4gIH07XG59O1xuIiwiZXhwb3J0IHsgYnVybkN1YmVzIH0gZnJvbSBcIi4vYnVybkN1YmVzXCI7XG4iLCJpbXBvcnQgeyBnZXRDZWxsQnlDb29yZHMgfSBmcm9tIFwic3JjL2dhbWUvdXRpbHNcIjtcbmltcG9ydCB7IEdhbWVCb2FyZEZpbGxlZCwgR2FtZUN1YmVJZCwgR2FtZUNvbmZpZyB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgZ2V0TGlua2VkQ3ViZXMgfSBmcm9tIFwiLi4vZ2V0TGlua2VkQ3ViZXNcIjtcblxuZXhwb3J0IGNvbnN0IGNoZWNrSGFzTW92ZXMgPSAoY29uZmlnOiBHYW1lQ29uZmlnLCBib2FyZDogR2FtZUJvYXJkRmlsbGVkKSA9PiB7XG4gIGNvbnN0IGNoZWNrZWRDdWJlczogQXJyYXk8R2FtZUN1YmVJZD4gPSBbXTtcblxuICBjb25zdCB7IGJvYXJkQ29scywgYm9hcmRSb3dzLCBtaW5DaGFpbkxlbmd0aCB9ID0gY29uZmlnO1xuXG4gIGZvciAobGV0IHkgPSAwOyB5IDwgYm9hcmRSb3dzOyB5KyspIHtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGJvYXJkQ29sczsgeCsrKSB7XG4gICAgICBjb25zdCBjdWJlID0gZ2V0Q2VsbEJ5Q29vcmRzKGJvYXJkLCB7IHgsIHkgfSk7XG5cbiAgICAgIGlmIChjdWJlKSB7XG4gICAgICAgIGNvbnN0IGxpbmtlZEN1YmVzID0gZ2V0TGlua2VkQ3ViZXMoXG4gICAgICAgICAgYm9hcmQsXG4gICAgICAgICAgeyB4LCB5IH0sXG4gICAgICAgICAgY3ViZS5jb2xvcixcbiAgICAgICAgICBjaGVja2VkQ3ViZXMsXG4gICAgICAgICk7XG4gICAgICAgIGlmIChsaW5rZWRDdWJlcy5sZW5ndGggPj0gbWluQ2hhaW5MZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjaGVja2VkQ3ViZXMucHVzaCguLi5saW5rZWRDdWJlcy5tYXAoKGN1YmUpID0+IGN1YmUuaWQpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn07XG4iLCJleHBvcnQgeyBjaGVja0hhc01vdmVzIH0gZnJvbSBcIi4vY2hlY2tIYXNNb3Zlc1wiO1xuIiwiaW1wb3J0IHsgR2FtZVNjb3JlIH0gZnJvbSBcInNyYy9nYW1lL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBjaGVja0lzV2luID0gKHNjb3JlOiBHYW1lU2NvcmUsIHNjb3Jlc1RvV2luOiBHYW1lU2NvcmUpID0+IHtcbiAgcmV0dXJuIHNjb3JlID49IHNjb3Jlc1RvV2luO1xufTtcbiIsImV4cG9ydCB7IGNoZWNrSXNXaW4gfSBmcm9tIFwiLi9jaGVja0lzV2luXCI7XG4iLCJpbXBvcnQgeyBHQU1FX0NVQkVTIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgR2FtZUNvbmZpZ1BhcmFtcyB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG5jb25zdCBtaW5DdWJlQ29sb3JzQ291bnQgPSAyO1xuY29uc3QgbWF4Q3ViZUNvbG9yc0NvdW50ID0gT2JqZWN0LnZhbHVlcyhHQU1FX0NVQkVTKS5sZW5ndGg7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDb25maWcgPSAocGFyYW1zOiBHYW1lQ29uZmlnUGFyYW1zKSA9PiB7XG4gIGNvbnN0IHsgY3ViZUNvbG9yc0NvdW50IH0gPSBwYXJhbXM7XG5cbiAgaWYgKGN1YmVDb2xvcnNDb3VudCA8IG1pbkN1YmVDb2xvcnNDb3VudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBjdWJlQ29sb3JzQ291bnQgc2hvdWxkIGJlIGdyZWF0ZXIgdGhhbiAke21pbkN1YmVDb2xvcnNDb3VudCAtIDF9YCxcbiAgICApO1xuICB9XG5cbiAgaWYgKGN1YmVDb2xvcnNDb3VudCA+IG1heEN1YmVDb2xvcnNDb3VudCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBjdWJlQ29sb3JzQ291bnQgc2hvdWxkIGJlIGxlc3MgdGhhbiAke21heEN1YmVDb2xvcnNDb3VudCArIDF9YCxcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIHBhcmFtcztcbn07XG4iLCJleHBvcnQgeyBjcmVhdGVDb25maWcgfSBmcm9tIFwiLi9jcmVhdGVDb25maWdcIjtcbiIsImltcG9ydCB7IGdldFJhbmRvbUludCB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuaW1wb3J0IHsgR2FtZUN1YmVJZCwgR2FtZUNlbGxDb29yZHMsIEdhbWVDdWJlQ29sb3IgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxubGV0IGN1YmVJZHggPSAwO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlUmFuZG9tQ3ViZSA9IChcbiAgY29vcmRzOiBHYW1lQ2VsbENvb3JkcyxcbiAgYXZpYWxhYmxlQ3ViZXNDb2xvcnM6IEFycmF5PEdhbWVDdWJlQ29sb3I+LFxuKSA9PiB7XG4gIGNvbnN0IGdldFJhbmRvbUNvbG9yID0gKGNvbG9yczogQXJyYXk8R2FtZUN1YmVDb2xvcj4pOiBHYW1lQ3ViZUNvbG9yID0+IHtcbiAgICByZXR1cm4gY29sb3JzW2dldFJhbmRvbUludCgwLCBjb2xvcnMubGVuZ3RoKV07XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBpZDogYCR7Y3ViZUlkeCsrfWAgYXMgR2FtZUN1YmVJZCxcbiAgICBjb2xvcjogZ2V0UmFuZG9tQ29sb3IoYXZpYWxhYmxlQ3ViZXNDb2xvcnMpLFxuICAgIGNvb3JkcyxcbiAgfTtcbn07XG4iLCJleHBvcnQgeyBjcmVhdGVSYW5kb21DdWJlIH0gZnJvbSBcIi4vY3JlYXRlUmFuZG9tQ3ViZVwiO1xuIiwiaW1wb3J0IHsgR2FtZUNvbmZpZywgR2FtZUJvYXJkLCBHYW1lRmFsbGVkQ3ViZXMgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGNvcHlCb2FyZCwgZ2V0Q2VsbEJ5Q29vcmRzLCBzZXRDZWxsQnlDb29yZHMgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcblxuZXhwb3J0IGNvbnN0IGZhbGxDdWJlcyA9IChjb25maWc6IEdhbWVDb25maWcsIGJvYXJkOiBHYW1lQm9hcmQpID0+IHtcbiAgY29uc3QgZmFsbGVkQ3ViZXM6IEdhbWVGYWxsZWRDdWJlcyA9IFtdO1xuICBjb25zdCB7IGJvYXJkQ29scywgYm9hcmRSb3dzIH0gPSBjb25maWc7XG4gIGNvbnN0IGJvYXJkQ29weSA9IGNvcHlCb2FyZChib2FyZCk7XG4gIGNvbnN0IGJvYXJkV2l0aG91dE1vdmVkID0gY29weUJvYXJkKGJvYXJkKTtcblxuICBmb3IgKGxldCB5ID0gYm9hcmRSb3dzIC0gMTsgeSA+PSAwOyB5LS0pIHtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8PSBib2FyZENvbHMgLSAxOyB4KyspIHtcbiAgICAgIGNvbnN0IG1heWJlQ3ViZSA9IGdldENlbGxCeUNvb3Jkcyhib2FyZENvcHksIHsgeCwgeSB9KTtcbiAgICAgIGlmICghbWF5YmVDdWJlKSB7XG4gICAgICAgIGxldCBmYWxsWSA9IHk7XG4gICAgICAgIGZvciAobGV0IGNoZWNrWSA9IHk7IGNoZWNrWSA+PSAwOyBjaGVja1ktLSkge1xuICAgICAgICAgIGNvbnN0IHRlbXAgPSBnZXRDZWxsQnlDb29yZHMoYm9hcmRDb3B5LCB7XG4gICAgICAgICAgICB4LFxuICAgICAgICAgICAgeTogY2hlY2tZLFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKHRlbXApIHtcbiAgICAgICAgICAgIGNvbnN0IGZyb20gPSB7IHgsIHk6IGNoZWNrWSB9O1xuICAgICAgICAgICAgY29uc3QgdG8gPSB7IHgsIHk6IGZhbGxZIH07XG4gICAgICAgICAgICBjb25zdCB1cGRhdGVkQ3ViZSA9IHtcbiAgICAgICAgICAgICAgLi4udGVtcCxcbiAgICAgICAgICAgICAgY29vcmRzOiB0byxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHNldENlbGxCeUNvb3Jkcyhib2FyZENvcHksIHRvLCB1cGRhdGVkQ3ViZSk7XG4gICAgICAgICAgICBzZXRDZWxsQnlDb29yZHMoYm9hcmRDb3B5LCBmcm9tLCBudWxsKTtcblxuICAgICAgICAgICAgc2V0Q2VsbEJ5Q29vcmRzKGJvYXJkV2l0aG91dE1vdmVkLCB0bywgbnVsbCk7XG4gICAgICAgICAgICBzZXRDZWxsQnlDb29yZHMoYm9hcmRXaXRob3V0TW92ZWQsIGZyb20sIG51bGwpO1xuXG4gICAgICAgICAgICBmYWxsZWRDdWJlcy5wdXNoKHtcbiAgICAgICAgICAgICAgZnJvbSxcbiAgICAgICAgICAgICAgdG8sXG4gICAgICAgICAgICAgIGN1YmU6IHVwZGF0ZWRDdWJlLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGZhbGxZLS07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBib2FyZDogYm9hcmRDb3B5LFxuICAgIGZhbGxlZEN1YmVzLFxuICAgIGJvYXJkV2l0aG91dE1vdmVkLFxuICB9O1xufTtcbiIsImV4cG9ydCB7IGZhbGxDdWJlcyB9IGZyb20gXCIuL2ZhbGxDdWJlc1wiO1xuIiwiaW1wb3J0IHsgY29weUJvYXJkLCBzZXRDZWxsQnlDb29yZHMgfSBmcm9tIFwic3JjL2dhbWUvdXRpbHNcIjtcbmltcG9ydCB7XG4gIEdhbWVDdWJlcyxcbiAgR2FtZUNlbGxDb29yZHMsXG4gIEdhbWVDdWJlQ29sb3IsXG4gIEdhbWVGYWxsZWRDdWJlcyxcbiAgR2FtZUJvYXJkLFxufSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGNyZWF0ZVJhbmRvbUN1YmUgfSBmcm9tIFwiLi4vY3JlYXRlUmFuZG9tQ3ViZVwiO1xuXG5leHBvcnQgY29uc3QgZmlsbEVtcHR5Q2VsbHMgPSAoXG4gIGJvYXJkV2l0aEVtcHR5OiBHYW1lQm9hcmQsXG4gIGF2aWFsYWJsZUN1YmVzQ29sb3JzOiBBcnJheTxHYW1lQ3ViZUNvbG9yPixcbikgPT4ge1xuICBjb25zdCBuZXdDdWJlczogR2FtZUN1YmVzID0gW107XG4gIGNvbnN0IGJvYXJkQ29weSA9IGNvcHlCb2FyZChib2FyZFdpdGhFbXB0eSk7XG5cbiAgY29uc3QgZW1wdHlDZWxscyA9IGJvYXJkV2l0aEVtcHR5LnJlZHVjZSgoYWNjLCByb3csIHkpID0+IHtcbiAgICByb3cuZm9yRWFjaCgoY2VsbCwgeCkgPT4ge1xuICAgICAgaWYgKCFjZWxsKSB7XG4gICAgICAgIGFjYy5wdXNoKHsgeCwgeSB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBhY2M7XG4gIH0sIFtdIGFzIEFycmF5PEdhbWVDZWxsQ29vcmRzPik7XG5cbiAgZm9yIChjb25zdCBjb29yZHMgb2YgZW1wdHlDZWxscykge1xuICAgIGNvbnN0IG5ld0N1YmUgPSBjcmVhdGVSYW5kb21DdWJlKGNvb3JkcywgYXZpYWxhYmxlQ3ViZXNDb2xvcnMpO1xuICAgIHNldENlbGxCeUNvb3Jkcyhib2FyZENvcHksIGNvb3JkcywgbmV3Q3ViZSk7XG4gICAgbmV3Q3ViZXMucHVzaChuZXdDdWJlKTtcbiAgfVxuXG4gIGNvbnN0IGdldEVtcHR5Q291bnRJbkNvbHVtbiA9ICh4OiBudW1iZXIpID0+IHtcbiAgICByZXR1cm4gYm9hcmRXaXRoRW1wdHkucmVkdWNlKChhY2MsIHJvdykgPT4ge1xuICAgICAgaWYgKCFyb3dbeF0pIHtcbiAgICAgICAgYWNjKys7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgMCk7XG4gIH07XG5cbiAgY29uc3QgZmFsbGVkTmV3Q3ViZXMgPSBuZXdDdWJlcy5yZWR1Y2UoKGFjYywgY3ViZSkgPT4ge1xuICAgIGNvbnN0IHsgY29vcmRzIH0gPSBjdWJlO1xuXG4gICAgY29uc3QgZmFsbGVkQ3ViZSA9IHtcbiAgICAgIGZyb206IHtcbiAgICAgICAgeDogY29vcmRzLngsXG4gICAgICAgIHk6IGNvb3Jkcy55IC0gZ2V0RW1wdHlDb3VudEluQ29sdW1uKGNvb3Jkcy54KSxcbiAgICAgIH0sXG4gICAgICB0bzogY29vcmRzLFxuICAgICAgY3ViZSxcbiAgICB9O1xuXG4gICAgYWNjLnB1c2goZmFsbGVkQ3ViZSk7XG5cbiAgICByZXR1cm4gYWNjO1xuICB9LCBbXSBhcyBHYW1lRmFsbGVkQ3ViZXMpO1xuXG4gIHJldHVybiB7XG4gICAgbmV3Q3ViZXMsXG4gICAgZmFsbGVkTmV3Q3ViZXMsXG4gICAgYm9hcmQ6IGJvYXJkQ29weSxcbiAgfTtcbn07XG4iLCJleHBvcnQgeyBmaWxsRW1wdHlDZWxscyB9IGZyb20gXCIuL2ZpbGxFbXB0eUNlbGxzXCI7XG4iLCJpbXBvcnQgeyBHYW1lQm9hcmRGaWxsZWQsIEdhbWVDb25maWcsIEdhbWVDdWJlQ29sb3IgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IGNyZWF0ZVJhbmRvbUN1YmUgfSBmcm9tIFwiLi4vY3JlYXRlUmFuZG9tQ3ViZVwiO1xuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVCb2FyZCA9IChcbiAgY29uZmlnOiBHYW1lQ29uZmlnLFxuICBhdmlhbGFibGVDdWJlc0NvbG9yczogQXJyYXk8R2FtZUN1YmVDb2xvcj4sXG4pOiBHYW1lQm9hcmRGaWxsZWQgPT4ge1xuICBjb25zdCB7IGJvYXJkUm93cywgYm9hcmRDb2xzIH0gPSBjb25maWc7XG4gIGNvbnN0IGJvYXJkOiBHYW1lQm9hcmRGaWxsZWQgPSBbXTtcblxuICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBib2FyZFJvd3M7IHJvdysrKSB7XG4gICAgYm9hcmRbcm93XSA9IFtdO1xuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGJvYXJkQ29sczsgY29sKyspIHtcbiAgICAgIGNvbnN0IGNvb3JkcyA9IHsgeDogY29sLCB5OiByb3cgfTtcbiAgICAgIGNvbnN0IGN1YmUgPSBjcmVhdGVSYW5kb21DdWJlKGNvb3JkcywgYXZpYWxhYmxlQ3ViZXNDb2xvcnMpO1xuICAgICAgYm9hcmRbcm93XVtjb2xdID0gY3ViZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYm9hcmQ7XG59O1xuIiwiZXhwb3J0IHsgZ2VuZXJhdGVCb2FyZCB9IGZyb20gXCIuL2dlbmVyYXRlQm9hcmRcIjtcbiIsImltcG9ydCB7IGdldENlbGxCeUNvb3JkcyB9IGZyb20gXCJzcmMvZ2FtZS91dGlsc1wiO1xuaW1wb3J0IHsgR2FtZUN1YmVzLCBHYW1lQ2VsbENvb3JkcywgR2FtZUJvYXJkRmlsbGVkIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBnZXRMaW5rZWRDdWJlcyB9IGZyb20gXCIuLi9nZXRMaW5rZWRDdWJlc1wiO1xuXG5leHBvcnQgY29uc3QgZ2V0Q3ViZXNDaGFpbiA9IChcbiAgYm9hcmQ6IEdhbWVCb2FyZEZpbGxlZCxcbiAgY29vcmRzOiBHYW1lQ2VsbENvb3Jkcyxcbik6IEdhbWVDdWJlcyA9PiB7XG4gIGNvbnN0IGN1YmUgPSBnZXRDZWxsQnlDb29yZHMoYm9hcmQsIGNvb3Jkcyk7XG5cbiAgY29uc3QgbGlua2VkQ3ViZXMgPSBnZXRMaW5rZWRDdWJlcyhcbiAgICBib2FyZCxcbiAgICB7IHg6IGNvb3Jkcy54LCB5OiBjb29yZHMueSB9LFxuICAgIGN1YmUuY29sb3IsXG4gICAgW10sXG4gICk7XG5cbiAgcmV0dXJuIGxpbmtlZEN1YmVzO1xufTtcbiIsImV4cG9ydCB7IGdldEN1YmVzQ2hhaW4gfSBmcm9tIFwiLi9nZXRDdWJlc0NoYWluXCI7XG4iLCJpbXBvcnQge1xuICBHYW1lQm9hcmRGaWxsZWQsXG4gIEdhbWVDdWJlSWQsXG4gIEdhbWVDZWxsQ29vcmRzLFxuICBHYW1lQ3ViZUNvbG9yLFxuICBHYW1lQ3ViZXMsXG59IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgZ2V0Q2VsbEJ5Q29vcmRzIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRMaW5rZWRDdWJlcyA9IChcbiAgYm9hcmQ6IEdhbWVCb2FyZEZpbGxlZCxcbiAgY29vcmRzOiBHYW1lQ2VsbENvb3JkcyxcbiAgY3ViZUNvbG9yOiBHYW1lQ3ViZUNvbG9yLFxuICBjaGVja2VkQ3ViZXM6IEFycmF5PEdhbWVDdWJlSWQ+LFxuKSA9PiB7XG4gIGNvbnN0IGdldExpbmtlZEN1YmVzID0gKFxuICAgIGJvYXJkOiBHYW1lQm9hcmRGaWxsZWQsXG4gICAgY29vcmRzOiBHYW1lQ2VsbENvb3JkcyxcbiAgICBjdWJlQ29sb3I6IEdhbWVDdWJlQ29sb3IsXG4gICAgY2hlY2tlZEN1YmVzOiBBcnJheTxHYW1lQ3ViZUlkPixcbiAgKSA9PiB7XG4gICAgY29uc3QgbGlua2VkQ3ViZXM6IEdhbWVDdWJlcyA9IFtdO1xuXG4gICAgY29uc3QgZ2V0TGlua2VkQ3ViZSA9IChjb29yZHM6IEdhbWVDZWxsQ29vcmRzKSA9PiB7XG4gICAgICBjb25zdCBjdWJlID0gZ2V0Q2VsbEJ5Q29vcmRzKGJvYXJkLCBjb29yZHMpO1xuXG4gICAgICBpZiAoY3ViZSAmJiBjdWJlLmNvbG9yID09PSBjdWJlQ29sb3IpIHtcbiAgICAgICAgaWYgKGNoZWNrZWRDdWJlcy5pbmNsdWRlcyhjdWJlLmlkKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoZWNrZWRDdWJlcy5wdXNoKGN1YmUuaWQpO1xuXG4gICAgICAgIGxpbmtlZEN1YmVzLnB1c2goXG4gICAgICAgICAgY3ViZSxcbiAgICAgICAgICAuLi5nZXRMaW5rZWRDdWJlcyhib2FyZCwgY29vcmRzLCBjdWJlQ29sb3IsIGNoZWNrZWRDdWJlcyksXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGdldExpbmtlZEN1YmUoeyB4OiBjb29yZHMueCwgeTogY29vcmRzLnkgKyAxIH0pO1xuICAgIGdldExpbmtlZEN1YmUoeyB4OiBjb29yZHMueCAtIDEsIHk6IGNvb3Jkcy55IH0pO1xuICAgIGdldExpbmtlZEN1YmUoeyB4OiBjb29yZHMueCArIDEsIHk6IGNvb3Jkcy55IH0pO1xuICAgIGdldExpbmtlZEN1YmUoeyB4OiBjb29yZHMueCwgeTogY29vcmRzLnkgLSAxIH0pO1xuXG4gICAgcmV0dXJuIGxpbmtlZEN1YmVzO1xuICB9O1xuXG4gIHJldHVybiBnZXRMaW5rZWRDdWJlcyhib2FyZCwgY29vcmRzLCBjdWJlQ29sb3IsIGNoZWNrZWRDdWJlcyk7XG59O1xuIiwiZXhwb3J0IHsgZ2V0TGlua2VkQ3ViZXMgfSBmcm9tIFwiLi9nZXRMaW5rZWRDdWJlc1wiO1xuIiwiaW1wb3J0IHsgR2FtZUJ1cm5lZEN1YmVzLCBHYW1lU2NvcmUgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IGdldFVwZGF0ZVNjb3JlID0gKFxuICBidXJuZWRDdWJlczogR2FtZUJ1cm5lZEN1YmVzLFxuICBzY29yZTogR2FtZVNjb3JlLFxuKSA9PiB7XG4gIHJldHVybiBidXJuZWRDdWJlcy5sZW5ndGggKyBzY29yZTtcbn07XG4iLCJleHBvcnQgeyBnZXRVcGRhdGVTY29yZSB9IGZyb20gXCIuL2dldFVwZGF0ZVNjb3JlXCI7XG4iLCJleHBvcnQgeyBjcmVhdGVSYW5kb21DdWJlIH0gZnJvbSBcIi4vY3JlYXRlUmFuZG9tQ3ViZVwiO1xuZXhwb3J0IHsgZ2VuZXJhdGVCb2FyZCB9IGZyb20gXCIuL2dlbmVyYXRlQm9hcmRcIjtcbmV4cG9ydCB7IGdldExpbmtlZEN1YmVzIH0gZnJvbSBcIi4vZ2V0TGlua2VkQ3ViZXNcIjtcbmV4cG9ydCB7IGdldEN1YmVzQ2hhaW4gfSBmcm9tIFwiLi9nZXRDdWJlc0NoYWluXCI7XG5leHBvcnQgeyBidXJuQ3ViZXMgfSBmcm9tIFwiLi9idXJuQ3ViZXNcIjtcbmV4cG9ydCB7IGZhbGxDdWJlcyB9IGZyb20gXCIuL2ZhbGxDdWJlc1wiO1xuZXhwb3J0IHsgZmlsbEVtcHR5Q2VsbHMgfSBmcm9tIFwiLi9maWxsRW1wdHlDZWxsc1wiO1xuZXhwb3J0IHsgY2hlY2tIYXNNb3ZlcyB9IGZyb20gXCIuL2NoZWNrSGFzTW92ZXNcIjtcbmV4cG9ydCB7IG1peEN1YmVzIH0gZnJvbSBcIi4vbWl4Q3ViZXNcIjtcbmV4cG9ydCB7IGNyZWF0ZUNvbmZpZyB9IGZyb20gXCIuL2NyZWF0ZUNvbmZpZ1wiO1xuZXhwb3J0IHsgdXBkYXRlQXZpYWxhYmxlQ3ViZXNDb2xvcnMgfSBmcm9tIFwiLi91cGRhdGVBdmlhbGFibGVDdWJlc0NvbG9yc1wiO1xuZXhwb3J0IHsgdHJ5QnVybkN1YmVzIH0gZnJvbSBcIi4vdHJ5QnVybkN1ZGVzXCI7XG5leHBvcnQgeyBnZXRVcGRhdGVTY29yZSB9IGZyb20gXCIuL2dldFVwZGF0ZVNjb3JlXCI7XG5leHBvcnQgeyBjaGVja0lzV2luIH0gZnJvbSBcIi4vY2hlY2tJc1dpblwiO1xuZXhwb3J0IHsgdXBkYXRlR2FtZVN0YXR1cyB9IGZyb20gXCIuL3VwZGF0ZUdhbWVTdGF0dXNcIjtcbmV4cG9ydCB7IGxvZ1ByaXR0eUJvYXJkIH0gZnJvbSBcIi4vbG9nUHJpdHR5Qm9hcmRcIjtcbiIsImV4cG9ydCB7IGxvZ1ByaXR0eUJvYXJkIH0gZnJvbSBcIi4vbG9nUHJpdHR5Qm9hcmRcIjtcbiIsImltcG9ydCB7IEdhbWVCb2FyZEZpbGxlZCB9IGZyb20gXCJzcmMvZ2FtZS90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgbG9nUHJpdHR5Qm9hcmQgPSAoYm9hcmQ6IEdhbWVCb2FyZEZpbGxlZCkgPT4ge1xuICBjb25zdCBjZWxsU3RyTGVuID0gNjtcbiAgY29uc29sZS5sb2coXG4gICAgYm9hcmQubWFwKChyb3cpID0+XG4gICAgICByb3dcbiAgICAgICAgLm1hcCgoY2VsbCkgPT4ge1xuICAgICAgICAgIGlmICghY2VsbCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiX1wiLnJlcGVhdChjZWxsU3RyTGVuKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBjZWxsU3RyID0gYCR7Y2VsbC5jb2xvci5zbGljZSgwLCAxKX1fJHtjZWxsLmlkfWA7XG5cbiAgICAgICAgICByZXR1cm4gY2VsbFN0ci5wYWRFbmQoY2VsbFN0ckxlbiwgXCIgXCIpO1xuICAgICAgICB9KVxuICAgICAgICAuam9pbihcIiBcIiksXG4gICAgKSxcbiAgKTtcbn07XG4iLCJleHBvcnQgeyBtaXhDdWJlcyB9IGZyb20gXCIuL21peEN1YmVzXCI7XG4iLCJpbXBvcnQgeyBnZXRSYW5kb21JbnQsIGdldENlbGxCeUNvb3JkcyB9IGZyb20gXCIuLi8uLi91dGlsc1wiO1xuaW1wb3J0IHsgR2FtZUJvYXJkRmlsbGVkLCBHYW1lQ29uZmlnIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBtaXhDdWJlcyA9IChjb25maWc6IEdhbWVDb25maWcsIGJvYXJkOiBHYW1lQm9hcmRGaWxsZWQpID0+IHtcbiAgY29uc3QgeyBib2FyZENvbHMsIGJvYXJkUm93cyB9ID0gY29uZmlnO1xuICBjb25zdCBuZXdCb2FyZDogR2FtZUJvYXJkRmlsbGVkID0gW107XG5cbiAgY29uc3QgYXZpYWxhYmxlQ29vcmRzID0gQXJyYXkuZnJvbShcbiAgICB7XG4gICAgICBsZW5ndGg6IGJvYXJkUm93cyAqIGJvYXJkQ29scyxcbiAgICB9LFxuICAgIChfLCBpbmRleCkgPT4gKHtcbiAgICAgIHg6IGluZGV4ICUgYm9hcmRDb2xzLFxuICAgICAgeTogTWF0aC5mbG9vcihpbmRleCAvIGJvYXJkQ29scyksXG4gICAgfSksXG4gICk7XG5cbiAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgYm9hcmRSb3dzOyByb3crKykge1xuICAgIG5ld0JvYXJkW3Jvd10gPSBbXTtcbiAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBib2FyZENvbHM7IGNvbCsrKSB7XG4gICAgICBjb25zdCByYW5kb21JZHggPSBnZXRSYW5kb21JbnQoMCwgYXZpYWxhYmxlQ29vcmRzLmxlbmd0aCAtIDEpO1xuICAgICAgY29uc3QgcmFuZG9tQ29vcmRzID0gYXZpYWxhYmxlQ29vcmRzW3JhbmRvbUlkeF07XG4gICAgICBhdmlhbGFibGVDb29yZHMuc3BsaWNlKHJhbmRvbUlkeCwgMSk7XG5cbiAgICAgIGNvbnN0IGN1YmUgPSBnZXRDZWxsQnlDb29yZHMoYm9hcmQsIHJhbmRvbUNvb3Jkcyk7XG4gICAgICBuZXdCb2FyZFtyb3ddW2NvbF0gPSBjdWJlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBuZXdCb2FyZDtcbn07XG4iLCJleHBvcnQgeyB0cnlCdXJuQ3ViZXMgfSBmcm9tIFwiLi90cnlCdXJuQ3VkZXNcIjtcbiIsImltcG9ydCB7IEdhbWVCb2FyZEZpbGxlZCwgR2FtZUNlbGxDb29yZHMsIEdhbWVDb25maWcgfSBmcm9tIFwic3JjL2dhbWUvdHlwZXNcIjtcbmltcG9ydCB7IGdldEN1YmVzQ2hhaW4gfSBmcm9tIFwiLi4vZ2V0Q3ViZXNDaGFpblwiO1xuaW1wb3J0IHsgYnVybkN1YmVzIH0gZnJvbSBcIi4uL2J1cm5DdWJlc1wiO1xuXG5leHBvcnQgY29uc3QgdHJ5QnVybkN1YmVzID0gKFxuICBjb25maWc6IEdhbWVDb25maWcsXG4gIGJvYXJkOiBHYW1lQm9hcmRGaWxsZWQsXG4gIGNvb3JkczogR2FtZUNlbGxDb29yZHMsXG4pID0+IHtcbiAgY29uc3QgeyBtaW5DaGFpbkxlbmd0aCB9ID0gY29uZmlnO1xuICBjb25zdCBjdWJlc0NoYWluID0gZ2V0Q3ViZXNDaGFpbihib2FyZCwgY29vcmRzKTtcblxuICBpZiAoY3ViZXNDaGFpbi5sZW5ndGggPCBtaW5DaGFpbkxlbmd0aCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIGJ1cm5DdWJlcyhib2FyZCwgY3ViZXNDaGFpbik7XG59O1xuIiwiZXhwb3J0IHsgdXBkYXRlQXZpYWxhYmxlQ3ViZXNDb2xvcnMgfSBmcm9tIFwiLi91cGRhdGVBdmlhbGFibGVDdWJlc0NvbG9yc1wiO1xuIiwiaW1wb3J0IHsgR2FtZUNvbmZpZyB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgR0FNRV9DVUJFUyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHNcIjtcblxuY29uc3QgYXZpYWxhYmxlQ3ViZXMgPSBbXG4gIEdBTUVfQ1VCRVMuUkVELFxuICBHQU1FX0NVQkVTLkdSRUVOLFxuICBHQU1FX0NVQkVTLkJMVUUsXG4gIEdBTUVfQ1VCRVMuWUVMTE9XLFxuICBHQU1FX0NVQkVTLlBVUlBMRSxcbl07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVBdmlhbGFibGVDdWJlc0NvbG9ycyA9IChjb25maWc6IEdhbWVDb25maWcpID0+IHtcbiAgY29uc3QgeyBjdWJlQ29sb3JzQ291bnQgfSA9IGNvbmZpZztcblxuICBpZiAoT2JqZWN0LmtleXMoR0FNRV9DVUJFUykubGVuZ3RoIDwgY3ViZUNvbG9yc0NvdW50KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBjdWJlIGNvbG9ycyBjb3VudFwiKTtcbiAgfVxuXG4gIHJldHVybiBhdmlhbGFibGVDdWJlcy5zbGljZSgwLCBjdWJlQ29sb3JzQ291bnQpO1xufTtcbiIsImV4cG9ydCB7IHVwZGF0ZUdhbWVTdGF0dXMgfSBmcm9tIFwiLi91cGRhdGVHYW1lU3RhdHVzXCI7XG4iLCJpbXBvcnQge1xuICBHYW1lQm9hcmRGaWxsZWQsXG4gIEdhbWVDb25maWcsXG4gIEdhbWVTY29yZSxcbiAgR2FtZVN0YXR1cyxcbn0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBjaGVja0lzV2luIH0gZnJvbSBcIi4uL2NoZWNrSXNXaW5cIjtcbmltcG9ydCB7IEdBTUVfU1RBVFVTRVMgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBjaGVja0hhc01vdmVzIH0gZnJvbSBcIi4uL2NoZWNrSGFzTW92ZXNcIjtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZUdhbWVTdGF0dXMgPSAoXG4gIGNvbmZpZzogR2FtZUNvbmZpZyxcbiAgYm9hcmQ6IEdhbWVCb2FyZEZpbGxlZCxcbiAgc2NvcmU6IEdhbWVTY29yZSxcbiAgc2NvcmVzVG9XaW46IEdhbWVTY29yZSxcbiAgc3RhdHVzOiBHYW1lU3RhdHVzLFxuKTogR2FtZVN0YXR1cyA9PiB7XG4gIGlmIChjaGVja0lzV2luKHNjb3JlLCBzY29yZXNUb1dpbikpIHtcbiAgICByZXR1cm4gR0FNRV9TVEFUVVNFUy5XSU47XG4gIH0gZWxzZSBpZiAoIWNoZWNrSGFzTW92ZXMoY29uZmlnLCBib2FyZCkpIHtcbiAgICByZXR1cm4gR0FNRV9TVEFUVVNFUy5OT19NT1ZFUztcbiAgfVxuXG4gIHJldHVybiBzdGF0dXM7XG59O1xuIiwiZXhwb3J0IHsgR2FtZSB9IGZyb20gXCIuL3VpXCI7XG4iLCJpbXBvcnQgeyBBcHBsaWNhdGlvbiwgQXNzZXRzLCBDb250YWluZXIsIFRpY2tlciB9IGZyb20gXCJwaXhpLmpzXCI7XG5pbXBvcnQgeyBBU1NFVFMsIEdBTUVfQ1VCRVMsIEdBTUVfU1RBVFVTRVMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQge1xuICBHYW1lQm9hcmQsXG4gIEdhbWVCdXJuZWRDdWJlcyxcbiAgR2FtZUNlbGxDb29yZHMsXG4gIEdhbWVDb25maWcsXG4gIEdhbWVDdWJlQ29sb3IsXG4gIEdhbWVGYWxsZWRDdWJlcyxcbiAgR2FtZVN0YXR1cyxcbn0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBDbGlja0NlbGwsIFN0YXJ0R2FtZSB9IGZyb20gXCIuLi9wb3J0cy5pbnB1dFwiO1xuaW1wb3J0IHsgY3JlYXRlQ2xpY2tDZWxsLCBjcmVhdGVTdGFydEdhbWUgfSBmcm9tIFwiLi4vYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IEdhbWVQYW5lbENvbnRhaW5lciB9IGZyb20gXCIuL2dhbWVQYW5lbFwiO1xuaW1wb3J0IHsgR2FtZUJvYXJkQ29udGFpbmVyIH0gZnJvbSBcIi4vZ2FtZUJvYXJkXCI7XG5cbmV4cG9ydCBjbGFzcyBHYW1lIHtcbiAgcHJpdmF0ZSBhcHA6IEFwcGxpY2F0aW9uO1xuICBwcml2YXRlIG1haW5Db250YWluZXI6IENvbnRhaW5lcjtcblxuICBwcml2YXRlIGVkaXRhYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgYm9hcmQ6IEdhbWVCb2FyZCA9IFtdO1xuICBwcml2YXRlIGF2aWFsYWJsZUN1YmVzQ29sb3JzOiBBcnJheTxHYW1lQ3ViZUNvbG9yPiA9IFtcbiAgICBHQU1FX0NVQkVTLlJFRCxcbiAgICBHQU1FX0NVQkVTLkdSRUVOLFxuICAgIEdBTUVfQ1VCRVMuQkxVRSxcbiAgICBHQU1FX0NVQkVTLllFTExPVyxcbiAgICBHQU1FX0NVQkVTLlBVUlBMRSxcbiAgXTtcblxuICBwcml2YXRlIHNjb3JlOiBudW1iZXI7XG4gIHByaXZhdGUgc3RhdHVzOiBHYW1lU3RhdHVzO1xuICBwcml2YXRlIGNvbmZpZzogR2FtZUNvbmZpZyA9IHtcbiAgICBib2FyZFJvd3M6IDksXG4gICAgYm9hcmRDb2xzOiA5LFxuICAgIGN1YmVDb2xvcnNDb3VudDogNSxcbiAgICBtaW5DaGFpbkxlbmd0aDogMyxcbiAgICBzY29yZXNUb1dpbjogNTAsXG4gICAgY291bnRkb3duU2Vjb25kczogNjAsXG4gIH07XG5cbiAgcHJpdmF0ZSBjb3VudGRvd25TZWNvbmRzOiBudW1iZXIgPSB0aGlzLmNvbmZpZy5jb3VudGRvd25TZWNvbmRzO1xuXG4gIHByaXZhdGUgc3RhcnRHYW1lOiBTdGFydEdhbWU7XG4gIHByaXZhdGUgY2xpY2tDZWxsOiBDbGlja0NlbGw7XG5cbiAgcHJpdmF0ZSBnYW1lQm9hcmRDb250YWluZXI6IEdhbWVCb2FyZENvbnRhaW5lcjtcbiAgcHJpdmF0ZSBwYW5lbFNjb3JlQ29udGFpbmVyOiBHYW1lUGFuZWxDb250YWluZXI7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hcHAgPSBuZXcgQXBwbGljYXRpb24oKTtcblxuICAgIHRoaXMubWFpbkNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKTtcblxuICAgIHRoaXMuZ2FtZUJvYXJkQ29udGFpbmVyID0gbmV3IEdhbWVCb2FyZENvbnRhaW5lcih0aGlzLmFwcCwge1xuICAgICAgd2lkdGg6IDUwMCxcbiAgICAgIGhlaWdodDogNTAwLFxuICAgICAgcm93czogdGhpcy5jb25maWcuYm9hcmRSb3dzLFxuICAgICAgY29sczogdGhpcy5jb25maWcuYm9hcmRDb2xzLFxuICAgIH0pO1xuXG4gICAgdGhpcy5wYW5lbFNjb3JlQ29udGFpbmVyID0gbmV3IEdhbWVQYW5lbENvbnRhaW5lcih7XG4gICAgICB3aWR0aDogMzAwLFxuICAgICAgaGVpZ2h0OiAzMDAsXG4gICAgfSk7XG5cbiAgICB0aGlzLnN0YXJ0R2FtZSA9IGNyZWF0ZVN0YXJ0R2FtZSh7XG4gICAgICByZWFkQ29uZmlnOiAoKSA9PiB0aGlzLmNvbmZpZyxcbiAgICAgIHNhdmVBdmlhbGFibGVDdWJlc0NvbG9yczogKGF2aWFsYWJsZUN1YmVzQ29sb3JzKSA9PlxuICAgICAgICAodGhpcy5hdmlhbGFibGVDdWJlc0NvbG9ycyA9IGF2aWFsYWJsZUN1YmVzQ29sb3JzKSxcbiAgICAgIHNhdmVCb2FyZDogKGJvYXJkKSA9PiAodGhpcy5ib2FyZCA9IGJvYXJkKSxcbiAgICAgIHNhdmVTY29yZTogKHNjb3JlKSA9PiAodGhpcy5zY29yZSA9IHNjb3JlKSxcbiAgICAgIHNhdmVTdGF0dXM6IChzdGF0dXMpID0+ICh0aGlzLnN0YXR1cyA9IHN0YXR1cyksXG4gICAgfSk7XG5cbiAgICB0aGlzLmNsaWNrQ2VsbCA9IGNyZWF0ZUNsaWNrQ2VsbCh7XG4gICAgICByZWFkQ29uZmlnOiAoKSA9PiB0aGlzLmNvbmZpZyxcbiAgICAgIHJlYWRCb2FyZDogKCkgPT4gdGhpcy5ib2FyZCxcbiAgICAgIHJlYWRTY29yZTogKCkgPT4gdGhpcy5zY29yZSxcbiAgICAgIHJlYWRBdmlhbGFibGVDdWJlc0NvbG9yczogKCkgPT4gdGhpcy5hdmlhbGFibGVDdWJlc0NvbG9ycyxcbiAgICAgIHJlYWRTdGF0dXM6ICgpID0+IHRoaXMuc3RhdHVzLFxuICAgICAgc2F2ZUJvYXJkOiAoYm9hcmQpID0+ICh0aGlzLmJvYXJkID0gYm9hcmQpLFxuICAgICAgc2F2ZVNjb3JlOiAoc2NvcmUpID0+ICh0aGlzLnNjb3JlID0gc2NvcmUpLFxuICAgICAgc2F2ZVN0YXR1czogKHN0YXR1cykgPT4gKHRoaXMuc3RhdHVzID0gc3RhdHVzKSxcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIHRoaXMuZWRpdGFibGUgPSB0cnVlO1xuICAgIHRoaXMuc3RhcnRHYW1lKCk7XG5cbiAgICB0aGlzLnJlbmRlckluaXRpYWxCb2FyZCgpO1xuICAgIHRoaXMucmVuZGVySW5pdGlhbFBhbmVsKCk7XG5cbiAgICB0aGlzLnN0YXJ0VGltZXIoKTtcbiAgfVxuXG4gIGFzeW5jIGluaXQoKSB7XG4gICAgYXdhaXQgdGhpcy5hcHAuaW5pdCh7IGJhY2tncm91bmQ6IFwiI0ExQTFBMVwiLCByZXNpemVUbzogd2luZG93IH0pO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5hcHAuY2FudmFzKTtcblxuICAgIGF3YWl0IHRoaXMubG9hZEFzc2V0cygpO1xuXG4gICAgY29uc3QgY29udGFpbmVyV2lkdGggPSAxMDAwO1xuICAgIGNvbnN0IGNvbnRhaW5lckhlaWdodCA9IDcwMDtcblxuICAgIHRoaXMubWFpbkNvbnRhaW5lci5zZXRTaXplKGNvbnRhaW5lcldpZHRoLCBjb250YWluZXJIZWlnaHQpO1xuICAgIHRoaXMubWFpbkNvbnRhaW5lci5wb3NpdGlvbi5zZXQoXG4gICAgICAodGhpcy5hcHAuc2NyZWVuLndpZHRoIC0gY29udGFpbmVyV2lkdGgpIC8gMixcbiAgICAgICh0aGlzLmFwcC5zY3JlZW4uaGVpZ2h0IC0gY29udGFpbmVySGVpZ2h0KSAvIDIsXG4gICAgKTtcblxuICAgIHRoaXMucGFuZWxTY29yZUNvbnRhaW5lci5wb3NpdGlvbi5zZXQoXG4gICAgICBjb250YWluZXJXaWR0aCAtIDUwIC0gMzAwLFxuICAgICAgY29udGFpbmVySGVpZ2h0IC8gMiAtIDMwMCAvIDIsXG4gICAgKTtcblxuICAgIHRoaXMuZ2FtZUJvYXJkQ29udGFpbmVyLnBvc2l0aW9uLnNldCg1MCwgY29udGFpbmVySGVpZ2h0IC0gNTAgLSA1MDApO1xuXG4gICAgdGhpcy5tYWluQ29udGFpbmVyLmFkZENoaWxkKHRoaXMuZ2FtZUJvYXJkQ29udGFpbmVyKTtcbiAgICB0aGlzLm1haW5Db250YWluZXIuYWRkQ2hpbGQodGhpcy5wYW5lbFNjb3JlQ29udGFpbmVyKTtcbiAgICB0aGlzLmFwcC5zdGFnZS5hZGRDaGlsZCh0aGlzLm1haW5Db250YWluZXIpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBvbkNlbGxDbGljayhjb29yZHM6IEdhbWVDZWxsQ29vcmRzKSB7XG4gICAgaWYgKCF0aGlzLmVkaXRhYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5jbGlja0NlbGwoY29vcmRzKTtcbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZWRpdGFibGUgPSBmYWxzZTtcblxuICAgIHRoaXMucmVuZGVyU2NvcmUoKTtcblxuICAgIGF3YWl0IHRoaXMucmVuZGVyQnVybmVkQm9hcmQocmVzdWx0LmJ1cm5lZEN1YmVzLCByZXN1bHQuYm9hcmRXaXRoQnVybmVkKTtcblxuICAgIGF3YWl0IHRoaXMucmVuZGVyRmFsbGVkQm9hcmQoXG4gICAgICByZXN1bHQuZmFsbGVkQ3ViZXMuY29uY2F0KHJlc3VsdC5mYWxsZWROZXdDdWJlcyksXG4gICAgICByZXN1bHQuYm9hcmRXaXRob3V0TW92ZWQsXG4gICAgKTtcblxuICAgIHRoaXMucmVuZGVySW5pdGlhbEJvYXJkKCk7XG5cbiAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gR0FNRV9TVEFUVVNFUy5XSU4pIHtcbiAgICAgIHRoaXMuc3RvcFRpbWVyKCk7XG4gICAgICB3aW5kb3cuYWxlcnQoXCJXSU5cIik7XG4gICAgfSBlbHNlIGlmIChyZXN1bHQuc3RhdHVzID09PSBHQU1FX1NUQVRVU0VTLk5PX01PVkVTKSB7XG4gICAgICB0aGlzLnN0b3BUaW1lcigpO1xuICAgICAgd2luZG93LmFsZXJ0KFwiTk9fTU9WRVNcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZWRpdGFibGUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3RhcnRUaW1lcigpIHtcbiAgICB0aGlzLmFwcC50aWNrZXIuYWRkKHRoaXMudGltZXJDYWxsYmFjay5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RvcFRpbWVyKCkge1xuICAgIHRoaXMuYXBwLnRpY2tlci5zdG9wKCk7XG4gIH1cblxuICBwcml2YXRlIHRpbWVyQ2FsbGJhY2sodGlja2VyOiBUaWNrZXIpIHtcbiAgICB0aGlzLnJlbmRlclRpbWVyKCk7XG5cbiAgICBpZiAodGhpcy5sZWZ0U2Vjb25kcyA8PSAwKSB7XG4gICAgICB0aGlzLnN0b3BUaW1lcigpO1xuICAgICAgdGhpcy5lZGl0YWJsZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMuY291bnRkb3duU2Vjb25kcyAtPSB0aWNrZXIuZGVsdGFUaW1lIC8gMTAwO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJJbml0aWFsQm9hcmQoKSB7XG4gICAgdGhpcy5nYW1lQm9hcmRDb250YWluZXIucmVuZGVyQ3ViZXMoXG4gICAgICB0aGlzLmJvYXJkLFxuICAgICAgdGhpcy5vbkNlbGxDbGljay5iaW5kKHRoaXMpLFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHJlbmRlckJ1cm5lZEJvYXJkKFxuICAgIGJ1cm5lZDogR2FtZUJ1cm5lZEN1YmVzLFxuICAgIGJvYXJkV2l0aG91dEJ1cm5lZDogR2FtZUJvYXJkLFxuICApIHtcbiAgICB0aGlzLmdhbWVCb2FyZENvbnRhaW5lci5yZW5kZXJDdWJlcyhib2FyZFdpdGhvdXRCdXJuZWQpO1xuICAgIGF3YWl0IHRoaXMuZ2FtZUJvYXJkQ29udGFpbmVyLnJlbmRlckJ1cm5lZChidXJuZWQpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyByZW5kZXJGYWxsZWRCb2FyZChcbiAgICBmYWxsZWQ6IEdhbWVGYWxsZWRDdWJlcyxcbiAgICBib2FyZFdpdGhvdXRNb3ZlZDogR2FtZUJvYXJkLFxuICApIHtcbiAgICB0aGlzLmdhbWVCb2FyZENvbnRhaW5lci5yZW5kZXJDdWJlcyhib2FyZFdpdGhvdXRNb3ZlZCk7XG4gICAgYXdhaXQgdGhpcy5nYW1lQm9hcmRDb250YWluZXIucmVuZGVyRmFsbGVkKGZhbGxlZCk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlckluaXRpYWxQYW5lbCgpIHtcbiAgICB0aGlzLnBhbmVsU2NvcmVDb250YWluZXIucmVuZGVyKHRoaXMuc2NvcmUsIHRoaXMuY29uZmlnLmNvdW50ZG93blNlY29uZHMpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJTY29yZSgpIHtcbiAgICB0aGlzLnBhbmVsU2NvcmVDb250YWluZXIucmVuZGVyU2NvcmUodGhpcy5zY29yZSk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlclRpbWVyKCkge1xuICAgIHRoaXMucGFuZWxTY29yZUNvbnRhaW5lci5yZW5kZXJUaW1lcih0aGlzLmxlZnRTZWNvbmRzKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGxlZnRTZWNvbmRzKCkge1xuICAgIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLnJvdW5kKHRoaXMuY291bnRkb3duU2Vjb25kcykpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBsb2FkQXNzZXRzKCkge1xuICAgIEFzc2V0cy5hZGQoW1xuICAgICAge1xuICAgICAgICBhbGlhczogQVNTRVRTLkJPQVJELkFMSUFTLFxuICAgICAgICBzcmM6IEFTU0VUUy5CT0FSRC5TUkMsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBhbGlhczogQVNTRVRTLkJMVUVfQ1VCRS5BTElBUyxcbiAgICAgICAgc3JjOiBBU1NFVFMuQkxVRV9DVUJFLlNSQyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGFsaWFzOiBBU1NFVFMuUkVEX0NVQkUuQUxJQVMsXG4gICAgICAgIHNyYzogQVNTRVRTLlJFRF9DVUJFLlNSQyxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGFsaWFzOiBBU1NFVFMuR1JFRU5fQ1VCRS5BTElBUyxcbiAgICAgICAgc3JjOiBBU1NFVFMuR1JFRU5fQ1VCRS5TUkMsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBhbGlhczogQVNTRVRTLllFTExPV19DVUJFLkFMSUFTLFxuICAgICAgICBzcmM6IEFTU0VUUy5ZRUxMT1dfQ1VCRS5TUkMsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBhbGlhczogQVNTRVRTLlBVUlBMRV9DVUJFLkFMSUFTLFxuICAgICAgICBzcmM6IEFTU0VUUy5QVVJQTEVfQ1VCRS5TUkMsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBhbGlhczogQVNTRVRTLlBBTkVMX1NDT1JFLkFMSUFTLFxuICAgICAgICBzcmM6IEFTU0VUUy5QQU5FTF9TQ09SRS5TUkMsXG4gICAgICB9LFxuICAgIF0pO1xuXG4gICAgYXdhaXQgQXNzZXRzLmxvYWQoW1xuICAgICAgQVNTRVRTLkJPQVJELkFMSUFTLFxuICAgICAgQVNTRVRTLlBBTkVMX1NDT1JFLkFMSUFTLFxuICAgICAgQVNTRVRTLkJMVUVfQ1VCRS5BTElBUyxcbiAgICAgIEFTU0VUUy5SRURfQ1VCRS5BTElBUyxcbiAgICAgIEFTU0VUUy5HUkVFTl9DVUJFLkFMSUFTLFxuICAgICAgQVNTRVRTLllFTExPV19DVUJFLkFMSUFTLFxuICAgICAgQVNTRVRTLlBVUlBMRV9DVUJFLkFMSUFTLFxuICAgIF0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBBcHBsaWNhdGlvbiwgQXNzZXRzLCBDb250YWluZXIsIFBvaW50LCBTcHJpdGUsIFRpY2tlciB9IGZyb20gXCJwaXhpLmpzXCI7XG5pbXBvcnQgeyBBU1NFVFMgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQge1xuICBHYW1lQm9hcmQsXG4gIEdhbWVCdXJuZWRDdWJlcyxcbiAgR2FtZUNlbGxDb29yZHMsXG4gIEdhbWVDdWJlLFxuICBHYW1lRmFsbGVkQ3ViZXMsXG59IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgY2xhc3MgR2FtZUJvYXJkQ29udGFpbmVyIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhcHA6IEFwcGxpY2F0aW9uLFxuICAgIHByaXZhdGUgb3B0aW9uczoge1xuICAgICAgd2lkdGg6IG51bWJlcjtcbiAgICAgIGhlaWdodDogbnVtYmVyO1xuICAgICAgcm93czogbnVtYmVyO1xuICAgICAgY29sczogbnVtYmVyO1xuICAgIH0sXG4gICkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBnZXQgY3ViZVdpZHRoKCkge1xuICAgIHJldHVybiAodGhpcy5vcHRpb25zLndpZHRoIC0gMzApIC8gdGhpcy5vcHRpb25zLmNvbHM7XG4gIH1cblxuICBnZXQgY3ViZUhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5jdWJlV2lkdGg7XG4gIH1cblxuICBwdWJsaWMgcmVuZGVyQ3ViZXMoXG4gICAgYm9hcmQ6IEdhbWVCb2FyZCxcbiAgICBjYWxsYmFjaz86IChjb29yZHM6IEdhbWVDZWxsQ29vcmRzKSA9PiB2b2lkLFxuICApIHtcbiAgICB0aGlzLnJlbmRlckJvYXJkQmcoKTtcblxuICAgIGJvYXJkLmZvckVhY2goKHJvdywgaSkgPT4ge1xuICAgICAgcm93LmZvckVhY2goKGN1YmUsIGopID0+IHtcbiAgICAgICAgaWYgKCFjdWJlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY3ViZVNwcml0ZSA9IHRoaXMuY3JlYXRlQ3ViZShjdWJlLCBjYWxsYmFjayk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoY3ViZVNwcml0ZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyByZW5kZXJCdXJuZWQoYnVybmVkQ3ViZXM6IEdhbWVCdXJuZWRDdWJlcykge1xuICAgIGNvbnN0IHByb21pc2VzID0gYnVybmVkQ3ViZXMubWFwKChidXJuZWRDdWJlKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgY29uc3QgY3ViZVNwcml0ZSA9IHRoaXMuY3JlYXRlQ3ViZShidXJuZWRDdWJlKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZChjdWJlU3ByaXRlKTtcblxuICAgICAgICBjb25zdCBhbmltYXRpb25Mb2dpYyA9ICh0aWNrZXI6IFRpY2tlcikgPT4ge1xuICAgICAgICAgIGlmIChjdWJlU3ByaXRlLmFscGhhIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGQoY3ViZVNwcml0ZSk7XG4gICAgICAgICAgICB0aGlzLmFwcC50aWNrZXIucmVtb3ZlKGFuaW1hdGlvbkxvZ2ljKTtcbiAgICAgICAgICAgIHJlc29sdmUoXCJcIik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGN1YmVTcHJpdGUud2lkdGggLT0gMC4xO1xuICAgICAgICAgICAgY3ViZVNwcml0ZS5oZWlnaHQgLT0gMC4xO1xuICAgICAgICAgICAgY3ViZVNwcml0ZS5hbHBoYSAtPSAwLjEgKiB0aWNrZXIuZGVsdGFUaW1lO1xuICAgICAgICAgICAgY3ViZVNwcml0ZS5wb3NpdGlvbi5zZXQoY3ViZVNwcml0ZS54ICsgMC4wNSwgY3ViZVNwcml0ZS55ICsgMC4wNSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuYXBwLnRpY2tlci5hZGQoYW5pbWF0aW9uTG9naWMpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4ge30pO1xuICB9XG5cbiAgcHVibGljIHJlbmRlckZhbGxlZChmYWxsZWRDdWJlczogR2FtZUZhbGxlZEN1YmVzKSB7XG4gICAgY29uc3QgcHJvbWlzZXMgPSBmYWxsZWRDdWJlcy5tYXAoKGZhbGxlZEN1YmUpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBjb25zdCBjdWJlU3ByaXRlID0gdGhpcy5jcmVhdGVDdWJlKHtcbiAgICAgICAgICAuLi5mYWxsZWRDdWJlLmN1YmUsXG4gICAgICAgICAgY29vcmRzOiBmYWxsZWRDdWJlLmZyb20sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQoY3ViZVNwcml0ZSk7XG5cbiAgICAgICAgY29uc3QgYW5pbWF0aW9uTG9naWMgPSAodGlja2VyOiBUaWNrZXIpID0+IHtcbiAgICAgICAgICBjb25zdCBzdGFydFBvc2l0aW9uID0gY3ViZVNwcml0ZS5wb3NpdGlvbjtcbiAgICAgICAgICBjb25zdCBlbmRQb3N0aW9uID0gdGhpcy5nZXRDdWJlUG9zaXRpb25CeUNvb3JkcyhmYWxsZWRDdWJlLnRvKTtcblxuICAgICAgICAgIGNvbnN0IGRpZmYgPSBuZXcgUG9pbnQoXG4gICAgICAgICAgICBzdGFydFBvc2l0aW9uLngsXG4gICAgICAgICAgICBlbmRQb3N0aW9uLnkgLSBzdGFydFBvc2l0aW9uLnksXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGlmIChkaWZmLnkgPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuYXBwLnRpY2tlci5yZW1vdmUoYW5pbWF0aW9uTG9naWMpO1xuICAgICAgICAgICAgcmVzb2x2ZShcIlwiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbmV4dFkgPSBNYXRoLm1pbihcbiAgICAgICAgICAgICAgc3RhcnRQb3NpdGlvbi55ICsgNSAqIHRpY2tlci5kZWx0YVRpbWUsXG4gICAgICAgICAgICAgIGVuZFBvc3Rpb24ueSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBjdWJlU3ByaXRlLnBvc2l0aW9uLnNldChzdGFydFBvc2l0aW9uLngsIG5leHRZKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5hcHAudGlja2VyLmFkZChhbmltYXRpb25Mb2dpYyk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigoKSA9PiB7fSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUN1YmUoXG4gICAgY3ViZTogR2FtZUN1YmUsXG4gICAgY2FsbGJhY2s/OiAoY29vcmRzOiBHYW1lQ2VsbENvb3JkcykgPT4gdm9pZCxcbiAgKSB7XG4gICAgY29uc3QgdGV4dHVyZSA9IEFzc2V0cy5nZXQoY3ViZS5jb2xvcik7XG4gICAgY29uc3QgY3ViZVNwcml0ZSA9IG5ldyBTcHJpdGUodGV4dHVyZSk7XG4gICAgY3ViZVNwcml0ZS53aWR0aCA9IHRoaXMuY3ViZVdpZHRoO1xuICAgIGN1YmVTcHJpdGUuaGVpZ2h0ID0gdGhpcy5jdWJlSGVpZ2h0O1xuICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5nZXRDdWJlUG9zaXRpb25CeUNvb3JkcyhjdWJlLmNvb3Jkcyk7XG4gICAgY3ViZVNwcml0ZS5wb3NpdGlvbi5zZXQocG9zaXRpb24ueCwgcG9zaXRpb24ueSk7XG5cbiAgICBjdWJlU3ByaXRlLmV2ZW50TW9kZSA9IFwic3RhdGljXCI7XG4gICAgY3ViZVNwcml0ZS5jdXJzb3IgPSBcInBvaW50ZXJcIjtcblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY3ViZVNwcml0ZS5vbihcInBvaW50ZXJkb3duXCIsICgpID0+IGNhbGxiYWNrKGN1YmUuY29vcmRzKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGN1YmVTcHJpdGU7XG4gIH1cblxuICBwcml2YXRlIGdldEN1YmVQb3NpdGlvbkJ5Q29vcmRzKGNvb3JkczogR2FtZUNlbGxDb29yZHMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogY29vcmRzLnggKiB0aGlzLmN1YmVXaWR0aCArIDE1LFxuICAgICAgeTogY29vcmRzLnkgKiB0aGlzLmN1YmVIZWlnaHQgKyAxNSxcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJCb2FyZEJnKCkge1xuICAgIGNvbnN0IGJvYXJkU3ByaXRlID0gbmV3IFNwcml0ZShBc3NldHMuZ2V0KEFTU0VUUy5CT0FSRC5BTElBUykpO1xuICAgIGJvYXJkU3ByaXRlLnNldFNpemUodGhpcy5vcHRpb25zLndpZHRoLCB0aGlzLm9wdGlvbnMuaGVpZ2h0KTtcbiAgICB0aGlzLmFkZENoaWxkKGJvYXJkU3ByaXRlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQXNzZXRzLCBUZXh0LCBDb250YWluZXIsIFNwcml0ZSwgR3JhcGhpY3MgfSBmcm9tIFwicGl4aS5qc1wiO1xuaW1wb3J0IHsgQVNTRVRTIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5leHBvcnQgY2xhc3MgR2FtZVBhbmVsQ29udGFpbmVyIGV4dGVuZHMgQ29udGFpbmVyIHtcbiAgcGFuZWxTY29yZUNvbnRhaW5lcjogQ29udGFpbmVyO1xuICBwYW5lbFRpbWVyQ29udGFpbmVyOiBDb250YWluZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBvcHRpb25zOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0pIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucGFuZWxTY29yZUNvbnRhaW5lciA9IG5ldyBDb250YWluZXIoKTtcbiAgICB0aGlzLnBhbmVsVGltZXJDb250YWluZXIgPSBuZXcgQ29udGFpbmVyKCk7XG4gIH1cblxuICByZW5kZXIoc2NvcmU6IG51bWJlciwgdGltZTogbnVtYmVyKSB7XG4gICAgY29uc3QgcGFuZWxTY29yZVNpemUgPSB0aGlzLm9wdGlvbnMud2lkdGg7XG4gICAgdGhpcy5zZXRTaXplKHBhbmVsU2NvcmVTaXplLCBwYW5lbFNjb3JlU2l6ZSk7XG5cbiAgICBjb25zdCBwYW5lbFNjb3JlU3ByaXRlID0gbmV3IFNwcml0ZShBc3NldHMuZ2V0KEFTU0VUUy5QQU5FTF9TQ09SRS5BTElBUykpO1xuICAgIHBhbmVsU2NvcmVTcHJpdGUud2lkdGggPSBwYW5lbFNjb3JlU2l6ZTtcbiAgICBwYW5lbFNjb3JlU3ByaXRlLmhlaWdodCA9IHBhbmVsU2NvcmVTaXplO1xuXG4gICAgY29uc3QgcGFuZWxTY29yZVNjb3JlV3JhcHBlciA9IG5ldyBHcmFwaGljcygpXG4gICAgICAucm91bmRSZWN0KDAsIDAsIDIwMCwgODAsIDIwKVxuICAgICAgLmZpbGwoXCIjMEUzMzY2XCIpO1xuICAgIHBhbmVsU2NvcmVTY29yZVdyYXBwZXIucG9zaXRpb24uc2V0KFxuICAgICAgKHBhbmVsU2NvcmVTaXplIC0gMjAwKSAvIDIsXG4gICAgICBwYW5lbFNjb3JlU2l6ZSAtIDgwIC0gMzAsXG4gICAgKTtcbiAgICBjb25zdCBwYW5lbFNjb3JlU2NvcmVUaXRsZSA9IG5ldyBUZXh0KHtcbiAgICAgIHRleHQ6IFwi0YHRh9C10YI6XCIsXG4gICAgICBzdHlsZToge1xuICAgICAgICBmb250RmFtaWx5OiBcIkFyaWFsXCIsXG4gICAgICAgIGZvbnRTaXplOiAzMCxcbiAgICAgICAgZmlsbDogXCJ3aGl0ZVwiLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBwYW5lbFNjb3JlU2NvcmVUaXRsZS5wb3NpdGlvbi5zZXQoXG4gICAgICAocGFuZWxTY29yZVNpemUgLSBwYW5lbFNjb3JlU2NvcmVUaXRsZS53aWR0aCkgLyAyLFxuICAgICAgcGFuZWxTY29yZVNpemUgLSA4MCAtIDMwLFxuICAgICk7XG5cbiAgICBjb25zdCBwYW5lbFRpbWVyU2NvcmVXcmFwcGVyID0gbmV3IEdyYXBoaWNzKClcbiAgICAgIC5yb3VuZFJlY3QoMCwgMCwgMTIwLCAxMjAsIDEyMClcbiAgICAgIC5maWxsKFwiI0M0Mzk4RlwiKTtcbiAgICBwYW5lbFRpbWVyU2NvcmVXcmFwcGVyLnBvc2l0aW9uLnNldChwYW5lbFNjb3JlU2l6ZSAvIDIgLSA2MCwgNDApO1xuXG4gICAgdGhpcy5hZGRDaGlsZChwYW5lbFNjb3JlU3ByaXRlKTtcbiAgICB0aGlzLmFkZENoaWxkKHBhbmVsU2NvcmVTY29yZVdyYXBwZXIpO1xuICAgIHRoaXMuYWRkQ2hpbGQocGFuZWxTY29yZVNjb3JlVGl0bGUpO1xuICAgIHRoaXMuYWRkQ2hpbGQocGFuZWxUaW1lclNjb3JlV3JhcHBlcik7XG5cbiAgICB0aGlzLmFkZENoaWxkKHRoaXMucGFuZWxUaW1lckNvbnRhaW5lcik7XG4gICAgdGhpcy5hZGRDaGlsZCh0aGlzLnBhbmVsU2NvcmVDb250YWluZXIpO1xuXG4gICAgdGhpcy5yZW5kZXJTY29yZShzY29yZSk7XG4gICAgdGhpcy5yZW5kZXJUaW1lcih0aW1lKTtcbiAgfVxuXG4gIHJlbmRlclNjb3JlKHNjb3JlOiBudW1iZXIpIHtcbiAgICB0aGlzLnBhbmVsU2NvcmVDb250YWluZXIucmVtb3ZlQ2hpbGRyZW4oKTtcblxuICAgIGNvbnN0IHBhbmVsU2NvcmVTY29yZVZhbHVlID0gbmV3IFRleHQoe1xuICAgICAgdGV4dDogc2NvcmUsXG4gICAgICBzdHlsZToge1xuICAgICAgICBmb250RmFtaWx5OiBcIkFyaWFsXCIsXG4gICAgICAgIGZvbnRTaXplOiA1MCxcbiAgICAgICAgZmlsbDogXCJ3aGl0ZVwiLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBwYW5lbFNjb3JlU2NvcmVWYWx1ZS5wb3NpdGlvbi5zZXQoXG4gICAgICAodGhpcy5vcHRpb25zLndpZHRoIC0gcGFuZWxTY29yZVNjb3JlVmFsdWUud2lkdGgpIC8gMixcbiAgICAgIHRoaXMub3B0aW9ucy53aWR0aCAtIDgwLFxuICAgICk7XG5cbiAgICB0aGlzLnBhbmVsU2NvcmVDb250YWluZXIuYWRkQ2hpbGQocGFuZWxTY29yZVNjb3JlVmFsdWUpO1xuICB9XG5cbiAgcmVuZGVyVGltZXIodGltZTogbnVtYmVyKSB7XG4gICAgdGhpcy5wYW5lbFRpbWVyQ29udGFpbmVyLnJlbW92ZUNoaWxkcmVuKCk7XG5cbiAgICBjb25zdCBwYW5lbFRpbWVyVmFsdWUgPSBuZXcgVGV4dCh7XG4gICAgICB0ZXh0OiB0aW1lLFxuICAgICAgc3R5bGU6IHtcbiAgICAgICAgZm9udEZhbWlseTogXCJBcmlhbFwiLFxuICAgICAgICBmb250U2l6ZTogNzAsXG4gICAgICAgIGZpbGw6IFwid2hpdGVcIixcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgcGFuZWxUaW1lclZhbHVlLnBvc2l0aW9uLnNldChcbiAgICAgICh0aGlzLm9wdGlvbnMud2lkdGggLSBwYW5lbFRpbWVyVmFsdWUud2lkdGgpIC8gMixcbiAgICAgIDYwLFxuICAgICk7XG5cbiAgICB0aGlzLnBhbmVsVGltZXJDb250YWluZXIuYWRkQ2hpbGQocGFuZWxUaW1lclZhbHVlKTtcbiAgfVxufVxuIiwiZXhwb3J0IHsgR2FtZSB9IGZyb20gXCIuL2dhbWVcIjtcbiIsImltcG9ydCB7IEdhbWVCb2FyZEZpbGxlZCwgR2FtZUNlbGxDb29yZHMsIEdhbWVDdWJlIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IGdldENlbGxCeUNvb3JkcyA9IChcbiAgYm9hcmQ6IEdhbWVCb2FyZEZpbGxlZCxcbiAgY29vcmRzOiBHYW1lQ2VsbENvb3JkcyxcbikgPT4ge1xuICByZXR1cm4gYm9hcmRbY29vcmRzLnldPy5bY29vcmRzLnhdIHx8IG51bGw7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0Q2VsbEJ5Q29vcmRzID0gKFxuICBib2FyZDogR2FtZUJvYXJkRmlsbGVkLFxuICBjb29yZHM6IEdhbWVDZWxsQ29vcmRzLFxuICBtYXliZUN1YmU6IEdhbWVDdWJlIHwgbnVsbCxcbikgPT4ge1xuICBib2FyZFtjb29yZHMueV1bY29vcmRzLnhdID0gbWF5YmVDdWJlO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvcHlCb2FyZCA9IChib2FyZDogR2FtZUJvYXJkRmlsbGVkKSA9PiB7XG4gIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGJvYXJkKSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcikge1xuICBjb25zdCBtaW5DZWlsZWQgPSBNYXRoLmNlaWwobWluKTtcbiAgY29uc3QgbWF4Rmxvb3JlZCA9IE1hdGguZmxvb3IobWF4KTtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXhGbG9vcmVkIC0gbWluQ2VpbGVkKSArIG1pbkNlaWxlZCk7XG59XG4iLCJpbXBvcnQgaW5pdCBmcm9tIFwiLi9pbml0XCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5pZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJsb2FkaW5nXCIpIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgaW5pdCk7XG59IGVsc2Uge1xuICBpbml0KCk7XG59XG4iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSBcIi4vZ2FtZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBpbml0KCkge1xuICBjb25zdCBnYW1lID0gbmV3IEdhbWUoKTtcblxuICBhd2FpdCBnYW1lLmluaXQoKTtcblxuICBnYW1lLnN0YXJ0KCk7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuLy8gU2luY2UgYWxsIHJlZmVyZW5jZWQgY2h1bmtzIGFyZSBhbHJlYWR5IGluY2x1ZGVkXG4vLyBpbiB0aGlzIGZpbGUsIHRoaXMgZnVuY3Rpb24gaXMgZW1wdHkgaGVyZS5cbl9fd2VicGFja19yZXF1aXJlX18uZSA9ICgpID0+IChQcm9taXNlLnJlc29sdmUoKSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2JsYXN0X2dhbWVcIl0gPSBzZWxmW1wid2VicGFja0NodW5rYmxhc3RfZ2FtZVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9yXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=