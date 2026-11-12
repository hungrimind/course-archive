export function stringifyUser(name: string, age: number): string {
  const user = { name, age };
  return JSON.stringify(user);
}

export function isJsonSafe(value: unknown): boolean {
  if (typeof value === "function" || typeof value === "undefined") {
    return false;
  }
  return true;
}

export function roundTrip<T>(data: T): T {
  const json = JSON.stringify(data);
  return JSON.parse(json) as T;
}

const json = stringifyUser("Ada", 30);
console.log(json);

console.log(isJsonSafe("hello"));
console.log(isJsonSafe(42));
console.log(isJsonSafe(undefined));
console.log(isJsonSafe(() => {}));

const original = { name: "Ada", scores: [95, 87, 92] };
const copy = roundTrip(original);
console.log(copy);
