/**
 * [규칙]
 * - 1 > 7 > 19 > 37 > 61
 * - 0 > 6 > 18 > 36 > 60
 * - 0 > 1 > 3 > 6 > 10 > 15
 */
var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim();
let N = parseInt(input);
let range = [0];
while (range[range.length - 1] <= 1000000000) {
  range.push(range[range.length - 1] + range.length);
}
range = range.map((x) => x * 6 + 1);
for (let i = 0; i < range.length; i++) {
  if (N <= range[i]) {
    console.log(i + 1);
    break;
  }
}
