import { describe, test, expect } from 'vitest';
import { combine } from '../src/index.js';

describe('combine', () => {
  test('concatenates two strings with a space', () => {
    expect(combine("hello", "world")).toBe("hello world");
  });

  test('adds two numbers together', () => {
    expect(combine(10, 20)).toBe(30);
  });

  test('formats a string and number as label: value', () => {
    expect(combine("age", 25)).toBe("age: 25");
  });

  test('handles empty strings', () => {
    expect(combine("", "")).toBe(" ");
  });
});
