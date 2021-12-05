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
  while (input.length > 0) {
    const chunk = input.splice(0, chunkSize);
    result.push(chunk);
  }
  return result;
};

const chunksOfThree = spliceIntoChunks(depths, 3);
const sumsOfEachChunk = chunksOfThree.map((chunk) => {
  return chunk.reduce((pre, cur) => pre + cur, 0);
});
const changesBetweenChunks = sumsOfEachChunk.map(
  (chunk: number, index: number) => {
    if (index === 0) return "N/A";
    if (chunk > sumsOfEachChunk[index - 1]) return "increased";
    if (chunk < sumsOfEachChunk[index - 1]) return "descreased";
    return "no change";
  }
);

const timesChunksIncreased = changesBetweenChunks.filter(
  (item) => item === "increased"
).length;

console.log(timesChunksIncreased);
