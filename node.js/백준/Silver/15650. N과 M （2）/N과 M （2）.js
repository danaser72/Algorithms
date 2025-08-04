const fs = require("fs");
const [N, M] = fs
  .readFileSync(`/dev/stdin`)
  .toString()
  .trim()
  .split(" ")
  .map((x) => parseInt(x));
let result = "";
const arr = new Array(N + 1).fill(false);
const check = (arr, str) => {
  if (str.length === M * 2 - 1) result += `${str}\n`;
  for (let i = parseInt(str[str.length - 1]) || 1; i <= N; i++) {
    if (arr[i]) continue;
    arr[i] = true;
    check(arr, (str + " " + i).trim());
    arr[i] = false;
  }
};
check(arr, "");
console.log(result.trim());
