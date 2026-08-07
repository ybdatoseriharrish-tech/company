export type Role = "ADMINISTRATOR" | "IT_SUPPORT" | "STAFF_USER";

export const permissions: Record<Role, string[]> = {
  ADMINISTRATOR: ["*"],
  IT_SUPPORT: ["applications:read", "applications:restart", "servers:read", "monitoring:read", "logs:read", "incidents:write"],
  STAFF_USER: ["assigned-applications:read"],
};

export function can(role: Role, permission: string) {
  return permissions[role].includes("*") || permissions[role].includes(permission);
}
