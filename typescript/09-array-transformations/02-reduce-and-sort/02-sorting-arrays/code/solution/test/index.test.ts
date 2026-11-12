import { describe, test, expect } from 'vitest';
import { sortLowestFirst, sortHighestFirst } from '../src/index.js';

describe('sortLowestFirst', () => {
  test('sorts scores from lowest to highest', () => {
    expect(sortLowestFirst([82, 95, 67, 73, 88])).toEqual([67, 73, 82, 88, 95]);
  });

  test('handles already sorted scores', () => {
    expect(sortLowestFirst([50, 60, 70])).toEqual([50, 60, 70]);
  });

  test('does not modify the original array', () => {
    const original = [90, 70, 80];
    sortLowestFirst(original);
    expect(original).toEqual([90, 70, 80]);
  });
});

describe('sortHighestFirst', () => {
  test('sorts scores from highest to lowest', () => {
    expect(sortHighestFirst([82, 95, 67, 73, 88])).toEqual([95, 88, 82, 73, 67]);
  });

  test('handles a single score', () => {
    expect(sortHighestFirst([100])).toEqual([100]);
  });

  test('does not modify the original array', () => {
    const original = [90, 70, 80];
    sortHighestFirst(original);
    expect(original).toEqual([90, 70, 80]);
  });
});
