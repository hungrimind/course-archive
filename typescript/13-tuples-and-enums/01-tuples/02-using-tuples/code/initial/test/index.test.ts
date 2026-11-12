import { describe, it, expect } from "vitest";
import { createCoordinate, getUserInfo } from "../src/index.js";

describe("createCoordinate", () => {
  it("should return a tuple with two numbers", () => {
    const result = createCoordinate(10, 20);
    expect(result).toEqual([10, 20]);
  });

  it("should return the correct x and y values", () => {
    const [x, y] = createCoordinate(5, 15);
    expect(x).toBe(5);
    expect(y).toBe(15);
  });

  it("should handle negative numbers", () => {
    const result = createCoordinate(-3, -7);
    expect(result).toEqual([-3, -7]);
  });
});

describe("getUserInfo", () => {
  it("should return a tuple with three elements", () => {
    const result = getUserInfo();
    expect(result).toHaveLength(3);
  });

  it("should return a string, number, and boolean", () => {
    const [name, age, isActive] = getUserInfo();
    expect(typeof name).toBe("string");
    expect(typeof age).toBe("number");
    expect(typeof isActive).toBe("boolean");
  });

  it("should return the correct values", () => {
    const result = getUserInfo();
    expect(result).toEqual(["Alice", 30, true]);
  });
});
