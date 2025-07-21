var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("\n");
for (var t = 0; t < input.length; t++) {
  var arr = input[t].split(" ");
  console.log(parseInt(arr[0]) + parseInt(arr[1]));
}