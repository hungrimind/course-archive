import { describe, test, expect } from 'vitest';
import { execSync } from 'child_process';
import { single, double, backtick } from '../src/index.js';

describe('Creating Strings', () => {
  test('single should be a string created with single quotes', () => {
    expect(typeof single).toBe('string');
    expect(single).toBe('hello');
  });

  test('double should be a string created with double quotes', () => {
    expect(typeof double).toBe('string');
    expect(double).toBe('world');
  });

  test('backtick should be a string created with backticks', () => {
    expect(typeof backtick).toBe('string');
    expect(backtick).toBe('typescript');
  });

  test('output prints all three strings', () => {
    const output = execSync('npx ts-node --esm src/index.ts', { encoding: 'utf-8' }).trim();
    expect(output).toContain('hello');
    expect(output).toContain('world');
    expect(output).toContain('typescript');
  });
});
