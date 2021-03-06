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

// Same think but witj a combinator instead
export const solutionPart1 = (items: number[]) => {
  return getLength(getIncreasedOnly(convertToDirections(items)));
};

// Bonus: same thing but with one combinator instaed
export const increases = (depths: number[]) =>
  depths.reduce((acc, cur, index) => {
    return cur > depths[index - 1] ? acc + 1 : acc;
  }, 0);

console.log(
  `Solution Day 01 · Part One. The depth has increased ${increases(
    depths
  )} times`
);

// Part two

export const convertToThrees = (items: number[]) => {
  return items
    .map((item: number, index: number) => {
      if (items[index + 1] === undefined) {
        return [item];
      }
      if (items[index + 2] === undefined) {
        return [item, items[index + 1]];
      }
      return [item, items[index + 1], items[index + 2]];
    })
    .filter((item) => item.length === 3);
};

export const sumEachThrees = (items: any) => {
  return items.map((item: number[]) => {
    return item.reduce((cur: any, pre: any) => cur + pre);
  });
};

export const solutionPart2 = (items: number[]) => {
  return getLength(
    getIncreasedOnly(convertToDirections(sumEachThrees(convertToThrees(items))))
  );
};

// Bonus: same thing but with one combinator instaed
export const increasesSlidingWindowOfThree = (depths: number[]) =>
  depths.reduce((acc, cur, index) => {
    if (index < 3) return acc;
    const currentBlock = cur + depths[index - 1] + depths[index - 2];
    const previousBlock =
      depths[index - 1] + depths[index - 2] + depths[index - 3];
    return currentBlock > previousBlock ? acc + 1 : acc;
  }, 0);

console.log(
  `Solution Day 02 · Part Two. The depth has increased ${increasesSlidingWindowOfThree(
    depths
  )} times`
);
