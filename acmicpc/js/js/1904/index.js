/**
 * [풀이]
 * - 나머지 연산은 덧셈 간 분배법칙이 정확하게 적용된다!
 * - 다른 연산에 대해서는 방식을 찾아보자
 */
const fs = require("fs");
const N = parseInt(fs.readFileSync(`${__dirname}/dev/stdin`).toString());
const DP = (N) => {
  let num1 = 1n;
  let num2 = 1n
  for (let i = 2; i <= N; i++) {
    let tmp = num1;
    num1 = (num1 + num2) % 15746n;
    num2 = tmp;
  }
  return num1;
};
console.log(`${DP(N)}`);
