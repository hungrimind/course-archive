export function formatUsername(name: string | null): string {
  if (name) {
    return name;
  }
  return "Anonymous";
}
