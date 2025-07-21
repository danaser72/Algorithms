var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("\n");
var NM = input[0].split(" ").map((x) => parseInt(x));
var result = new Array(NM[0]).fill(0).map((x, i) => i + 1);
for (let i = 1; i < input.length; i++) {
  let arr = input[i].split(" ").map((x) => parseInt(x) - 1);
  let tmp = result[arr[0]];
  result[arr[0]] = result[arr[1]];
  result[arr[1]] = tmp;
}
console.log(result.join(" "));
