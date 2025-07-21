var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("\n");
var T = input[0];
for (var t = 1; t <= T; t++) {
  var arr = input[t].split(" ");
  console.log(parseInt(arr[0]) + parseInt(arr[1]));
}