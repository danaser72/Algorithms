var fs = require("fs");
var input = fs.readFileSync(`/dev/stdin`).toString().trim().split(" ");
var n = parseInt(input);
console.log(`${n * n}\n2`);