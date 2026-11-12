export function stringifyUser(name: string, age: number): string {

}

export function isJsonSafe(value: unknown): boolean {

}

export function roundTrip<T>(data: T): T {

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
