import { describe, test, expect } from 'vitest';
import { getDisplayName, getCount } from '../src/index.js';

describe('getDisplayName', () => {
  test('returns the name when provided', () => {
    expect(getDisplayName("Alice")).toBe("Alice");
  });

  test('returns Guest when null', () => {
    expect(getDisplayName(null)).toBe("Guest");
  });

  test('returns Guest when undefined', () => {
    expect(getDisplayName(undefined)).toBe("Guest");
  });
});

describe('getCount', () => {
  test('preserves zero', () => {
    expect(getCount(0)).toBe(0);
  });

  test('returns fallback when null', () => {
    expect(getCount(null)).toBe(10);
  });

  test('returns the count when provided', () => {
    expect(getCount(5)).toBe(5);
  });
});
