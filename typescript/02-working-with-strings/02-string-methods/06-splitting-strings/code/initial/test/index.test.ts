import { describe, test, expect } from 'vitest';
import { execSync } from 'child_process';
import { splitByComma, splitIntoChars } from '../src/index.js';

describe('Splitting Strings', () => {
  test('splitByComma splits a CSV string into an array', () => {
    expect(splitByComma("red,green,blue")).toEqual(["red", "green", "blue"]);
  });

  test('splitByComma works with different values', () => {
    expect(splitByComma("a,b,c")).toEqual(["a", "b", "c"]);
  });

  test('splitIntoChars splits into individual characters', () => {
    expect(splitIntoChars("hi")).toEqual(["h", "i"]);
  });

  test('splitIntoChars works with longer strings', () => {
    expect(splitIntoChars("abc")).toEqual(["a", "b", "c"]);
  });

  test('output is correct', () => {
    const output = execSync('npx ts-node --esm src/index.ts', { encoding: 'utf-8' }).trim();
    expect(output).toContain('red');
    expect(output).toContain('green');
    expect(output).toContain('blue');
  });
});
