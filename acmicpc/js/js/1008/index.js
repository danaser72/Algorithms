var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().split(" ");
var a = parseFloat(input[0]);
var b = parseFloat(input[1]);
console.log(a / b);
