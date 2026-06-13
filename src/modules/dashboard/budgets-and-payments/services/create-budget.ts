import { generatePayment } from '@/src/shared/api/payments/pay';
import * as BudgetModel from '../model'
import { typeCreateBudgetProps } from "../type";

export async function createBudget(data: typeCreateBudgetProps) {
    const budgetsLength = (await BudgetModel.list()).length + 1
    const quoteNumber = `ORC-${new Date().getFullYear()}-${budgetsLength}`

    const paymentLink = await generatePayment({
        id: quoteNumber,
        projectName: data.projectName || "Não informado",
        valuation: data.entryAmount || 0
    })

    const result = await BudgetModel.create({
        ...data,
        generatedLink: paymentLink,
        quoteNumber,
    })

    return result
}