import { describe, test, expect } from 'vitest';
import { execSync } from 'child_process';

describe("Modifying Items", () => {
  const output = execSync('npx ts-node src/index.ts', {
    cwd: __dirname + '/..',
    encoding: 'utf-8'
  }).trim();

  test("first item is yellow", () => {
    expect(output).toContain("yellow");
  });

  test("second item is green", () => {
    expect(output).toContain("green");
  });

  test("third item is purple", () => {
    expect(output).toContain("purple");
  });

  test("does not contain red", () => {
    expect(output).not.toContain("red");
  });

  test("does not contain blue", () => {
    expect(output).not.toContain("blue");
  });
});
