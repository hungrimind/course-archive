import { describe, test, expect } from 'vitest';
import { createBook } from '../src/index.js';

describe('returning objects', () => {
  test('returns an object with the correct title', () => {
    const book = createBook("The Hobbit", "J.R.R. Tolkien", 310);
    expect(book.title).toBe("The Hobbit");
  });

  test('returns an object with the correct author', () => {
    const book = createBook("The Hobbit", "J.R.R. Tolkien", 310);
    expect(book.author).toBe("J.R.R. Tolkien");
  });

  test('returns an object with the correct pages', () => {
    const book = createBook("The Hobbit", "J.R.R. Tolkien", 310);
    expect(book.pages).toBe(310);
  });

  test('sets available to true', () => {
    const book = createBook("Dune", "Frank Herbert", 412);
    expect(book.available).toBe(true);
  });

  test('works with different inputs', () => {
    const book = createBook("1984", "George Orwell", 328);
    expect(book).toEqual({ title: "1984", author: "George Orwell", pages: 328, available: true });
  });
});
