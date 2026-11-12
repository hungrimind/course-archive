import { describe, test, expect } from 'vitest';
import { repeat } from '../src/index.js';

describe("The For Loop", () => {
  test('repeat("ha", 3) returns "hahaha"', () => {
    expect(repeat("ha", 3)).toBe("hahaha");
  });

  test('repeat("!", 5) returns "!!!!!"', () => {
    expect(repeat("!", 5)).toBe("!!!!!");
  });

  test('repeat("ab", 0) returns empty string', () => {
    expect(repeat("ab", 0)).toBe("");
  });

  test('repeat("z", 1) returns "z"', () => {
    expect(repeat("z", 1)).toBe("z");
  });
});
