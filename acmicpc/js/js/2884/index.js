var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split(" ");
var hour = parseInt(input[0]);
var min = parseInt(input[1]) - 45;
if (min < 0) {
  hour -= 1;
  min += 60;
}
if (hour < 0) hour = 23;
console.log(`${hour} ${min}`);
