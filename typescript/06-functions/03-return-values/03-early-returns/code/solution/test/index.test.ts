import { describe, test, expect } from 'vitest';
import { withdraw } from '../src/index.js';

describe("Early Returns", () => {
  test("returns the new balance when funds are sufficient", () => {
    expect(withdraw(100, 30)).toBe(70);
  });

  test("returns error message when amount exceeds balance", () => {
    expect(withdraw(50, 100)).toBe("Insufficient funds");
  });

  test("returns zero when withdrawing the exact balance", () => {
    expect(withdraw(200, 200)).toBe(0);
  });

  test("returns error message when balance is zero", () => {
    expect(withdraw(0, 10)).toBe("Insufficient funds");
  });
});
