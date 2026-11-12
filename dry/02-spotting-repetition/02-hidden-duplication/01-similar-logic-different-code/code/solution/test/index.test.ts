import { describe, test, expect } from 'vitest';
import { execSync } from 'node:child_process';
import { isEven } from '../src/index';

describe('Similar Logic, Different Code', () => {
  test('isEven returns true for even numbers and false for odd numbers', () => {
    expect(isEven(10)).toBe(true);
    expect(isEven(11)).toBe(false);
  });

  test('isEven works with negative numbers', () => {
    expect(isEven(-4)).toBe(true);
    expect(isEven(-5)).toBe(false);
  });

  test('program output uses isEven results for the provided values', () => {
    const output = execSync('npx ts-node src/index.ts', { encoding: 'utf8' });
    const lines = output.trim().split(/\r?\n/);

    expect(lines).toEqual([
      'Ticket 1842 requires an even number: true',
      'Row 17 is even: false'
    ]);
  });
});
