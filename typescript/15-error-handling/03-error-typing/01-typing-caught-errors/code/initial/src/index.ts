export function getErrorMessage(fn: () => void): string {

}

console.log(getErrorMessage(() => JSON.parse("invalid")));
console.log(getErrorMessage(() => console.log("ok")));
