import prisma from "@/src/shared/libs/prisma";
import { typeAdminProps } from "./type";

export async function create(data: typeAdminProps) {
    return await prisma.admin.create({
        data: {
            admin: data.admin,
            key: data.key,
            role: data.admin_role
        }
    })
}

export async function list() {
    return await prisma.admin.findMany()
}