var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("\n");
var max = 0,
  maxIdx = 0;
input.map((x, i) => {
  if (parseInt(x) > max) {
    max = parseInt(x);
    maxIdx = i;
  }
});
console.log(`${max}\n${maxIdx + 1}`);