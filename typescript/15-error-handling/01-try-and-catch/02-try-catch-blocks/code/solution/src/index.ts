export function safeParse(jsonString: string): string {
  try {
    const data = JSON.parse(jsonString);
    return data;
  } catch (error) {
    return "Parsing failed";
  }
}

console.log(safeParse('{"name": "Alice"}'));
console.log(safeParse("not valid json"));
