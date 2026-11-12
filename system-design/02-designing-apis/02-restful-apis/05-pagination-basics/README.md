# Pagination Basics

Pagination is a technique to divide a large dataset into smaller, manageable chunks ("pages"). This helps retrieve data without overwhelming the server or client.

In RESTful APIs, pagination is often implemented using query parameters like `page` and `limit` to specify the page number and the number of items per page.

```text
# Example: fetching the second page with 10 items per page
GET /items?page=2&limit=10
```

> [!note]
> Pagination improves performance and user experience by avoiding the need to load all data at once.

## Assignment

The kingdom of data management needs your expertise in pagination! 

1. Implement the `buildOffsetPaginationQuery` function to construct the query string using the `page` and `limit` parameters.
2. Complete the `buildItemsUrl` function to return the full URL by utilizing the `buildOffsetPaginationQuery`.
3. Ensure that both functions validate the input and handle errors appropriately.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
