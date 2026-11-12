import { describe, test, expect } from 'vitest';
import { transform, repeat } from '../src/index.js';

describe('transform', () => {
  test('applies callback to each item', () => {
    const result = transform(["hello", "world"], (s) => s.toUpperCase());
    expect(result).toEqual(["HELLO", "WORLD"]);
  });

  test('works with a different callback', () => {
    const result = transform(["a", "b", "c"], (s) => s + "!");
    expect(result).toEqual(["a!", "b!", "c!"]);
  });

  test('returns empty array for empty input', () => {
    const result = transform([], (s) => s.toUpperCase());
    expect(result).toEqual([]);
  });
});

describe('repeat', () => {
  test('calls the callback n times with index', () => {
    const calls: number[] = [];
    repeat(3, (i) => calls.push(i));
    expect(calls).toEqual([0, 1, 2]);
  });

  test('does nothing when n is 0', () => {
    const calls: number[] = [];
    repeat(0, (i) => calls.push(i));
    expect(calls).toEqual([]);
  });
});
