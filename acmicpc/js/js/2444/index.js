var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim();
var N = parseInt(input);
let result = "";
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N - i - 1; j++) {
    result += " ";
  }
  result += "*";
  for (let j = 0; j < i; j++) {
    result += "**";
  }
  result += "\n";
}

for (let i = 0; i < N - 1; i++) {
  for (let j = 0; j < i + 1; j++) {
    result += " ";
  }
  result += "*";
  for (let j = 0; j < N - i - 2; j++) {
    result += "**";
  }
  result += "\n";
}
console.log(result);
