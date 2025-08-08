const fs = require("fs");
const input = fs
  .readFileSync(`${__dirname}/dev/stdin`)
  .toString()
  .trim()
  .split("\n");
const arr = input[1].split(" ").map((x) => parseInt(x)).sort((a, b) => a - b);
const sum = [0];
for (let i = 1; i <= arr.length; i++) {
    sum[i] = sum[i - 1] + arr[i - 1];
}
console.log(sum.reduce((acc, cur) => acc + cur, 0))