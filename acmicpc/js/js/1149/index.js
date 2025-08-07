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
    _arr.push(Math.min(DP[DP.length - 1][1], DP[DP.length - 1][2]) + arr[0]);
    _arr.push(Math.min(DP[DP.length - 1][0], DP[DP.length - 1][2]) + arr[1]);
    _arr.push(Math.min(DP[DP.length - 1][0], DP[DP.length - 1][1]) + arr[2]);
    DP.push(_arr);
  }
}
console.log(Math.min.apply(null, DP[DP.length - 1]));
