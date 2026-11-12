import { describe, test, expect } from 'vitest';
import { execSync } from 'node:child_process';
import { repeatHello } from '../src/index';

describe('Refactoring with a Loop', () => {
  test('repeatHello repeats "Hello" the requested number of times', () => {
    expect(repeatHello(3)).toEqual(['Hello', 'Hello', 'Hello']);
  });

  test('repeatHello returns an empty array for 0', () => {
    expect(repeatHello(0)).toEqual([]);
  });

  test('program output prints Hello three times', () => {
    const output = execSync('npx ts-node src/index.ts', { encoding: 'utf8' });
    const lines = output.trim().split(/\r?\n/);
    expect(lines).toEqual(['Hello', 'Hello', 'Hello']);
  });
});
