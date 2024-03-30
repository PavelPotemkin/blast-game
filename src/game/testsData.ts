import { GameConfig, GameBoardFilled } from "./types";

export const config: GameConfig = {
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

export const board = [
  [
    {
      id: "0",
      color: "blueCube",
      coords: {
        x: 0,
        y: 0,
      },
      type: "base",
    },
    {
      id: "1",
      color: "blueCube",
      coords: {
        x: 1,
        y: 0,
      },
      type: "base",
    },
    {
      id: "2",
      color: "redCube",
      coords: {
        x: 2,
        y: 0,
      },
      type: "base",
    },
    {
      id: "3",
      color: "greenCube",
      coords: {
        x: 3,
        y: 0,
      },
      type: "base",
    },
    {
      id: "4",
      color: "yellowCube",
      coords: {
        x: 4,
        y: 0,
      },
      type: "base",
    },
    {
      id: "5",
      color: "redCube",
      coords: {
        x: 5,
        y: 0,
      },
      type: "base",
    },
    {
      id: "6",
      color: "yellowCube",
      coords: {
        x: 6,
        y: 0,
      },
      type: "base",
    },
    {
      id: "7",
      color: "greenCube",
      coords: {
        x: 7,
        y: 0,
      },
      type: "base",
    },
    {
      id: "8",
      color: "greenCube",
      coords: {
        x: 8,
        y: 0,
      },
      type: "base",
    },
  ],
  [
    {
      id: "9",
      color: "yellowCube",
      coords: {
        x: 0,
        y: 1,
      },
      type: "base",
    },
    {
      id: "10",
      color: "purpleCube",
      coords: {
        x: 1,
        y: 1,
      },
      type: "base",
    },
    {
      id: "11",
      color: "purpleCube",
      coords: {
        x: 2,
        y: 1,
      },
      type: "base",
    },
    {
      id: "12",
      color: "redCube",
      coords: {
        x: 3,
        y: 1,
      },
      type: "base",
    },
    {
      id: "13",
      color: "blueCube",
      coords: {
        x: 4,
        y: 1,
      },
      type: "base",
    },
    {
      id: "14",
      color: "yellowCube",
      coords: {
        x: 5,
        y: 1,
      },
      type: "base",
    },
    {
      id: "15",
      color: "redCube",
      coords: {
        x: 6,
        y: 1,
      },
      type: "base",
    },
    {
      id: "16",
      color: "yellowCube",
      coords: {
        x: 7,
        y: 1,
      },
      type: "base",
    },
    {
      id: "17",
      color: "blueCube",
      coords: {
        x: 8,
        y: 1,
      },
      type: "base",
    },
  ],
  [
    {
      id: "18",
      color: "yellowCube",
      coords: {
        x: 0,
        y: 2,
      },
      type: "base",
    },
    {
      id: "19",
      color: "purpleCube",
      coords: {
        x: 1,
        y: 2,
      },
      type: "base",
    },
    {
      id: "20",
      color: "redCube",
      coords: {
        x: 2,
        y: 2,
      },
      type: "base",
    },
    {
      id: "21",
      color: "blueCube",
      coords: {
        x: 3,
        y: 2,
      },
      type: "base",
    },
    {
      id: "22",
      color: "greenCube",
      coords: {
        x: 4,
        y: 2,
      },
      type: "base",
    },
    {
      id: "23",
      color: "redCube",
      coords: {
        x: 5,
        y: 2,
      },
      type: "base",
    },
    {
      id: "24",
      color: "greenCube",
      coords: {
        x: 6,
        y: 2,
      },
      type: "base",
    },
    {
      id: "25",
      color: "yellowCube",
      coords: {
        x: 7,
        y: 2,
      },
      type: "base",
    },
    {
      id: "26",
      color: "greenCube",
      coords: {
        x: 8,
        y: 2,
      },
      type: "base",
    },
  ],
  [
    {
      id: "27",
      color: "redCube",
      coords: {
        x: 0,
        y: 3,
      },
      type: "base",
    },
    {
      id: "28",
      color: "redCube",
      coords: {
        x: 1,
        y: 3,
      },
      type: "base",
    },
    {
      id: "29",
      color: "redCube",
      coords: {
        x: 2,
        y: 3,
      },
      type: "base",
    },
    {
      id: "30",
      color: "blueCube",
      coords: {
        x: 3,
        y: 3,
      },
      type: "base",
    },
    {
      id: "31",
      color: "blueCube",
      coords: {
        x: 4,
        y: 3,
      },
      type: "base",
    },
    {
      id: "32",
      color: "yellowCube",
      coords: {
        x: 5,
        y: 3,
      },
      type: "base",
    },
    {
      id: "33",
      color: "blueCube",
      coords: {
        x: 6,
        y: 3,
      },
      type: "base",
    },
    {
      id: "34",
      color: "greenCube",
      coords: {
        x: 7,
        y: 3,
      },
      type: "base",
    },
    {
      id: "35",
      color: "greenCube",
      coords: {
        x: 8,
        y: 3,
      },
      type: "base",
    },
  ],
  [
    {
      id: "36",
      color: "blueCube",
      coords: {
        x: 0,
        y: 4,
      },
      type: "base",
    },
    {
      id: "37",
      color: "greenCube",
      coords: {
        x: 1,
        y: 4,
      },
      type: "base",
    },
    {
      id: "38",
      color: "yellowCube",
      coords: {
        x: 2,
        y: 4,
      },
      type: "base",
    },
    {
      id: "39",
      color: "purpleCube",
      coords: {
        x: 3,
        y: 4,
      },
      type: "base",
    },
    {
      id: "40",
      color: "redCube",
      coords: {
        x: 4,
        y: 4,
      },
      type: "base",
    },
    {
      id: "41",
      color: "purpleCube",
      coords: {
        x: 5,
        y: 4,
      },
      type: "base",
    },
    {
      id: "42",
      color: "purpleCube",
      coords: {
        x: 6,
        y: 4,
      },
      type: "base",
    },
    {
      id: "43",
      color: "yellowCube",
      coords: {
        x: 7,
        y: 4,
      },
      type: "base",
    },
    {
      id: "44",
      color: "greenCube",
      coords: {
        x: 8,
        y: 4,
      },
      type: "base",
    },
  ],
  [
    {
      id: "45",
      color: "redCube",
      coords: {
        x: 0,
        y: 5,
      },
      type: "base",
    },
    {
      id: "46",
      color: "greenCube",
      coords: {
        x: 1,
        y: 5,
      },
      type: "base",
    },
    {
      id: "47",
      color: "redCube",
      coords: {
        x: 2,
        y: 5,
      },
      type: "base",
    },
    {
      id: "48",
      color: "yellowCube",
      coords: {
        x: 3,
        y: 5,
      },
      type: "base",
    },
    {
      id: "49",
      color: "yellowCube",
      coords: {
        x: 4,
        y: 5,
      },
      type: "base",
    },
    {
      id: "50",
      color: "blueCube",
      coords: {
        x: 5,
        y: 5,
      },
      type: "base",
    },
    {
      id: "51",
      color: "purpleCube",
      coords: {
        x: 6,
        y: 5,
      },
      type: "base",
    },
    {
      id: "52",
      color: "blueCube",
      coords: {
        x: 7,
        y: 5,
      },
      type: "base",
    },
    {
      id: "53",
      color: "blueCube",
      coords: {
        x: 8,
        y: 5,
      },
      type: "base",
    },
  ],
  [
    {
      id: "54",
      color: "yellowCube",
      coords: {
        x: 0,
        y: 6,
      },
      type: "base",
    },
    {
      id: "55",
      color: "blueCube",
      coords: {
        x: 1,
        y: 6,
      },
      type: "base",
    },
    {
      id: "56",
      color: "redCube",
      coords: {
        x: 2,
        y: 6,
      },
      type: "base",
    },
    {
      id: "57",
      color: "greenCube",
      coords: {
        x: 3,
        y: 6,
      },
      type: "base",
    },
    {
      id: "58",
      color: "yellowCube",
      coords: {
        x: 4,
        y: 6,
      },
      type: "base",
    },
    {
      id: "59",
      color: "blueCube",
      coords: {
        x: 5,
        y: 6,
      },
      type: "base",
    },
    {
      id: "60",
      color: "blueCube",
      coords: {
        x: 6,
        y: 6,
      },
      type: "base",
    },
    {
      id: "61",
      color: "yellowCube",
      coords: {
        x: 7,
        y: 6,
      },
      type: "base",
    },
    {
      id: "62",
      color: "greenCube",
      coords: {
        x: 8,
        y: 6,
      },
      type: "base",
    },
  ],
  [
    {
      id: "63",
      color: "purpleCube",
      coords: {
        x: 0,
        y: 7,
      },
      type: "base",
    },
    {
      id: "64",
      color: "purpleCube",
      coords: {
        x: 1,
        y: 7,
      },
      type: "base",
    },
    {
      id: "65",
      color: "yellowCube",
      coords: {
        x: 2,
        y: 7,
      },
      type: "base",
    },
    {
      id: "66",
      color: "blueCube",
      coords: {
        x: 3,
        y: 7,
      },
      type: "base",
    },
    {
      id: "67",
      color: "blueCube",
      coords: {
        x: 4,
        y: 7,
      },
      type: "base",
    },
    {
      id: "68",
      color: "blueCube",
      coords: {
        x: 5,
        y: 7,
      },
      type: "base",
    },
    {
      id: "69",
      color: "redCube",
      coords: {
        x: 6,
        y: 7,
      },
      type: "base",
    },
    {
      id: "70",
      color: "yellowCube",
      coords: {
        x: 7,
        y: 7,
      },
      type: "base",
    },
    {
      id: "71",
      color: "blueCube",
      coords: {
        x: 8,
        y: 7,
      },
      type: "base",
    },
  ],
  [
    {
      id: "72",
      color: "greenCube",
      coords: {
        x: 0,
        y: 8,
      },
      type: "base",
    },
    {
      id: "73",
      color: "purpleCube",
      coords: {
        x: 1,
        y: 8,
      },
      type: "base",
    },
    {
      id: "74",
      color: "redCube",
      coords: {
        x: 2,
        y: 8,
      },
      type: "base",
    },
    {
      id: "75",
      color: "yellowCube",
      coords: {
        x: 3,
        y: 8,
      },
      type: "base",
    },
    {
      id: "76",
      color: "purpleCube",
      coords: {
        x: 4,
        y: 8,
      },
      type: "base",
    },
    {
      id: "77",
      color: "redCube",
      coords: {
        x: 5,
        y: 8,
      },
      type: "base",
    },
    {
      id: "78",
      color: "yellowCube",
      coords: {
        x: 6,
        y: 8,
      },
      type: "base",
    },
    {
      id: "79",
      color: "yellowCube",
      coords: {
        x: 7,
        y: 8,
      },
      type: "base",
    },
    {
      id: "80",
      color: "blueCube",
      coords: {
        x: 8,
        y: 8,
      },
      type: "base",
    },
  ],
] as GameBoardFilled;
