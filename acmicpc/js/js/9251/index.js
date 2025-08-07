const fs = require("fs");
const [str1, str2] = fs
  .readFileSync(`${__dirname}/dev/stdin`)
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.trim());

const LCS = Array.from({ length: str1.length + 1 }, () =>
  new Array(str2.length + 1).fill(0)
);
for (let i = 1; i <= str1.length; i++) {
  for (let j = 1; j <= str2.length; j++) {
    if (str1[i - 1] === str2[j - 1]) {
      LCS[i][j] = LCS[i - 1][j - 1] + 1;
    } else {
      LCS[i][j] = Math.max(LCS[i - 1][j], LCS[i][j - 1]);
    }
  }
}
console.log(LCS[str1.length][str2.length]);
