var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("\n");
var M = parseInt(input[0]);
var N = parseInt(input[1]);
let result = 0;
let arr = new Array(10001).fill(0);
arr[0] = -1;
arr[1] = -1;
for (let i = 2; i < arr.length; i++) {
  if (arr[i] === 0) {
    arr[i] = i;
    for (let j = 2; i * j < arr.length; j++) {
      arr[i * j] = -1;
    }
  }
}

let min = 0;
let sum = 0;
for (let i = M; i <= N; i++) {
  if (arr[i] === i) {
    sum += i;
    if (min === 0) min = i;
  }
}

if (sum !== 0) {
  console.log(`${sum}\n${min}`);
} else {
  console.log(-1);
}