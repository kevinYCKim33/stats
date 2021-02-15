import fs from "fs"; // npm install @types/node
// fs is built in with node

const matches = fs
  .readFileSync("football.csv", {
    encoding: "utf-8", // text content encoded with utf-8; return string instead of buffer
  })
  .split("\n")
  .map((row: string): string[] => {
    return row.split(",");
  });

// enum - enumeration
// signals to other engineers these are very closely related values
enum MatchResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

const homeWin = "H";
const awayWin = "A";
// no mention of draws...bad architecture;
const draw = "D";
// draw never gets used...again that's weird...
// other engineers will remove it

let manUnitedWins = 0;
// console.log(matches);
for (let match of matches) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
