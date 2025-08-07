const fs = require("fs");
const input = fs
  .readFileSync(`/dev/stdin`)
  .toString()
  .trim()
  .split("\n");
const numbers = input[1].split(" ").map((x) => parseInt(x));
let result = "";
const DP = [0];
for (let i = 0; i < numbers.length; i++) {
  DP[i + 1] = (DP[i] || 0) + numbers[i];
}
for (let i = 2; i < input.length; i++) {
  const [start, end] = input[i].split(" ").map((x) => parseInt(x));
  result += `${DP[end] - (DP[start - 1] || 0)}\n`;
}
console.log(result.trim());
