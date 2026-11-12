import { describe, test, expect } from 'vitest';
import { buildFullName } from '../src/index.js';

describe("Multiple Parameters", () => {
  test("buildFullName is a function", () => {
    expect(typeof buildFullName).toBe("function");
  });

  test("combines first and last name", () => {
    expect(buildFullName("Jane", "Doe")).toBe("Jane Doe");
  });

  test("works with different names", () => {
    expect(buildFullName("John", "Smith")).toBe("John Smith");
  });

  test("handles single-character names", () => {
    expect(buildFullName("A", "B")).toBe("A B");
  });
});
