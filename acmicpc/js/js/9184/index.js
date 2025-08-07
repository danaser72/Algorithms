const fs = require("fs");
const input = fs
  .readFileSync(`${__dirname}/dev/stdin`)
  .toString()
  .trim()
  .split("\n");
let obj = {};
const w = (a, b, c) => {
  let val;
  if (a <= 0 || b <= 0 || c <= 0) {
    val = 1;
  } else if (a > 20 || b > 20 || c > 20) {
    val = w(20, 20, 20);
  } else if (obj[`${a},${b},${c}`]) {
    val = obj[`${a},${b},${c}`];
  } else if (a < b && b < c) {
    val = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c);
  } else {
    val =
      w(a - 1, b, c) +
      w(a - 1, b - 1, c) +
      w(a - 1, b, c - 1) -
      w(a - 1, b - 1, c - 1);
  }
  obj[`${a},${b},${c}`] = val;
  return val;
};
for (let i = 0; i < input.length; i++) {
  let [a, b, c] = input[i]
    .trim()
    .split(" ")
    .map((x) => parseInt(x));
  if (a === -1 && b === -1 && c === -1) break;
  console.log(`w(${a}, ${b}, ${c}) = ${w(a, b, c)}`);
}
