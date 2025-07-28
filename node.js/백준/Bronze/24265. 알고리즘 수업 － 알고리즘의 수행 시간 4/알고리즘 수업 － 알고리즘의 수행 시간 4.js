var fs = require("fs");
var input = fs.readFileSync(`/dev/stdin`).toString().trim();
let n = parseInt(input);
console.log(`${parseInt(n * (n - 1) / 2)}\n2`)