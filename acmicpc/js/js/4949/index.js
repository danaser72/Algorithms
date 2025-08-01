const fs = require("fs");
const input = fs
  .readFileSync(`${__dirname}/dev/stdin`)
  .toString()
  .trim()
  .split("\n");
const conditions = { "(": true, ")": true, "[": true, "]": true };
const check = (str) => {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ".") break;
    if (conditions[str[i]]) {
      if (stack.length === 0) stack.push(str[i]);
      else {
        if (
          (stack[stack.length - 1] === "(" && str[i] === ")") ||
          (stack[stack.length - 1] === "[" && str[i] === "]")
        )
          stack = stack.slice(0, stack.length - 1);
        else stack.push(str[i]);
      }
    }
  }
  return stack.length === 0 ? "yes" : "no";
};
const result = [];
for (let i = 0; i < input.length; i++) {
  const str = input[i];
  if (str === ".") break;
  else {
    result.push(check(str));
  }
}
console.log(result.join("\n"));
