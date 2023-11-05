import { toRoman } from "./romanNumeralsConverter";

describe("test toRoman() with individual roman numeral values", () => {
  const numerals = [
    "I",
    "IV",
    "V",
    "IX",
    "X",
    "XL",
    "L",
    "XC",
    "C",
    "CD",
    "D",
    "CM",
    "M",
  ] as const;
  const integers = [
    1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000,
  ] as const;

  const integerToNumeral = integers.map((val, i) => [
    val,
    numerals[i],
  ]) as Array<[number, string]>;

  test.each(integerToNumeral)(
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
