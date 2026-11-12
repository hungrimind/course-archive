import { describe, test, expect } from 'vitest';
import { wrap } from '../src/index.js';

describe('wrap', () => {
  test('wraps a string in an array', () => {
    expect(wrap("hello")).toEqual(["hello"]);
  });

  test('wraps a number in an array', () => {
    expect(wrap(42)).toEqual([42]);
  });

  test('wraps a boolean in an array', () => {
    expect(wrap(true)).toEqual([true]);
  });

  test('wraps an object in an array', () => {
    const obj = { name: "Alice" };
    expect(wrap(obj)).toEqual([{ name: "Alice" }]);
  });
});
