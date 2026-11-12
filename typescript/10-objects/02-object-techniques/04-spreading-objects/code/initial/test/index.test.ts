import { describe, test, expect } from 'vitest';
import { withUpdatedAge } from '../src/index.js';

describe('spreading objects', () => {
  test('returns a new object with updated age', () => {
    const result = withUpdatedAge({ name: "Alice", age: 30 }, 31);
    expect(result).toEqual({ name: "Alice", age: 31 });
  });

  test('does not modify the original object', () => {
    const original = { name: "Alice", age: 30 };
    withUpdatedAge(original, 31);
    expect(original.age).toBe(30);
  });

  test('preserves the name property', () => {
    const result = withUpdatedAge({ name: "Bob", age: 25 }, 26);
    expect(result.name).toBe("Bob");
  });

  test('returns a different object reference', () => {
    const original = { name: "Alice", age: 30 };
    const result = withUpdatedAge(original, 31);
    expect(result).not.toBe(original);
  });
});
