import prisma from "@/src/shared/utils/prisma";
import { typeSkillsProps } from "./type";

export async function list() {
    return await prisma.skill.findMany()
}

export async function eraser(id: number) {
    const skill = await prisma.skill.delete({ where: { id } })
    return skill
}

export async function create(data: typeSkillsProps) {
    return await prisma.skill.create({
        data
    })
}