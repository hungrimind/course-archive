import { describe, test, expect } from 'vitest';
import { convert } from '../src/index.js';

describe('convert', () => {
  test('converts a number to a string', () => {
    expect(convert(42, (n) => n.toString())).toBe("42");
  });

  test('converts a string to its length', () => {
    expect(convert("hello", (s) => s.length)).toBe(5);
  });

  test('converts a boolean to a number', () => {
    expect(convert(true, (b) => (b ? 1 : 0))).toBe(1);
  });

  test('converts an array to an object', () => {
    expect(convert([1, 2, 3], (arr) => ({ sum: arr.reduce((a, b) => a + b, 0) }))).toEqual({ sum: 6 });
  });
});
