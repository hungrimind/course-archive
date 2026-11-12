export function getDisplayName(user: { name: string; middleName?: string }): string {

}

const alice = { name: "Alice" };
const bob = { name: "Bob", middleName: "James" };

console.log(getDisplayName(alice));
console.log(getDisplayName(bob));
