import { describe, test, expect } from 'vitest';
import { execSync } from 'child_process';

describe("Multiple Prints", () => {
  const output = execSync('npx ts-node src/index.ts', {
    cwd: __dirname + '/..',
    encoding: 'utf-8'
  }).trim();

  const lines = output.split('\n');

  test("prints three lines", () => {
    expect(lines.length).toBe(3);
  });

  test("first line is First", () => {
    expect(lines[0]).toBe("First");
  });

  test("second line is Second", () => {
    expect(lines[1]).toBe("Second");
  });

  test("third line is Third", () => {
    expect(lines[2]).toBe("Third");
  });

  test("lines are in correct order", () => {
    expect(output).toBe("First\nSecond\nThird");
  });
});
