var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("\n");
var NM = input[0].split(" ").map(x => parseInt(x));
var result = new Array(NM[0]).fill(0);
for (let i = 1; i < input.length; i++) {
  var arr = input[i].split(" ").map((x) => parseInt(x));
  for (let j = arr[0] - 1; j <= arr[1] - 1; j++) {
    result[j] = arr[2];
  }
}
console.log(result.join(" "));