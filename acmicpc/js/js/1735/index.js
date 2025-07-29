const fs = require("fs");
const input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("\n");
const ab = input[0].split(" ");
const a = parseInt(ab[0]);
const b = parseInt(ab[1]);
const cd = input[1].split(" ");
const c = parseInt(cd[0]);
const d = parseInt(cd[1]);
const gcd = (m, n) => {
  if (m % n === 0) return n;
  return gcd(n, m % n);
};
const m = a * d + b * c;
const n = b * d;
let gcdMN;
if (m < n) {
  gcdMN = gcd(m, n);
} else {
  gcdMN = gcd(n, m);
}
console.log(`${m / gcdMN} ${n / gcdMN}`);