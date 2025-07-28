var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split(" ").map(x => parseInt(x)).sort((a, b) => a - b);
if (input[0] + input[1] > input[2]) {
  console.log(input[0] + input[1] + input[2]);
} else {
  console.log((input[0] + input[1]) * 2 - 1);
}