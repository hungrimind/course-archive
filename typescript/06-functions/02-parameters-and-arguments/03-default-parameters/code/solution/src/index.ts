export function formatPrice(amount: number, currency: string = "USD"): string {
  return amount + " " + currency;
}

console.log(formatPrice(29.99, "EUR"));
console.log(formatPrice(9.99));
