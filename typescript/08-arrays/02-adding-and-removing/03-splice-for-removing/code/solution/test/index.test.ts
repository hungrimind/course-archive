import { describe, test, expect } from 'vitest';
import { execSync } from 'child_process';

describe("Splice for Removing", () => {
  const output = execSync('npx ts-node src/index.ts', {
    cwd: __dirname + '/..',
    encoding: 'utf-8'
  }).trim();

  const lines = output.split('\n');

  test("prints two lines", () => {
    expect(lines.length).toBe(2);
  });

  test("remaining array contains a, d, e", () => {
    expect(lines[0]).toContain("a");
    expect(lines[0]).toContain("d");
    expect(lines[0]).toContain("e");
  });

  test("remaining array does not contain b or c", () => {
    expect(lines[0]).not.toMatch(/['"]b['"]/);
    expect(lines[0]).not.toMatch(/['"]c['"]/);
  });

  test("removed array contains b and c", () => {
    expect(lines[1]).toContain("b");
    expect(lines[1]).toContain("c");
  });
});
