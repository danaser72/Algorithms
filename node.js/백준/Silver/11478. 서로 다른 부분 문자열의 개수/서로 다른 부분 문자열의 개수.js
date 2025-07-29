const fs = require("fs");
const input = fs.readFileSync(`/dev/stdin`).toString().trim();
const S = {};
for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j <= input.length; j++) {
    S[input.substring(i, j)] = true;
  }
}
console.log(Object.keys(S).length)
