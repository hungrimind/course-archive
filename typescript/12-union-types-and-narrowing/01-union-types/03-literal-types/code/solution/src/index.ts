export type Status = "success" | "error" | "loading";

export function getStatusMessage(status: Status): string {
  if (status === "success") {
    return "Operation completed successfully";
  } else if (status === "error") {
    return "Something went wrong";
  } else {
    return "Please wait...";
  }
}

console.log(getStatusMessage("success"));
console.log(getStatusMessage("error"));
console.log(getStatusMessage("loading"));
