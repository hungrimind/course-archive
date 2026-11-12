import { describe, it, expect } from "vitest";
import { getDayType } from "../src/index.js";

describe("getDayType", () => {
  it("returns Early week for Monday", () => {
    expect(getDayType("Monday")).toBe("Early week");
  });

  it("returns Early week for Tuesday", () => {
    expect(getDayType("Tuesday")).toBe("Early week");
  });

  it("returns Almost weekend for Friday", () => {
    expect(getDayType("Friday")).toBe("Almost weekend!");
  });

  it("returns Some other day for Wednesday", () => {
    expect(getDayType("Wednesday")).toBe("Some other day");
  });

  it("returns Some other day for Sunday", () => {
    expect(getDayType("Sunday")).toBe("Some other day");
  });
});
