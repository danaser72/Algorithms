const fs = require("fs");
const input = fs.readFileSync(`/dev/stdin`).toString().trim().split("\n");
const NM = input[0].split(" ");
const N = parseInt(NM[0]);
const M = parseInt(NM[1]);
const obj = {};
const result = [];
for (let i = 1; i < N + 1; i++) {
  obj[input[i].trim()] = true;
}
for (let i = N + 1; i < M + N + 1; i++) {
  if (obj[input[i].trim()] === true) result.push(input[i].trim());
}
result.sort((a, b) => (a < b ? -1 : 1));
console.log(`${result.length}\n${result.join("\n")}`);