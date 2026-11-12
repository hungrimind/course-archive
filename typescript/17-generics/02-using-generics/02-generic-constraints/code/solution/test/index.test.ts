import { describe, test, expect } from 'vitest';
import { getLabel } from '../src/index.js';

describe('getLabel', () => {
  test('returns label from a simple object', () => {
    expect(getLabel({ label: "hello" })).toBe("hello");
  });

  test('returns label from an object with extra properties', () => {
    expect(getLabel({ label: "world", id: 1 })).toBe("world");
  });

  test('returns an empty string label', () => {
    expect(getLabel({ label: "" })).toBe("");
  });

  test('returns label from an object with many properties', () => {
    expect(getLabel({ label: "item", price: 9.99, inStock: true })).toBe("item");
  });
});
