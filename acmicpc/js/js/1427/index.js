var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("").map(x => parseInt(x)).sort((a, b) => b - a);
console.log(input.join(""));