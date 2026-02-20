import prisma from "@/src/shared/utils/prisma";

export async function list() {
    return await prisma.skill.findMany()
}