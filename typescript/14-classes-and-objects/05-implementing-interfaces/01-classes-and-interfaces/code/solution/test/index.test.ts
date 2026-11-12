import { describe, test, expect } from 'vitest';
import { Circle, Drawable } from '../src/index.js';

describe('Classes and Interfaces', () => {
  test('Circle implements draw method', () => {
    const circle = new Circle(5);
    expect(circle.draw()).toBe("Drawing circle with radius 5");
  });

  test('Circle stores radius', () => {
    const circle = new Circle(10);
    expect(circle.radius).toBe(10);
  });

  test('draw returns correct format for decimal radius', () => {
    const circle = new Circle(3.5);
    expect(circle.draw()).toBe("Drawing circle with radius 3.5");
  });

  test('Circle satisfies Drawable interface', () => {
    const shape: Drawable = new Circle(1);
    expect(shape.draw()).toBe("Drawing circle with radius 1");
  });
});
