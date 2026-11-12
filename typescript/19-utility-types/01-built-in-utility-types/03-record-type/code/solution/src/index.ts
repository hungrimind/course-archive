export type Fruit = "apple" | "banana" | "orange";

export function buildPriceList(apple: number, banana: number, orange: number): Record<Fruit, number> {
  return { apple, banana, orange };
}

export function getPrice(prices: Record<Fruit, number>, fruit: Fruit): string {
  return `${fruit}: $${prices[fruit]}`;
}

const prices = buildPriceList(1.2, 0.5, 0.8);
console.log(getPrice(prices, "apple"));
