const fs = require("fs");
const input = fs
  .readFileSync(`/dev/stdin`)
  .toString()
  .trim()
  .split("\n");
const S = input[0].trim();
const DP = [];
DP.push(new Array(26).fill(0));
for (let i = 0; i < S.length; i++) {
  const alpha = DP[i].slice();
  alpha[S[i].charCodeAt() - "a".charCodeAt(0)]++;
  DP[i + 1] = alpha;
}
let result = "";
for (let i = 2; i < input.length; i++) {
  const q = input[i].split(" ").map((x) => x.trim());
  result += `${
    DP[parseInt(q[2]) + 1][q[0].charCodeAt() - "a".charCodeAt()] -
    DP[parseInt(q[1])][q[0].charCodeAt() - "a".charCodeAt()]
  }\n`;
}
console.log(result.trim());
