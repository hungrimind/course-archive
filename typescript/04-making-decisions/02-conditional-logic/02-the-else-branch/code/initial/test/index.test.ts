import { describe, it, expect } from "vitest";
import { checkAge } from "../src/index.js";

describe("checkAge", () => {
  it("returns welcome for age 20", () => {
    expect(checkAge(20)).toBe("Welcome in!");
  });

  it("returns welcome for age 18", () => {
    expect(checkAge(18)).toBe("Welcome in!");
  });

  it("returns sorry for age 17", () => {
    expect(checkAge(17)).toBe("Sorry, adults only.");
  });

  it("returns sorry for age 15", () => {
    expect(checkAge(15)).toBe("Sorry, adults only.");
  });

  it("returns sorry for age 0", () => {
    expect(checkAge(0)).toBe("Sorry, adults only.");
  });
});
