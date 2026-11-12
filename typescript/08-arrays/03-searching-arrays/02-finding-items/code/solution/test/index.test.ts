import { describe, test, expect } from 'vitest';
import { execSync } from 'child_process';

describe("Finding Items", () => {
  const output = execSync('npx ts-node src/index.ts', {
    cwd: __dirname + '/..',
    encoding: 'utf-8'
  }).trim();

  const lines = output.split('\n');

  test("prints two lines", () => {
    expect(lines.length).toBe(2);
  });

  test("firstBig is 11", () => {
    expect(lines[0]).toBe("11");
  });

  test("firstSmall is 2", () => {
    expect(lines[1]).toBe("2");
  });
});
