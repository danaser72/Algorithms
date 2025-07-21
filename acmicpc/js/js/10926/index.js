// Trim 주의하자
var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim();
console.log(`${input}??!`);
