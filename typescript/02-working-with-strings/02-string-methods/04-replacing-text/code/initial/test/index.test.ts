import { describe, test, expect } from 'vitest';
import { execSync } from 'child_process';
import { replaceFirst, replaceEvery } from '../src/index.js';

describe('Replacing Text', () => {
  test('replaceFirst replaces only the first occurrence', () => {
    expect(replaceFirst("I like cats and cats", "cats", "dogs")).toBe("I like dogs and cats");
  });

  test('replaceFirst with single occurrence', () => {
    expect(replaceFirst("Hello World", "World", "There")).toBe("Hello There");
  });

  test('replaceEvery replaces all occurrences', () => {
    expect(replaceEvery("I like cats and cats", "cats", "dogs")).toBe("I like dogs and dogs");
  });

  test('replaceEvery with multiple occurrences', () => {
    expect(replaceEvery("ha ha ha", "ha", "ho")).toBe("ho ho ho");
  });

  test('output is correct', () => {
    const output = execSync('npx ts-node --esm src/index.ts', { encoding: 'utf-8' }).trim();
    expect(output).toContain('I like dogs and cats');
    expect(output).toContain('I like dogs and dogs');
  });
});
