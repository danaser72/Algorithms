const fs = require("fs");
const input = parseInt(fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim());
console.log(Math.pow(2, input));