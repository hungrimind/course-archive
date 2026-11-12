export type Light =
  | { state: "red" }
  | { state: "yellow" }
  | { state: "green" };

export function getAction(light: Light): string {
  switch (light.state) {
    case "red":
      return "stop";
    case "yellow":
      return "caution";
    case "green":
      return "go";
    default:
      const _exhaustive: never = light;
      return _exhaustive;
  }
}
