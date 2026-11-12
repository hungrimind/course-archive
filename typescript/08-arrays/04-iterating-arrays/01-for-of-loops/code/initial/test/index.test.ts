import { describe, test, expect } from 'vitest';
import { execSync } from 'child_process';

describe("for...of Loops", () => {
  const output = execSync('npx ts-node src/index.ts', {
    cwd: __dirname + '/..',
    encoding: 'utf-8'
  }).trim();

  const lines = output.split('\n');

  test("prints three lines", () => {
    expect(lines.length).toBe(3);
  });

  test("first line is APPLE", () => {
    expect(lines[0]).toBe("APPLE");
  });

  test("second line is BANANA", () => {
    expect(lines[1]).toBe("BANANA");
  });

  test("third line is CHERRY", () => {
    expect(lines[2]).toBe("CHERRY");
  });
});
