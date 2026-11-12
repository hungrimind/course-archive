import { describe, test, expect } from 'vitest';
import { stringify } from '../src/index.js';

describe('stringify', () => {
  test('prefixes a string with text label', () => {
    expect(stringify("hello")).toBe("text: hello");
  });

  test('prefixes a number with number label', () => {
    expect(stringify(42)).toBe("number: 42");
  });

  test('prefixes true with boolean label', () => {
    expect(stringify(true)).toBe("boolean: true");
  });

  test('prefixes false with boolean label', () => {
    expect(stringify(false)).toBe("boolean: false");
  });
});
