const fs = require("fs");
const input = fs.readFileSync(`/dev/stdin`).toString().trim().split("\n").map(x => parseInt(x));
const arr = [];
for (let i = 1; i < input.length - 1; i++) {
  arr.push(input[i + 1] - input[i]);
}
const gcd = (m, n) => {
    if (m % n === 0) return n;
    return gcd(n, m % n);
}
let arrGcd = arr[0];
for (let i = 1; i < arr.length; i++){
  arrGcd = gcd(arrGcd, arr[i]);
}
console.log(((input[input.length - 1] - input[1]) / arrGcd) - input.length + 2);