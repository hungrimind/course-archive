import { describe, test, expect } from "vitest";
import {
  classifyError,
  TemporaryError,
  PermanentError,
} from "../src/index.js";

describe("classifyError", () => {
  test("classifies a TemporaryError with retry info", () => {
    const err = new TemporaryError(30, "Service unavailable");
    expect(classifyError(err)).toBe("Retry after 30s: Service unavailable");
  });

  test("classifies a PermanentError with code", () => {
    const err = new PermanentError("FORBIDDEN", "Access denied");
    expect(classifyError(err)).toBe("Fatal [FORBIDDEN]: Access denied");
  });

  test("classifies a generic Error", () => {
    const err = new Error("Something broke");
    expect(classifyError(err)).toBe("Unknown: Something broke");
  });

  test("classifies a TemporaryError with different values", () => {
    const err = new TemporaryError(5, "Rate limited");
    expect(classifyError(err)).toBe("Retry after 5s: Rate limited");
  });
});
