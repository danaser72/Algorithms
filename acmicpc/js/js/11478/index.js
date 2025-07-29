/**
 * [참조]
 * - Object보다 Set이 메모리도 효율적이고, 속도도 훨씬 빠르다
 */
const fs = require("fs");
const input = fs.readFileSync(`${__dirname}/dev/stdin`).toString().trim();
// const S = {};
// for (let i = 0; i < input.length; i++) {
//   for (let j = i + 1; j <= input.length; j++) {
//     S[input.substring(i, j)] = true;
//   }
// }
// console.log(Object.keys(S).length);
const set = new Set();
for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j <= input.length; j++) {
    set.add(input.substring(i, j));
  }
}
console.log(set.size)
