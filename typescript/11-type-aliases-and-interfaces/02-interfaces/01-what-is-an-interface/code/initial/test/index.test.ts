import { describe, it, expect } from "vitest";
import { formatProduct } from "../src/index.js";

describe("formatProduct", () => {
  it("should format an in-stock product", () => {
    expect(formatProduct({ name: "TypeScript Guide", price: 29, inStock: true }))
      .toBe("Name: TypeScript Guide, Price: $29, In Stock: Yes");
  });

  it("should format an out-of-stock product", () => {
    expect(formatProduct({ name: "Notebook", price: 5, inStock: false }))
      .toBe("Name: Notebook, Price: $5, In Stock: No");
  });

  it("should handle decimal prices", () => {
    expect(formatProduct({ name: "Pen", price: 1.5, inStock: true }))
      .toBe("Name: Pen, Price: $1.5, In Stock: Yes");
  });
});