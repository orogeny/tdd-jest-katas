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
