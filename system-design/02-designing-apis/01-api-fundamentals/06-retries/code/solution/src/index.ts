export interface HttpClient {
  get(url: string): Promise<unknown>;
}

export async function fetchDataWithRetry(
  url: string,
  retries: number = 3,
  client: HttpClient
): Promise<unknown> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await client.get(url);
    } catch (error) {
      if (attempt === retries) throw error;
    }
  }
  throw new Error('Unreachable');
}

const demoClient: HttpClient = {
  async get(url: string): Promise<unknown> {
    if (url === 'https://api.example.com/profile') {
      return { id: 'u_123', name: 'Ava' };
    }
    throw new Error('Not found');
  }
};

const flakyClientFactory = (failuresBeforeSuccess: number): HttpClient => {
  let calls = 0;
  return {
    async get(url: string): Promise<unknown> {
      calls++;
      if (calls <= failuresBeforeSuccess) {
        throw new Error(`Transient network error on call ${calls}`);
      }
      return { url, ok: true, calls };
    }
  };
};

const profile = await fetchDataWithRetry('https://api.example.com/profile', 3, demoClient);
console.log('Profile response:', JSON.stringify(profile));

const flakyClient = flakyClientFactory(2);
const retryResult = await fetchDataWithRetry('https://api.example.com/orders', 3, flakyClient);
console.log('Flaky GET succeeded after retries:', JSON.stringify(retryResult));
