var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("\n");
for (let i = 0; i < input.length; i++) {
  var arr = input[i].split(" ");
  if (parseInt(arr[0]) === 0 && parseInt(arr[1]) === 0) break;
  console.log(parseInt(arr[0]) + parseInt(arr[1]));
}
