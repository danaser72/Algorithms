/**
 * [참조]
 * - 해당 문제는 node js에서는 항상 메모리 초과 오류가 뜹니다....
 * - 다음에 시도해보는걸로
 */
const fs = require("fs");
const input = fs
  .readFileSync(`${__dirname}/dev/stdin`)
  .toString()
  .trim()
  .split("\n");
const arr = input[1].split(" ").map((x) => parseInt(x));
let result = "";
let cnt = 0;
let target, pos = 0;
while (arr.length !== cnt) {
  if (target) {
    let tmp = target;
    let i;
    if (target > 0) {
      for (i = pos + 1; (i % arr.length) - tmp !== 0; i++) {
        if (arr[i] === null) {
          tmp++;
        }
      }
      pos = i % arr.length;
    } else {
      for (i = pos - 1; ((i + arr.length) % arr.length) - Math.abs(tmp) !== 0; i--) {
        if (arr[i] === null) {
          tmp--;
        }
      }
      pos = ((i + arr.length) % arr.length);
    }
  }
    target = arr[pos];
    result += `${pos + 1} `;
    arr[pos] = null;
  cnt++;
}
console.log(result.trim());