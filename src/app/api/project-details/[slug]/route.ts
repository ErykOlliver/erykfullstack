import { FindUniqueProject } from "@/src/modules/projects/services/find-unique-project"
import { NextResponse } from "next/server"

export async function GET(req: Request, { params }: { params: { slug: string } }) {
    const { slug } = await params

    try {
        const project = await FindUniqueProject(slug)

        if (!project) {
            return NextResponse.json({
                status: 'error',
                message: 'Projeto não encontrado'
            }, { status: 404 })
        }

        return NextResponse.json({
            status: 'success',
            message: 'Sucesso!',
            data: project
        })
    } catch (error) {
        return NextResponse.json({
            status: 'error',
            message: 'Erro interno no servidor',
        }, { status: 500 })
    }
}