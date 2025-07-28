var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("\n");
const Nk = input[0].split(" ");
const k = parseInt(Nk[1])
const list = input[1].split(" ").map(x => parseInt(x)).sort((a, b) => b - a);
console.log(list[k - 1]);