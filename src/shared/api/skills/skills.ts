
import { typeSkillsProps } from "@/src/modules/skills/type"
import { ApiResponse } from "./type"

export async function getSkills() {
    const skills = await fetch(`${process.env.NEXT_URL}/api/skills`, {
        cache: 'no-store'
    })

    const json: ApiResponse = await skills.json()

    const data = json.data

    return data
}

export async function postSkills(data: typeSkillsProps) {
    const skill = await fetch(`${process.env.NEXT_PUBLIC_NEXT_URL}/api/skills`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        cache: 'no-store'
    })

    return await skill.json

}

export async function deleteskill(id: number) {
    return await fetch(`${process.env.NEXT_PUBLIC_NEXT_URL}/api/skills/${id}`, {
        method: 'DELETE'
    })
}
