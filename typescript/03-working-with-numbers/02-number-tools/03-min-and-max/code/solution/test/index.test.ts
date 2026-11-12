import { describe, test, expect } from 'vitest';
import { getMin, getMax, clamp } from '../src/index.js';

describe("Min and Max", () => {
  test("getMin returns the smallest number", () => {
    expect(getMin(3, 7, 2)).toBe(2);
  });

  test("getMax returns the largest number", () => {
    expect(getMax(3, 7, 2)).toBe(7);
  });

  test("clamp returns max when value exceeds max", () => {
    expect(clamp(150, 0, 100)).toBe(100);
  });

  test("clamp returns min when value is below min", () => {
    expect(clamp(-10, 0, 100)).toBe(0);
  });

  test("clamp returns the value when it is within range", () => {
    expect(clamp(50, 0, 100)).toBe(50);
  });
});
