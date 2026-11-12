export enum Role {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Viewer = "VIEWER",
}

export function getPermissionLevel(role: Role): number {

}

export function canEdit(role: Role): boolean {

}

console.log(getPermissionLevel(Role.Admin));
console.log(canEdit(Role.Viewer));
