// This course came out a little after 05/22/2019
import fs from "fs"; // npm install @types/node
// fs is built in with node

// T is usually shorthand for TypeOfData
// The Big Refactor: have CsvFileReader be generic enough that it can work with any csv's
// i.e. reading a csv file, separating by newline and then separating by commas is a timeless csv activity
// what you decide to do from then on is up ot CsvFileReader's child classes... hence why mapRow is abstract
export abstract class CsvFileReader<T> {
  data: T[] = []; // an array of MatchData arrays
  // data: string[][] = []; // no longer valid
  // pretend T[] = [] now says MatchData[] = []

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8", // text content encoded with utf-8; return string instead of buffer
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      .map(this.mapRow);
  }
}
