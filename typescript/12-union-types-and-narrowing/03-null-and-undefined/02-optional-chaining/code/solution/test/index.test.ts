import { describe, test, expect } from 'vitest';
import { getEmail, User } from '../src/index.js';

describe('getEmail', () => {
  test('returns the email when user has contact with email', () => {
    const user: User = { contact: { email: "alice@example.com" } };
    expect(getEmail(user)).toBe("alice@example.com");
  });

  test('returns undefined when user has no contact', () => {
    const user: User = {};
    expect(getEmail(user)).toBeUndefined();
  });

  test('returns undefined when contact has no email', () => {
    const user: User = { contact: {} };
    expect(getEmail(user)).toBeUndefined();
  });

  test('returns undefined when user is null', () => {
    expect(getEmail(null)).toBeUndefined();
  });
});
