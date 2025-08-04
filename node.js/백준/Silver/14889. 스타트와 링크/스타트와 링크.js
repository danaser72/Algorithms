const fs = require("fs");
const input = fs
  .readFileSync(`/dev/stdin`)
  .toString()
  .trim()
  .split("\n");
const N = parseInt(input[0]);
input.shift();
const arr = input.map((x) => x.split(" ").map((x) => parseInt(x)));
const team1Score = [];
const team2Score = [];

const dfs = (team1, team2, cur) => {
  if (team1.length + team2.length === N) {
    let score1 = 0;
    let score2 = 0;
    for (let i = 0; i < team1.length; i++) {
      for (let j = 0; j < team1.length; j++) {
        score1 += arr[team1[i]][team1[j]];
        score2 += arr[team2[i]][team2[j]];
      }
    }
    team1Score.push(score1);
    team2Score.push(score2);
    return;
  }

  if (team1.length < N / 2) {
    const tmp = team1.slice();
    tmp.push(cur);
    dfs(tmp, team2, cur + 1);
  }
  if (team2.length < N / 2) {
    const tmp = team2.slice();
    tmp.push(cur);
    dfs(team1, tmp, cur + 1);
  }
};
dfs([0], [], 1);
let min = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < team1Score.length; i++) {
  min = Math.min(min, Math.abs(team1Score[i] - team2Score[i]));
}
console.log(min);
