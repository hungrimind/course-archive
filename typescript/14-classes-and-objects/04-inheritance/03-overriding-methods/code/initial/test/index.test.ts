import { describe, test, expect } from 'vitest';
import { Formatter, UpperFormatter } from '../src/index.js';

describe('Overriding methods', () => {
  test('Formatter returns text unchanged', () => {
    const f = new Formatter();
    expect(f.format("hello")).toBe("hello");
  });

  test('UpperFormatter returns text in uppercase', () => {
    const uf = new UpperFormatter();
    expect(uf.format("hello")).toBe("HELLO");
  });

  test('UpperFormatter is an instance of Formatter', () => {
    const uf = new UpperFormatter();
    expect(uf instanceof Formatter).toBe(true);
  });

  test('UpperFormatter handles mixed case input', () => {
    const uf = new UpperFormatter();
    expect(uf.format("Hello World")).toBe("HELLO WORLD");
  });
});
