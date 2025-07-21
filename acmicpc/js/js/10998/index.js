var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().split(" ");
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a * b);
