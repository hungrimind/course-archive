import { describe, test, expect } from 'vitest';
import { multiply, isEven } from '../src/index.js';

describe("Return Type Annotations", () => {
  test("multiply returns the product of two numbers", () => {
    expect(multiply(4, 5)).toBe(20);
    expect(multiply(0, 100)).toBe(0);
    expect(multiply(-2, 3)).toBe(-6);
  });

  test("isEven returns true for even numbers", () => {
    expect(isEven(10)).toBe(true);
    expect(isEven(0)).toBe(true);
  });

  test("isEven returns false for odd numbers", () => {
    expect(isEven(7)).toBe(false);
    expect(isEven(1)).toBe(false);
  });
});
