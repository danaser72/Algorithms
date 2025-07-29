const fs = require("fs");
const input = fs.readFileSync(`/dev/stdin`).toString().trim().split(" ").map(x => parseInt(x)).sort((a, b) => a - b);
let A = BigInt(input[0]);
let B = BigInt(input[1]);
const gcd = (m, n) => {
  if(m % n === 0) return n;
  return gcd(n, m % n)
}
console.log(`${A * B / BigInt(gcd(input[0], input[1]))}`);