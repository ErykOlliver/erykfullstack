import { ApiResponse } from "./type"

export async function getProjects() {
    const projects = await fetch(`${process.env.NEXT_URL}/api/projects`, {
        cache: 'no-store'
    })

    const json: ApiResponse = await projects.json()

    const data = json.data
    
    return data
}