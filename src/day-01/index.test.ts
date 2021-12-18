import { convertToDirections, getIncreasedOnly } from "./index";

const testData = [159, 170, 171, 170, 168];

// Part one

// 1. Convert text to array of numbers

// 2. Convert array of numbers to array of direction of change in depth (increased, decreased, no change)
test("Convert array of numbers to array of changes in depth (increased, decreased, no change)", () => {
  expect(convertToDirections(testData)).toEqual([
    "N/A",
    "increased",
    "increased",
    "decreased",
    "decreased",
  ]);
});

// 3. Filter out increased
test("Filter out increased", () => {
  expect(getIncreasedOnly(convertToDirections(testData))).toEqual([
    "increased",
    "increased",
  ]);
});
// 4. Count increased

// Part two

// Convert array of numbers to array of numbers in blocks of three
// ...
