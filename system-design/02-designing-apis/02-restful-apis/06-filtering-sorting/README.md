# Filtering & Sorting

A **filter** allows you to narrow down data based on specific criteria, while **sorting** arranges data in a specific order (ascending or descending).

In RESTful APIs, query parameters are commonly used to filter and sort data efficiently.

```text
# Example: filter by status and sort by creation date
GET /items?filter=status:active&sort=created_at:desc
```

> [!tip]
> Combining filtering and sorting can significantly enhance API usability by delivering more relevant results to clients.

## Assignment

Your task is to enhance the `parseFilter` and `parseSort` functions to correctly parse the filtering and sorting strings. 

1. Implement the `parseFilter` function to extract the field and value from the format `field:value`.
2. Implement the `parseSort` function to extract the field and direction from the format `field:direction`.
3. Modify the `applyFilter` function to use the parsed filter values and ensure it handles all valid statuses.
4. Update the `applySort` function to sort by `created_at` in either ascending or descending order without mutating the original array. 
5. Fix the `queryItems` function to first filter the items and then sort the results. 

Ensure that the final output matches the expected item IDs based on the given query parameters.

## Challenge

Code: [starter code](code/initial) · [solution](code/solution)

Start in `src/index.ts`. Tests: `test/index.test.ts`.

---

[← Course overview](../../../README.md)
