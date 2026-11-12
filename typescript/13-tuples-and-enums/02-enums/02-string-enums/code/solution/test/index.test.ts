import { describe, it, expect } from "vitest";
import { Color, getColorLabel } from "../src/index.js";

describe("Color enum", () => {
  it("should have Red with value 'RED'", () => {
    expect(Color.Red).toBe("RED");
  });

  it("should have Green with value 'GREEN'", () => {
    expect(Color.Green).toBe("GREEN");
  });

  it("should have Blue with value 'BLUE'", () => {
    expect(Color.Blue).toBe("BLUE");
  });
});

describe("getColorLabel", () => {
  it("should return 'Red Color' for Color.Red", () => {
    expect(getColorLabel(Color.Red)).toBe("Red Color");
  });

  it("should return 'Green Color' for Color.Green", () => {
    expect(getColorLabel(Color.Green)).toBe("Green Color");
  });

  it("should return 'Blue Color' for Color.Blue", () => {
    expect(getColorLabel(Color.Blue)).toBe("Blue Color");
  });
});
