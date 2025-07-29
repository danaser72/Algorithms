var fs = require("fs");
var input = fs.readFileSync(`/dev/stdin`).toString().trim().split("\n");
const arrN = input[1].split(" ").map((x) => parseInt(x));
const arr = Object.fromEntries(arrN.map((x) => [x, 1]));
const arrM = input[3].split(" ").map((x) => parseInt(x));
let result = [];
for (let i = 0; i < arrM.length; i++) {
  result.push(arr[arrM[i]] === 1 ? 1 : 0);
}
console.log(result.join(" "));