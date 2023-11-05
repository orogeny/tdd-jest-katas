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
  return mapper.get(num);
}

export { toRoman };
