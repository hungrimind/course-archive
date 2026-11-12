import { describe, test, expect } from 'vitest';
import { execSync } from 'child_process';

describe("forEach Method", () => {
  const output = execSync('npx ts-node src/index.ts', {
    cwd: __dirname + '/..',
    encoding: 'utf-8'
  }).trim();

  const lines = output.split('\n');

  test("prints three lines", () => {
    expect(lines.length).toBe(3);
  });

  test("first line is 0: red", () => {
    expect(lines[0]).toBe("0: red");
  });

  test("second line is 1: green", () => {
    expect(lines[1]).toBe("1: green");
  });

  test("third line is 2: blue", () => {
    expect(lines[2]).toBe("2: blue");
  });
});
