export async function fetchAll(a: Promise<string>, b: Promise<string>, c: Promise<string>): Promise<string> {
  const [valA, valB, valC] = await Promise.all([a, b, c]);
  return [valA, valB, valC].join(", ");
}

console.log("Promise.all!");
