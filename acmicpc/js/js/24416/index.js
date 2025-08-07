const fs = require("fs");
const N = parseInt(fs.readFileSync(`${__dirname}/dev/stdin`).toString());
const fibonacci = (n) => {
  const arr = [];
  arr.push(1);
  arr.push(1);
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[n - 1];
};
console.log(`${fibonacci(N)} ${N - 2}`);
