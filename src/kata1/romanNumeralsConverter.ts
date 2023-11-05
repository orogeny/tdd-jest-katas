const mapper = new Map([
  [1000, "M"],
  [500, "D"],
  [100, "C"],
  [50, "L"],
  [10, "X"],
  [5, "V"],
  [1, "I"],
]);

function toRoman(num: number) {
  if (num < 1 || num > 3000) {
    throw new Error("Input must be between 1 and 3000");
  }

  return mapper.get(num);
}

export { toRoman };
