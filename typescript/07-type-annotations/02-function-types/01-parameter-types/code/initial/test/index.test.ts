import { describe, test, expect } from 'vitest';
import { repeat } from '../src/index.js';

describe("Parameter Types", () => {
  test("repeats text the given number of times", () => {
    expect(repeat("ha", 3)).toBe("hahaha");
  });

  test("returns empty string when times is 0", () => {
    expect(repeat("hello", 0)).toBe("");
  });

  test("returns the text once when times is 1", () => {
    expect(repeat("abc", 1)).toBe("abc");
  });

  test("works with single character text", () => {
    expect(repeat("x", 5)).toBe("xxxxx");
  });
});
