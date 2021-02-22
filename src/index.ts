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

console.log(`Man United won ${manUnitedWins} games`);
