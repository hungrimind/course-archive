import { describe, test, expect } from 'vitest';
import { fetchProduct, getProductLabel } from '../src/index.js';

describe("Promise Typing", () => {
  test("fetchProduct returns a Product object", async () => {
    const product = await fetchProduct("Keyboard", 49.99);
    expect(product).toEqual({ name: "Keyboard", price: 49.99 });
  });

  test("fetchProduct returns correct types", async () => {
    const product = await fetchProduct("Mouse", 25);
    expect(typeof product.name).toBe("string");
    expect(typeof product.price).toBe("number");
  });

  test("getProductLabel formats the label correctly", async () => {
    const label = await getProductLabel(fetchProduct("Keyboard", 49.99));
    expect(label).toBe("Keyboard - $49.99");
  });

  test("getProductLabel works with a raw promise", async () => {
    const label = await getProductLabel(Promise.resolve({ name: "Monitor", price: 299 }));
    expect(label).toBe("Monitor - $299");
  });
});
