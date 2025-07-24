var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split(" ");
let N = parseInt(input[0]);
let K = parseInt(input[1]);
let arr = [];
for (let i = 1; i * i <= N; i++) {
  if (N % i === 0) {
    arr.push(i);
    if (parseInt(N / i) !== i) arr.push(parseInt(N / i));
  }
}
arr.sort((a, b) => a - b);
if (arr.length >= K) {
  console.log(arr[K - 1]);
} else {
  console.log(0);
}