export type Result<T> = { success: true; data: T } | { success: false; error: string };

export function safeDivide(a: number, b: number): number | null {

}

export function safeDivideResult(a: number, b: number): Result<number> {

}
