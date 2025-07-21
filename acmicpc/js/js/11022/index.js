var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("\n");
var result = [];
for (var i = 1; i < input.length; i++) {
    var arr = input[i].split(" ");
    result.push(`Case #${i}: ${parseInt(arr[0])} + ${parseInt(arr[1])} = ${parseInt(arr[0]) + parseInt(arr[1])}`);
}
console.log(result.join("\n"));