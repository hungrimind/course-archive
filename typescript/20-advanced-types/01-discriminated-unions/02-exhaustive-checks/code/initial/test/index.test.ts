import { describe, test, expect } from "vitest";
import { getAction } from "../src/index.js";

describe("getAction with exhaustive check", () => {
  test("returns stop for red", () => {
    expect(getAction({ state: "red" })).toBe("stop");
  });

  test("returns caution for yellow", () => {
    expect(getAction({ state: "yellow" })).toBe("caution");
  });

  test("returns go for green", () => {
    expect(getAction({ state: "green" })).toBe("go");
  });
});
