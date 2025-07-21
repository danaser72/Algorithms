var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim();
for (var i = 1; i <= 9; i++) {
  console.log(`${input} * ${i} = ${input * i}`);
}