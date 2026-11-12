import { describe, test, expect } from "vitest";
import { isFish, move, Fish, Bird } from "../src/index.js";

describe("isFish", () => {
  test("returns true for fish", () => {
    const fish: Fish = { swim: () => "Swimming!" };
    expect(isFish(fish)).toBe(true);
  });

  test("returns false for bird", () => {
    const bird: Bird = { fly: () => "Flying!" };
    expect(isFish(bird)).toBe(false);
  });
});

describe("move", () => {
  test("fish swims", () => {
    const fish: Fish = { swim: () => "Swimming!" };
    expect(move(fish)).toBe("Swimming!");
  });

  test("bird flies", () => {
    const bird: Bird = { fly: () => "Flying!" };
    expect(move(bird)).toBe("Flying!");
  });
});
