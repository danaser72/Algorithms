/**
 * [풀이]
 * - 수행 횟수 : n * (n - 1) / 2
 * - 수행 시간 : 동일하게 O(n ^ 2), 즉 2
 */
var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim();
let n = parseInt(input);
console.log(`${parseInt(n * (n - 1) / 2)}\n2`)