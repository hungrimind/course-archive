import { describe, test, expect } from 'vitest';
import { grid } from '../src/index.js';

describe("Nested Loops", () => {
  test("grid(2, 3) returns 6 coordinate strings", () => {
    expect(grid(2, 3)).toEqual(["0,0", "0,1", "0,2", "1,0", "1,1", "1,2"]);
  });

  test("grid(1, 1) returns single coordinate", () => {
    expect(grid(1, 1)).toEqual(["0,0"]);
  });

  test("grid(3, 2) returns 6 coordinate strings", () => {
    expect(grid(3, 2)).toEqual(["0,0", "0,1", "1,0", "1,1", "2,0", "2,1"]);
  });

  test("grid(0, 5) returns empty array", () => {
    expect(grid(0, 5)).toEqual([]);
  });
});
