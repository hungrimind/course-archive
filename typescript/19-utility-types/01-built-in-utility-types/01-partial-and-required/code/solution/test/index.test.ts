import { describe, it, expect } from "vitest";
import { updateTodo, createTodo } from "../src/index.js";

describe("updateTodo", () => {
  it("should update only the provided fields", () => {
    const todo = { title: "Learn TypeScript", description: "Study utility types", completed: false };
    const result = updateTodo(todo, { completed: true });
    expect(result).toEqual({ title: "Learn TypeScript", description: "Study utility types", completed: true });
  });

  it("should update multiple fields at once", () => {
    const todo = { title: "Old", description: "Old desc", completed: false };
    const result = updateTodo(todo, { title: "New", description: "New desc" });
    expect(result).toEqual({ title: "New", description: "New desc", completed: false });
  });

  it("should return a copy when no changes are provided", () => {
    const todo = { title: "Test", description: "Desc", completed: true };
    const result = updateTodo(todo, {});
    expect(result).toEqual(todo);
  });
});

describe("createTodo", () => {
  it("should create a todo with all required fields", () => {
    const result = createTodo({ title: "New Todo", description: "A description", completed: false });
    expect(result).toEqual({ title: "New Todo", description: "A description", completed: false });
  });
});
