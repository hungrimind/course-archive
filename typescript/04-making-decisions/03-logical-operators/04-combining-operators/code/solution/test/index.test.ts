import { describe, it, expect } from "vitest";
import { canEdit } from "../src/index.js";

describe("canEdit", () => {
  it("returns true for active admin not banned", () => {
    expect(canEdit("admin", true, false)).toBe(true);
  });

  it("returns true for active editor not banned", () => {
    expect(canEdit("editor", true, false)).toBe(true);
  });

  it("returns false for viewer", () => {
    expect(canEdit("viewer", true, false)).toBe(false);
  });

  it("returns false for inactive admin", () => {
    expect(canEdit("admin", false, false)).toBe(false);
  });

  it("returns false for banned editor", () => {
    expect(canEdit("editor", true, true)).toBe(false);
  });

  it("returns false for banned inactive admin", () => {
    expect(canEdit("admin", false, true)).toBe(false);
  });
});
