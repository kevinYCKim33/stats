import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";
// interfaces are implictly exported
// when explicitly exporting...you can now do export class Foo implements Analyzer for better autofill

// implemented by WinsAnalysis
// You want to analyze wins, losses, draws? who ref'd the most games?? as long as it satisfies the Analyzer interface
// then it's good.
export interface Analyzer {
  run(matches: MatchData[]): string;
}

// implemented by ConsoleReport
// you want to console log, html, email alert or whatever?? then use this!
export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  // see index.ts to see why this is justfied
  static winsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport());
  }
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
