export function getLabel<T extends { label: string }>(item: T): string {
  return item.label;
}
