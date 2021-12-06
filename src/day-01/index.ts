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

export const timesIncreased = (input: number[]) =>
  input
    .map((depth: number, index: number) => {
      if (index === 0) return "N/A";
      if (depth > depths[index - 1]) return "increased";
      if (depth < depths[index - 1]) return "descreased";
      return "no change";
    })
    .filter((depth) => depth === "increased").length;

// console.log(timesIncreased(depths));

const spliceIntoChunks = (input: number[], chunkSize: number) => {
  const result = [];
  while (input.length > 2) {
    const chunk = input.splice(0, chunkSize);
    result.push(chunk);
  }
  return result;
};

const items = [3, 4, 2, 3, 4];

const threes = items.map((item, index) => {
  if (items[index + 1] === undefined) {
    return [item];
  }
  if (items[index + 2] === undefined) {
    return [item, items[index + 1]];
  }
  return [item, items[index + 1], items[index + 2]];
});

console.log(threes);
