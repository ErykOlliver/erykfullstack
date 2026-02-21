import { listSkills, typeSkillsProps } from "@/src/modules/skills";
import { createSkill } from "@/src/modules/skills/services/create-skill";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const skills = await listSkills()

        return NextResponse.json({
            status: 'success',
            data: skills
        })
    } catch (error) {
        NextResponse.json({
            status: 'error',
            message: 'error: Erro ao buscar skills',
            error
        }, { status: 500 })
    }
}

export async function POST(req: Request) {
    const body: typeSkillsProps = await req.json()
    try {
        const skill = await createSkill(body)

        return NextResponse.json({
            status: 'success',
            data: skill
        }, { status: 201 })
    } catch (error) {
        return NextResponse.json({
            status: 'error',
            message: 'error: Erro ao criar skill',
            error
        }, { status: 500 })
    }
}