import { describe, test, expect } from 'vitest';
import { execSync } from 'child_process';

describe("Looping with Indexes", () => {
  const output = execSync('npx ts-node src/index.ts', {
    cwd: __dirname + '/..',
    encoding: 'utf-8'
  }).trim();

  const lines = output.split('\n');

  test("prints five lines", () => {
    expect(lines.length).toBe(5);
  });

  test("first line is 0 (10 * 0)", () => {
    expect(lines[0]).toBe("0");
  });

  test("second line is 20 (20 * 1)", () => {
    expect(lines[1]).toBe("20");
  });

  test("third line is 60 (30 * 2)", () => {
    expect(lines[2]).toBe("60");
  });

  test("fourth line is 120 (40 * 3)", () => {
    expect(lines[3]).toBe("120");
  });

  test("fifth line is 200 (50 * 4)", () => {
    expect(lines[4]).toBe("200");
  });
});
