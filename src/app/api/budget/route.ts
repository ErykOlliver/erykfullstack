import { createBudget } from "@/src/modules/dashboard/budgets-and-payments/services/create-budget";
import { listBudgets } from "@/src/modules/dashboard/budgets-and-payments/services/list-budget";
import { typeCreateBudgetProps } from "@/src/modules/dashboard/budgets-and-payments/type";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const body: typeCreateBudgetProps = await req.json()

    try {
        const result = await createBudget(body)

        return NextResponse.json({
            data: result
        }, { status: 201 })
    } catch (error) {
        console.error("Error creating budget:", error)
        return NextResponse.json({
            error: "Failed to create budget"
        }, { status: 500 })
    }

}


export async function GET() {
    try {
        const budgets = await listBudgets()
        return NextResponse.json(budgets, { status: 200 })
    } catch (error) {
        return NextResponse.json({ error: 'Erro ao buscar orçamentos' }, { status: 500 })
    }
}
