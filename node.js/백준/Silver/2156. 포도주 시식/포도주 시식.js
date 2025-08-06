const fs = require("fs");
const input = fs
  .readFileSync(`/dev/stdin`)
  .toString()
  .trim()
  .split("\n")
  .map((x) => parseInt(x));
const arr = input.slice(1);
arr.push(0);
arr.push(0);
const DP = [];
for (let i = 0; i < arr.length; i++) {
  const wine = [];
  const cur = arr[i];
  if (i === 0) {
    wine.push(cur);
    wine.push(cur);
    wine.push(cur);
  } else if (i === 1) {
    wine.push(Math.max(DP[i - 1][1], DP[i - 1][2]) + cur);
    wine.push(cur);
    wine.push(cur);
  } else if (i === 2) {
    wine.push(Math.max(DP[i - 1][1], DP[i - 1][2]) + cur);
    wine.push(Math.max(DP[i - 2][0], DP[i - 2][1], DP[i - 2][2]) + cur);
    wine.push(cur);
  } else {
    wine.push(Math.max(DP[i - 1][1], DP[i - 1][2]) + cur);
    wine.push(Math.max(DP[i - 2][0], DP[i - 2][1], DP[i - 2][2]) + cur);
    wine.push(Math.max(DP[i - 3][0], DP[i - 3][1], DP[i - 3][2]) + cur);
  }
  DP.push(wine);
}
console.log(Math.max.apply(null, DP[DP.length - 1]));
