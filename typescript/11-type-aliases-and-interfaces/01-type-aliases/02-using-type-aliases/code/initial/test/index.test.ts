import { describe, it, expect } from "vitest";
import { perimeter, area } from "../src/index.js";

describe("perimeter", () => {
  it("should return 14 for a 3x4 rectangle", () => {
    expect(perimeter({ width: 3, height: 4 })).toBe(14);
  });

  it("should return 20 for a 5x5 square", () => {
    expect(perimeter({ width: 5, height: 5 })).toBe(20);
  });
});

describe("area", () => {
  it("should return 12 for a 3x4 rectangle", () => {
    expect(area({ width: 3, height: 4 })).toBe(12);
  });

  it("should return 25 for a 5x5 square", () => {
    expect(area({ width: 5, height: 5 })).toBe(25);
  });
});
