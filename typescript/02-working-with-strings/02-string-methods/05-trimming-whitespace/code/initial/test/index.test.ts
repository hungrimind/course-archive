import { describe, test, expect } from 'vitest';
import { execSync } from 'child_process';
import { cleanInput } from '../src/index.js';

describe('Trimming Whitespace', () => {
  test('cleanInput removes leading and trailing spaces', () => {
    expect(cleanInput("  hello world  ")).toBe("hello world");
  });

  test('cleanInput preserves middle spaces', () => {
    expect(cleanInput("  two  words  ")).toBe("two  words");
  });

  test('cleanInput handles tabs and newlines', () => {
    expect(cleanInput("\t hello \n")).toBe("hello");
  });

  test('cleanInput with no whitespace returns same string', () => {
    expect(cleanInput("clean")).toBe("clean");
  });

  test('output is correct', () => {
    const output = execSync('npx ts-node --esm src/index.ts', { encoding: 'utf-8' }).trim();
    expect(output).toContain('hello world');
    expect(output).toContain('TypeScript');
  });
});
