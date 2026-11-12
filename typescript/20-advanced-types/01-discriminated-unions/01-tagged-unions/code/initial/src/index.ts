export type Payment =
  | { kind: "card"; last4: string }
  | { kind: "cash"; amount: number };

export function describePayment(payment: Payment): string {

}
