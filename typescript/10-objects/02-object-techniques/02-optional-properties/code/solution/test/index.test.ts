import { describe, test, expect } from 'vitest';
import { getDisplayName } from '../src/index.js';

describe('optional properties', () => {
  test('returns just the name when middleName is missing', () => {
    expect(getDisplayName({ name: "Alice" })).toBe("Alice");
  });

  test('returns name and middleName when present', () => {
    expect(getDisplayName({ name: "Bob", middleName: "James" })).toBe("Bob James");
  });

  test('handles another name without middle name', () => {
    expect(getDisplayName({ name: "Charlie" })).toBe("Charlie");
  });

  test('handles another name with middle name', () => {
    expect(getDisplayName({ name: "Diana", middleName: "Rose" })).toBe("Diana Rose");
  });
});
