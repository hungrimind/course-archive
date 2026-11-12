import { describe, test, expect } from 'vitest';
import { PI, circleArea } from '../src/index.js';

describe('Named Exports', () => {
  test('PI is exported and equals 3.14159', () => {
    expect(PI).toBe(3.14159);
  });

  test('circleArea returns correct area for radius 1', () => {
    expect(circleArea(1)).toBeCloseTo(3.14159);
  });

  test('circleArea returns correct area for radius 5', () => {
    expect(circleArea(5)).toBeCloseTo(78.53975);
  });

  test('circleArea returns 0 for radius 0', () => {
    expect(circleArea(0)).toBe(0);
  });
});
