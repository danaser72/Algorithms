var fs = require("fs");
var input = fs
  .readFileSync(`${__dirname}/dev/stdin`)
  .toString()
  .trim();

console.log(`${input < 60 ? "F" : input < 70 ? "D" : input < 80 ? "C" : input < 90 ? "B" : "A"}`);
