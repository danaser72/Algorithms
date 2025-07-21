var fs = require("fs");
// 특이 케이스, 파라미터를 0으로 넘겨줘야함..
//var input = fs.readFileSync(0).toString().trim().split("\n");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("\n");
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(`${a > 0 && b > 0 ? 1 : a > 0 && b < 0 ? 4 : b > 0 ? 2 : 3}`);