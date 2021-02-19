import { MatchReader } from "./MatchReader";
import { MatchResult } from "./MatchResult"; // enum: H, A, D
const reader = new MatchReader("football.csv");

// when this executes, it returns nothing, but reader's data has all the good meat inside of it
// MatchReader instance itself doesn't have read(), but it inherits it from its abstract parent
reader.read();

let manUnitedWins = 0;
// console.log(matches);
for (let match of reader.data) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
