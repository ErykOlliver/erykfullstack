import { AdminRoles } from "@/src/generated/prisma/enums";
import { Permissions } from "./permissions-enum";


export const rolePermissions: Record<AdminRoles, Permissions[]> = {
    owner: [
        Permissions.CREATE_PROJECT,
        Permissions.DELETE_PROJECT,
        Permissions.UPDATE_PROJECT,
        Permissions.MANAGE_ADMINS,
        Permissions.MANAGE_BUDGETS
    ],

    attendant: [
        Permissions.MANAGE_BUDGETS
    ],
}