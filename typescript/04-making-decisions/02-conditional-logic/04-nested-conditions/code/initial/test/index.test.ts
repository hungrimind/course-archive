import { describe, it, expect } from "vitest";
import { canRide } from "../src/index.js";

describe("canRide", () => {
  it("allows the ride when they have a ticket and are tall enough", () => {
    expect(canRide(true, 130)).toBe("Enjoy the ride!");
  });

  it("allows the ride at exactly 120 cm with a ticket", () => {
    expect(canRide(true, 120)).toBe("Enjoy the ride!");
  });

  it("rejects when they have a ticket but are too short", () => {
    expect(canRide(true, 100)).toBe("Too short!");
  });

  it("rejects when they have no ticket even if tall enough", () => {
    expect(canRide(false, 150)).toBe("No ticket!");
  });

  it("rejects when they have no ticket and are too short", () => {
    expect(canRide(false, 90)).toBe("No ticket!");
  });
});
