const fs = require("fs");
const input = fs
  .readFileSync(`/dev/stdin`)
  .toString()
  .trim()
  .split(" ");
const N = parseInt(input[0]);
const K = parseInt(input[1]);
let result = 1;
const fac = (num) => {
  let result = num === 0 ? 1 : num;
  for (let i = 2; i < num; i++) result *= i;
  return result;
};
console.log(`${parseInt(fac(N) / (fac(K) * fac(N - K)))}`);
