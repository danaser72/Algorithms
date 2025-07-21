var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("\n").map(x => parseInt(x));
var result = new Array(42);
for (let i = 0; i < input.length; i++) {
  result[input[i] % 42] = 1;
}
console.log(result.filter(x => x).length);