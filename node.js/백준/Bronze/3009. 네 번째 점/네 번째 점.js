var fs = require("fs");
var input = fs.readFileSync(`/dev/stdin`).toString().trim().split("\n");
let x = [];
let y = [];
for (let i = 0; i < 3; i++) {
  let arr = input[i].trim().split(" ");
  if (x.indexOf(arr[0]) === -1) {
    x.push(arr[0]);
  } else {
    x = x.filter((x) => x !== arr[0]);
  }

  if (y.indexOf(arr[1]) === -1) {
    y.push(arr[1]);
  } else {
    y = y.filter((x) => x !== arr[1]);
  }
}
console.log(`${x[0]} ${y[0]}`);