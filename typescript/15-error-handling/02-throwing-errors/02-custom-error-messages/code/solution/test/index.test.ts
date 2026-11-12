import { describe, test, expect } from 'vitest';
import { findUser } from '../src/index.js';

describe('findUser', () => {
  test('returns user name for valid id', () => {
    expect(findUser(1)).toBe("Alice");
  });

  test('returns another user for valid id', () => {
    expect(findUser(3)).toBe("Charlie");
  });

  test('throws error with descriptive message for invalid id', () => {
    expect(() => findUser(42)).toThrow("User with id 42 not found");
  });

  test('throws error with correct id in message', () => {
    expect(() => findUser(99)).toThrow("User with id 99 not found");
  });

  test('error message includes the user id', () => {
    try {
      findUser(10);
    } catch (e) {
      expect((e as Error).message).toContain("10");
    }
  });
});
