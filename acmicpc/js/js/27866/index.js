var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("\n");
var S = input[0];
var i = parseInt(input[1]);
console.log(S[i - 1]);
