import { describe, test, expect } from 'vitest';
import { multiplyByAddition } from '../src/index.js';

describe("Loop Counters", () => {
  test("multiplyByAddition(3, 4) returns 12", () => {
    expect(multiplyByAddition(3, 4)).toBe(12);
  });

  test("multiplyByAddition(7, 5) returns 35", () => {
    expect(multiplyByAddition(7, 5)).toBe(35);
  });

  test("multiplyByAddition(6, 0) returns 0", () => {
    expect(multiplyByAddition(6, 0)).toBe(0);
  });

  test("multiplyByAddition(1, 10) returns 10", () => {
    expect(multiplyByAddition(1, 10)).toBe(10);
  });
});
