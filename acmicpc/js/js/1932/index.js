const fs = require("fs");
const input = fs
  .readFileSync(`${__dirname}/dev/stdin`)
  .toString()
  .trim()
  .split("\n");
const DP = [];
for (let i = 1; i < input.length; i++) {
  const arr = input[i]
    .trim()
    .split(" ")
    .map((x) => parseInt(x));
  if (i === 1) {
    DP.push(arr.slice());
  } else {
    const _arr = [];
    for (let j = 0; j < arr.length; j++) {
      if (j === 0) {
        _arr.push(DP[DP.length - 1][j] + arr[j]);
      } else if (j === arr.length - 1) {
        _arr.push(DP[DP.length - 1][j - 1] + arr[j]);
      } else {
        _arr.push(
          Math.max(DP[DP.length - 1][j - 1], DP[DP.length - 1][j]) + arr[j]
        );
      }
    }
    DP.push(_arr);
  }
}
console.log(Math.max.apply(null, DP[DP.length - 1]));
