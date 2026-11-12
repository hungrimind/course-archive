import { describe, test, expect } from 'vitest';
import { execSync } from 'child_process';
import { containsWord } from '../src/index.js';

describe('Finding Text', () => {
  test('containsWord returns true when word is found', () => {
    expect(containsWord("TypeScript is great", "Script")).toBe(true);
  });

  test('containsWord is case-sensitive', () => {
    expect(containsWord("TypeScript is great", "script")).toBe(false);
  });

  test('containsWord returns false when word is not present', () => {
    expect(containsWord("Hello World", "xyz")).toBe(false);
  });

  test('containsWord finds word at start', () => {
    expect(containsWord("Hello World", "Hello")).toBe(true);
  });

  test('output is correct', () => {
    const output = execSync('npx ts-node --esm src/index.ts', { encoding: 'utf-8' }).trim();
    expect(output).toContain('true');
    expect(output).toContain('false');
  });
});
