var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("\n");
var A = parseInt(input[0]);
var B = parseInt(input[1]);
console.log(A * B);
