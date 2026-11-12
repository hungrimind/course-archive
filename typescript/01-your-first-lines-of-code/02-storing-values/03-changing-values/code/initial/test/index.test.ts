import { describe, test, expect } from 'vitest';
import { execSync } from 'child_process';

describe("Changing Values", () => {
  const output = execSync('npx ts-node src/index.ts', {
    cwd: __dirname + '/..',
    encoding: 'utf-8'
  }).trim();

  const lines = output.split('\n');

  test("prints three lines", () => {
    expect(lines.length).toBe(3);
  });

  test("first value is 0", () => {
    expect(lines[0]).toBe("0");
  });

  test("second value is 10", () => {
    expect(lines[1]).toBe("10");
  });

  test("third value is 25", () => {
    expect(lines[2]).toBe("25");
  });
});
