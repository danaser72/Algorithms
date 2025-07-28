/**
 * [풀이]
 * - filter로 중복제거 했드니, 시간초과 발생
 *   > Set으로 중복제거 해보자
 * - indexOf보단 Object가 빨랐다.
 */
var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("\n");
const arr = input[1].split(" ").map(x => parseInt(x));
const _arr = Object.fromEntries([...new Set([...arr])].sort((a, b) => a - b).map((x, i) => [x, i]));
let result = [];
for (let i = 0; i < arr.length; i++) {
  result.push(_arr[arr[i].toString()]);
}
console.log(result.join(" "));