const fs = require("fs");
const input = parseInt(fs.readFileSync(`${__dirname}/dev/stdin`).toString());
let a = 0,
  b = 1;
let tmp = 0;
for (let i = 0; i < input; i++) {
  tmp = a + b;
  a = b;
  b = tmp;
}
console.log(a);
