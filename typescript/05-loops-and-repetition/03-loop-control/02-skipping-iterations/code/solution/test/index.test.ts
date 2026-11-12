import { describe, test, expect } from 'vitest';
import { oddOnly } from '../src/index.js';

describe("Skipping Iterations", () => {
  test("oddOnly(10) returns [1, 3, 5, 7, 9]", () => {
    expect(oddOnly(10)).toEqual([1, 3, 5, 7, 9]);
  });

  test("oddOnly(7) returns [1, 3, 5, 7]", () => {
    expect(oddOnly(7)).toEqual([1, 3, 5, 7]);
  });

  test("oddOnly(1) returns [1]", () => {
    expect(oddOnly(1)).toEqual([1]);
  });

  test("oddOnly(0) returns empty array", () => {
    expect(oddOnly(0)).toEqual([]);
  });
});
