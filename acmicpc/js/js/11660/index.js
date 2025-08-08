const fs = require("fs");
const input = fs
  .readFileSync(`${__dirname}/dev/stdin`)
  .toString()
  .trim()
  .split("\n");
const [N, M] = input[0].split(" ").map((x) => parseInt(x));
const sum = [new Array(N + 1).fill(0)];
for (let i = 1; i < N + 1; i++) {
  const arr = [0].concat(input[i].split(" ").map((x) => parseInt(x)));
  for (let j = 1; j < arr.length; j++) {
    arr[j] = arr[j - 1] + arr[j] + sum[i - 1][j] - sum[i - 1][j - 1];
  }
  sum.push(arr);
}
let result = "";
for (let i = N + 1; i < N + M + 1; i++) {
  const [x1, y1, x2, y2] = input[i].split(" ").map((x) => parseInt(x));
  result += `${
    sum[x2][y2] - sum[x1 - 1][y2] - sum[x2][y1 - 1] + sum[x1 - 1][y1 - 1]
  }\n`;
}
console.log(result.trim());
