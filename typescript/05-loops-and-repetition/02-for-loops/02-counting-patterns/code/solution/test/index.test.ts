import { describe, test, expect } from 'vitest';
import { evensDown } from '../src/index.js';

describe("Counting Patterns", () => {
  test("evensDown(10) returns [10, 8, 6, 4, 2]", () => {
    expect(evensDown(10)).toEqual([10, 8, 6, 4, 2]);
  });

  test("evensDown(7) starts from 6", () => {
    expect(evensDown(7)).toEqual([6, 4, 2]);
  });

  test("evensDown(2) returns [2]", () => {
    expect(evensDown(2)).toEqual([2]);
  });

  test("evensDown(1) returns empty array", () => {
    expect(evensDown(1)).toEqual([]);
  });
});
