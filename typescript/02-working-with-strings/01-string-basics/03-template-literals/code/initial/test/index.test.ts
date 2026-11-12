import { describe, test, expect } from 'vitest';
import { execSync } from 'child_process';
import { introduce } from '../src/index.js';

describe('Template Literals', () => {
  test('introduce returns a template literal string with name and age', () => {
    expect(introduce("Alice", 30)).toBe("Alice is 30 years old");
  });

  test('introduce works with different values', () => {
    expect(introduce("Bob", 25)).toBe("Bob is 25 years old");
  });

  test('introduce works with edge case age', () => {
    expect(introduce("Charlie", 0)).toBe("Charlie is 0 years old");
  });

  test('output is correct', () => {
    const output = execSync('npx ts-node --esm src/index.ts', { encoding: 'utf-8' }).trim();
    expect(output).toContain('Alice is 30 years old');
    expect(output).toContain('Bob is 25 years old');
  });
});
