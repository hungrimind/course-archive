import { describe, test, expect } from 'vitest';
import { execSync } from 'child_process';
import { add } from '../src/index.js';

describe("Arrow Function Syntax", () => {
  test("add is a function", () => {
    expect(typeof add).toBe("function");
  });

  test("add returns the sum of two numbers", () => {
    expect(add(3, 5)).toBe(8);
  });

  test("add works with different values", () => {
    expect(add(10, 20)).toBe(30);
  });

  const output = execSync('npx ts-node src/index.ts', {
    cwd: __dirname + '/..',
    encoding: 'utf-8'
  }).trim();

  const lines = output.split('\n');

  test("first line prints 8", () => {
    expect(lines[0]).toBe("8");
  });

  test("second line prints 30", () => {
    expect(lines[1]).toBe("30");
  });
});
