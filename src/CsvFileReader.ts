// This course came out a little after 05/22/2019
import fs from "fs"; // npm install @types/node
// fs is built in with node
import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";

type MatchData = [Date, string, string, number, number, MatchResult, string];
export class CsvFileReader {
  data: MatchData[] = []; // an array of MatchData arrays
  // data: string[][] = []; // no longer valid

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8", // text content encoded with utf-8; return string instead of buffer
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      // ['10/08/2018','Man United','Leicester','2','1','H','A Marriner']
      .map(
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
