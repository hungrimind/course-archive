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

}
