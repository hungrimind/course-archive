import { describe, test, expect } from 'vitest';
import { firstNegative } from '../src/index.js';

describe("Breaking Out", () => {
  test("finds first negative in [3, 7, -2, 5, -8]", () => {
    expect(firstNegative([3, 7, -2, 5, -8])).toBe(-2);
  });

  test("returns -1 when no negatives exist", () => {
    expect(firstNegative([1, 2, 3])).toBe(-1);
  });

  test("returns first element if it is negative", () => {
    expect(firstNegative([-5, 10, 20])).toBe(-5);
  });

  test("returns -1 for empty array", () => {
    expect(firstNegative([])).toBe(-1);
  });
});
