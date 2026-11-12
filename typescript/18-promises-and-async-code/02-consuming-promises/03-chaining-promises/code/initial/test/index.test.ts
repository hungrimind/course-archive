import { describe, test, expect } from 'vitest';
import { processName } from '../src/index.js';

describe("Chaining Promises", () => {
  test("trims, uppercases, and greets", async () => {
    const result = await processName(Promise.resolve("  alice  "));
    expect(result).toBe("Hello, ALICE");
  });

  test("works with no extra whitespace", async () => {
    const result = await processName(Promise.resolve("bob"));
    expect(result).toBe("Hello, BOB");
  });

  test("works with mixed case input", async () => {
    const result = await processName(Promise.resolve(" Charlie "));
    expect(result).toBe("Hello, CHARLIE");
  });
});
