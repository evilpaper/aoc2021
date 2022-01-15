import {
  convertToDirections,
  getIncreasedOnly,
  getLength,
  convertToThrees,
  sumEachThrees,
  increases,
  increasesSlidingWindowOfThree,
  depths,
} from "./index";

const testData = [159, 170, 171, 170, 168];

// Part one

// 1. Convert txt file to array of numbers

// 2. Convert array of numbers to array of direction of change in depth (increased, decreased, no change)
test("Should convert array of numbers to array of changes in depth (increased, decreased, no change)", () => {
  expect(convertToDirections(testData)).toEqual([
    "N/A",
    "increased",
    "increased",
    "decreased",
    "decreased",
  ]);
});

// 3. Filter out "increased"
test("Should filter out increased", () => {
  expect(getIncreasedOnly(convertToDirections(testData))).toEqual([
    "increased",
    "increased",
  ]);
});

// 4. Count "increased"
test("Should count increased", () => {
  expect(getLength(getIncreasedOnly(convertToDirections(testData)))).toBe(2);
});

// Bonus. Using combinator instead
test("Increases should return number of increases", () => {
  expect(increases(testData)).toBe(2);
});

// Part two

// 1. Convert array of numbers to array blocks of three
test("Should convert to three-measurement sliding window", () => {
  expect(convertToThrees(testData)).toEqual([
    [159, 170, 171],
    [170, 171, 170],
    [171, 170, 168],
  ]);
});

// 2. Sum each block
test("Should sum each three-measurement", () => {
  expect(sumEachThrees(convertToThrees(testData))).toEqual([500, 511, 509]);
});

// 3. Convert to "directions" - Already exists in part one

// 4. Filter out "increased" - Already exists in part two

// Bonus: using combinator instead
test("increasesBlocksOfThree should return number of increases", () => {
  expect(increasesSlidingWindowOfThree(depths)).toBe(1395);
});
