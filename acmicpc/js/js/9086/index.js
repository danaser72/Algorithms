var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("\n");
for (let t = 1; t < input.length; t++) {
    const str = input[t].trim();
    console.log(`${str[0]}${str[str.length - 1]}`);
}
