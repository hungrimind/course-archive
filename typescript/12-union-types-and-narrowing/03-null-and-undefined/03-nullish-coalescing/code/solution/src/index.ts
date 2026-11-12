export function getDisplayName(name: string | null | undefined): string {
  return name ?? "Guest";
}

export function getCount(count: number | null): number {
  return count ?? 10;
}

console.log(getDisplayName("Alice"));
console.log(getDisplayName(null));
console.log(getDisplayName(undefined));
console.log(getCount(0));
console.log(getCount(null));
