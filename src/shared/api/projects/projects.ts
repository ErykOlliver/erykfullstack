import { ApiResponse } from "./type"

export async function getProjects() {
    const projects = await fetch(`${process.env.NEXT_URL}/api/projects`, {
        cache: 'no-store',
        next: { tags: ['projects'] }
    })

    const json: ApiResponse = await projects.json()

    const data = json.data

    return data
}

export async function postProject(data: FormData) {
    const response = await fetch(`/api/projects`, {
        method: "POST",
        body: data
    })

    if (!response.ok) {
        throw new Error("Erro ao criar projeto")
    }

    return await response.json()
}