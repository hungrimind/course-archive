export const TAX_RATE = 0.07;

export function calculateTotal(price: number): number {
  return price + price * TAX_RATE;
}

export function formatPrice(amount: number): string {
  return `$${amount.toFixed(2)}`;
}

const total = calculateTotal(49.99);
console.log(`Tax rate: ${TAX_RATE}`);
console.log(`Price: ${formatPrice(49.99)}`);
console.log(`Total with tax: ${formatPrice(total)}`);
