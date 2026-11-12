export function canEdit(role: string, isActive: boolean, isBanned: boolean): boolean {
  return (role === "admin" || role === "editor") && isActive && !isBanned;
}

console.log(canEdit("admin", true, false));
console.log(canEdit("editor", true, false));
console.log(canEdit("viewer", true, false));
console.log(canEdit("admin", false, false));
console.log(canEdit("editor", true, true));
