import { describe, test, expect } from 'vitest';
import { Product } from '../src/index.js';

describe('Product', () => {
  test('sets title from constructor', () => {
    const product = new Product("Wireless Keyboard", 49.99);
    expect(product.title).toBe("Wireless Keyboard");
  });

  test('sets price from constructor', () => {
    const product = new Product("USB Cable", 9.99);
    expect(product.price).toBe(9.99);
  });

  test('inStock defaults to true', () => {
    const product = new Product("Wireless Keyboard", 49.99);
    expect(product.inStock).toBe(true);
  });

  test('different instances have different values', () => {
    const product1 = new Product("Wireless Keyboard", 49.99);
    const product2 = new Product("USB Cable", 9.99);
    expect(product1.title).toBe("Wireless Keyboard");
    expect(product2.title).toBe("USB Cable");
    expect(product1.price).not.toBe(product2.price);
  });
});
