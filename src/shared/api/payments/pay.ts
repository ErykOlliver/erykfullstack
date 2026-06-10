import { typePaymentProps } from "./type";

export async function generatePayment(data: typePaymentProps) {
    const response = await fetch(`/api/payments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    if (!response.ok) {
        throw new Error("Erro ao gerar link de pagamento")
    }

    return await response.json()

}