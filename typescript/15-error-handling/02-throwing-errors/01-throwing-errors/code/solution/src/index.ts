export function withdraw(balance: number, amount: number): number {
  if (amount < 0) {
    throw new Error("Amount must be positive");
  }
  if (amount > balance) {
    throw new Error("Insufficient funds");
  }
  return balance - amount;
}
