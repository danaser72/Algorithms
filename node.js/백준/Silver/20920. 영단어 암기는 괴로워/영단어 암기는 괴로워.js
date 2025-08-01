const fs = require("fs");
const input = fs
  .readFileSync(`/dev/stdin`)
  .toString()
  .trim()
  .split("\n");
const [N, M] = input[0].split(" ").map((x) => parseInt(x));
const word = [];
const wordIdx = {};
for (let i = 1; i < input.length; i++) {
  const str = input[i].trim();
  if (str.length >= M) {
    if (isNaN(wordIdx[str])) {
      wordIdx[str] = word.length;
      word.push({ idx: word.length, word: str, count: 1 });
    } else {
      word[wordIdx[str]].count++;
    }
  }
}
word.sort((a, b) => {
  let result = 0;
  if (a.count !== b.count) {
    result = b.count - a.count;
  } else if (a.word.length !== b.word.length) {
    result = b.word.length - a.word.length;
  } else {
    result = a.word.toString().localeCompare(b.word);
  }
  return result;
});
console.log(word.map((x) => x.word).join("\n"));
