import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

// import { CsvFileReader } from "./CsvFileReader";
// import { ConsoleReport } from "./reportTargets/ConsoleReport";
// import { WinsAnalysis } from "./analyzers/WinsAnalysis";
// import { HtmlReport } from "./reportTargets/HtmlReport";

// instead of this...
// const csvFileReader = new CsvFileReader("football.csv"); // all this wants is a filename as first and only argument
// const matchReader = new MatchReader(csvFileReader); // csvFileReader has an interface of DataReader in MatchReader.ts
// matchReader.load();

// you can do this with static methods
const matchReader = MatchReader.fromCsv("football.csv");
matchReader.load();

// instead of this...
// const summary = new Summary(new WinsAnalysis("Tottenham"), new ConsoleReport());
// const summary = new Summary(new WinsAnalysis("Tottenham"), new HtmlReport());
// summary.buildAndPrintReport(matchReader.matches);

// you can do this with static methods
const summary = Summary.winsAnalysisWithHtmlReport("Tottenham");
summary.buildAndPrintReport(matchReader.matches);
