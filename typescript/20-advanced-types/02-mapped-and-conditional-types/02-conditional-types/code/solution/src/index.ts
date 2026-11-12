export type IsString<T> = T extends string ? "text" : "other";

export type A = IsString<string>;
export type B = IsString<number>;

export function classify(value: unknown): "text" | "other" {
  return typeof value === "string" ? "text" : "other";
}

console.log(classify("hello"));
console.log(classify(42));
console.log(classify(true));
