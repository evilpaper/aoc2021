import { readFileSync } from "fs";
import { resolve, dirname } from "path";

export const depths = readFileSync(
  // @ts-ignore
  resolve(dirname(require.main.filename), "input.txt"),
  "utf8"
)
  .trim()
  .split("\n")
  .map((depth) => Number(depth));

// Part one

export const convertToDirections = (items: number[]) => {
  return items.map((item: number, index: number) => {
    if (index === 0) return "N/A";
    if (item > items[index - 1]) return "increased";
    if (item < items[index - 1]) return "decreased";
    return "no change";
  });
};

export const getIncreasedOnly = (items: string[]) => {
  return items.filter((item) => item === "increased");
};

export const getLength = (items: string[]) => {
  return items.length;
};

export const solutionPart1 = (items: number[]) => {
  return getLength(getIncreasedOnly(convertToDirections(items)));
};

console.log(
  `Solution to part one. The depth has increased ${solutionPart1(depths)} times`
);

// Part two

export const convertToThrees = (items: number[]) => {
  return items.map((item: number, index: number) => {
    if (items[index + 1] === undefined) {
      return [item];
    }
    if (items[index + 2] === undefined) {
      return [item, items[index + 1]];
    }
    return [item, items[index + 1], items[index + 2]];
  });
};

// Old stuff below

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
    if (item < items[index - 1]) return "decreased";
    return "no change";
  });

console.log(
  `Solution to part two. The depth has increased ${
    variations(sums).filter((item) => item === "increased").length
  } times`
);
