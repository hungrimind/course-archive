import { describe, test, expect } from 'vitest';
import { roundNumber, floorNumber, ceilNumber } from '../src/index.js';

describe("Rounding Numbers", () => {
  test("round 4.5 returns 5", () => {
    expect(roundNumber(4.5)).toBe(5);
  });

  test("round 4.4 returns 4", () => {
    expect(roundNumber(4.4)).toBe(4);
  });

  test("floor 4.9 returns 4", () => {
    expect(floorNumber(4.9)).toBe(4);
  });

  test("floor 3.1 returns 3", () => {
    expect(floorNumber(3.1)).toBe(3);
  });

  test("ceil 4.1 returns 5", () => {
    expect(ceilNumber(4.1)).toBe(5);
  });

  test("ceil 2.01 returns 3", () => {
    expect(ceilNumber(2.01)).toBe(3);
  });
});
