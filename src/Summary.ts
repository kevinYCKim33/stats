import { MatchData } from "./MatchData";
// interfaces are implictly exported
// when explicitly exporting...you can now do export class Foo implements Analyzer for better autofill

// implemented by WinsAnalysis
export interface Analyzer {
  run(matches: MatchData[]): string;
}

// implemented by ConsoleReport
export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  // To instantiate a Summary, you need the following:
  // 1: an instance of something that satisfies the Analyzer interface
  // 2: an instance of something that satisfies OutputTarget
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    // analyzer in a different section from summary
    // gotta attach a variable to it to capture the moment
    // latch it up baby!
    const output = this.analyzer.run(matches);
    this.outputTarget.print(output);
  }
}
