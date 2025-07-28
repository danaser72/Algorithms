var fs = require("fs");
var input = fs.readFileSync(`/dev/stdin`).toString().trim();
const N = parseInt(input);
const arr = [];
for (let i = 0; i < 2666800; i++) {
  if (i.toString().indexOf("666") >= 0) arr.push(i);
}
arr.sort((a, b) => a - b);
console.log(arr[N - 1]);
