import { createBudget } from "@/src/modules/dashboard/budgets-and-payments/services/create-budget";
import { typeCreateBudgetProps } from "@/src/modules/dashboard/budgets-and-payments/type";

export async function POST(req: Request) {
    const body: typeCreateBudgetProps = await req.json()

    try {
        const result = await createBudget
    } catch (error) {

    }

}