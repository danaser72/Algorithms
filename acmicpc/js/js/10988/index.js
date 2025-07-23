var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("");
var rev = input;
console.log(input.join('') === rev.reverse().join('') ? 1 : 0)