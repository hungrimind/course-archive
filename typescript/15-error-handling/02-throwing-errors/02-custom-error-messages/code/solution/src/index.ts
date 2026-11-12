export function findUser(id: number): string {
  const users: Record<number, string> = {
    1: "Alice",
    2: "Bob",
    3: "Charlie",
  };

  const user = users[id];
  if (!user) {
    throw new Error(`User with id ${id} not found`);
  }
  return user;
}

console.log(findUser(1));
console.log(findUser(2));
