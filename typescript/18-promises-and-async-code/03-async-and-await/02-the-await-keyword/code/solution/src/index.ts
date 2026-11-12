export async function combineValues(first: Promise<string>, second: Promise<number>): Promise<string> {
  const firstValue = await first;
  const secondValue = await second;
  return `${firstValue}: ${secondValue}`;
}

console.log("Using await!");
