import { example, data } from "./input";

export const part1 = (items: any[]) => {
  const result = { horizontalPosition: 0, depth: 0 };
  for (const item of items) {
    const [direction, value] = item.split(" ");
    const number = Number(value);
    switch (direction) {
      case "forward":
        result.horizontalPosition += number;
        break;
      case "down":
        result.depth += number;
        break;
      case "up":
        result.depth -= number;
        break;
      default:
        console.log(`Sorry, we are out of ${direction}.`);
    }
  }
  return result;
};

export const part2 = () => {
  return;
};

export default {
  part1,
  part2,
};
