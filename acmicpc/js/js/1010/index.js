const fs = require("fs");
const input = fs
  .readFileSync(`${__dirname}/dev/stdin`)
  .toString()
  .trim()
  .split("\n");
const fac = (num) => {
  let result = num === 0n ? 1n : num;
  for (let i = 2n; i < num; i++) {
    result *= i;
  }
  return result;
};

let result = "";
for (let i = 1; i < input.length; i++) {
  const NM = input[i].split(" ");
  const N = BigInt(NM[0]);
  const M = BigInt(NM[1]);
  result += `${BigInt(fac(M) / (fac(N) * fac(M - N)))}\n`;
}
console.log(result.trim());
