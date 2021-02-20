// This course came out a little after 05/22/2019
import fs from "fs"; // npm install @types/node
// fs is built in with node

export class CsvFileReader {
  data: string[][] = []; // an array of MatchData arrays

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8", // text content encoded with utf-8; return string instead of buffer
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      });
  }
}
