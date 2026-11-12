import { describe, test, expect } from 'vitest';
import { filterAndScale } from '../src/index.js';

describe('filterAndScale', () => {
  test('filters positives and multiplies by 10', () => {
    expect(filterAndScale([-2, -1, 0, 1, 2, 3])).toEqual([10, 20, 30]);
  });

  test('returns empty when no positives', () => {
    expect(filterAndScale([-5, -3, 0])).toEqual([]);
  });

  test('works with all positive numbers', () => {
    expect(filterAndScale([1, 2])).toEqual([10, 20]);
  });

  test('does not modify the original array', () => {
    const original = [-1, 1, 2];
    filterAndScale(original);
    expect(original).toEqual([-1, 1, 2]);
  });
});
