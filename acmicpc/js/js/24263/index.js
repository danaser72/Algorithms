/**
 * [풀이]
 * 수행 횟수 : n과 동일하므로, n
 * 수행 시간 : n에 비례하므로 O(n), 즉 1
 */
var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim();
var N = parseInt(input);
console.log(`${N}\n1`);