export function canEdit(role: string, isActive: boolean, isBanned: boolean): boolean {

}

console.log(canEdit("admin", true, false));
console.log(canEdit("editor", true, false));
console.log(canEdit("viewer", true, false));
console.log(canEdit("admin", false, false));
console.log(canEdit("editor", true, true));
