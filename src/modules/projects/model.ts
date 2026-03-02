import prisma from "@/src/shared/utils/prisma";
import { typeProjectProps } from './type'

export async function create(data: typeProjectProps) {
    const { skills, ...rest } = data

    return await prisma.project.create({
        data: {
            ...rest,
            skills: {
                connect: skills.map((id: number) => ({ id }))
            }
        }
    })
}

export async function list() {
    return await prisma.project.findMany()
}

export async function eraser(id: string) {
    const project = await prisma.project.delete({ where: { id } })
    return project
}