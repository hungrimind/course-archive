import { describe, test, expect } from 'vitest';
import { doubleNumbers } from '../src/index.js';

describe('doubleNumbers', () => {
  test('doubles each number in the array', () => {
    expect(doubleNumbers([1, 2, 3])).toEqual([2, 4, 6]);
  });

  test('works with an empty array', () => {
    expect(doubleNumbers([])).toEqual([]);
  });

  test('does not modify the original array', () => {
    const original = [5, 10, 15];
    doubleNumbers(original);
    expect(original).toEqual([5, 10, 15]);
  });

  test('handles negative numbers', () => {
    expect(doubleNumbers([-1, 0, 1])).toEqual([-2, 0, 2]);
  });
});
