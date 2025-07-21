var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim();
var result = 0;
for (var i = 1; i <= input; i++) {
  result += i;
}
console.log(result);
