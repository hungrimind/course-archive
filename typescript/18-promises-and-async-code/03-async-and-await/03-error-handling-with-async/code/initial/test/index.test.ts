import { describe, test, expect } from 'vitest';
import { safeAwait } from '../src/index.js';

describe("Error Handling with Async", () => {
  test("returns the resolved value on success", async () => {
    const result = await safeAwait(Promise.resolve("data"));
    expect(result).toBe("data");
  });

  test("returns error message on rejection", async () => {
    const result = await safeAwait(Promise.reject("something failed"));
    expect(result).toBe("Error occurred");
  });

  test("returns error message for Error objects", async () => {
    const result = await safeAwait(Promise.reject(new Error("network error")));
    expect(result).toBe("Error occurred");
  });

  test("never rejects", async () => {
    const result = await safeAwait(Promise.reject("fail"));
    expect(typeof result).toBe("string");
  });
});
