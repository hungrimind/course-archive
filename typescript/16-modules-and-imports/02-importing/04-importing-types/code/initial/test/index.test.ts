import { describe, test, expect } from 'vitest';
import { formatCoordinate, distance, translate } from '../src/index.js';
import type { Coordinate } from '../src/index.js';

describe('Coordinate Type', () => {
  test('formatCoordinate returns "(x, y)" string', () => {
    const coord: Coordinate = { x: 3, y: 4 };
    expect(formatCoordinate(coord)).toBe("(3, 4)");
  });

  test('distance calculates Euclidean distance between two points', () => {
    const a: Coordinate = { x: 0, y: 0 };
    const b: Coordinate = { x: 3, y: 4 };
    expect(distance(a, b)).toBe(5);
  });

  test('translate shifts a coordinate by dx and dy', () => {
    const coord: Coordinate = { x: 1, y: 2 };
    const result = translate(coord, 10, -5);
    expect(result).toEqual({ x: 11, y: -3 });
  });

  test('distance returns 0 for the same point', () => {
    const p: Coordinate = { x: 7, y: 7 };
    expect(distance(p, p)).toBe(0);
  });
});
