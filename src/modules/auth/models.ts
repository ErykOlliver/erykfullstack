import prisma from "@/src/shared/libs/prisma";
import * as argon2 from "argon2";

type props = {
    id: string,
    name: string
}

export async function findAdminCredentials(admin: string, key: string): Promise<props | null> {

    const adm = await prisma.admin.findUnique({ where: { admin } })

    if (!adm) {
        console.log('Adm não encontrado')
        return null
    }

    const isValid = await argon2.verify(adm.key, key)

    if (!isValid) {
        console.log("A senha esta incorreta")
        return null
    }

    return {
        id: adm.id.toString(),
        name: adm.admin,
    }
}