import { describe, test, expect } from 'vitest';
import { execSync } from 'child_process';
import { getFirstFour, getRest } from '../src/index.js';

describe('Extracting Parts', () => {
  test('getFirstFour returns first 4 characters', () => {
    expect(getFirstFour("TypeScript")).toBe("Type");
  });

  test('getFirstFour works with other strings', () => {
    expect(getFirstFour("Hello")).toBe("Hell");
  });

  test('getRest returns everything after the first 4 characters', () => {
    expect(getRest("TypeScript")).toBe("Script");
  });

  test('getRest works with other strings', () => {
    expect(getRest("Hello World")).toBe("o World");
  });

  test('output is correct', () => {
    const output = execSync('npx ts-node --esm src/index.ts', { encoding: 'utf-8' }).trim();
    expect(output).toContain('Type');
    expect(output).toContain('Script');
  });
});
