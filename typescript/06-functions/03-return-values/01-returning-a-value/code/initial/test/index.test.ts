import { describe, test, expect } from 'vitest';
import { execSync } from 'child_process';
import { calculateArea } from '../src/index.js';

describe("Returning a Value", () => {
  test("calculateArea returns the area for 4 and 7", () => {
    expect(calculateArea(4, 7)).toBe(28);
  });

  test("calculateArea returns the area for 10 and 5", () => {
    expect(calculateArea(10, 5)).toBe(50);
  });

  test("calculateArea returns 0 when one side is 0", () => {
    expect(calculateArea(0, 9)).toBe(0);
  });

  const output = execSync('npx ts-node src/index.ts', {
    cwd: __dirname + '/..',
    encoding: 'utf-8'
  }).trim();

  test("prints the area of a 4 by 7 rectangle", () => {
    expect(output).toBe("28");
  });
});
