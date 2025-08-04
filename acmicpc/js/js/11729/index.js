const fs = require("fs");
const input = parseInt(fs.readFileSync(`${__dirname}/dev/stdin`).toString());
const flow = [];
const hanoi = (a, b, src, tmp, dst) => {
  if (a === b) {
    flow.push(`${src} ${dst}`);
  } else {
    hanoi(a, b - 1, src, dst, tmp);
    flow.push(`${src} ${dst}`);
    hanoi(a, b - 1, tmp, src, dst);
  }
};
hanoi(1, input, 1, 2, 3);
console.log(`${flow.length}\n${flow.join("\n")}`);
