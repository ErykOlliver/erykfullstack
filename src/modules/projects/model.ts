import prisma from "@/src/shared/libs/prisma";
import { typeCreateProjectProps, typeGetProjectProps, typeProjectProps } from './type'
import { ProjectCategory } from "@/src/generated/prisma/enums";

export async function create(data: typeCreateProjectProps) {
    const { poster, skills, ...rest } = data

    const stringPoster = poster as string

    return await prisma.project.create({
        data: {
            ...rest,
            poster: stringPoster,
            skills: {
                connect: skills.map((s) => ({ id: s.id }))
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

export async function findUnique(slug: string) {
    const findProject = await prisma.project.findUnique({
        where: {
            slug
        },
        select: {
            description: true,
            designer: true,
            github: true,
            page: true,
            skills: {
                select: {
                    name: true
                }
            },
            title: true,
            category: true,
            applicationType: true,
            designerPage: true,
            isFeatured: true,
            poster: true,
            slug: true,
            status: true,
        }
    })
    return findProject
}

export async function eraser(id: string) {
    const project = await prisma.project.delete({ where: { id } })
    return project
}