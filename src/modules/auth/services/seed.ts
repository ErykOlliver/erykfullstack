import { AdminRoles } from "@/src/generated/prisma/enums";
import prisma from "@/src/shared/libs/prisma";
import * as argon2 from 'argon2'

async function execute() {
    const admin = process.env.ADMIN_LOGIN;
    const key = process.env.ADMIN_KEY;

    if (!admin || !key) {
        throw new Error("Variáveis ADMIN_LOGIN ou ADMIN_KEY não encontradas no .env");
    }

    const hashedKey = await argon2.hash(key);

    const adm = await prisma.admin.upsert({
        where: { admin: admin },
        update: {
            key: hashedKey,
        },
        create: {
            admin: admin,
            role: AdminRoles.attendant,
            key: hashedKey,
        },
    });

    console.log("Administrador ancora criado com sucesso:", adm.admin);
}

execute()
    .catch((e) => {
        console.error(" Erro ao criar admin:", e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });