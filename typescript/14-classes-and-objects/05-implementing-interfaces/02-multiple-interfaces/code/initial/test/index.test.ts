import { describe, test, expect } from 'vitest';
import { Box } from '../src/index.js';

describe('Multiple Interfaces', () => {
  test('getSize returns width times height', () => {
    const box = new Box(3, 4);
    expect(box.getSize()).toBe(12);
  });

  test('describe returns formatted string', () => {
    const box = new Box(5, 10);
    expect(box.describe()).toBe('Box(5x10)');
  });

  test('Box has both getSize and describe methods', () => {
    const box = new Box(1, 1);
    expect(typeof box.getSize).toBe('function');
    expect(typeof box.describe).toBe('function');
  });

  test('getSize works with different dimensions', () => {
    const box = new Box(7, 8);
    expect(box.getSize()).toBe(56);
  });
});
