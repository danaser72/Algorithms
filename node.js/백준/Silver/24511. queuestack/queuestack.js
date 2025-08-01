const fs = require("fs");
const input = fs
  .readFileSync(`/dev/stdin`)
  .toString()
  .trim()
  .split("\n");
const types = input[1].split(" ").map((x) => parseInt(x));
const arrN = input[2].split(" ").map((x) => parseInt(x));
let M = parseInt(input[3]);
const C = input[4].split(" ").map((x) => parseInt(x));
let result = "";
for (let i = arrN.length - 1; i >= 0 && M !== 0; i--) {
  if (types[i] === 0) {
    result += `${arrN[i]} `;
    M--;
  }
}
if (M > 0) {
  for (let i = 0; i < M; i++) {
    result += `${C[i]} `;
  }
}
console.log(result.trim());
