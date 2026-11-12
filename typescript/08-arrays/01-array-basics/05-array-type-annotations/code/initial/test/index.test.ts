import { describe, test, expect } from 'vitest';
import { execSync } from 'child_process';
import * as fs from 'fs';

describe("Array Type Annotations", () => {
  const output = execSync('npx ts-node src/index.ts', {
    cwd: __dirname + '/..',
    encoding: 'utf-8'
  }).trim();

  const lines = output.split('\n');

  const source = fs.readFileSync(__dirname + '/../src/index.ts', 'utf-8');

  test("prints three lines", () => {
    expect(lines.length).toBe(3);
  });

  test("first line contains Alice and Bob", () => {
    expect(lines[0]).toContain("Alice");
    expect(lines[0]).toContain("Bob");
  });

  test("second line contains 100, 95, and 88", () => {
    expect(lines[1]).toContain("100");
    expect(lines[1]).toContain("95");
    expect(lines[1]).toContain("88");
  });

  test("third line contains true and false", () => {
    expect(lines[2]).toContain("true");
    expect(lines[2]).toContain("false");
  });

  test("uses string[] type annotation", () => {
    expect(source).toContain("string[]");
  });

  test("uses number[] type annotation", () => {
    expect(source).toContain("number[]");
  });

  test("uses boolean[] type annotation", () => {
    expect(source).toContain("boolean[]");
  });
});
