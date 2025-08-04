const fs = require("fs");
const [N, M] = fs
  .readFileSync(`/dev/stdin`)
  .toString()
  .trim()
  .split(" ")
  .map((x) => parseInt(x));
let result = "";
const check = (str) => {
  if (str.length === M * 2 - 1) {
    result += `${str}\n`;
    return;
  }
  for (let i = parseInt(str[str.length - 1]) || 1; i <= N; i++) {
    check((str + " " + i).trim());
  }
};
check("");
console.log(result.trim());
