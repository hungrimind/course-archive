import { describe, test, expect } from 'vitest';
import { execSync } from 'child_process';

describe("Constants with const", () => {
  const output = execSync('npx ts-node src/index.ts', {
    cwd: __dirname + '/..',
    encoding: 'utf-8'
  }).trim();

  const lines = output.split('\n');

  test("prints two lines", () => {
    expect(lines.length).toBe(2);
  });

  test("first line prints the game name", () => {
    expect(lines[0]).toBe("TypeScript Quest");
  });

  test("second line prints max lives", () => {
    expect(lines[1]).toBe("3");
  });
});
