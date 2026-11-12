# Parsing JSON

**`JSON.parse()`** turns a JSON string into a JavaScript object. The catch: TypeScript types the result as `any`, so you lose type safety unless you assert or validate the shape yourself.

```typescript
const raw = '{"name": "Ada", "age": 30}';

type User = { name: string; age: number };
const user = JSON.parse(raw) as User;

console.log(user.name); // "Ada"
```

The `as User` assertion tells TypeScript to treat the parsed result as a `User`. It does not validate the data at runtime. If the JSON has a different shape, you will not get an error until something breaks.


## Assignment

Implement two functions for parsing JSON strings into `Product` objects.

1. `parseProduct` should use `JSON.parse()` with a type assertion (`as Product`) to parse the JSON string and return the result.
2. `safeParseProduct` should parse the JSON safely: wrap `JSON.parse()` in a try/catch, then validate that `name` is a `string` and `price` is a `number` before returning the result. Return `null` for invalid JSON or data that does not match the `Product` shape.

## Challenge

Implement two functions for parsing JSON strings into `Product` objects.

1. `parseProduct` should use `JSON.parse()` with a type assertion (`as Product`) to parse the JSON string and return the result.
2. `safeParseProduct` should parse the JSON safely: wrap `JSON.parse()` in a try/catch, then validate that `name` is a `string` and `price` is a `number` before returning the result. Return `null` for invalid JSON or data that does not match the `Product` shape.

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
