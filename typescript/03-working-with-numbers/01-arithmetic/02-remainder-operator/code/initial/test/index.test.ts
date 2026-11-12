import { describe, test, expect } from 'vitest';
import { remainder, isEven } from '../src/index.js';

describe("Remainder Operator", () => {
  test("remainder of 10 divided by 3 is 1", () => {
    expect(remainder(10, 3)).toBe(1);
  });

  test("remainder of 8 divided by 2 is 0", () => {
    expect(remainder(8, 2)).toBe(0);
  });

  test("remainder of 15 divided by 4 is 3", () => {
    expect(remainder(15, 4)).toBe(3);
  });

  test("8 is even", () => {
    expect(isEven(8)).toBe(true);
  });

  test("7 is not even", () => {
    expect(isEven(7)).toBe(false);
  });
});
