import prisma from "@/src/shared/utils/prisma";
import { typeSkillsProps } from "./type";

export async function list() {
    return await prisma.skill.findMany()
}

export async function eraser(id: number) {
    return await prisma.skill.delete({ where: { id } })
}

export async function create(data: typeSkillsProps) {
    return await prisma.skill.create({
        data
    })
}