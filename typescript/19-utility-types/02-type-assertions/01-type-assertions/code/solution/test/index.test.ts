import { describe, it, expect } from "vitest";
import { getArea } from "../src/index.js";

describe("getArea", () => {
  it("should calculate circle area", () => {
    expect(getArea({ kind: "circle", radius: 5 })).toBe(78.54);
  });

  it("should calculate square area", () => {
    expect(getArea({ kind: "square", side: 4 })).toBe(16);
  });

  it("should handle circle with radius 1", () => {
    expect(getArea({ kind: "circle", radius: 1 })).toBe(3.14);
  });

  it("should handle square with side 10", () => {
    expect(getArea({ kind: "square", side: 10 })).toBe(100);
  });
});
