import { describe, test, expect } from 'vitest';
import { execSync } from 'child_process';
import { combineWords } from '../src/index.js';

describe('Combining Strings', () => {
  test('combineWords joins two words with a space', () => {
    expect(combineWords("Hello", "World")).toBe("Hello World");
  });

  test('combineWords works with different words', () => {
    expect(combineWords("Good", "Morning")).toBe("Good Morning");
  });

  test('combineWords works with empty strings', () => {
    expect(combineWords("", "Test")).toBe(" Test");
  });

  test('output is correct', () => {
    const output = execSync('npx ts-node --esm src/index.ts', { encoding: 'utf-8' }).trim();
    expect(output).toContain('Hello World');
    expect(output).toContain('Good Morning');
  });
});
