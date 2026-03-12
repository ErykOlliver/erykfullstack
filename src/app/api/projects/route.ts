import { ProjectCategory, Status } from "@/src/generated/prisma/enums";
import { createProject } from "@/src/modules/projects/services/create-project";
import { listProject } from "@/src/modules/projects/services/list-project";
import { uploadFile } from "@/supabase-client";
import { NextResponse } from "next/server";



export async function GET(req: Request) {
    try {

        const { searchParams } = new URL(req.url)

        const page = Number(searchParams.get('page') ?? 1)
        const limit = Number(searchParams.get("limit") ?? 9)
        const categoryParam = searchParams.get("category")

        const category = categoryParam
            ? (categoryParam as ProjectCategory)
            : undefined

        const offset = (page - 1) * limit

        const result = await listProject(offset, limit, category)
        const total = result.total

        return NextResponse.json({
            status: 'success',
            data: result.projects,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(result.total / limit)
            }
        })
    } catch (error) {
        return NextResponse.json({
            status: 'error',
            message: 'error: Erro ao buscar projetos',
            error
        }, { status: 500 })
    }
}

export async function POST(req: Request) {

    try {
        const formData = await req.formData()

        const title = formData.get('title') as string;
        const posterFile = formData.get('poster') as File;
        const skillsRaw = formData.get('skills') as string;

        const skills = JSON.parse(skillsRaw) as {
            id: number
            name: string
        }[];

        if (!posterFile) {
            return NextResponse.json({ error: "Poster obrigatório" }, { status: 400 })
        }

        const uploadResult = await uploadFile(posterFile);
        const posterUrl = uploadResult.url.publicUrl;


        const slug = title
            .trim()
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^\w\s-]/g, "")
            .replace(/\s+/g, "-");


        const project = await createProject({
            title,
            slug,
            poster: posterUrl,
            description: formData.get('description') as string,
            github: (formData.get('github') as string) || undefined,
            page: (formData.get('page') as string) || undefined,
            designer: (formData.get('designer') as string) || "",
            designerPage: (formData.get('designerPage') as string) || "",
            applicationType: (formData.get('applicationType') as string) || "",
            isFeatured: formData.get('isFeatured') === 'true',
            status: formData.get('status') as Status,
            category: formData.get('category') as ProjectCategory,
            skills
        })



        return NextResponse.json({
            status: 'success',
            data: project
        }, { status: 201 })
    } catch (error) {
        console.error(error)
        return NextResponse.json({
            status: 'error',
            message: 'error: Erro ao criar projeto',
            error
        }, { status: 500 })
    }

}
