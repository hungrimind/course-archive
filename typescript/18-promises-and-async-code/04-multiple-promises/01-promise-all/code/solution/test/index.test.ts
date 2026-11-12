import { describe, test, expect } from 'vitest';
import { fetchAll } from '../src/index.js';

describe("Promise.all", () => {
  test("joins three resolved values", async () => {
    const result = await fetchAll(
      Promise.resolve("one"),
      Promise.resolve("two"),
      Promise.resolve("three")
    );
    expect(result).toBe("one, two, three");
  });

  test("works with different values", async () => {
    const result = await fetchAll(
      Promise.resolve("Alice"),
      Promise.resolve("Bob"),
      Promise.resolve("Charlie")
    );
    expect(result).toBe("Alice, Bob, Charlie");
  });

  test("rejects if any promise rejects", async () => {
    await expect(
      fetchAll(
        Promise.resolve("ok"),
        Promise.reject("fail"),
        Promise.resolve("ok")
      )
    ).rejects.toBe("fail");
  });
});
