import { describe, test, expect } from 'vitest';
import { execSync } from 'child_process';

describe("What is a Variable", () => {
  const output = execSync('npx ts-node src/index.ts', {
    cwd: __dirname + '/..',
    encoding: 'utf-8'
  }).trim();

  const lines = output.split('\n');

  test("prints two lines", () => {
    expect(lines.length).toBe(2);
  });

  test("first line prints the score value 10", () => {
    expect(lines[0]).toBe("10");
  });

  test("second line prints the greeting hello", () => {
    expect(lines[1]).toBe("hello");
  });
});
