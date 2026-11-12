import { describe, it, expect } from "vitest";
import { getLabel } from "../src/index.js";

describe("getLabel", () => {
  it("returns adult for age 20", () => {
    expect(getLabel(20)).toBe("adult");
  });

  it("returns adult for age 18", () => {
    expect(getLabel(18)).toBe("adult");
  });

  it("returns minor for age 17", () => {
    expect(getLabel(17)).toBe("minor");
  });

  it("returns minor for age 0", () => {
    expect(getLabel(0)).toBe("minor");
  });

  it("returns adult for age 100", () => {
    expect(getLabel(100)).toBe("adult");
  });
});
