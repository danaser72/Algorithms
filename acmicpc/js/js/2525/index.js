var fs = require("fs");
var inputs = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("\n");
var input = inputs[0].trim().split(" ");
var a = parseInt(input[0]);
var b = parseInt(input[1]) + parseInt(inputs[1]);
a += parseInt(b / 60);
b %= 60;
a %= 24;
console.log(`${a} ${b}`);