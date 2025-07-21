var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("\n");
var NX = input[0].split(" ");
var A = input[1].split(" ");
console.log(A.reduce((acc, cur) => (parseInt(NX[1]) > parseInt(cur) ? `${acc} ${cur}` : acc), "").trim());
