import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult";
const reader = new CsvFileReader("football.csv");
reader.read();

console.log(reader.data);

const homeWin = "H";
const awayWin = "A";
// no mention of draws...bad architecture;
const draw = "D";
// draw never gets used...again that's weird...
// other engineers will remove it

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
