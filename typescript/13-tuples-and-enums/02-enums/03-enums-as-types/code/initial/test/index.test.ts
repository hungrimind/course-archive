import { describe, it, expect } from "vitest";
import { Role, getPermissionLevel, canEdit } from "../src/index.js";

describe("Role enum", () => {
  it("should have Admin with value 'ADMIN'", () => {
    expect(Role.Admin).toBe("ADMIN");
  });

  it("should have Editor with value 'EDITOR'", () => {
    expect(Role.Editor).toBe("EDITOR");
  });

  it("should have Viewer with value 'VIEWER'", () => {
    expect(Role.Viewer).toBe("VIEWER");
  });
});

describe("getPermissionLevel", () => {
  it("should return 3 for Admin", () => {
    expect(getPermissionLevel(Role.Admin)).toBe(3);
  });

  it("should return 2 for Editor", () => {
    expect(getPermissionLevel(Role.Editor)).toBe(2);
  });

  it("should return 1 for Viewer", () => {
    expect(getPermissionLevel(Role.Viewer)).toBe(1);
  });
});

describe("canEdit", () => {
  it("should return true for Admin", () => {
    expect(canEdit(Role.Admin)).toBe(true);
  });

  it("should return true for Editor", () => {
    expect(canEdit(Role.Editor)).toBe(true);
  });

  it("should return false for Viewer", () => {
    expect(canEdit(Role.Viewer)).toBe(false);
  });
});
