export function safeFetch(promise: Promise<string>): Promise<string> {
  return promise
    .then((value) => value)
    .catch(() => "fallback");
}

console.log("Catching errors!");
