import { describe, test, expect } from 'vitest';
import { execSync } from 'child_process';

describe("Push and Pop", () => {
  const output = execSync('npx ts-node src/index.ts', {
    cwd: __dirname + '/..',
    encoding: 'utf-8'
  }).trim();

  const lines = output.split('\n');

  test("prints two lines", () => {
    expect(lines.length).toBe(2);
  });

  test("array contains apple, banana, cherry", () => {
    expect(lines[0]).toContain("apple");
    expect(lines[0]).toContain("banana");
    expect(lines[0]).toContain("cherry");
  });

  test("array does not contain date (it was popped)", () => {
    expect(lines[0]).not.toContain("date");
  });

  test("removed item is date", () => {
    expect(lines[1]).toBe("date");
  });
});
