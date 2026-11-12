import { describe, test, expect } from 'vitest';
import { execSync } from 'child_process';

describe("The string Type", () => {
  const output = execSync('npx ts-node src/index.ts', {
    cwd: __dirname + '/..',
    encoding: 'utf-8'
  }).trim();

  test("prints the greeting with embedded variables", () => {
    expect(output).toBe("Hello, Alice from Oslo");
  });

  test("output contains the name Alice", () => {
    expect(output).toContain("Alice");
  });

  test("output contains the city Oslo", () => {
    expect(output).toContain("Oslo");
  });
});
