export function canAddUsers(currentUsers: number, usersToAdd: number): boolean {
  return currentUsers + usersToAdd <= 100;
}

export function remainingUserSlots(currentUsers: number): number {
  return Math.max(0, 100 - currentUsers);
}

const currentUsers = 92;
const usersToAdd = 7;

console.log(`Max users allowed: ${100}`);
console.log(`Current users: ${currentUsers}`);
console.log(`Remaining slots: ${remainingUserSlots(currentUsers)}`);
console.log(`Can add ${usersToAdd} more users? ${canAddUsers(currentUsers, usersToAdd)}`);
