export function getErrorMessage(fn: () => void): string {
  try {
    fn();
    return "No error";
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    }
    return "Unknown error";
  }
}

console.log(getErrorMessage(() => JSON.parse("invalid")));
console.log(getErrorMessage(() => console.log("ok")));
