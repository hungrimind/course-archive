export function getDisplayName(user: { name: string; middleName?: string }): string {
  if (user.middleName) {
    return `${user.name} ${user.middleName}`;
  }
  return user.name;
}

const alice = { name: "Alice" };
const bob = { name: "Bob", middleName: "James" };

console.log(getDisplayName(alice));
console.log(getDisplayName(bob));
