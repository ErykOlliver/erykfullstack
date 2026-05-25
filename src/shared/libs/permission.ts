import { AdminRoles } from "@/src/generated/prisma/enums";
import { Permissions } from "./permissions-enum";


export const rolePermissions: Record<AdminRoles, Permissions[]> = {
    owner: [
        Permissions.MANAGE_PROJECTS,
        Permissions.MANAGE_ADMINS,
        Permissions.MANAGE_BUDGETS
    ],

    attendant: [
        Permissions.MANAGE_BUDGETS
    ],
}