import { fallCubes } from "./fallCubes";
import { config, board } from "../../testsData";
import { copyBoard } from "../../utils";

describe("when have space to fall", () => {
  it("should fall cube from top", () => {
    const boardToFall = copyBoard(board);
    boardToFall[1][0] = null;
    boardToFall[2][0] = null;
    boardToFall[3][0] = null;

    const result = fallCubes(config, boardToFall);

    expect(result.falledCubes.length).toBe(1);
    expect(result.board[0][0]).toBe(null);
    expect(result.board[1][0]).toBe(null);
    expect(result.board[2][0]).toBe(null);
    expect(result.board[3][0].id).toBe(boardToFall[0][0].id);
  });

  it("should fall several cubes", () => {
    const boardToFall = copyBoard(board);
    boardToFall[2][0] = null;
    boardToFall[3][0] = null;

    const result = fallCubes(config, boardToFall);

    expect(result.falledCubes.length).toBe(2);
    expect(result.board[0][0]).toBe(null);
    expect(result.board[1][0]).toBe(null);
    expect(result.board[2][0].id).toBe(boardToFall[0][0].id);
    expect(result.board[3][0].id).toBe(boardToFall[1][0].id);
  });

  it("should fall several cubes with space between", () => {
    const boardToFall = copyBoard(board);
    boardToFall[2][0] = null;
    boardToFall[4][0] = null;

    const result = fallCubes(config, boardToFall);

    expect(result.falledCubes.length).toBe(3);
    expect(result.board[0][0]).toBe(null);
    expect(result.board[1][0]).toBe(null);
    expect(result.board[2][0].id).toBe(boardToFall[0][0].id);
    expect(result.board[3][0].id).toBe(boardToFall[1][0].id);
    expect(result.board[4][0].id).toBe(boardToFall[3][0].id);
  });

  it("should give valid boardWithoutMoved", () => {
    const boardToFall = copyBoard(board);
    boardToFall[boardToFall.length - 1][0] = null;

    const result = fallCubes(config, boardToFall);

    for (let y = 0; y < result.boardWithoutMoved.length; y++) {
      expect(result.boardWithoutMoved[y][0]).toBe(null);
    }
  });
});
