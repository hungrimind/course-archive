import { describe, test, expect } from 'vitest';
import { square } from '../src/index.js';

describe("Using Return Values", () => {
  test("square returns the number multiplied by itself", () => {
    expect(square(4)).toBe(16);
  });

  test("square works with other values", () => {
    expect(square(2)).toBe(4);
    expect(square(3)).toBe(9);
  });

  test("square of zero is zero", () => {
    expect(square(0)).toBe(0);
  });
});
