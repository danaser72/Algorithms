var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split(" ");
var a = parseInt(input[0].split('').reverse().join(''));
var b = parseInt(input[1].split('').reverse().join(''));
console.log(Math.max(a, b));
