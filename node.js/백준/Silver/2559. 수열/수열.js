const fs = require("fs");
const input = fs
  .readFileSync(`/dev/stdin`)
  .toString()
  .trim()
  .split("\n");
const [N, K] = input[0].split(" ").map((x) => parseInt(x));
const numbers = input[1].split(" ").map((x) => parseInt(x));
const DP = [0];
for (let i = 0; i < N; i++) {
  DP[i + 1] = DP[i] + numbers[i];
}
let max = Number.MIN_SAFE_INTEGER;
for (let i = 0; i < N - K + 1; i++) {
  max = Math.max(max, DP[i + K] - DP[i]);
}
console.log(max)
