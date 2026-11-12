export async function safeAwait(promise: Promise<string>): Promise<string> {
  try {
    const value = await promise;
    return value;
  } catch {
    return "Error occurred";
  }
}

console.log("Error handling with async!");
