import { describe, it, expect } from "vitest";
import { checkTemperature } from "../src/index.js";

describe("checkTemperature", () => {
  it("returns hot for 35", () => {
    expect(checkTemperature(35)).toBe("hot");
  });

  it("returns hot for 31", () => {
    expect(checkTemperature(31)).toBe("hot");
  });

  it("returns not hot for 30", () => {
    expect(checkTemperature(30)).toBe("not hot");
  });

  it("returns not hot for 25", () => {
    expect(checkTemperature(25)).toBe("not hot");
  });

  it("returns not hot for 0", () => {
    expect(checkTemperature(0)).toBe("not hot");
  });
});
