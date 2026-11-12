import { describe, test, expect } from 'vitest';
import { Book } from '../src/index.js';

describe('Book', () => {
  test('constructor sets title property', () => {
    const book = new Book("The Hobbit", 310);
    expect(book.title).toBe("The Hobbit");
  });

  test('constructor sets pages property', () => {
    const book = new Book("Dune", 412);
    expect(book.pages).toBe(412);
  });

  test('each instance has its own values', () => {
    const book1 = new Book("The Hobbit", 310);
    const book2 = new Book("Dune", 412);
    expect(book1.title).toBe("The Hobbit");
    expect(book2.title).toBe("Dune");
  });

  test('handles different page counts', () => {
    const short = new Book("Novella", 90);
    const long = new Book("Epic", 1200);
    expect(short.pages).toBe(90);
    expect(long.pages).toBe(1200);
  });
});
