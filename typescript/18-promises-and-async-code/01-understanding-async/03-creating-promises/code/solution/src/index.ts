export function makePromise(value: string): Promise<string> {
  return new Promise((resolve) => {
    resolve(value);
  });
}

export function makeRejectedPromise(reason: string): Promise<string> {
  return new Promise((_, reject) => {
    reject(reason);
  });
}

console.log("Promise created!");
