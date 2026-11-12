import { describe, test, expect } from 'vitest';
import { execSync } from 'child_process';

describe("Accessing Items", () => {
  const output = execSync('npx ts-node src/index.ts', {
    cwd: __dirname + '/..',
    encoding: 'utf-8'
  }).trim();

  const lines = output.split('\n');

  test("prints three lines", () => {
    expect(lines.length).toBe(3);
  });

  test("first line is cat", () => {
    expect(lines[0]).toBe("cat");
  });

  test("second line is dog", () => {
    expect(lines[1]).toBe("dog");
  });

  test("third line is bird", () => {
    expect(lines[2]).toBe("bird");
  });
});
