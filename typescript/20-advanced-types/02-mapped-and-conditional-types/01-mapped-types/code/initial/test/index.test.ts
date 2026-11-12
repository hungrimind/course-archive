import { describe, test, expect } from "vitest";
import { createFlags } from "../src/index.js";

describe("createFlags", () => {
  test("converts all properties to true", () => {
    const user = { name: "Alice", age: 30 };
    expect(createFlags(user, true)).toEqual({ name: true, age: true });
  });

  test("converts all properties to false", () => {
    const user = { name: "Bob", age: 25 };
    expect(createFlags(user, false)).toEqual({ name: false, age: false });
  });

  test("works with different object shapes", () => {
    const config = { debug: "yes", verbose: "no", color: "red" };
    expect(createFlags(config, true)).toEqual({
      debug: true,
      verbose: true,
      color: true,
    });
  });

  test("returns correct keys", () => {
    const obj = { x: 1, y: 2 };
    const flags = createFlags(obj, false);
    expect(Object.keys(flags)).toEqual(["x", "y"]);
  });
});
