export type Result<T> = { success: true; data: T } | { success: false; error: string };

export function safeDivide(a: number, b: number): number | null {
  if (b === 0) return null;
  return a / b;
}

export function safeDivideResult(a: number, b: number): Result<number> {
  if (b === 0) {
    return { success: false, error: "Cannot divide by zero" };
  }
  return { success: true, data: a / b };
}
