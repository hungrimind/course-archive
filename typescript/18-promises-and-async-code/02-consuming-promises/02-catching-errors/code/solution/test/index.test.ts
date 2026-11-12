import { describe, test, expect } from 'vitest';
import { safeFetch } from '../src/index.js';

describe("Catching Errors", () => {
  test("returns the resolved value when promise succeeds", async () => {
    const result = await safeFetch(Promise.resolve("data"));
    expect(result).toBe("data");
  });

  test("returns fallback when promise rejects", async () => {
    const result = await safeFetch(Promise.reject("error"));
    expect(result).toBe("fallback");
  });

  test("returns fallback for any rejection reason", async () => {
    const result = await safeFetch(Promise.reject(new Error("network error")));
    expect(result).toBe("fallback");
  });
});
