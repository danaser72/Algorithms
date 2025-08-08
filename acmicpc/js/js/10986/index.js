/**
 * [풀이]
 * - 구간합을 구하고, 각각을 M으로 나눠서 나머지를 구함 (맨 앞에 0 포함)
 * - 동일한 수들의 개수를 배열로 저장 > 나머지의 차이를 구했을 때 0이 될 경우(동일한 값일 경우), 실제 값도 나머지가 0
 * - 각각 수들의 구간을 고려했을 때, 1 + 2 + ... + n(n * (n + 1) / 2) 형태로 동일한 수들이 집계가 되므로, 각각을 구하고 더한다.
 */
const fs = require("fs");
const input = fs
  .readFileSync(`${__dirname}/dev/stdin`)
  .toString()
  .trim()
  .split("\n");
const [N, M] = input[0].split(" ").map((x) => parseInt(x));
let arr = [0].concat(input[1].split(" ").map((x) => parseInt(x)));
const cnt = [0];
for (let i = 1; i < arr.length; i++) {
  arr[i] = (arr[i - 1] + arr[i]) % M;
  if (!isNaN(cnt[arr[i]])) cnt[arr[i]]++;
  else cnt[arr[i]] = 0;
}
console.log(
  cnt.map((x) => (x * (x + 1)) / 2).reduce((acc, cur) => acc + cur, 0)
);