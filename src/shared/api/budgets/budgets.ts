import { typeCreateBudgetProps } from "@/src/modules/dashboard/budgets-and-payments/type"

export async function postBudget(data: FormData) {
    
    
    const body: typeCreateBudgetProps = {
        projectName: data.get('projectName') as string,
        clientName: data.get('clienteName') as string,
        clientContact: data.get('clienteContact') as string,
        niche: data.get('niche') as string,
        description: data.get('description') as string,
        features: (data.get('features') as string).split(',').map((f) => f.trim()),
        valuation: Number(data.get('valuation')),
        entryAmount: Number(data.get('entryAmount')),
        paymentConditions: data.get('applicationType') as string,
        deliveryDeadline: data.get('deliveryDeadline') as string,
        validUntil: new Date(data.get('validUntil') as string),
    }
    
    const response = await fetch(`/api/budget`, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json"
        }
    })

    if (!response.ok) {
        throw new Error("Erro ao gerar orçamento")
    }

    return await response.json()
}

export async function getBudgets() {
    const response = await fetch(`/api/budget`, { cache: 'no-store' })
    if (!response.ok) throw new Error('Erro ao buscar orçamentos')
    return await response.json()
}