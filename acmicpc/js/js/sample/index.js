var fs = require("fs");
// 제출 시, ${__dirname}/ 제거하고 사용
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split(" ");
//var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("\n");
var a = parseInt(input[0]);
var b = parseInt(input[1]);

console.log("here", a, b);
