var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("\n");
var T = parseInt(input[0]);
var arrN = input[1].split(" ");
var v = parseInt(input[2]);
console.log(arrN.reduce((acc, cur) => (parseInt(cur) === v ? acc + 1 : acc), 0));
