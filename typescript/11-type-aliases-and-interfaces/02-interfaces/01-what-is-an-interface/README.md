# What is an Interface?

An **interface** describes the shape of an object -- which properties it must have and their types. It looks a lot like a type alias but uses the `interface` keyword and no `=` sign.

```typescript
interface Product {
  name: string;
  price: number;
  inStock: boolean;
}

const book: Product = { name: "TypeScript Guide", price: 29, inStock: true };
```

If an object is missing a required property or has the wrong type, TypeScript flags it immediately.


# What is an Interface

## Objective

Define an interface for a `Product` and write a function that formats product information into a display string.

## Requirements

1. Export an `interface` called `Product` with properties: `name: string`, `price: number`, and `inStock: boolean`.
2. Export a function `formatProduct(product: Product): string` that returns a string in the format `"Name: <name>, Price: $<price>, In Stock: <Yes/No>"`.
3. Log the result of calling `formatProduct` with `{ name: "TypeScript Guide", price: 29, inStock: true }` using `console.log`.

## Challenge

# What is an Interface

## Objective

Define an interface for a `Product` and write a function that formats product information into a display string.

## Requirements

1. Export an `interface` called `Product` with properties: `name: string`, `price: number`, and `inStock: boolean`.
2. Export a function `formatProduct(product: Product): string` that returns a string in the format `"Name: <name>, Price: $<price>, In Stock: <Yes/No>"`.
3. Log the result of calling `formatProduct` with `{ name: "TypeScript Guide", price: 29, inStock: true }` using `console.log`.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
