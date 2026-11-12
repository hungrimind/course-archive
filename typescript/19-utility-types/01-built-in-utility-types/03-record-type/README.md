# Record Type

**`Record<Keys, Value>`** describes an object where every key has the same value type. It is the cleanest way to type dictionaries and lookup maps.

```typescript
type Role = "admin" | "editor" | "viewer";

const permissions: Record<Role, boolean> = {
  admin: true,
  editor: true,
  viewer: false,
};
```

When the key type is a union like `Role`, TypeScript enforces that *every* member is present. With `Record<string, number>`, any string key is allowed and every value must be a number.


# Record Type

## Objective

Use the `Record` utility type to build a typed price lookup map for a set of fruits.

## Requirements

1. Export a type `Fruit` that is a union of `"apple"`, `"banana"`, and `"orange"`.
2. Export a function `buildPriceList(apple: number, banana: number, orange: number): Record<Fruit, number>` that returns a record mapping each fruit to its price.
3. Export a function `getPrice(prices: Record<Fruit, number>, fruit: Fruit): string` that returns a string in the format `"<fruit>: $<price>"` (e.g. `"apple: $1.2"`).
4. Build a price list with `(1.2, 0.5, 0.8)` and log the price of `"apple"` with `console.log`.

## Challenge

# Record Type

## Objective

Use the `Record` utility type to build a typed price lookup map for a set of fruits.

## Requirements

1. Export a type `Fruit` that is a union of `"apple"`, `"banana"`, and `"orange"`.
2. Export a function `buildPriceList(apple: number, banana: number, orange: number): Record<Fruit, number>` that returns a record mapping each fruit to its price.
3. Export a function `getPrice(prices: Record<Fruit, number>, fruit: Fruit): string` that returns a string in the format `"<fruit>: $<price>"` (e.g. `"apple: $1.2"`).
4. Build a price list with `(1.2, 0.5, 0.8)` and log the price of `"apple"` with `console.log`.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
