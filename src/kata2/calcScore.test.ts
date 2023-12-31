// 9- 9- 9- 9- 9- 9- 9- 9- 9- 9-      don't need to validate, no look aheads, sum up pins => 90

// just add the pins, and deal with '-' ~ 0

import { calcScore } from "./calcScore";

describe("test calcScore() function", () => {
  test("test no look ahead case", () => {
    expect(calcScore("9- 9- 9- 9- 9- 9- 9- 9- 9- 9-")).toBe(90);
  });

  test("test games with zero first attempt", () => {
    expect(calcScore("-9 9- 9- 9- 9- 9- 9- 9- 9- 9-")).toBe(90);
  });

  test("test games with spares", () => {
    expect(calcScore("5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5")).toBe(150);
  });

  test("test games with strikes", () => {
    expect(calcScore("X X X X X X X X X X X X")).toBe(300);
  });
});

// 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5     need to process a '/', look ahead one

// One look ahead...
// 1. handle '/' character
// 2. handle single look ahead
// ---- done ----

// X X X X X X X X X X X X            need to process a 'x', look ahead two.  These 2 cases, final frame is interesting
// 1. need to handle 'x' character
