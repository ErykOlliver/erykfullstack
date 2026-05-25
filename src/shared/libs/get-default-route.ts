
import { AdminRoles } from "@/src/generated/prisma/enums"
import { dashboardRoutes } from "./dashboard-routes"
import { hasPermission } from "./has-permission"

export function getDefaultRoute(role: AdminRoles) {

    const allowedRoute = dashboardRoutes.find(route =>
        hasPermission(role, route.permission)
    )

    return allowedRoute?.href || "/unauthorized"
}