const fs = require("fs");
const input = BigInt(fs.readFileSync(`${__dirname}/dev/stdin`).toString());
const fac = (num) => {
  let result = num === 0n ? 1n : num;
  for (let i = 2n; i < num; i++) {
    result *= i;
  }
  return result;
}
console.log(`${fac(input)}`);
