'use client'

import { typeProjectProps } from "@/src/modules/projects/type"
import { findUniqueProject } from "@/src/shared/api/projects/projects"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState, use } from "react"
import { Github, ExternalLink, ArrowLeft, Palette, Tag, Layers, Star, Clock } from "lucide-react"
import Footer from "@/src/modules/showcase/components/footer/page"
import Contact from "@/src/modules/showcase/components/contact/page"
import Faq from "@/src/modules/showcase/components/faq/page"
import { useRouter } from 'next/navigation'
import { PiCrownSimpleFill } from "react-icons/pi"
import { Paragraph } from "@/src/shared/ui-kit/text"

type Props = {
    params: Promise<{ slug: string }>
}

const statusConfig: Record<string, { label: string; color: string; bg: string }> = {
    completed: { label: 'Concluído', color: 'text-white', bg: 'bg-green-500' },
    in_progress: { label: 'Em andamento', color: 'text-white', bg: 'bg-yellow-500' },
}

export default function ProjectDetails({ params }: Props) {
    const { slug } = use(params)

    const [project, setProject] = useState<typeProjectProps | null>(null)
    const [loading, setLoading] = useState(true)
    const router = useRouter()


    useEffect(() => {
        const getProject = async () => {
            try {
                setLoading(true)
                const response = await findUniqueProject(slug)
                if (response.status === 'success') {
                    setProject(response.data)
                    console.log(project)
                }
            } catch (error) {
                console.error("Erro ao buscar projeto:", error)
            } finally {
                setLoading(false)
            }
        }
        getProject()
    }, [slug])

    if (loading) return (
        <div className="min-h-screen bg-off-white flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="w-10 h-10 border-4 border-primary-500 border-t-transparent rounded-full animate-spin" />
                <p className="text-black-600 font-medium">Carregando projeto...</p>
            </div>
        </div>
    )

    if (!project) return (
        <div className="min-h-screen bg-off-white flex items-center justify-center">
            <div className="text-center">
                <p className="text-2xl font-bold text-black-800">Projeto não encontrado.</p>
                <Link href="/" className="mt-4 inline-block text-primary-500 hover:underline">Voltar ao início</Link>
            </div>
        </div>
    )

    const statusInfo = statusConfig[project.status] ?? { label: project.status, color: 'text-black-600', bg: 'bg-soft-white' }

    return (
        <>
            <main className="min-h-screen bg-off-white font-poppins">

                <section className="relative w-full h-[45vh] md:h-[60vh] overflow-hidden">
                    <Image
                        src={project.poster}
                        alt={`Poster do projeto ${project.title}`}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black-900 via-black-900/50 to-transparent" />

                    <div className="absolute top-25 left-4 md:left-8 z-110">
                        <button
                            onClick={() => router.back()}
                            className="flex items-center gap-2 hover:cursor-pointer text-white/80 hover:text-white transition-colors text-sm font-medium group"
                        >
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                            Voltar ao anterior
                        </button>
                    </div>

                    {project.isFeatured && (
                        <div className={`flex absolute px-2 py-0.5 shadow-xs shadow-black/50 text-black gap-1 bg-linear-to-r from-yellow-600 to-yellow-700 rounded-lg items-center justify-center top-25 right-4 md:right-8 z-10`}> <PiCrownSimpleFill size={16} /> <Paragraph className='md:text-sm'>Destaque</Paragraph> </div>
                    )}

                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-10">
                        <div className="max-w-6xl mx-auto">
                            <div className="flex flex-wrap items-center gap-2 mb-3">
                                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusInfo.bg} ${statusInfo.color}`}>
                                    <Clock size={11} className="inline mr-1" />
                                    {statusInfo.label}
                                </span>
                                <span className="text-xs font-medium text-white/60 uppercase tracking-widest">
                                    {project.category}
                                </span>
                            </div>
                            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                                {project.title}
                            </h1>
                        </div>
                    </div>
                </section>

                <div className="max-w-6xl mx-auto px-4 md:px-8 py-10 md:py-14">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

                        <div className="lg:col-span-2 flex flex-col gap-8">

                            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-black-300/50">
                                <h2 className="text-xs font-bold uppercase tracking-widest text-primary-500 mb-3">
                                    Sobre o Projeto
                                </h2>
                                <p className="text-black-800 text-base md:text-lg leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-4">
                                {project.page && (
                                    <Link
                                        href={project.page}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2.5 bg-primary-500 hover:bg-primary-600 active:bg-primary-700 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                                    >
                                        <ExternalLink size={18} />
                                        Ver Projeto Online
                                    </Link>
                                )}
                                {project.github && (
                                    <Link
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2.5 bg-black-800 hover:bg-black-900 text-white font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                                    >
                                        <Github size={18} />
                                        Ver no GitHub
                                    </Link>
                                )}
                            </div>

                            {project.skills && project.skills.length > 0 && (
                                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-black-300/50">
                                    <h2 className="text-xs font-bold uppercase tracking-widest text-primary-500 mb-4 flex items-center gap-2">
                                        <Layers size={14} />
                                        Tecnologias
                                    </h2>
                                    <div className="flex flex-wrap gap-2">
                                        {project.skills.map((skill) => (
                                            <span
                                                key={skill.name}
                                                className=" text-primary-500 font-semibold text-sm px-4 py-1.5 rounded-lg border border-primary-500/20"
                                            >
                                                {skill.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <aside className="flex flex-col gap-6">

                            <div className="bg-white rounded-2xl p-6 shadow-sm border border-black-300/50">
                                <h2 className="text-xs font-bold uppercase tracking-widest text-primary-500 mb-5">
                                    Informações
                                </h2>

                                <ul className="flex flex-col gap-4">
                                    <li>
                                        <span className="block text-xs text-black-600 font-medium mb-1">Tipo de Aplicação</span>
                                        <span className="flex items-center gap-2 text-black-800 font-semibold text-sm">
                                            <Tag size={14} className="text-primary-500" />
                                            {project.applicationType}
                                        </span>
                                    </li>

                                    <li className="border-t border-soft-white pt-4">
                                        <span className="block text-xs text-black-600 font-medium mb-1">Categoria</span>
                                        <span className="flex items-center gap-2 text-black-800 font-semibold text-sm">
                                            <Layers size={14} className="text-primary-500" />
                                            {project.category}
                                        </span>
                                    </li>

                                    <li className="border-t border-soft-white pt-4">
                                        <span className="block text-xs text-black-600 font-medium mb-1">Status</span>
                                        <span className={`inline-flex items-center gap-1.5 text-sm font-semibold ${statusInfo.color}`}>
                                            <span className={`w-2 h-2 rounded-full ${statusInfo.color.replace('text-', 'bg-')}`} />
                                            {statusInfo.label}
                                        </span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-black-900 rounded-2xl p-6 shadow-sm">
                                <h2 className="text-xs font-bold uppercase tracking-widest text-primary-500 mb-4 flex items-center gap-2">
                                    <Palette size={13} />
                                    Design
                                </h2>
                                <p className="text-white/50 text-xs mb-3">Designer por</p>
                                <Link
                                    href={project.designerPage}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-3"
                                >
                                    <div className="w-9 h-9 bg-primary-500/20 rounded-full flex items-center justify-center text-primary-500 font-bold text-sm shrink-0">
                                        {project.designer.charAt(0).toUpperCase()}
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold text-sm group-hover:text-primary-500 transition-colors">
                                            {project.designer}
                                        </p>
                                        <p className="text-white/40 text-xs group-hover:text-primary-500/60 transition-colors">
                                            Ver perfil →
                                        </p>
                                    </div>
                                </Link>
                            </div>

                            {!project.page && !project.github && (
                                <div className="bg-primary-100 rounded-2xl p-5 border border-primary-500/20 text-center">
                                    <p className="text-black-600 text-sm">Nenhum link disponível para este projeto.</p>
                                </div>
                            )}
                        </aside>
                    </div>
                </div>
            </main>
            <Faq />
            <Contact />
            <Footer />
        </>
    )
}