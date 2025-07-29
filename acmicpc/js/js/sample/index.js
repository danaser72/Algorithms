const fs = require("fs");
// 제출 시, ${__dirname}/ 제거하고 사용
const input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim().split(" ");
const a = parseInt(input[0]);
const b = parseInt(input[1]);
console.log("here", a, b);
