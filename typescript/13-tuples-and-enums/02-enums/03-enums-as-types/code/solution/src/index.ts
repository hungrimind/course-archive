export enum Role {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Viewer = "VIEWER",
}

export function getPermissionLevel(role: Role): number {
  switch (role) {
    case Role.Admin:
      return 3;
    case Role.Editor:
      return 2;
    case Role.Viewer:
      return 1;
  }
}

export function canEdit(role: Role): boolean {
  return role === Role.Admin || role === Role.Editor;
}

console.log(getPermissionLevel(Role.Admin));
console.log(canEdit(Role.Viewer));
