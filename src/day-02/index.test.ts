const { part1, part2 } = require("./index.ts");
const { example, data } = require("./input.ts");

test("part 1 example", () => {
  expect(part1(example)).toBe(undefined);
});

test("part 1 data", () => {
  expect(part1(data)).toBe(undefined);
});
