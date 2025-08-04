const fs = require("fs");
const N = parseInt(fs.readFileSync(`${__dirname}/dev/stdin`).toString());
let board = Array.from({ length: N }, () => new Array(N).fill(0));
let cnt = 0;
const chess = (board, cur) => {
  if (cur === N) {
    cnt++;
    return;
  }
  for (let i = 0; i < N; i++) {
    if (board[cur][i] === 1) continue;
    const tmp = board.map((x) => x.slice());
    draw(cur, i, board);
    chess(board, cur + 1);
    board = tmp;
  }
};

const draw = (m, n, board) => {
  board[m][n] = 1;
  for (let i = 0; i < N; i++) {
    board[m][i] = 1;
    board[i][n] = 1;
  }
  for (let i = 1; m - i >= 0 && n - i >= 0; i++) {
    board[m - i][n - i] = 1;
  }
  for (let i = 1; m - i >= 0 && n + i < N; i++) {
    board[m - i][n + i] = 1;
  }
  for (let i = 1; m + i < N && n - i >= 0; i++) {
    board[m + i][n - i] = 1;
  }
  for (let i = 1; m + i < N && n + i < N; i++) {
    board[m + i][n + i] = 1;
  }
};

chess(board, 0);
console.log(cnt);
