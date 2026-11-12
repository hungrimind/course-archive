import { describe, test, expect } from 'vitest';
import { fetchMessage } from '../src/index.js';

describe("Async Functions", () => {
  test("fetchMessage returns a promise", () => {
    const result = fetchMessage("weather");
    expect(result).toBeInstanceOf(Promise);
  });

  test("fetchMessage resolves with correct message", async () => {
    const result = await fetchMessage("weather");
    expect(result).toBe("Latest update on weather");
  });

  test("fetchMessage works with a different topic", async () => {
    const result = await fetchMessage("sports");
    expect(result).toBe("Latest update on sports");
  });

  test("fetchMessage handles an empty topic", async () => {
    const result = await fetchMessage("");
    expect(result).toBe("Latest update on ");
  });
});
