export type BooleanFlags<T> = {
  [K in keyof T]: boolean;
};

export type User = { name: string; age: number };

export type UserFlags = BooleanFlags<User>;

export function createFlags<T>(obj: T, value: boolean): BooleanFlags<T> {
  const result = {} as BooleanFlags<T>;
  for (const key in obj) {
    result[key] = value;
  }
  return result;
}

const user: User = { name: "Alice", age: 30 };
const flags = createFlags(user, true);
console.log(flags);
