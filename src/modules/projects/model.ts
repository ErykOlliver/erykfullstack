import prisma from "@/src/shared/utils/prisma";
import { typeProjectProps } from './type'
export async function create(data: typeProjectProps) {
    return await prisma.project.create({
        data: {
            ...data,
            skills: {
                connect: data.skills.map(name => ({
                    name
                }))
            }
        }
    })
}

export async function list() {
    return await prisma.project.findMany()
}