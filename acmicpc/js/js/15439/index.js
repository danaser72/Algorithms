const fs = require("fs");
const input = parseInt(fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim());
console.log(input * (input - 1));
