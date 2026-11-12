import { describe, test, expect } from 'vitest';
import { formatUsername } from '../src/index.js';

describe('formatUsername', () => {
  test('returns the name when provided', () => {
    expect(formatUsername("Alice")).toBe("Alice");
  });

  test('returns Anonymous when null', () => {
    expect(formatUsername(null)).toBe("Anonymous");
  });

  test('returns the name for another user', () => {
    expect(formatUsername("Bob")).toBe("Bob");
  });
});
