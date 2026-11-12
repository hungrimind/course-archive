import { describe, test, expect } from 'vitest';
import { countdown } from '../src/index.js';

describe("The While Loop", () => {
  test("countdown(3) returns correct sequence", () => {
    expect(countdown(3)).toEqual(["T-minus 3", "T-minus 2", "T-minus 1", "Liftoff!"]);
  });

  test("countdown(1) returns single countdown then liftoff", () => {
    expect(countdown(1)).toEqual(["T-minus 1", "Liftoff!"]);
  });

  test("countdown(0) returns only liftoff", () => {
    expect(countdown(0)).toEqual(["Liftoff!"]);
  });

  test("countdown(5) returns five counts then liftoff", () => {
    expect(countdown(5)).toEqual([
      "T-minus 5", "T-minus 4", "T-minus 3", "T-minus 2", "T-minus 1", "Liftoff!"
    ]);
  });
});
