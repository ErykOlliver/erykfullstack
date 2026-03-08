import prisma from "@/src/shared/libs/prisma";
import { typeProjectProps } from './type'
import { ProjectCategory } from "@/src/generated/prisma/enums";

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

export async function list(offset: number, limit: number, category?: ProjectCategory) {
    const projects = await prisma.project.findMany({
        where: category ? { category } : {},
        skip: offset,
        take: limit,
        orderBy: {
            createdAt: 'desc'
        }
    })

    const total = await prisma.project.count({
        where: category ? { category } : {}
    })

    return { total, projects }
}

export async function eraser(id: string) {
    const project = await prisma.project.delete({ where: { id } })
    return project
}