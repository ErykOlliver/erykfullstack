import { generatePayment } from '@/src/shared/api/payments/pay';
import * as BudgetModel from '../model'

import { typeCreateBudgetProps } from "../type";
import { NextResponse } from 'next/server';

export async function createBudget(data: typeCreateBudgetProps) {

    const budgetsLenght = (await BudgetModel.list()).length + 1

    const date = new Date()

    const currentYear = date.getFullYear

    const quoteNumber = `ORC-${currentYear}-${budgetsLenght}`

    try {
        const paymentLink = await generatePayment({
            id: quoteNumber,
            projectName: data.projectName || "Não informado",
            valuation: data.valuation
        })

        const result = await BudgetModel.create({
            ...data,
            generatedLink: paymentLink,
            quoteNumber: quoteNumber,
        })

        return NextResponse.json({
            orcId: result.quoteNumber,
            message: "Orçamento criado com sucesso!"
        }, { status: 200 })

    } catch (error) {

    }


}