export type Status = "success" | "error" | "loading";

export function getStatusMessage(status: Status): string {

}

console.log(getStatusMessage("success"));
console.log(getStatusMessage("error"));
console.log(getStatusMessage("loading"));
