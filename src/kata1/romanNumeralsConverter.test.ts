import { fromRoman, toRoman } from "./romanNumeralsConverter";

describe("test toRoman() with individual roman numeral values", () => {
  const individuals = [
    [1, "I"],
    [4, "IV"],
    [5, "V"],
    [9, "IX"],
    [10, "X"],
    [40, "XL"],
    [50, "L"],
    [90, "XC"],
    [100, "C"],
    [400, "CD"],
    [500, "D"],
    [900, "CM"],
    [1000, "M"],
  ] as const;

  test.each(individuals)(
    "value %i should return numeral '%s'",
    (value, expected) => {
      expect(toRoman(value)).toBe(expected);
    },
  );
});

describe("test toRoman() I, X, C, M are only repeats", () => {
  const threes = [
    [3, "III"],
    [30, "XXX"],
    [300, "CCC"],
    [3000, "MMM"],
  ] as const;

  test.each(threes)(
    "value %i should return numeral '%s'",
    (value, expected) => {
      expect(toRoman(value)).toBe(expected);
    },
  );
});

describe("test toRoman() with invalid inputs", () => {
  test("passing a negative numbers should throw an error", () => {
    expect(() => {
      toRoman(-1);
    }).toThrow("Input must be between 1 and 3000");
  });

  test("passing zero should throw an error", () => {
    expect(() => {
      toRoman(0);
    }).toThrow("Input must be between 1 and 3000");
  });

  test("passing numbers greater than 3000 should throw an error", () => {
    expect(() => {
      toRoman(3001);
    }).toThrow("Input must be between 1 and 3000");
  });
});

describe("test toRoman() with intermediary values", () => {
  const intermediaries = [
    [2023, "MMXXIII"],
    [708, "DCCVIII"],
    [307, "CCCVII"],
    [76, "LXXVI"],
    [22, "XXII"],
  ] as const;

  test.each(intermediaries)(
    "value %i should return '%s'",
    (value, expected) => {
      expect(toRoman(value)).toBe(expected);
    },
  );
});

describe("test fromRoman() with toRoman() test data", () => {
  const individuals = [
    [1, "I"],
    [4, "IV"],
    [5, "V"],
    [9, "IX"],
    [10, "X"],
    [40, "XL"],
    [50, "L"],
    [90, "XC"],
    [100, "C"],
    [400, "CD"],
    [500, "D"],
    [900, "CM"],
    [1000, "M"],
  ] as const;

  const threes = [
    [3, "III"],
    [30, "XXX"],
    [300, "CCC"],
    [3000, "MMM"],
  ] as const;

  const intermediaries = [
    [2023, "MMXXIII"],
    [708, "DCCVIII"],
    [307, "CCCVII"],
    [76, "LXXVI"],
    [22, "XXII"],
  ] as const;

  const tests = [...individuals, ...threes, ...intermediaries];

  test.each(tests)("input '%s' should return %i", (expected, input) => {
    expect(fromRoman(input)).toBe(expected);
  });
});
