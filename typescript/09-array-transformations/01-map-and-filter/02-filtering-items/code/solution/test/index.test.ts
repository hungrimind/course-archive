import { describe, test, expect } from 'vitest';
import { filterBigNumbers } from '../src/index.js';

describe('filterBigNumbers', () => {
  test('keeps numbers greater than 3', () => {
    expect(filterBigNumbers([1, 2, 3, 4, 5])).toEqual([4, 5]);
  });

  test('returns empty array when nothing passes', () => {
    expect(filterBigNumbers([1, 2, 3])).toEqual([]);
  });

  test('does not modify the original array', () => {
    const original = [1, 4, 5];
    filterBigNumbers(original);
    expect(original).toEqual([1, 4, 5]);
  });

  test('keeps all items when all pass', () => {
    expect(filterBigNumbers([4, 5, 6])).toEqual([4, 5, 6]);
  });
});
