export type IsString<T>

export type A = IsString<string>;
export type B = IsString<number>;

export function classify(value: unknown): "text" | "other" {

}

console.log(classify("hello"));
console.log(classify(42));
console.log(classify(true));
