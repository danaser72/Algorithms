const fs = require("fs");
const input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split("\n");
const check = (str) => {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (stack.length === 0) stack.push(str[i]);
    else {
      if (stack[stack.length - 1] === "(" && str[i] === ")"){
        stack = stack.slice(0, stack.length - 1);
      } else{
         stack.push(str[i]);
      }
    }
  }
  return stack.length === 0 ? "YES" : "NO";
};
const result = [];
for (let i = 1; i < input.length; i++) {
  result.push(check(input[i].trim()));
}
console.log(result.join("\n"));