export type Rectangle = { width: number; height: number };

export function perimeter(rect: Rectangle): number {
  return 2 * (rect.width + rect.height);
}

export function area(rect: Rectangle): number {
  return rect.width * rect.height;
}
