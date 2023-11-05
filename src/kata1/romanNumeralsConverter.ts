const mapper = new Map([
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
]);

function toRoman(num: number) {
  if (num < 1 || num > 3000) {
    throw new Error("Input must be between 1 and 3000");
  }

  let numerals = "";
  let remainder = num;

  for (const [k, v] of mapper) {
    while (remainder >= k) {
      numerals += v;
      remainder -= k;
    }
  }
  return numerals;
}

export { toRoman };
