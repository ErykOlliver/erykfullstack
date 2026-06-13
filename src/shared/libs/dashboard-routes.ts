import { Permissions } from "./permissions-enum";

export const dashboardRoutes = [
    {
        href: "/dashboard/budgets-and-payments",
        permission: Permissions.MANAGE_BUDGETS
    },

    {
        href: "/dashboard/manage_administrators",
        permission: Permissions.MANAGE_ADMINS
    },
]