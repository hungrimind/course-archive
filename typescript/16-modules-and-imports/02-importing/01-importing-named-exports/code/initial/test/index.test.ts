import { describe, test, expect } from 'vitest';
import { TAX_RATE, calculateTotal, formatPrice } from '../src/index.js';
import { execSync } from 'child_process';

describe('Importing Named Exports', () => {
  test('TAX_RATE is 0.07', () => {
    expect(TAX_RATE).toBe(0.07);
  });

  test('calculateTotal adds tax correctly', () => {
    expect(calculateTotal(100)).toBeCloseTo(107);
  });

  test('formatPrice formats with dollar sign and two decimals', () => {
    expect(formatPrice(107)).toBe('$107.00');
    expect(formatPrice(53.4893)).toBe('$53.49');
  });

  test('output shows formatted prices', () => {
    const output = execSync('npx ts-node src/index.ts', { encoding: 'utf-8' });
    expect(output).toContain('Tax rate: 0.07');
    expect(output).toContain('Price: $49.99');
    expect(output).toContain('Total with tax:');
  });
});
