import { describe, test, expect } from "vitest";
import {
  getAuthorFirstName,
  getAuthorLastName,
  getAuthorFullName,
} from "../src/index.js";

describe("nested objects", () => {
  const book = {
    title: "The Hobbit",
    author: { firstName: "J.R.R.", lastName: "Tolkien" },
  };

  test("getAuthorFirstName returns the first name from nested author", () => {
    expect(getAuthorFirstName(book)).toBe("J.R.R.");
  });

  test("getAuthorLastName returns the last name from nested author", () => {
    expect(getAuthorLastName(book)).toBe("Tolkien");
  });

  test("getAuthorFullName returns the full name from nested author", () => {
    expect(getAuthorFullName(book)).toBe("J.R.R. Tolkien");
  });

  test("getAuthorFirstName works with different data", () => {
    const other = {
      title: "1984",
      author: { firstName: "George", lastName: "Orwell" },
    };
    expect(getAuthorFirstName(other)).toBe("George");
  });

  test("getAuthorLastName works with different data", () => {
    const other = {
      title: "1984",
      author: { firstName: "George", lastName: "Orwell" },
    };
    expect(getAuthorLastName(other)).toBe("Orwell");
  });

  test("getAuthorFullName works with different data", () => {
    const other = {
      title: "1984",
      author: { firstName: "George", lastName: "Orwell" },
    };
    expect(getAuthorFullName(other)).toBe("George Orwell");
  });
});
