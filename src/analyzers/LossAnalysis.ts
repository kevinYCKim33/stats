import { Analyzer } from "../Summary";
import { MatchData } from "../MatchData";
import { MatchResult } from "../MatchResult";

export class LossAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let losses = 0;
    for (let match of matches) {
      // ==> [Oct 08 2018, 'Man United', 'Leicester', 2, 1, 'H', 'A Marriner']
      if (match[1] === this.team && match[5] === MatchResult.AwayWin) {
        losses++;
      } else if (match[2] === this.team && match[5] === MatchResult.HomeWin) {
        losses++;
      }
    }
    return `Team ${this.team} lost ${losses} games`;
  }
}
