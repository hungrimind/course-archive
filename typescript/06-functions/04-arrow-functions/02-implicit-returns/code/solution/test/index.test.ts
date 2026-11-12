import { describe, test, expect } from 'vitest';
import { execSync } from 'child_process';
import { double } from '../src/index.js';

describe("Implicit Returns", () => {
  test("double is a function", () => {
    expect(typeof double).toBe("function");
  });

  test("double returns twice the input", () => {
    expect(double(4)).toBe(8);
  });

  test("double works with different values", () => {
    expect(double(7)).toBe(14);
  });

  const output = execSync('npx ts-node src/index.ts', {
    cwd: __dirname + '/..',
    encoding: 'utf-8'
  }).trim();

  const lines = output.split('\n');

  test("first line prints 8", () => {
    expect(lines[0]).toBe("8");
  });

  test("second line prints 14", () => {
    expect(lines[1]).toBe("14");
  });
});
