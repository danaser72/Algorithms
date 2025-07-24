var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split(" ");
var A = parseInt(input[0]);
var B = parseInt(input[1]);
var V = parseInt(input[2]);
let result = parseInt((V - A) / (A - B)) + 1; // (걸리는 일 수) - 1
if ((V - A) % (A - B) !== 0) result++;
console.log(result);