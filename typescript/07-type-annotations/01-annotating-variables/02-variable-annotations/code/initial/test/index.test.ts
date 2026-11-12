import { describe, test, expect } from 'vitest';
import { age, username, isActive } from '../src/index.js';

describe("Variable Annotations", () => {
  test("age is a number with value 25", () => {
    expect(age).toBe(25);
    expect(typeof age).toBe("number");
  });

  test("username is a string with value Ada", () => {
    expect(username).toBe("Ada");
    expect(typeof username).toBe("string");
  });

  test("isActive is a boolean with value true", () => {
    expect(isActive).toBe(true);
    expect(typeof isActive).toBe("boolean");
  });
});
