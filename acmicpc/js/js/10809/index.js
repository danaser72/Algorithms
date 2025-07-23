var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim();
let result = new Array(26).fill(-1);
for (let i = input.length - 1; i >= 0; i--) {
    result[input[i].charCodeAt(0) - 97] = i;
}
console.log(result.join(" "));