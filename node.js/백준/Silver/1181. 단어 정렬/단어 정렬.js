var fs = require("fs");
var input = fs.readFileSync(`/dev/stdin`).toString().trim().split("\n");
input.shift();
input = input.filter((x, i) => input.indexOf(x) === i);
input.sort((a, b) => a.length !== b.length ? a.length - b.length : String(a).localeCompare(b))
console.log(input.join("\n"))