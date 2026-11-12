import { describe, test, expect } from 'vitest';
import { combineValues } from '../src/index.js';

describe("The await Keyword", () => {
  test("combines string and number values", async () => {
    const result = await combineValues(Promise.resolve("Score"), Promise.resolve(42));
    expect(result).toBe("Score: 42");
  });

  test("works with different values", async () => {
    const result = await combineValues(Promise.resolve("Age"), Promise.resolve(25));
    expect(result).toBe("Age: 25");
  });

  test("works with zero", async () => {
    const result = await combineValues(Promise.resolve("Count"), Promise.resolve(0));
    expect(result).toBe("Count: 0");
  });
});
