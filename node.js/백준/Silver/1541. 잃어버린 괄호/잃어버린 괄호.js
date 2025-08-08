const fs = require("fs");
const input = fs
  .readFileSync(`/dev/stdin`)
  .toString()
  .trim()
  .split("-");
let result = 0;
for (let i = 0; i < input.length; i++) {
  let plus = input[i].split("+").reduce((acc, cur) => acc + parseInt(cur), 0);
  plus = !isNaN(plus) ? plus : 0;
  if (i === 0) {
    result += parseInt(plus);
  } else {
    result -= plus;
  }
}

console.log(result);
