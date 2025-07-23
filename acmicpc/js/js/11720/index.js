var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("\n")[1];
let result = 0;
for (let n = 0; n < input.length; n++) {
  result += parseInt(input[n]);
}
console.log(result)