import { findAdminCredentials } from "@/src/modules/auth/models"
import NextAuth, { NextAuthOptions } from "next-auth"
import Credentials from "next-auth/providers/credentials"

export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt',
        maxAge: 60 * 60,
        updateAge: 20 * 60
    },
    providers: [
        Credentials({
            name: 'Admin',
            credentials: {
                admin: { label: "admin", type: "text" },
                key: { label: "key", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.admin || !credentials.key) return null

                const admin = await findAdminCredentials(credentials.admin, credentials.key)

                return admin
            },
        }),
    ],
    pages: {
        signIn: "/login"
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }