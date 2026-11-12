import { describe, test, expect } from 'vitest';
import { formatMovie } from '../src/index.js';

describe('objects as parameters', () => {
  test('formats a movie with title and year', () => {
    expect(formatMovie({ title: "Inception", year: 2010 })).toBe("Inception (2010)");
  });

  test('works with a different movie', () => {
    expect(formatMovie({ title: "The Matrix", year: 1999 })).toBe("The Matrix (1999)");
  });

  test('handles an older movie', () => {
    expect(formatMovie({ title: "Casablanca", year: 1942 })).toBe("Casablanca (1942)");
  });

  test('handles a recent movie', () => {
    expect(formatMovie({ title: "Dune", year: 2021 })).toBe("Dune (2021)");
  });
});
