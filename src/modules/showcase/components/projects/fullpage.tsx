'use client'

import React, { useCallback, useEffect, useState } from 'react'
import ProjectCard from './components/project-card'
import { Heading, Paragraph } from '@/src/shared/ui-kit/text'
import CategoryButton from './components/category-button'
import { typeGetProjectPaginationProps, typeGetProjectProps } from '@/src/modules/projects/type'
import { ProjectCategory } from '@/src/generated/prisma/enums'
import { BoxIcon, LucideInbox } from 'lucide-react'
import { getPaginationProjects } from '@/src/shared/api/projects/projects'
import { TiArrowRightThick } from 'react-icons/ti'
import { MdArrowLeft, MdArrowRight } from 'react-icons/md'

type props = {
    data: typeGetProjectProps[]
}

export default function FullProjects({ data: initialData }: props) {
    const [page, setPage] = useState(1)
    const [projects, setProjects] = useState<typeGetProjectProps[]>(initialData || [])
    const [totalPages, setTotalPages] = useState(1)
    const [category, setCategory] = useState<ProjectCategory>(ProjectCategory.FRONTEND)

    const loadProjects = useCallback(async () => {
        try {
            const limit = window.innerWidth < 768 ? 3 : 6;
            const res = await getPaginationProjects(page, category, limit);

            if (res && res.status === 'success') {
                setProjects(res.data);
                setTotalPages(res.pagination.totalPages);
            }
        } catch (error) {
            console.error("Erro ao carregar projetos:", error);
        }
    }, [page, category]);

    useEffect(() => {
        loadProjects();

        const handleResize = () => {
            loadProjects();
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [loadProjects]);
    return (
        <section id='projects' className='w-full flex flex-col gap-6 h-fit py-20 bg-off-white scroll-mt-18'>
            <header className='w-full h-fit gap-5 flex flex-col px-5 md:px-10 items-center justify-center'>
                <Heading level={1} className='text-primary-500 uppercase font-bold text-center md:text-4xl '>Você vai encontrar projetos</Heading>
                <Paragraph className='text-base text-center text-primary-700 md:text-xl md:py-2 xl:w-1/2'>Web, E-commerce, APIs e muito mais.</Paragraph>
                <div className='w-full xl:w-2/3 h-fit flex flex-wrap items-center justify-center gap-2.5'>
                    <CategoryButton text='Front-End' category={category} value={ProjectCategory.FRONTEND} onClick={() => setCategory(ProjectCategory.FRONTEND)} />
                    <CategoryButton text='Mobile(APPS)' category={category} value={ProjectCategory.MOBILE} onClick={() => setCategory(ProjectCategory.MOBILE)} />
                    <CategoryButton text='Back-End' category={category} value={ProjectCategory.BACKEND} onClick={() => setCategory(ProjectCategory.BACKEND)} />
                    <CategoryButton text='Full-Stack' category={category} value={ProjectCategory.FULLSTACK} onClick={() => setCategory(ProjectCategory.FULLSTACK)} />
                    <CategoryButton text='API' category={category} value={ProjectCategory.API} onClick={() => setCategory(ProjectCategory.API)} />
                    <CategoryButton text='Game' category={category} value={ProjectCategory.GAME} onClick={() => setCategory(ProjectCategory.GAME)} />
                </div>
            </header>
            <article className='flex w-full flex-col gap-6 px-5 md:px-4 py-6  items-center justify-center'>
                {/* <ProjectCard data={{ applicationType: 'Web', id: '', skills: [], slug: '', designerPage: '', category: 'FULLSTACK', poster: '/', title: 'teste', status: 'EM_ANDAMENTO', description: '', designer: '' }} /> */}
                {projects.length > 0 ? (
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full max-w-7xl mx-auto gap-6 items-stretch justify-center'>
                        {projects.map((d, i) => (
                            <ProjectCard key={d.id || i} data={d} />
                        ))}
                    </div>
                ) : (
                    <div className='aspect-9/16 md:aspect-auto md:min-h-120 w-full max-w-7xl mx-auto items-center justify-center flex'>
                        <div className='flex items-center justify-center w-full gap-2 h-full flex-col'>
                            <LucideInbox />
                            <h1 className='font-medium text-black-800 text-md text-center font-poppins'>Sem projetos nesta categoria por enquanto.</h1>
                            <p className='font-normal text-black-600 text-sm text-center font-poppins'>Conteúdo será atualizado conforme novos projetos forem desenvolvidos.</p>
                        </div>
                    </div>
                )}

                <div className="flex w-fit gap-2 mt-6">
                    <button className='bg-soft-white hover:cursor-pointer hover:text-primary-500 border-2 border-white rounded-md shadow-[0_1px_2px] shadow-black/25 p-2.5' disabled={page === 1} onClick={() => setPage(p => p - 1)}><MdArrowLeft className='size-6 md:size-8' /></button>
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setPage(i + 1)}
                            className={`bg-soft-white hover:cursor-pointer font-poppins ${page === i + 1 ? 'text-primary-500' : 'text-black-800'} font-medium hover:text-primary-500 border ${page === i + 1 ? 'border-primary-500' : 'border-white'} rounded-md shadow-[0_1px_2px] shadow-black/25 p-2.5`}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button className='bg-soft-white hover:cursor-pointer hover:text-primary-500 border-2 border-white rounded-md shadow-[0_1px_2px] shadow-black/25 p-2.5' disabled={page === totalPages} onClick={() => setPage(p => p + 1)}><MdArrowRight className='size-6 md:size-8' /></button>
                </div>
            </article>

        </section>
    )
}
