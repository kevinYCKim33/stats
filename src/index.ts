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

let manUnitedWins = 0;
// console.log(matches);
for (let match of matches) {
  if (match[1] === "Man United" && match[5] === "H") {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === "A") {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
