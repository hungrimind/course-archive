export function withdraw(balance: number, amount: number) {
  if (amount > balance) {
    return "Insufficient funds";
  }
  return balance - amount;
}
