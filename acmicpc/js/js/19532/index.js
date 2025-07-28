var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split(" ");
const a = parseInt(input[0]);
const b = parseInt(input[1]);
const c = parseInt(input[2]);
const d = parseInt(input[3]);
const e = parseInt(input[4]);
const f = parseInt(input[5]);
const x = parseInt((b * f - c * e) / (b * d - a * e));
const y = parseInt((a * f - c * d) / (a * e - b * d))
console.log(`${x} ${y}`);