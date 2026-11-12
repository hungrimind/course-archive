import { describe, test, expect } from "vitest";
import { describePayment, Payment } from "../src/index.js";

describe("describePayment", () => {
  test("describes a card payment", () => {
    const card: Payment = { kind: "card", last4: "4242" };
    expect(describePayment(card)).toBe("Card ending in 4242");
  });

  test("describes a cash payment", () => {
    const cash: Payment = { kind: "cash", amount: 50 };
    expect(describePayment(cash)).toBe("Cash payment of $50");
  });

  test("handles different card numbers", () => {
    expect(describePayment({ kind: "card", last4: "9999" })).toBe("Card ending in 9999");
  });

  test("handles different cash amounts", () => {
    expect(describePayment({ kind: "cash", amount: 5.99 })).toBe("Cash payment of $5.99");
  });
});
