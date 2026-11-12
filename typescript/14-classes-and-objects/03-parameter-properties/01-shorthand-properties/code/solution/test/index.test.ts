import { describe, test, expect } from 'vitest';
import { Movie } from '../src/index.js';

describe('Movie with parameter properties', () => {
  test('title is publicly accessible', () => {
    const movie = new Movie("Inception", 8.8, 2010);
    expect(movie.title).toBe("Inception");
  });

  test('rating is accessible via getRating method', () => {
    const movie = new Movie("Inception", 8.8, 2010);
    expect(movie.getRating()).toBe(8.8);
  });

  test('year is readonly and accessible', () => {
    const movie = new Movie("Inception", 8.8, 2010);
    expect(movie.year).toBe(2010);
  });

  test('constructor assigns all properties correctly', () => {
    const movie = new Movie("The Matrix", 9.0, 1999);
    expect(movie.title).toBe("The Matrix");
    expect(movie.getRating()).toBe(9.0);
    expect(movie.year).toBe(1999);
  });
});
