import { toRoman } from "./romanNumeralsConverter";

describe("test toRoman() function", () => {
  test("returns the string 'I' given the number 1", () => {
    const value = 1;

    const actual = toRoman(value);

    expect(actual).toBe("I");
  });
});
