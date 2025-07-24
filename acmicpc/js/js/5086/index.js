var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("\n");
for (let t = 0; t < input.length; t++) {
  if (input[t] === "0 0") break;
  let num = input[t].trim().split(" ");
  let num1 = parseInt(num[0]);
  let num2 = parseInt(num[1]);
  if (num1 % num2 === 0) {
    console.log("multiple");
  } else if (num2 % num1 === 0) {
    console.log("factor");
  } else {
    console.log("neither");
  }
}