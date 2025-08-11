const fs = require("fs");
const input = fs
  .readFileSync(`/dev/stdin`)
  .toString()
  .trim()
  .split("\n");
const N = parseInt(input[0]);
const arr = [];
for (let i = 1; i < input.length; i++) {
  const _arr = input[i].split(" ").map((x) => parseInt(x));
  arr.push(_arr);
}
let blueCnt = 0;
let whiteCnt = 0;
const fn = (x, y, size) => {
  const type = arr[x][y];
  for (let i = x; i < x + size; i++) {
    for (let j = y; j < y + size; j++) {
      if (arr[i][j] !== type) {
        fn(x, y, size / 2);
        fn(x + size / 2, y, size / 2);
        fn(x, y + size / 2, size / 2);
        fn(x + size / 2, y + size / 2, size / 2);
        return;
      }
    }
  }
  if (type === 1) blueCnt++;
  else whiteCnt++;
};

fn(0, 0, N);
console.log(`${whiteCnt}\n${blueCnt}`);
