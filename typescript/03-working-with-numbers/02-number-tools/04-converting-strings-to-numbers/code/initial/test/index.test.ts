import { describe, test, expect } from 'vitest';
import { toNumber, addFromStrings } from '../src/index.js';

describe("Converting Strings to Numbers", () => {
  test("toNumber converts '42' to 42", () => {
    expect(toNumber("42")).toBe(42);
  });

  test("toNumber converts '3.14' to 3.14", () => {
    expect(toNumber("3.14")).toBe(3.14);
  });

  test("toNumber returns NaN for 'hello'", () => {
    expect(Number.isNaN(toNumber("hello"))).toBe(true);
  });

  test("addFromStrings adds two string numbers together", () => {
    expect(addFromStrings("10", "20")).toBe(30);
  });

  test("addFromStrings works with decimal strings", () => {
    expect(addFromStrings("1.5", "2.5")).toBe(4);
  });
});
