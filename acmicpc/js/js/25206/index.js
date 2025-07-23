var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("\n");
let majorScore = ["F", "", "D0", "D+", "C0", "C+", "B0", "B+", "A0", "A+"];
let majorSum = 0;
let sum = 0;
for (let i = 0; i < input.length; i++) {
  const arr = input[i].trim().split(" ");
  if (arr[2] !== "P") {
    majorSum += parseInt(arr[1]) * majorScore.indexOf(arr[2]) * 0.5;
    sum += parseInt(arr[1]);
  }
}
console.log(parseFloat(majorSum / sum));