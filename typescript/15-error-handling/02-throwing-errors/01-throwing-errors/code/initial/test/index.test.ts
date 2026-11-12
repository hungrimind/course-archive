import { describe, test, expect } from 'vitest';
import { withdraw } from '../src/index.js';

describe('withdraw', () => {
  test('returns the remaining balance after withdrawal', () => {
    expect(withdraw(100, 30)).toBe(70);
  });

  test('returns zero when withdrawing the full balance', () => {
    expect(withdraw(50, 50)).toBe(0);
  });

  test('throws an error for a negative amount', () => {
    expect(() => withdraw(100, -10)).toThrow("Amount must be positive");
  });

  test('throws an error when amount exceeds balance', () => {
    expect(() => withdraw(50, 100)).toThrow("Insufficient funds");
  });
});
