import { describe, test, expect } from 'vitest';
import { stringifyUser, isJsonSafe, roundTrip } from '../src/index.js';

describe('stringifyUser', () => {
  test('converts name and age to JSON string', () => {
    expect(stringifyUser("Ada", 30)).toBe('{"name":"Ada","age":30}');
  });

  test('works with different values', () => {
    expect(stringifyUser("Bob", 25)).toBe('{"name":"Bob","age":25}');
  });
});

describe('isJsonSafe', () => {
  test('strings are JSON-safe', () => {
    expect(isJsonSafe("hello")).toBe(true);
  });

  test('numbers are JSON-safe', () => {
    expect(isJsonSafe(42)).toBe(true);
  });

  test('undefined is not JSON-safe', () => {
    expect(isJsonSafe(undefined)).toBe(false);
  });

  test('functions are not JSON-safe', () => {
    expect(isJsonSafe(() => {})).toBe(false);
  });
});

describe('roundTrip', () => {
  test('preserves object data through stringify and parse', () => {
    const data = { name: "Ada", scores: [95, 87] };
    expect(roundTrip(data)).toEqual(data);
  });
});
