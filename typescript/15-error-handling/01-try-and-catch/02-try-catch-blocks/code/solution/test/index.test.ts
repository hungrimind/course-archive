import { describe, test, expect } from 'vitest';
import { safeParse } from '../src/index.js';

describe('safeParse', () => {
  test('returns parsed object for valid JSON', () => {
    const result = safeParse('{"name": "Alice"}');
    expect(result).toEqual({ name: "Alice" });
  });

  test('returns "Parsing failed" for invalid JSON', () => {
    const result = safeParse("not valid json");
    expect(result).toBe("Parsing failed");
  });

  test('returns parsed array for valid JSON array', () => {
    const result = safeParse('[1, 2, 3]');
    expect(result).toEqual([1, 2, 3]);
  });

  test('returns "Parsing failed" for empty string', () => {
    const result = safeParse("");
    expect(result).toBe("Parsing failed");
  });
});
