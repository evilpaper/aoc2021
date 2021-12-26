const { part1, part2 } = require("./index.ts");
const { example, data } = require("./input.ts");

// Part one

// 1. Convert txt file to array of commands
// 2. Cycle through each command, destruct ....

test("Should return horizontalPosition 6 and depth 2", () => {
  expect(part1(example)).toBe({ horizontalPosition: 6, depth: 2 });
});

test("part 1 data", () => {
  expect(part1(data)).toBe(undefined);
});
