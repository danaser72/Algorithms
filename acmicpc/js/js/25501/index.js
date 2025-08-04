const fs = require("fs");
const input = fs
  .readFileSync(`${__dirname}/dev/stdin`)
  .toString()
  .trim()
  .split("\n");

const recursion = (s, l, r) => {
  cnt++;
  if (l >= r) return 1;
  else if (s[l] !== s[r]) return 0;
  else return recursion(s, l + 1, r - 1);
};

const isPalidrome = (s) => {
  return recursion(s, 0, s.length - 1);
};

let result = "";
let cnt;
for (let i = 1; i < input.length; i++) {
  cnt = 0;
  result += `${isPalidrome(input[i].trim())} ${cnt}\n`;
}
console.log(result.trim());
