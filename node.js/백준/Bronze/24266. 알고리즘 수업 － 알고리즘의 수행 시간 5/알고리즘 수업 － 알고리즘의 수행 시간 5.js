var fs = require("fs");
var input = fs.readFileSync(`/dev/stdin`).toString().trim();
let n = parseInt(input);
console.log(`${BigInt(n) ** BigInt(3)}\n3`);