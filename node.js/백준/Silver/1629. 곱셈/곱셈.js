const fs = require("fs");
const [A, B, C] = fs
  .readFileSync(`/dev/stdin`)
  .toString()
  .trim()
  .split(" ")
  .map((x) => BigInt(x));
const obj = {};
const fn = (base, exp, mod) => {
  if (obj[`${base}_${exp}`] !== undefined) return obj[`${base}_${exp}`];
  if (exp === 0n) {
    obj[`${base}_${exp}`] = 1n;
    return obj[`${base}_${exp}`];
  }
  if (exp === 1n) {
    obj[`${base}_${exp}`] = base % mod;
    return obj[`${base}_${exp}`];
  }
  const ret =
    (fn(base, exp / 2n, mod) *
      fn(base, exp / 2n, mod) *
      fn(base, exp % 2n, mod)) %
    mod;
  obj[`${base}_${exp}`] = ret;

  return ret;
};
console.log(`${fn(A, B, C)}`);