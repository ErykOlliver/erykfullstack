import prisma from "@/src/shared/utils/prisma";
import { typeNetworkProps } from "./type";

export async function create(data: typeNetworkProps) {
    return await prisma.network.upsert({
        where: {
            name: data.name
        },
        create: {
            name: data.name,
            link: data.link
        },
        update: {
            name: data.name,
            link: data.link
        }
    })
}

export async function list() {
    return await prisma.network.findMany()
}

export async function eraser(id: number) {
    return await prisma.network.delete({
        where: {
            id
        }
    })
}