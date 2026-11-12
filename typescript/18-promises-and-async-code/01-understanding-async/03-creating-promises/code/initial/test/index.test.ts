import { describe, test, expect } from 'vitest';
import { makePromise, makeRejectedPromise } from '../src/index.js';

describe("Creating Promises", () => {
  test("makePromise resolves with the given value", async () => {
    const result = await makePromise("hello");
    expect(result).toBe("hello");
  });

  test("makePromise resolves with a different value", async () => {
    const result = await makePromise("world");
    expect(result).toBe("world");
  });

  test("makeRejectedPromise rejects with the given reason", async () => {
    await expect(makeRejectedPromise("something went wrong")).rejects.toBe("something went wrong");
  });

  test("makeRejectedPromise rejects with a different reason", async () => {
    await expect(makeRejectedPromise("network error")).rejects.toBe("network error");
  });
});
