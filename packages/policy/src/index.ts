export type Role = "platform_admin" | "site_manager" | "operator" | "viewer";

const permissionsByRole: Record<Role, string[]> = {
  platform_admin: ["*"],
  site_manager: ["site:read", "asset:read", "alarm:read", "alarm:ack"],
  operator: ["site:read", "asset:read", "alarm:read"],
  viewer: ["site:read", "asset:read"]
};

export function hasPermission(role: Role, permission: string): boolean {
  const permissions = permissionsByRole[role] ?? [];
  return permissions.includes("*") || permissions.includes(permission);
}
