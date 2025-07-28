var fs = require("fs");
var input = fs.readFileSync(`/dev/stdin`).toString().trim().split("\n").map(x => parseInt(x)).sort((a, b) => a - b);
console.log(`${input.reduce((acc, cur) => acc + cur, 0) / 5}\n${input[2]}`);