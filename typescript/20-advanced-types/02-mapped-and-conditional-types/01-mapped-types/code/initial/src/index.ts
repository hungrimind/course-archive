export type BooleanFlags<T> = {

};

export type User = { name: string; age: number };

export type UserFlags = BooleanFlags<User>;

export function createFlags<T>(obj: T, value: boolean): BooleanFlags<T> {

}

const user: User = { name: "Alice", age: 30 };
const flags = createFlags(user, true);
console.log(flags);
