const fs = require("fs");
const input = parseInt(fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim());
let result = input === 0 ? 1 : input;
for (let i = 2; i < input; i++) {
    result *= i;
}
console.log(result);