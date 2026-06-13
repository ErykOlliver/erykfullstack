import { AdminRoles } from "@/src/generated/prisma/enums"
import { rolePermissions } from "./permission"
import { Permissions } from "./permissions-enum"

export function hasPermission(
  role: AdminRoles,
  permission: Permissions
) {
  return rolePermissions[role]?.includes(permission)
}