/**
 * [풀이]
 * - 규칙을 보자 : 제곱수인 경우엔 무조건 열린다!
 */
const fs = require("fs");
const input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim();
const N = parseInt(input);
let result = 0;
for (let i = 1; i * i <= N; i++) {
  result++;
}
console.log(result);