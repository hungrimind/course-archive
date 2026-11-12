import { describe, test, expect } from 'vitest';
import { celebrate } from '../src/index.js';

describe("Function Parameters", () => {
  test("celebrate is a function", () => {
    expect(typeof celebrate).toBe("function");
  });

  test("celebrate('Alice') returns 'Alice wins!'", () => {
    expect(celebrate("Alice")).toBe("Alice wins!");
  });

  test("celebrate('Bob') returns 'Bob wins!'", () => {
    expect(celebrate("Bob")).toBe("Bob wins!");
  });

  test("celebrate('TypeScript') returns 'TypeScript wins!'", () => {
    expect(celebrate("TypeScript")).toBe("TypeScript wins!");
  });
});
