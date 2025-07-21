var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split(" ");
var a = parseInt(input[0]);
var b = parseInt(input[1]);
var c = parseInt(input[2]);
var result = 0;

if (a === b && b === c) {
  result = 10000 + a * 1000;
} else if (a === b || a === c) {
  result = 1000 + a * 100;
} else if (b === c) {
  result = 1000 + b * 100;
} else {
  result = Math.max(a, b, c) * 100;
}

console.log(result);