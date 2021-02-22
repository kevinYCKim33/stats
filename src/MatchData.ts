import { MatchResult } from "./MatchResult";

// Tuples work well with CSVs
// ['10/08/2018','Man United','Leicester','2','1','H','A Marriner']
export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];
// ==> [Oct 08 2018, 'Man United', 'Leicester', 2, 1, 'H', 'A Marriner']
