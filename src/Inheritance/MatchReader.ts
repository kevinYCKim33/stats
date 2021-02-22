import { CsvFileReader } from "./CsvFileReader";
import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";

export class MatchReader extends CsvFileReader<MatchData> {
  // justifiable Tuple

  // missing constructor because it will look up to CsvFileReader's constructor method
  // why no super(?) you aren't doing anything special when you construct a MatchReader that you aren't doing with CsvFileReader
  // to construct, just provide the filepath

  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult, // type assertion: hey TS this isn't just a string; it's an enum!
      row[6],
    ];
  }
}
