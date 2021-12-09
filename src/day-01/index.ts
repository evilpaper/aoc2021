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

// Part one

export const timesIncreased = (input: number[]) =>
  input
    .map((depth: number, index: number) => {
      if (index === 0) return "N/A";
      if (depth > depths[index - 1]) return "increased";
      if (depth < depths[index - 1]) return "descreased";
      return "no change";
    })
    .filter((depth) => depth === "increased").length;

console.log(
  `Solution to part one. The depth has increased ${timesIncreased(
    depths
  )} times`
);

// Part two

const threes = (items: any) =>
  items.map((item: number, index: number) => {
    if (items[index + 1] === undefined) {
      return [item];
    }
    if (items[index + 2] === undefined) {
      return [item, items[index + 1]];
    }
    return [item, items[index + 1], items[index + 2]];
  });

const sums = threes(depths).map(
  (three: number[]) => three.reduce((cur: any, pre: any) => cur + pre),
  0
);

const variations = (items: number[]) =>
  items.map((item: number, index: number) => {
    if (index === 0) return "N/A";
    if (item > items[index - 1]) return "increased";
    if (item < items[index - 1]) return "descreased";
    return "no change";
  });

console.log(
  `Solution to part two. The depth has increased ${
    variations(sums).filter((item) => item === "increased").length
  } times`
);
