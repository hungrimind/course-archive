import { describe, test, expect } from 'vitest';
import { getName, getAge } from '../src/index.js';

describe('accessing properties', () => {
  test('getName returns the name property', () => {
    expect(getName({ name: "Alice", age: 30 })).toBe("Alice");
  });

  test('getName works with different values', () => {
    expect(getName({ name: "Bob", age: 25 })).toBe("Bob");
  });

  test('getAge returns the age property', () => {
    expect(getAge({ name: "Alice", age: 30 })).toBe(30);
  });

  test('getAge works with different values', () => {
    expect(getAge({ name: "Bob", age: 25 })).toBe(25);
  });
});
