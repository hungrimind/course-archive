export type User = { contact?: { email?: string } };

export function getEmail(user: User | null): string | undefined {
  return user?.contact?.email;
}
