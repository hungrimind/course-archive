import { describe, test, expect } from 'vitest';
import { execSync } from 'child_process';

describe("Hello World", () => {
  const output = execSync('npx ts-node src/index.ts', {
    cwd: __dirname + '/..',
    encoding: 'utf-8'
  }).trim();

  test("prints Hello, world!", () => {
    expect(output).toBe("Hello, world!");
  });

  test("output contains Hello", () => {
    expect(output).toContain("Hello");
  });

  test("output contains world", () => {
    expect(output).toContain("world");
  });
});
