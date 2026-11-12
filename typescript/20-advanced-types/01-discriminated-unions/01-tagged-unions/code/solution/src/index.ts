export type Payment =
  | { kind: "card"; last4: string }
  | { kind: "cash"; amount: number };

export function describePayment(payment: Payment): string {
  switch (payment.kind) {
    case "card":
      return `Card ending in ${payment.last4}`;
    case "cash":
      return `Cash payment of $${payment.amount}`;
  }
}
