const fs = require("fs");
const input = fs
  .readFileSync(`/dev/stdin`)
  .toString()
  .trim()
  .split("\n");
const N = parseInt(input[0]);
const arr = [];
for (let i = 1; i < input.length; i++) {
  const _arr = input[i].split("").map((x) => parseInt(x));
  arr.push(_arr);
}
let result = "";
const fn = (x, y, size) => {
  const type = arr[x][y];
  for (let i = x; i < x + size; i++) {
    for (let j = y; j < y + size; j++) {
      if (type !== arr[i][j]) {
        result += "(";
        fn(x, y, size / 2);
        fn(x, y + size / 2, size / 2);
        fn(x + size / 2, y, size / 2);
        fn(x + size / 2, y + size / 2, size / 2);
        result += ")";
        return;
      }
    }
  }
  result += type;
};
fn(0, 0, N);
console.log(result);
