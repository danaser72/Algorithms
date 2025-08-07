const fs = require("fs");
const input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("\n").map(x => parseInt(x));
const arr = [];
arr.push(0)
arr.push(1)
arr.push(1)
const DP = (N) => {
  for (let i = 3; i <= N; i++) {
    arr[i] = arr[i - 2] + arr[i - 3];
  }
};
DP(Math.max.apply(null, input))
let result = "";
for (let i = 1; i< input.length;i++){
    const N = parseInt(input[i]);
    result += `${arr[N]}\n`;
}
console.log(result.trim());