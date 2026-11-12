import { describe, test, expect } from 'vitest';
import { getErrorMessage } from '../src/index.js';

describe('getErrorMessage', () => {
  test('returns error message when Error is thrown', () => {
    const result = getErrorMessage(() => { throw new Error("something broke"); });
    expect(result).toBe("something broke");
  });

  test('returns "No error" when no error is thrown', () => {
    const result = getErrorMessage(() => {});
    expect(result).toBe("No error");
  });

  test('returns "Unknown error" when non-Error is thrown', () => {
    const result = getErrorMessage(() => { throw "a string"; });
    expect(result).toBe("Unknown error");
  });

  test('handles JSON parse errors', () => {
    const result = getErrorMessage(() => JSON.parse("not json"));
    expect(result).toContain("Unexpected token");
  });
});
