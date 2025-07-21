var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim();
var result = "";
for (let i = 0; i < input; i++) {
  for (let j = 0; j < input - i - 1; j++) {
    result += " ";
  }
  for (let j = 0; j <= i; j++) {
    result += "*";
  }
  result += "\n";
}
console.log(result);
