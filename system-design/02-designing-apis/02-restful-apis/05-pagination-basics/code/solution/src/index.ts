export interface OffsetPaginationParams {
  page: number;
  limit: number;
}

export function buildOffsetPaginationQuery(params: OffsetPaginationParams): string {
  const { page, limit } = params;
  if (!Number.isInteger(page) || page < 1) {
    throw new Error('page must be an integer >= 1');
  }
  if (!Number.isInteger(limit) || limit < 1) {
    throw new Error('limit must be an integer >= 1');
  }

  return `?page=${page}&limit=${limit}`;
}

export function buildItemsUrl(params: OffsetPaginationParams): string {
  return `/items${buildOffsetPaginationQuery(params)}`;
}

const url = buildItemsUrl({ page: 2, limit: 10 });
console.log(`GET ${url}`);
console.log('Pagination splits a large dataset into smaller pages so clients and servers do not load everything at once.');
console.log('Offset-based pagination uses page/limit (or offset/limit); cursor-based pagination uses a cursor token to fetch the next page.');
