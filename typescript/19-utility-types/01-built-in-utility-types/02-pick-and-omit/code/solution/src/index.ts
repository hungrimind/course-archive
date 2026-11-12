export interface User {
  name: string;
  age: number;
  email: string;
  password: string;
}

export type UserPreview = Pick<User, "name" | "age">;

export type SafeUser = Omit<User, "password">;

export function getPreview(user: User): UserPreview {
  return { name: user.name, age: user.age };
}

export function getSafeUser(user: User): SafeUser {
  return { name: user.name, age: user.age, email: user.email };
}

const user: User = { name: "Alice", age: 30, email: "alice@example.com", password: "secret123" };
console.log(getPreview(user));
console.log(getSafeUser(user));
