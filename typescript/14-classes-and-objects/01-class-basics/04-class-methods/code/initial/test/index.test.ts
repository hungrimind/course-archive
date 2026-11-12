import { describe, test, expect } from 'vitest';
import { Counter } from '../src/index.js';

describe('Counter', () => {
  test('starts at 0', () => {
    const counter = new Counter();
    expect(counter.getCount()).toBe(0);
  });

  test('increment increases count by 1', () => {
    const counter = new Counter();
    counter.increment();
    counter.increment();
    expect(counter.getCount()).toBe(2);
  });

  test('decrement decreases count by 1', () => {
    const counter = new Counter();
    counter.increment();
    counter.increment();
    counter.decrement();
    expect(counter.getCount()).toBe(1);
  });

  test('decrement can go below 0', () => {
    const counter = new Counter();
    counter.decrement();
    expect(counter.getCount()).toBe(-1);
  });
});
