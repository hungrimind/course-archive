export function findUser(id: number): string {
  const users: Record<number, string> = {
    1: "Alice",
    2: "Bob",
    3: "Charlie",
  };


}

console.log(findUser(1));
console.log(findUser(2));
