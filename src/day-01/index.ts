import { readFileSync } from "fs";
import { resolve, dirname } from "path";

const depths = readFileSync(
  // @ts-ignore
  resolve(dirname(require.main.filename), "data.txt"),
  "utf8"
)
  .trim()
  .split("\n")
  .map((depth) => Number(depth));

const amountIncreased = (input: number[]) =>
  input
    .map((depth: number, index: number) => {
      if (index === 0) return "N/A";
      if (depth > depths[index - 1]) return "increased";
      if (depth < depths[index - 1]) return "descreased";
      return "no change";
    })
    .filter((depth) => depth === "increased").length;

console.log(amountIncreased(depths));
