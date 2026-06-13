import prisma from "@/src/shared/libs/prisma";
import { typeCreateBudgetInput } from "./type";

export async function create(data: typeCreateBudgetInput) {
    return await prisma.tradeIn.create({ data })
}

export async function list() {
    return await prisma.tradeIn.findMany()
}