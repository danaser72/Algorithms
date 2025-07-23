var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split(" ").map(x => parseInt(x) * -1);
input[0] += 1;
input[1] += 1;
input[2] += 2;
input[3] += 2;
input[4] += 2;
input[5] += 8;
console.log(input.join(" "));