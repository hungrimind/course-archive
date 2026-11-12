import { describe, test, expect } from 'vitest';
import { updatePerson } from '../src/index.js';

describe('modifying properties', () => {
  test('updates name property', () => {
    const person = { name: "Alice", age: 30 };
    updatePerson(person, "Bob", 31);
    expect(person.name).toBe("Bob");
  });

  test('updates age property', () => {
    const person = { name: "Alice", age: 30 };
    updatePerson(person, "Charlie", 25);
    expect(person.age).toBe(25);
  });

  test('returns the modified object', () => {
    const person = { name: "Alice", age: 30 };
    const result = updatePerson(person, "Diana", 28);
    expect(result).toEqual({ name: "Diana", age: 28 });
  });

  test('modifies the original object', () => {
    const person = { name: "Eve", age: 22 };
    updatePerson(person, "Frank", 35);
    expect(person.name).toBe("Frank");
    expect(person.age).toBe(35);
  });
});
