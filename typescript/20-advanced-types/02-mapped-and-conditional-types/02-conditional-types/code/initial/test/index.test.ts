import { describe, test, expect } from "vitest";
import { classify } from "../src/index.js";

describe("classify", () => {
  test("returns 'text' for strings", () => {
    expect(classify("hello")).toBe("text");
  });

  test("returns 'other' for numbers", () => {
    expect(classify(42)).toBe("other");
  });

  test("returns 'other' for booleans", () => {
    expect(classify(true)).toBe("other");
  });

  test("returns 'text' for empty string", () => {
    expect(classify("")).toBe("text");
  });

  test("returns 'other' for null", () => {
    expect(classify(null)).toBe("other");
  });
});
