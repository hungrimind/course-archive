import { describe, test, expect } from "vitest";
import { applyShade } from "../src/index.js";

describe("applyShade", () => {
  test("applies light-red shade", () => {
    expect(applyShade("light-red")).toBe("Applying light-red");
  });

  test("applies dark-blue shade", () => {
    expect(applyShade("dark-blue")).toBe("Applying dark-blue");
  });

  test("applies light-blue shade", () => {
    expect(applyShade("light-blue")).toBe("Applying light-blue");
  });

  test("applies dark-red shade", () => {
    expect(applyShade("dark-red")).toBe("Applying dark-red");
  });
});
