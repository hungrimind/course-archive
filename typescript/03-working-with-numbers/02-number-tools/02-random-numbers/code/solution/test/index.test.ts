import { describe, test, expect } from 'vitest';
import { randomInRange } from '../src/index.js';

describe("Random Numbers", () => {
  test("randomInRange(1, 6) returns a number between 1 and 6", () => {
    for (let i = 0; i < 100; i++) {
      const result = randomInRange(1, 6);
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(6);
    }
  });

  test("randomInRange returns a whole number", () => {
    const result = randomInRange(1, 10);
    expect(Number.isInteger(result)).toBe(true);
  });

  test("randomInRange(5, 5) always returns 5", () => {
    expect(randomInRange(5, 5)).toBe(5);
  });

  test("randomInRange(0, 1) returns 0 or 1", () => {
    for (let i = 0; i < 50; i++) {
      const result = randomInRange(0, 1);
      expect(result === 0 || result === 1).toBe(true);
    }
  });
});
