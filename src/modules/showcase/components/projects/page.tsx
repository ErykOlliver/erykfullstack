'use client'

import React, { useEffect, useState } from 'react'
import ProjectCard from './components/project-card'
import { Heading, Paragraph } from '@/src/shared/ui-kit/text'
import CategoryButton from './components/category-button'
import { typeGetProjectProps } from '@/src/modules/projects/type'
import { ProjectCategory } from '@/src/generated/prisma/enums'
import { BoxIcon, LucideInbox } from 'lucide-react'

type props = {
    data: typeGetProjectProps[]
}

export default function Projects({ data }: props) {
    const [category, setCategory] = useState<ProjectCategory>(ProjectCategory.FRONTEND)

    return (
        <section id='projects' className='w-full flex flex-col gap-6 h-fit py-6 bg-off-white scroll-mt-18'>
            <header className='w-full h-fit gap-6 flex flex-col px-5 md:px-10 items-center justify-center'>
                <Heading level={1} className='text-black-800 uppercase font-bold text-center md:text-2xl '>Projetos que Geram Resultado.</Heading>
                <Paragraph className='text-base text-center text-black-600 md:text-lg md:py-2 xl:w-1/2'>Soluções digitais desenvolvidas com foco em performance, escalabilidade e impacto real no negócio.</Paragraph>
                <div className='w-full h-fit flex items-center justify-center gap-2.5'>
                    <CategoryButton text='Front-End' category={category} value={ProjectCategory.FRONTEND} onClick={() => setCategory(ProjectCategory.FRONTEND)} />
                    <CategoryButton text='Mobile(APPS)' category={category} value={ProjectCategory.MOBILE} onClick={() => setCategory(ProjectCategory.MOBILE)} />
                    <CategoryButton text='Back-End' category={category} value={ProjectCategory.BACKEND} onClick={() => setCategory(ProjectCategory.BACKEND)} />
                </div>
            </header>
            <article className='flex w-full flex-col gap-6 px-5 md:px-4 py-6  items-center justify-center'>
                {/* <ProjectCard data={{ applicationType: 'Web', id: '', skills: [], slug: '', designerPage: '', category: 'FULLSTACK', poster: '/', title: 'teste', status: 'EM_ANDAMENTO', description: '', designer: '' }} /> */}
                {data.filter(d => d.category === category).length > 0 ? (
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 aspect-9/16 md:aspect-auto md:min-h-120 w-full max-w-7xl mx-auto gap-2.5 items-start justify-center'>
                        {data.filter(d => d.category === category).map((d, i) => (
                            <ProjectCard key={i} data={d} />
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
                <button className='hover:shadow-[0_0_15px_2px] transition-all duration-150 hover:border-primary-500 font-poppins hover:shadow-primary-500 hover:cursor-pointer bg-primary-500 shadow-[0_0_2px] shadow-black/70 text-white font-medium md:text-md md:px-24 md:p-5 px-12 py-3 border rounded-full uppercase'>Ver portólio completo</button>
            </article>

        </section>
    )
}
