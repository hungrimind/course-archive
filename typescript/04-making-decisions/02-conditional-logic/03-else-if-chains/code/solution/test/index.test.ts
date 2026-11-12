import { describe, it, expect } from "vitest";
import { getGrade } from "../src/index.js";

describe("getGrade", () => {
  it("returns A for score 95", () => {
    expect(getGrade(95)).toBe("A");
  });

  it("returns A for score 90", () => {
    expect(getGrade(90)).toBe("A");
  });

  it("returns B for score 85", () => {
    expect(getGrade(85)).toBe("B");
  });

  it("returns C for score 75", () => {
    expect(getGrade(75)).toBe("C");
  });

  it("returns F for score 60", () => {
    expect(getGrade(60)).toBe("F");
  });

  it("returns C for score 70", () => {
    expect(getGrade(70)).toBe("C");
  });
});
