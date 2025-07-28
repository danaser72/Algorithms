var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("\n").map(x => parseInt(x));
input.shift();
input.sort((a, b) => a - b);
console.log(input.join("\n"));