/**
 * [풀이]
 * - 수행 횟수 : n * n번
 * - 수행 시간 : n^2에 비례하므로 O(n^2), 즉 2
 */
var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split(" ");
var n = parseInt(input);
console.log(`${n * n}\n2`);