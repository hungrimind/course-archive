import { describe, it, expect } from "vitest";
import { createProduct, formatProduct } from "../src/index.js";

describe("createProduct", () => {
  it("should return an object with name, price, and inStock", () => {
    const product = createProduct();
    expect(product).toEqual({ name: "Widget", price: 9.99, inStock: true });
  });
});

describe("formatProduct", () => {
  it("should format the product as name - $price", () => {
    const result = formatProduct({ name: "Widget", price: 9.99, inStock: true });
    expect(result).toBe("Widget - $9.99");
  });

  it("should work with different product values", () => {
    const result = formatProduct({ name: "Gadget", price: 19.5, inStock: false });
    expect(result).toBe("Gadget - $19.5");
  });
});
