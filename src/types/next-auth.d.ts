import NextAuth from "next-auth"
import { AdminRoles } from "../generated/prisma/enums"

declare module "next-auth" {
    interface Session {
        user: {
            id: string
            role: AdminRoles
        }
    }
    
    interface User {
        id: string
        role: AdminRoles

    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id: string
        role: AdminRoles
    }
}