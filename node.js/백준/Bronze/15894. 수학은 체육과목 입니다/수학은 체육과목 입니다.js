var fs = require("fs");
var input = fs.readFileSync(`/dev/stdin`).toString().trim();
var N = parseInt(input);
console.log(N * 4);