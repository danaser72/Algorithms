const fs = require("fs");
const input = fs
  .readFileSync(`${__dirname}/dev/stdin`)
  .toString()
  .trim()
  .split("\n");
const num = input[1].split(" ").map((x) => parseInt(x));
const operators = input[2].split(" ").map((x) => parseInt(x));
const max = operators.reduce((acc, cur) => acc + cur, 0);
const result = [];

const calc = (val, idx, operators, cnt) => {
  if (cnt === max) {
    result.push(val);
    return;
  }

  for (let i = 0; i < 4; i++) {
    const oper = operators[i];
    if (oper === 0) continue;
    const tmp = operators.slice();
    operators[i]--;
    switch (i) {
      case 0:
        calc(val + num[idx], idx + 1, operators, cnt + 1);
        break;
      case 1:
        calc(val - num[idx], idx + 1, operators, cnt + 1);
        break;
      case 2:
        calc(val * num[idx], idx + 1, operators, cnt + 1);
        break;
      case 3:
        calc(parseInt(val / num[idx]), idx + 1, operators, cnt + 1);
        break;
    }
    operators = tmp;
  }
};

calc(num[0], 1, operators, 0);
result.sort((a, b) => a - b);
console.log(`${result[result.length - 1]}\n${result[0]}`);
