import { describe, test, expect } from 'vitest';
import { execSync } from 'child_process';
import { formatPrice } from '../src/index.js';

describe("Default Parameters", () => {
  test("formatPrice is a function", () => {
    expect(typeof formatPrice).toBe("function");
  });

  test("returns correct string with explicit currency", () => {
    expect(formatPrice(29.99, "EUR")).toBe("29.99 EUR");
  });

  test("uses default currency USD when none provided", () => {
    expect(formatPrice(9.99)).toBe("9.99 USD");
  });

  test("works with zero amount", () => {
    expect(formatPrice(0)).toBe("0 USD");
  });

  const output = execSync('npx ts-node src/index.ts', {
    cwd: __dirname + '/..',
    encoding: 'utf-8'
  }).trim();

  const lines = output.split('\n');

  test("prints two lines", () => {
    expect(lines.length).toBe(2);
  });

  test("first line shows price in EUR", () => {
    expect(lines[0]).toBe("29.99 EUR");
  });

  test("second line shows price with default USD", () => {
    expect(lines[1]).toBe("9.99 USD");
  });
});
