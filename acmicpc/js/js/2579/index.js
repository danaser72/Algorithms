const fs = require("fs");
const input = fs
  .readFileSync(`${__dirname}/dev/stdin`)
  .toString()
  .trim()
  .split("\n");
const arr = input.slice(1);
const DP = [];
for (let i = 0; i < arr.length; i++) {
  const score = parseInt(arr[i]);
  const _arr = [];
  if (i === 0) {
    _arr.push(score);
    _arr.push(0);
  } else if (i === 1) {
    _arr.push(DP[i - 1][0] + score);
    _arr.push(score);
  } else {
    _arr.push(DP[i - 1][1] + score);
    _arr.push(Math.max(DP[i - 2][0], DP[i - 2][1]) + score);
  }
  DP.push(_arr);
}
console.log(Math.max.apply(null, DP[DP.length - 1]));
