import { describe, test, expect } from 'vitest';
import Formatter from '../src/index.js';

describe('Default Export - Formatter', () => {
  test('Formatter can be instantiated', () => {
    const fmt = new Formatter();
    expect(fmt).toBeInstanceOf(Formatter);
  });

  test('uppercase returns text in all caps', () => {
    const fmt = new Formatter();
    expect(fmt.uppercase('hello')).toBe('HELLO');
  });

  test('uppercase handles mixed case input', () => {
    const fmt = new Formatter();
    expect(fmt.uppercase('Hello World')).toBe('HELLO WORLD');
  });

  test('wrap surrounds text with the wrapper string', () => {
    const fmt = new Formatter();
    expect(fmt.wrap('hello', '***')).toBe('***hello***');
  });

  test('wrap works with single character wrapper', () => {
    const fmt = new Formatter();
    expect(fmt.wrap('title', '-')).toBe('-title-');
  });
});
