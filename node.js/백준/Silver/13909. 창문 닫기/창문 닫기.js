const fs = require("fs");
const input = fs.readFileSync(`/dev/stdin`).toString().trim();
const N = parseInt(input);
let result = 0;
for (let i = 1; i * i <= N; i++) {
    result ++;
}
console.log(result);