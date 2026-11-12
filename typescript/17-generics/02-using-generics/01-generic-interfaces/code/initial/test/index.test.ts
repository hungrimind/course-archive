import { describe, test, expect } from 'vitest';
import { unbox } from '../src/index.js';
import type { Box } from '../src/index.js';
import { execSync } from 'child_process';

describe('Box interface and unbox', () => {
  test('unbox returns the value from a string box', () => {
    const box: Box<string> = { value: "hello" };
    expect(unbox(box)).toBe("hello");
  });

  test('unbox returns the value from a number box', () => {
    const box: Box<number> = { value: 42 };
    expect(unbox(box)).toBe(42);
  });

  test('unbox returns the value from a boolean box', () => {
    const box: Box<boolean> = { value: true };
    expect(unbox(box)).toBe(true);
  });
});

describe('output', () => {
  test('prints expected output', () => {
    const output = execSync('npx ts-node src/index.ts', { encoding: 'utf-8' }).trim();
    expect(output).toContain('hello');
    expect(output).toContain('42');
  });
});
