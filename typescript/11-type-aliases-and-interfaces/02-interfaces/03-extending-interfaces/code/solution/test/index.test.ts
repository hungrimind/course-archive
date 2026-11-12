import { describe, it, expect } from "vitest";
import { introduce } from "../src/index.js";

describe("introduce", () => {
  it("should introduce Sam at Acme", () => {
    expect(introduce({ name: "Sam", age: 28, company: "Acme" }))
      .toBe("Hi, I'm Sam, age 28, working at Acme");
  });

  it("should introduce another employee", () => {
    expect(introduce({ name: "Alex", age: 35, company: "Globex" }))
      .toBe("Hi, I'm Alex, age 35, working at Globex");
  });
});