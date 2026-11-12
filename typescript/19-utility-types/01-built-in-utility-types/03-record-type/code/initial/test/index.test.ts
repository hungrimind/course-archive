import { describe, it, expect } from "vitest";
import { buildPriceList, getPrice } from "../src/index.js";

describe("buildPriceList", () => {
  it("should create a record with all three fruits", () => {
    const result = buildPriceList(1.2, 0.5, 0.8);
    expect(result).toEqual({ apple: 1.2, banana: 0.5, orange: 0.8 });
  });

  it("should handle different prices", () => {
    const result = buildPriceList(3, 2, 1);
    expect(result).toEqual({ apple: 3, banana: 2, orange: 1 });
  });
});

describe("getPrice", () => {
  it("should format the price for apple", () => {
    const prices = buildPriceList(1.2, 0.5, 0.8);
    expect(getPrice(prices, "apple")).toBe("apple: $1.2");
  });

  it("should format the price for banana", () => {
    const prices = buildPriceList(1.2, 0.5, 0.8);
    expect(getPrice(prices, "banana")).toBe("banana: $0.5");
  });

  it("should format the price for orange", () => {
    const prices = buildPriceList(1.2, 0.5, 0.8);
    expect(getPrice(prices, "orange")).toBe("orange: $0.8");
  });
});
