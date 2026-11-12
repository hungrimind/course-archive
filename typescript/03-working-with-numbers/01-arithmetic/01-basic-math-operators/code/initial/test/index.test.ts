import { describe, test, expect } from 'vitest';
import { add, subtract, multiply, divide } from '../src/index.js';

describe("Basic Math Operators", () => {
  test("add returns the sum of two numbers", () => {
    expect(add(10, 5)).toBe(15);
  });

  test("subtract returns the difference of two numbers", () => {
    expect(subtract(20, 7)).toBe(13);
  });

  test("multiply returns the product of two numbers", () => {
    expect(multiply(3, 4)).toBe(12);
  });

  test("divide returns the quotient of two numbers", () => {
    expect(divide(100, 4)).toBe(25);
  });

  test("divide returns a decimal when numbers don't divide evenly", () => {
    expect(divide(7, 2)).toBe(3.5);
  });
});
