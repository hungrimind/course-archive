import { describe, it, expect } from "vitest";
import { getPreview, getSafeUser } from "../src/index.js";

const user = { name: "Alice", age: 30, email: "alice@example.com", password: "secret123" };

describe("getPreview", () => {
  it("should return only name and age", () => {
    const result = getPreview(user);
    expect(result).toEqual({ name: "Alice", age: 30 });
  });

  it("should not include email or password", () => {
    const result = getPreview(user) as Record<string, unknown>;
    expect(result).not.toHaveProperty("email");
    expect(result).not.toHaveProperty("password");
  });
});

describe("getSafeUser", () => {
  it("should return user without password", () => {
    const result = getSafeUser(user);
    expect(result).toEqual({ name: "Alice", age: 30, email: "alice@example.com" });
  });

  it("should not include password", () => {
    const result = getSafeUser(user) as Record<string, unknown>;
    expect(result).not.toHaveProperty("password");
  });
});
