var fs = require("fs");
var input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("\n");
const field = new Array(9);
let max, pos;
for (let i = 0; i < input.length; i++) {
  const arr = input[i].split(" ").map((x) => parseInt(x));
  field[i] = arr;
}
max = Math.max.apply(null, field.flat());
for (let i = 0; i < field.length; i++) {
  for (let j = 0; j < field[i].length; j++) {
    if (field[i][j] === max) {
      pos = `${i + 1} ${j + 1}`;
      break;
    }
  }
  if (pos) break;
}
console.log(`${max}\n${pos}`);