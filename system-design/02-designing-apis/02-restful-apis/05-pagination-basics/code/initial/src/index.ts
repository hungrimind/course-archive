export interface OffsetPaginationParams {
  page: number;
  limit: number;
}

export function buildOffsetPaginationQuery(params: OffsetPaginationParams): string {
  // ?
  return '';
}

export function buildItemsUrl(params: OffsetPaginationParams): string {
  // ?
  return '';
}

const url = buildItemsUrl({ page: 2, limit: 10 });
console.log(`GET ${url}`);
console.log('Pagination splits a large dataset into smaller pages so clients and servers do not load everything at once.');
console.log('Offset-based pagination uses page/limit (or offset/limit); cursor-based pagination uses a cursor token to fetch the next page.');
