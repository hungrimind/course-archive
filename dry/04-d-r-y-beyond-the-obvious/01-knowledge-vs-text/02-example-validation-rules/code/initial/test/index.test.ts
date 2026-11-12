import { describe, test, expect } from 'vitest';
import { execSync } from 'node:child_process';
import { isValidEmail } from '../src/index';

describe('Example: Validation Rules (D.R.Y.)', () => {
  test('isValidEmail returns true for valid emails', () => {
    expect(isValidEmail('user@example.com')).toBe(true);
    expect(isValidEmail('first.last+tag@sub.domain.co')).toBe(true);
  });

  test('isValidEmail returns false for invalid emails', () => {
    expect(isValidEmail('not-an-email@')).toBe(false);
    expect(isValidEmail('missing-at-symbol.com')).toBe(false);
  });

  test('program output demonstrates using the shared validation function', () => {
    const out = execSync('npx ts-node src/index.ts', { encoding: 'utf8' });
    const lines = out.trim().split(/\r?\n/);

    expect(lines).toEqual([
      'Signup email valid: true',
      'Contact form email valid: true',
      'Broken email valid: false'
    ]);
  });
});
