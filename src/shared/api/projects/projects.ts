import { ProjectCategory } from "@/src/generated/prisma/enums"
import { ApiResponse } from "./type"
import { resolveVariantFromProps } from "framer-motion";

export async function getPaginationProjects(page = 1, category?: ProjectCategory, limit = 6) {
    const baseUrl = typeof window !== 'undefined'
        ? window.location.origin
        : process.env.NEXT_URL;

    if (!baseUrl) return { status: 'error', data: [], pagination: { totalPages: 1 } };

    const url = new URL(`${baseUrl}/api/projects`)
    url.searchParams.set("page", String(page))
    url.searchParams.set("limit", String(limit))

    if (category) {
        url.searchParams.set("category", category)
    }

    const res = await fetch(url.toString(), { cache: "no-store" })
    return await res.json()
}

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

export async function findUniqueProject(slug: string) {
    const response = await fetch(`/api/project-details/${slug}`, {
        method: 'GET',
        cache: 'no-store'
    })

    return await response.json()

}