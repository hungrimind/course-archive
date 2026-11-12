export type Light =
  | { state: "red" }
  | { state: "yellow" }
  | { state: "green" };

export function getAction(light: Light): string {

}
