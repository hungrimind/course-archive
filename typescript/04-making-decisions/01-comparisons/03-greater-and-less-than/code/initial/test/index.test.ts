import { describe, it, expect } from "vitest";
import { checkScore } from "../src/index.js";

describe("checkScore", () => {
  it("returns passing for score of 85", () => {
    expect(checkScore(85)).toBe("passing");
  });

  it("returns passing for score of exactly 70", () => {
    expect(checkScore(70)).toBe("passing");
  });

  it("returns failing for score of 69", () => {
    expect(checkScore(69)).toBe("failing");
  });

  it("returns invalid for score of 101", () => {
    expect(checkScore(101)).toBe("invalid");
  });

  it("returns failing for score of 0", () => {
    expect(checkScore(0)).toBe("failing");
  });

  it("returns passing for score of 100", () => {
    expect(checkScore(100)).toBe("passing");
  });
});
