/**
 * [풀이]
 * - 연속적으로 N개의 와인을 고르지 않을 조건도 있다
 * - 음이 아닌 정수이므로, 연속적으로 3개 이상의 와인을 고르지 않는 케이스는 무조건 Bad 케이스
 */
const fs = require("fs");
const input = fs
  .readFileSync(`${__dirname}/dev/stdin`)
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
