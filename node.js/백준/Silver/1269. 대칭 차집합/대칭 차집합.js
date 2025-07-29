const fs = require("fs");
const input = fs.readFileSync(`/dev/stdin`).toString().trim().split("\n");
const arrN = input[1].split(" ");
const arrM = input[2].split(" ");
const objN = Object.fromEntries(arrN.map(x => [parseInt(x), true]));
const objM = Object.fromEntries(arrM.map(x => [parseInt(x), true]));
arrN.map(x => delete objM[parseInt(x)])
arrM.map(x => delete objN[parseInt(x)])
console.log(Object.keys(objN).length + Object.keys(objM).length)