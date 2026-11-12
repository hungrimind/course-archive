export class TemporaryError extends Error {
  retryAfter: number;
  constructor(retryAfter: number, message: string) {
    super(message);
    this.retryAfter = retryAfter;
  }
}

export class PermanentError extends Error {
  code: string;
  constructor(code: string, message: string) {
    super(message);
    this.code = code;
  }
}

export function classifyError(err: Error): string {
  if (err instanceof TemporaryError) {
    return `Retry after ${err.retryAfter}s: ${err.message}`;
  } else if (err instanceof PermanentError) {
    return `Fatal [${err.code}]: ${err.message}`;
  }
  return `Unknown: ${err.message}`;
}
