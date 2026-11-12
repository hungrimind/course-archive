export const MAX_USERS = 100;

export function canAddUsers(currentUsers: number, usersToAdd: number): boolean {
  return currentUsers + usersToAdd <= MAX_USERS;
}

export function remainingUserSlots(currentUsers: number): number {
  return Math.max(0, MAX_USERS - currentUsers);
}

const currentUsers = 92;
const usersToAdd = 7;

console.log(`Max users allowed: ${MAX_USERS}`);
console.log(`Current users: ${currentUsers}`);
console.log(`Remaining slots: ${remainingUserSlots(currentUsers)}`);
console.log(`Can add ${usersToAdd} more users? ${canAddUsers(currentUsers, usersToAdd)}`);
