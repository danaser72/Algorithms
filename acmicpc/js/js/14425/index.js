/**
 * [참조]
 * - Object를 사용할 경우, constructor와 같은 기본값은 이미 생성된 상태!!
 * - 값 비교는 정확히!
 */
const fs = require("fs");
const input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("\n");
const NM = input[0].split(" ");
const N = parseInt(NM[0]);
const M = parseInt(NM[1]);
const S = {};
let cnt = 0;
for (let i = 1; i < N + 1; i++) {
  S[input[i].trim()] = true;
}
for (let i = N + 1; i < M + N + 1; i++) {
  if (S[input[i].trim()] === true) cnt++;
}
console.log(cnt);