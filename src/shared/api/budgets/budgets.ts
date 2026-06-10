export async function postBudget(data: FormData) {
    const response = await fetch(`/api/budget`, {
        method: "POST",
        body: data
    })

    if (!response.ok) {
        throw new Error("Erro ao gerar orçamento")
    }

    return await response.json()
}