var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("\n");
var arr = input[1].split(" ").map(x => parseInt(x));
console.log(`${Math.min.apply(null, arr)} ${Math.max.apply(null, arr)}`);
