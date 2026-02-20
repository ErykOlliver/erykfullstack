import { NextResponse } from "next/server";
import { createProject, listProject, typeProjectProps } from '../../../modules/projects'


export async function GET() {
    try {
        const projects = await listProject()

        return NextResponse.json({
            status: 'success',
            data: projects
        })
    } catch (error) {
        NextResponse.json({
            status: 'error',
            message: 'error: Erro ao buscar projetos',
            error
        }, { status: 500 })
    }
}

export async function POST(req: Request) {
    const body: typeProjectProps = await req.json()

    try {
        const project = await createProject(body)

        return NextResponse.json({
            status: 'success',
            data: project
        }, { status: 201 })
    } catch (error) {
        return NextResponse.json({
            status: 'error',
            message: 'error: Erro ao criar projeto',
            error
        }, { status: 500 })
    }

}
