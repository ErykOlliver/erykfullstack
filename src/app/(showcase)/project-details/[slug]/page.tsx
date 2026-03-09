'use client'

import { typeProjectProps } from "@/src/modules/projects/type"
import { findUniqueProject } from "@/src/shared/api/projects/projects"
import Image from "next/image"
import { useEffect, useState, use } from "react"

type Props = {
    params: Promise<{ slug: string }>
}

export default function ProjectDetails({ params }: Props) {
    const { slug } = use(params)

    const [project, setProject] = useState<typeProjectProps | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getProject = async () => {
            try {
                setLoading(true)
                const response = await findUniqueProject(slug)
                if (response.status === 'success') {
                    setProject(response.data)
                }
            } catch (error) {
                console.error("Erro ao buscar projeto:", error)
            } finally {
                setLoading(false)
            }
        }
        getProject()
    }, [slug])

    if (loading) return <p>Carregando...</p>
    if (!project) return <p>Projeto não encontrado.</p>

    return (
        <section className='w-full relative flex flex-col xl:overflow-y-hidden xl:flex-row mt-20 items-start justify-start xl:h-[calc(100vh-80px)] xl:overflow-hidden'>
            <div className="sticky top-0 -z-10 w-full aspect-video">
                <Image className="object-cover" fill src={project.poster} alt="project poster" />
            </div>
            <article className="w-full xl:w-90 xl:overflow-y-auto xl:h-full xl:right-0 relative z-10 bg-white min-h-screen pb-25 px-10 flex flex-col">
                <h1 className="text-black">{project.title}</h1>
                <h1 className="text-black">{project.category}</h1>
                <h1 className="text-black">{project.description}</h1>
                <h1 className="text-black">{project.applicationType}</h1>
            </article>
        </section>

    )
}