/**
 * [풀이]
 * - 수행 횟수 : n ^ 3
 * - 수행 시간 : O(n ^ 3), 3
 * BigInt 주의!!!
 */
var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim();
let n = parseInt(input);
console.log(`${BigInt(n) ** BigInt(3)}\n3`);