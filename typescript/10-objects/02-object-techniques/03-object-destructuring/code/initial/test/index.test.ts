import { describe, test, expect } from 'vitest';
import { introduce } from '../src/index.js';

describe('object destructuring', () => {
  test('returns formatted introduction string', () => {
    expect(introduce({ name: "Alice", age: 30, city: "Oslo" })).toBe("Alice is 30");
  });

  test('works with different values', () => {
    expect(introduce({ name: "Bob", age: 25, city: "London" })).toBe("Bob is 25");
  });

  test('ignores the city property', () => {
    expect(introduce({ name: "Charlie", age: 40, city: "Berlin" })).toBe("Charlie is 40");
  });
});
