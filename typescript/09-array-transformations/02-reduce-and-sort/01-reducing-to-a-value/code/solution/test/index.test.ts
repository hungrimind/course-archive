import { describe, test, expect } from 'vitest';
import { sumAll } from '../src/index.js';

describe('sumAll', () => {
  test('sums all numbers in the array', () => {
    expect(sumAll([1, 2, 3, 4])).toBe(10);
  });

  test('returns 0 for an empty array', () => {
    expect(sumAll([])).toBe(0);
  });

  test('works with a single element', () => {
    expect(sumAll([5])).toBe(5);
  });

  test('handles negative numbers', () => {
    expect(sumAll([-1, 1, -2, 2])).toBe(0);
  });
});
