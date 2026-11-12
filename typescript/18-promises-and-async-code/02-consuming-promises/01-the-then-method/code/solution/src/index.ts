export function addExcitement(promise: Promise<string>): Promise<string> {
  return promise.then((value) => value + "!");
}

console.log("Using .then()!");
