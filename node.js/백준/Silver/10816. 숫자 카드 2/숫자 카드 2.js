const fs = require("fs");
const input = fs.readFileSync(`/dev/stdin`).toString().trim().split("\n");
const arrN = input[1].split(" ");
const set = {};
const arrM = input[3].split(" ");
for (let i = 0; i < arrN.length; i++) {
  const idx = arrN[i].trim();
  if(set[idx]) set[idx]++;
  else set[idx] = 1;
}
let result = "";
for (let i = 0; i < arrM.length;i++) {
    result += `${set[arrM[i].trim()] ?? 0} `;
}
console.log(result.trim());