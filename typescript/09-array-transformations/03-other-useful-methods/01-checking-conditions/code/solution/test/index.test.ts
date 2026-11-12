import { describe, test, expect } from 'vitest';
import { areAllAdults, hasAnyAdult } from '../src/index.js';

describe('areAllAdults', () => {
  test('returns false when not all are adults', () => {
    expect(areAllAdults([18, 25, 30, 16])).toBe(false);
  });

  test('returns true when all are adults', () => {
    expect(areAllAdults([18, 21, 30])).toBe(true);
  });

  test('returns true for an empty array', () => {
    expect(areAllAdults([])).toBe(true);
  });
});

describe('hasAnyAdult', () => {
  test('returns true when at least one is an adult', () => {
    expect(hasAnyAdult([18, 25, 30, 16])).toBe(true);
  });

  test('returns false when none are adults', () => {
    expect(hasAnyAdult([10, 12, 15])).toBe(false);
  });

  test('returns false for an empty array', () => {
    expect(hasAnyAdult([])).toBe(false);
  });
});
