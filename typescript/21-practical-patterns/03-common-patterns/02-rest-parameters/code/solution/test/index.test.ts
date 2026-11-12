import { describe, test, expect } from 'vitest';
import { longest } from '../src/index.js';

describe('longest', () => {
  test('returns the longest of multiple strings', () => {
    expect(longest("cat", "elephant", "dog")).toBe("elephant");
  });

  test('returns the first when tied in length', () => {
    expect(longest("abc", "xyz")).toBe("abc");
  });

  test('works with a single argument', () => {
    expect(longest("hello")).toBe("hello");
  });

  test('returns empty string for no arguments', () => {
    expect(longest()).toBe("");
  });
});
