const fs = require("fs");
const input = fs
  .readFileSync(`/dev/stdin`)
  .toString()
  .trim()
  .split("\n");
const N = parseInt(input[0]);
const arr = [];
const result = [0, 0, 0];

for (let i = 1; i < input.length; i++) {
  const _arr = input[i].split(" ").map((x) => parseInt(x));
  arr.push(_arr);
}

const fn = (x, y, size) => {
  const type = arr[x][y];
  for (let i = x; i < x + size; i++) {
    for (let j = y; j < y + size; j++) {
      if (arr[i][j] !== type) {
        const _size = size / 3;
        fn(x, y, _size);
        fn(x + _size, y, _size);
        fn(x + _size * 2, y, _size);
        fn(x, y + _size, _size);
        fn(x + _size, y + _size, _size);
        fn(x + _size * 2, y + _size, _size);
        fn(x, y + _size * 2, _size);
        fn(x + _size, y + _size * 2, _size);
        fn(x + _size * 2, y + _size * 2, _size);
        return;
      }
    }
  }
  result[type + 1]++;
};
fn(0, 0, N);
console.log(result.join("\n"));
