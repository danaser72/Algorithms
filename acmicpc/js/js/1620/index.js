const fs = require("fs");
const input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("\n");
const NM = input[0].split(" ");
const N = parseInt(NM[0]);
const M = parseInt(NM[1]);
const pokemon = {};
for (let i = 1; i < N + 1; i++) {
  pokemon[i] = input[i].trim();
  pokemon[input[i].trim()] = i;
}
for (let i = N + 1; i < M + N + 1; i++) {
  console.log(pokemon[input[i].trim()]);
}