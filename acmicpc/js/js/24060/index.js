const fs = require("fs");
const input = fs
  .readFileSync(`${__dirname}/dev/stdin`)
  .toString()
  .trim()
  .split("\n");

let [N, K] = input[0].split(" ").map((x) => parseInt(x));
const arr = input[1].split(" ").map((x) => parseInt(x));

const merge_sort = (A, p, r) => {
  if (p < r) {
    let q = parseInt((p + r) / 2);
    merge_sort(A, p, q);
    merge_sort(A, q + 1, r);
    merge(A, p, q, r);
  }
};

const merge = (A, p, q, r) => {
  let i = p,
    j = q + 1,
    t = 0;
  let tmp = [];
  while (i <= q && j <= r) {
    if (A[i] <= A[j]) {
      tmp[t++] = A[i++];
    } else {
      tmp[t++] = A[j++];
    }
  }
  while (i <= q) {
    tmp[t++] = A[i++];
  }
  while (j <= r) {
    tmp[t++] = A[j++];
  }
  i = p;
  t = 0;
  while (i <= r && K !== 0) {
    A[i++] = tmp[t++];
    K--;

    if (K === 0) {
      console.log(A[i - 1]);
    }
  }
};

merge_sort(arr, 0, arr.length - 1);
if (K !== 0) {
  console.log(-1);
}
