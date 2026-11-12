import { describe, test, expect } from 'vitest';
import { execSync } from 'child_process';

describe("indexOf and includes", () => {
  const output = execSync('npx ts-node src/index.ts', {
    cwd: __dirname + '/..',
    encoding: 'utf-8'
  }).trim();

  const lines = output.split('\n');

  test("prints four lines", () => {
    expect(lines.length).toBe(4);
  });

  test("hasGreen is true", () => {
    expect(lines[0]).toBe("true");
  });

  test("hasPurple is false", () => {
    expect(lines[1]).toBe("false");
  });

  test("blueIndex is 2", () => {
    expect(lines[2]).toBe("2");
  });

  test("orangeIndex is -1", () => {
    expect(lines[3]).toBe("-1");
  });
});
