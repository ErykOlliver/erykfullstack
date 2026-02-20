import { listSkills } from "@/src/modules/skills";
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