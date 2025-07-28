var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split(" ");
let x = parseInt(input[0]);
let y = parseInt(input[1]);
let w = parseInt(input[2]);
let h = parseInt(input[3]);
let result = [Math.abs(w - x), Math.abs(h - y), x, y];
console.log(Math.min.apply(null, result));
