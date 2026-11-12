export function safeParse(jsonString: string): string {

}

console.log(safeParse('{"name": "Alice"}'));
console.log(safeParse("not valid json"));
