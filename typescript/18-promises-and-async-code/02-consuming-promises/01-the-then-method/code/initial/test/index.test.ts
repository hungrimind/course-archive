import { describe, test, expect } from 'vitest';
import { addExcitement } from '../src/index.js';

describe("The then Method", () => {
  test("appends ! to the resolved value", async () => {
    const result = await addExcitement(Promise.resolve("Hello"));
    expect(result).toBe("Hello!");
  });

  test("works with a different string", async () => {
    const result = await addExcitement(Promise.resolve("TypeScript"));
    expect(result).toBe("TypeScript!");
  });

  test("works with an empty string", async () => {
    const result = await addExcitement(Promise.resolve(""));
    expect(result).toBe("!");
  });
});
