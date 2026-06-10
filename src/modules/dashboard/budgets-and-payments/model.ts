import prisma from "@/src/shared/libs/prisma";
import { typeCreateBudgetProps } from "./type";

export async function create(data: typeCreateBudgetProps){
    const budget = await prisma.tradeIn.create({
        data: data
    })

    return budget
}

export async function list(){
    const budgets = await prisma.tradeIn.findMany()

    return budgets
}