var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("\n");
let result = "";
for (let j = 0; j < 15; j++) {
  for (let i = 0; i < input.length; i++) {
    const arr = input[i].trim();
    if (arr.length >= j + 1) {
      result += input[i][j];
    }
  }
}
console.log(result);