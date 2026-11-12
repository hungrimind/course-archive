export interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

export function updateTodo(todo: Todo, changes: Partial<Todo>): Todo {
  return { ...todo, ...changes };
}

export function createTodo(fields: Required<Todo>): Todo {
  return fields;
}

const myTodo: Todo = { title: "Learn TypeScript", description: "Study utility types", completed: false };
const updated = updateTodo(myTodo, { completed: true });
console.log(updated);
