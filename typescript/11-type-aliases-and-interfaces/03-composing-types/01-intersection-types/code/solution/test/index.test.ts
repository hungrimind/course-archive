import { describe, it, expect } from "vitest";
import { summarize } from "../src/index.js";

describe("summarize", () => {
  it("should summarize Sam as dev at Acme", () => {
    expect(summarize({ name: "Sam", age: 28, company: "Acme", role: "dev" }))
      .toBe("Sam is a dev at Acme");
  });

  it("should summarize another employee", () => {
    expect(summarize({ name: "Lisa", age: 40, company: "Globex", role: "manager" }))
      .toBe("Lisa is a manager at Globex");
  });
});