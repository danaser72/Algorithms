const fs = require("fs");
const input = fs.readFileSync(`/dev/stdin`).toString().trim().split("\n");
const S = {};
for (let i = 1; i < input.length; i++) {
  const info = input[i].split(" ").map((x) => x.trim());
  if(info[1] === "enter") S[info[0]] = true;
  else delete S[info[0]]
}
console.log(Object.keys(S).sort((a, b) => a < b ? 1 : -1).join("\n"));