var fs = require("fs");
var input = fs.readFileSync(`/dev/stdin`).toString().trim();
let n = BigInt(parseInt(input));
console.log(`${(n * (n - 1n) * (n - 2n)) / 6n}\n3`);