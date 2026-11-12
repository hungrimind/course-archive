import { describe, test, expect } from 'vitest';
import { safeDivide, safeDivideResult } from '../src/index.js';

describe('safeDivide', () => {
  test('returns the quotient for valid division', () => {
    expect(safeDivide(10, 2)).toBe(5);
  });

  test('returns null when dividing by zero', () => {
    expect(safeDivide(10, 0)).toBeNull();
  });
});

describe('safeDivideResult', () => {
  test('returns success result for valid division', () => {
    expect(safeDivideResult(10, 2)).toEqual({ success: true, data: 5 });
  });

  test('returns failure result when dividing by zero', () => {
    const result = safeDivideResult(10, 0);
    expect(result.success).toBe(false);
  });

  test('includes error message on failure', () => {
    const result = safeDivideResult(7, 0);
    if (!result.success) {
      expect(result.error).toBe("Cannot divide by zero");
    }
  });
});
