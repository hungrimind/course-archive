export type FetchResult<T> =
  | { ok: true; data: T; elapsedMs: number }
  | { ok: false; error: 'TIMEOUT' | 'FAILED'; elapsedMs: number };

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function fetchData<T>(
  request: () => Promise<T>,
  timeoutMs: number
): Promise<FetchResult<T>> {
  const start = Date.now();

  try {
    const data = await Promise.race([
      request(),
      new Promise<T>((_, reject) => {
        setTimeout(() => reject(new Error('TIMEOUT')), timeoutMs);
      })
    ]);

    return { ok: true, data, elapsedMs: Date.now() - start };
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    const kind: 'TIMEOUT' | 'FAILED' = message === 'TIMEOUT' ? 'TIMEOUT' : 'FAILED';
    return { ok: false, error: kind, elapsedMs: Date.now() - start };
  }
}

export async function demoRequest(delayMs: number): Promise<string> {
  await sleep(delayMs);
  return `demo-response-after-${delayMs}ms`;
}

const timeoutMs = 50;
const delayMs = 120;

const result = await fetchData(() => demoRequest(delayMs), timeoutMs);

if (result.ok) {
  console.log(`Fetched data within ${timeoutMs}ms: ${result.data}`);
} else {
  console.log(`Request timed out or failed (timeout=${timeoutMs}ms, elapsed=${result.elapsedMs}ms): ${result.error}`);
}
