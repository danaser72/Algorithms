const fs = require("fs");
const N = parseInt(fs.readFileSync(`/dev/stdin`).toString());
const DP = (N) => {
  let num1 = 1n;
  let num2 = 1n
  for (let i = 2; i <= N; i++) {
    let tmp = num1;
    num1 = (num1 + num2) % 15746n;
    num2 = tmp;
  }
  return num1;
};
console.log(`${DP(N)}`);
