var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("\n");
var X = parseInt(input[0]);
var Y = parseInt(input[1]);
var result = 0;

for (var i = 2; i < input.length; i++) {
  var arr = input[i].split(" ");
  result += arr[0] * arr[1];
  if (X < result) break;
}
console.log(X === result ? "Yes" : "No");