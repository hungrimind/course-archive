import { describe, test, expect } from 'vitest';
import { execSync } from 'child_process';

describe("Printing Text", () => {
  const output = execSync('npx ts-node src/index.ts', {
    cwd: __dirname + '/..',
    encoding: 'utf-8'
  }).trim();

  const lines = output.split('\n');

  test("prints two lines", () => {
    expect(lines.length).toBe(2);
  });

  test("first line prints I love coding", () => {
    expect(lines[0]).toBe("I love coding");
  });

  test("second line prints TypeScript is fun", () => {
    expect(lines[1]).toBe("TypeScript is fun");
  });
});
