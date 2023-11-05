import { toRoman } from "./romanNumeralsConverter";

describe("test individual roman numeral values", () => {
  const numerals = ["I", "V", "X", "L", "C", "D", "M"] as const;
  const integers = [1, 5, 10, 50, 100, 500, 1000] as const;

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
