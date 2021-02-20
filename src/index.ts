import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResult"; // enum: H, A, D

// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader("football.csv"); // all this wants is a filename as first and only argument

// Create an instance of MatchReader and pass in something satisfying
// the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader); // csvFileReader has an interface of DataReader in MatchReader.ts
matchReader.load();
// how matchReader.matches has all my list of match results in proper Date, string, enum format

let manUnitedWins = 0;
// console.log(matches);
for (let match of matchReader.matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
