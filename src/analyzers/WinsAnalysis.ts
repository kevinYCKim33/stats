import { Analyzer } from "../Summary";
import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";

/*
what implements helps with: 
if you start a blank WinsAnalysis file...it will say the following
Class 'WinsAnalysis' incorrectly implements interface 'Analyzer'.
Property 'run' is missing in type 'WinsAnalysis' but required in type 'Analyzer'.ts(2420)
*/

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let wins = 0;
    for (let match of matches) {
      // ==> [Oct 08 2018, 'Man United', 'Leicester', 2, 1, 'H', 'A Marriner']
      if (match[1] === this.team && match[5] === MatchResult.HomeWin) {
        wins++;
      } else if (match[2] === this.team && match[5] === MatchResult.AwayWin) {
        wins++;
      }
    }
    return `Team ${this.team} won ${wins} games`;
  }
}
