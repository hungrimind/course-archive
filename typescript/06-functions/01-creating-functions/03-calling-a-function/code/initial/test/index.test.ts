import { describe, test, expect } from 'vitest';
import { execSync } from 'child_process';
import { cheer } from '../src/index.js';

describe("Calling a Function", () => {
  test("cheer is a function", () => {
    expect(typeof cheer).toBe("function");
  });

  const output = execSync('npx ts-node src/index.ts', {
    cwd: __dirname + '/..',
    encoding: 'utf-8'
  }).trim();

  const lines = output.split('\n');

  test("prints exactly three lines (function called three times)", () => {
    expect(lines.length).toBe(3);
  });

  test("each line prints Let's go!", () => {
    expect(lines[0]).toBe("Let's go!");
    expect(lines[1]).toBe("Let's go!");
    expect(lines[2]).toBe("Let's go!");
  });
});
