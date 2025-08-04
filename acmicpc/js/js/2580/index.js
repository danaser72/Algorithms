/**
 * [풀이]
 * - 전체를 탐색하지 말고, 문제가 있는 부분만 탐색하자
 */
const fs = require("fs");
const input = fs
  .readFileSync(`${__dirname}/dev/stdin`)
  .toString()
  .trim()
  .split("\n");
const board = Array.from({ length: 9 }, () => new Array(9).fill(0));
let isSolved = false;
for (let i = 0; i < 9; i++) {
  board[i] = input[i]
    .trim()
    .split(" ")
    .map((x) => parseInt(x));
}

const print = (board) => {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i].join(" "));
  }
};

const solve = (board, cnt) => {
  if (cnt === zeros.length) {
    print(board);
    isSolved = true;
    return;
  }

  let [row, col] = zeros[cnt];

  for (let n = 1; n <= 9 && !isSolved; n++) {
    if (board[row].indexOf(n) >= 0) continue;
    if (!verticalCheck(board, col, n)) continue;
    if (!boxCheck(board, row, col, n)) continue;
    board[row][col] = n;
    solve(board, cnt + 1);
    board[row][col] = 0;
  }
};

const verticalCheck = (board, _j, num) => {
  for (let i = 0; i < board.length; i++) {
    if (board[i][_j] === num) return false;
  }
  return true;
};

const boxCheck = (board, _i, _j, num) => {
  const arr = [];
  for (let i = parseInt(_i / 3) * 3; i < (parseInt(_i / 3) + 1) * 3; i++) {
    for (let j = parseInt(_j / 3) * 3; j < (parseInt(_j / 3) + 1) * 3; j++) {
      arr.push(board[i][j]);
    }
  }
  return arr.indexOf(num) < 0;
};

const getZeros = (board) => {
  const arr = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[i][j] === 0) arr.push([i, j]);
    }
  }
  return arr;
};

const zeros = getZeros(board);
solve(board, 0);
