/**
 * [풀이]
 * - 공식을 만들어서 풀게됨......
 */
var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("\n");
const a = input[0].trim().split(" ");
const a0 = parseInt(a[1])
const a1 = parseInt(a[0])
const c = parseInt(input[1])
const n0 = parseInt(input[2])
console.log((c - a1 > 0 && (a0 / (c - a1)) <= n0) || (c - a1 === 0 && a0 <= 0) ? 1 : 0);