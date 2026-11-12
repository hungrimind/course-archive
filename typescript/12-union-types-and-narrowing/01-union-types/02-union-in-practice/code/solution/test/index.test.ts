import { describe, test, expect } from 'vitest';
import { describeValue } from '../src/index.js';

describe('describeValue', () => {
  test('labels a number', () => {
    expect(describeValue(42)).toBe('number: 42');
  });

  test('labels a string', () => {
    expect(describeValue("hello")).toBe('text: hello');
  });

  test('labels zero', () => {
    expect(describeValue(0)).toBe('number: 0');
  });

  test('labels an empty string', () => {
    expect(describeValue("")).toBe('text: ');
  });

  test('labels a negative number', () => {
    expect(describeValue(-5)).toBe('number: -5');
  });
});

