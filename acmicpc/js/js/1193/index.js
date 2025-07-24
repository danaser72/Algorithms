/**
 * [규칙]
 * - 짝수번째 : 좌하향
 * - 홀수번째 : 우상향
 */
var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim();
var N = parseInt(input);
let fibo = 0;
let direction = false;
let i;
for (i = 1; fibo <= 10000000; i++) {
  if (N <= fibo) break;
  fibo += i;
  direction = !direction;
}
if (direction) {
  console.log(`${fibo - N + 1}/${N - (fibo - i + 1)}`);
} else {
  console.log(`${N - (fibo - i + 1)}/${fibo - N + 1}`);
}