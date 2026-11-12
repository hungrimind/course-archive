import { describe, test, expect } from 'vitest';
import { parseProduct, safeParseProduct } from '../src/index.js';

describe('parseProduct', () => {
  test('parses valid JSON into a Product', () => {
    const product = parseProduct('{"name": "Laptop", "price": 999}');
    expect(product).toEqual({ name: "Laptop", price: 999 });
  });

  test('returns correct name and price', () => {
    const product = parseProduct('{"name": "Phone", "price": 699}');
    expect(product.name).toBe("Phone");
    expect(product.price).toBe(699);
  });
});

describe('safeParseProduct', () => {
  test('returns Product for valid data', () => {
    const result = safeParseProduct('{"name": "Tablet", "price": 450}');
    expect(result).toEqual({ name: "Tablet", price: 450 });
  });

  test('returns null for invalid shape', () => {
    expect(safeParseProduct('{"name": true}')).toBeNull();
  });

  test('returns null for invalid JSON string', () => {
    expect(safeParseProduct("not json")).toBeNull();
  });

  test('returns null when price is missing', () => {
    expect(safeParseProduct('{"name": "Laptop"}')).toBeNull();
  });
});
