import { describe, test, expect } from 'vitest';
import { reverseArray } from '../src/index.js';

describe('reverseArray', () => {
  test('reverses an array of strings', () => {
    expect(reverseArray(["a", "b", "c"])).toEqual(["c", "b", "a"]);
  });

  test('reverses an array of numbers', () => {
    expect(reverseArray([1, 2, 3])).toEqual([3, 2, 1]);
  });

  test('does not modify the original array', () => {
    const original = ["x", "y", "z"];
    reverseArray(original);
    expect(original).toEqual(["x", "y", "z"]);
  });

  test('works with a single element', () => {
    expect(reverseArray([1])).toEqual([1]);
  });
});
