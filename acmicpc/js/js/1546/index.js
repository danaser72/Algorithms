var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("\n");
var arr = input[1].split(" ").map((x) => parseInt(x));
var M = Math.max.apply(null, arr);
arr = arr.map((x) => (x / M) * 100);
console.log(arr.reduce((acc, cur) => acc + cur, 0) / arr.length);