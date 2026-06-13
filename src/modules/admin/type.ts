import { AdminRoles } from "@/src/generated/prisma/enums"

export type typeAdminProps = {
    admin: string,
    key: string,
    admin_role: AdminRoles
}