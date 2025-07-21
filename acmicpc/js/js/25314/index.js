var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim();
var result = '';
for (var i = 0; i < input / 4; i++) result += "long ";
console.log(`${result}int`);
