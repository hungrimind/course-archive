import { describe, test, expect } from 'vitest';
import { mergeArrays, copyArray } from '../src/index.js';

describe('mergeArrays', () => {
  test('merges two arrays together', () => {
    expect(mergeArrays([1, 2], [3, 4])).toEqual([1, 2, 3, 4]);
  });

  test('merges with an empty array', () => {
    expect(mergeArrays([], [1, 2])).toEqual([1, 2]);
  });

  test('does not modify the originals', () => {
    const a = [1, 2];
    const b = [3, 4];
    mergeArrays(a, b);
    expect(a).toEqual([1, 2]);
    expect(b).toEqual([3, 4]);
  });
});

describe('copyArray', () => {
  test('creates a copy of the array', () => {
    expect(copyArray([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('returns a new array reference', () => {
    const original = [1, 2, 3];
    const copy = copyArray(original);
    expect(copy).not.toBe(original);
  });
});
