import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";
import { MatchData } from "./MatchData";

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: MatchData[] = [];

  // new MatchReader().reader
  // when you initialize me, just put in anything inside me that has a read() fcn that returns nothing
  // and a data that returns an array of subarray of strings aka Tuples
  constructor(public reader: DataReader) {}

  load(): void {
    // this.reader now has access to this.read() and this.data
    this.reader.read(); // hey CsvFileReader, go execute your read()!
    // hey csvFileReader go do your job! and when you're done tack on your work to my this.matches!
    this.matches = this.reader.data.map(
      // ['10/08/2018','Man United','Leicester','2','1','H','A Marriner']
      (row: string[]): MatchData => {
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
    );
  }
}
