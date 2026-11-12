import { describe, test, expect } from 'vitest';
import { execSync } from 'child_process';
import { shout, whisper } from '../src/index.js';

describe('Uppercase and Lowercase', () => {
  test('shout converts text to uppercase', () => {
    expect(shout("Hello")).toBe("HELLO");
  });

  test('shout works with mixed case', () => {
    expect(shout("TypeScript")).toBe("TYPESCRIPT");
  });

  test('whisper converts text to lowercase', () => {
    expect(whisper("Hello")).toBe("hello");
  });

  test('whisper works with mixed case', () => {
    expect(whisper("TypeScript")).toBe("typescript");
  });

  test('output is correct', () => {
    const output = execSync('npx ts-node --esm src/index.ts', { encoding: 'utf-8' }).trim();
    expect(output).toContain('HELLO');
    expect(output).toContain('hello');
  });
});
