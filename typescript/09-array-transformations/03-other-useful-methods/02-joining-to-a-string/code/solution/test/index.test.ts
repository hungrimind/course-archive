import { describe, test, expect } from 'vitest';
import { joinWords } from '../src/index.js';

describe('joinWords', () => {
  test('joins with a space', () => {
    expect(joinWords(["Hello", "World"], " ")).toBe("Hello World");
  });

  test('joins with a hyphen', () => {
    expect(joinWords(["Hello", "World"], "-")).toBe("Hello-World");
  });

  test('joins with no separator', () => {
    expect(joinWords(["Hello", "World"], "")).toBe("HelloWorld");
  });

  test('works with a single word', () => {
    expect(joinWords(["Hi"], ", ")).toBe("Hi");
  });

  test('returns empty string for empty array', () => {
    expect(joinWords([], " ")).toBe("");
  });
});
