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

function fromRoman(numerals: string) {
  if (!numerals) {
    throw new Error("Input must contain roman numerals");
  }
  if (!/^[MDCLXVI]{1,}$/.test(numerals)) {
    throw new Error("Input must contain roman numerals");
  }

  let value = 0;
  let remainder = numerals;

  for (const [k, v] of mapper) {
    while (remainder.startsWith(v)) {
      value += k;
      remainder = remainder.slice(v.length);

      if (value > 3000) {
        throw new Error("Value exceeds 3000");
      }
    }
  }
  return value;
}

export { fromRoman, toRoman };
