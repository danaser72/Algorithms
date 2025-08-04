const fs = require("fs");
const input = fs
  .readFileSync(`${__dirname}/dev/stdin`)
  .toString()
  .trim()
  .split("\n")
  .map((x) => parseInt(x));
const cantorSet = new Array(Math.pow(3, 12)).fill("-");
const get = (A, p, q) => {
  if (p === q) return;
  const point = parseInt((q - p + 1) / 3);
  let l = p + point;
  let r = q - point;
  for (let i = l; i <= r; i++) A[i] = " ";
  get(A, p, l - 1);
  get(A, r + 1, q);
};
get(cantorSet, 0, cantorSet.length - 1);
for (let i = 0; i< input.length;i++){
    const N = input[i];
    console.log(cantorSet.slice(0, Math.pow(3, N)).join(""));
}
