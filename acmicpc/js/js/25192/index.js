const fs = require("fs");
const input = fs
  .readFileSync(`${__dirname}/dev/stdin`)
  .toString()
  .trim()
  .split("\n");
let obj = {};
let result = 0;
for (let i = 1; i < input.length; i++) {
    const str = input[i].trim();
    if (str === "ENTER") {
      result += Object.keys(obj).length;
      obj = {};
    } else {
      obj[str] = true;
    }
}
result += Object.keys(obj).length;
console.log(result);