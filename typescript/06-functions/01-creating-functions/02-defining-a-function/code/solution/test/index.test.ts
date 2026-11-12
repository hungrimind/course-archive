import { describe, test, expect } from 'vitest';
import { execSync } from 'child_process';
import { cheer } from '../src/index.js';

describe("Defining a Function", () => {
  test("cheer is a function", () => {
    expect(typeof cheer).toBe("function");
  });

  const output = execSync('npx ts-node src/index.ts', {
    cwd: __dirname + '/..',
    encoding: 'utf-8'
  }).trim();

  const lines = output.split('\n');

  test("prints two lines", () => {
    expect(lines.length).toBe(2);
  });

  test("first line prints You got this!", () => {
    expect(lines[0]).toBe("You got this!");
  });

  test("second line prints Keep going!", () => {
    expect(lines[1]).toBe("Keep going!");
  });
});
