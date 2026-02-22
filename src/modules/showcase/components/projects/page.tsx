'use client'

import React, { useState } from 'react'
import ProjectCard from './components/project-card'
import { Heading, Paragraph } from '@/src/shared/ui-kit/text'
import { selectedProject } from '@/src/shared/utils/enums'
import CategoryButton from './components/category-button'

export default function Projects() {
    const [category, setCategory] = useState<selectedProject>(selectedProject.FrontEnd)
    return (
        <section id='projects' className='w-full flex flex-col gap-6 h-fit py-6 relative bg-off-white'>
            <header className='w-full h-fit gap-6 flex flex-col px-5 md:px-10 items-center justify-center'>
                <Heading level={1} className='text-black-800 uppercase font-bold text-center md:text-2xl xl:text-4xl'>Projetos que Geram Resultado.</Heading>
                <Paragraph className='text-base text-center text-black-600 md:text-lg xl:text-xl md:py-2 xl:w-1/2'>Soluções digitais desenvolvidas com foco em performance, escalabilidade e impacto real no negócio.</Paragraph>
                <div className='w-full h-fit flex items-center justify-center gap-2.5'>
                    <CategoryButton text='Front-End' category={category} value={selectedProject.FrontEnd} onClick={() => setCategory(selectedProject.FrontEnd)} />
                    <CategoryButton text='Mobile(APPS)' category={category} value={selectedProject.Mobile} onClick={() => setCategory(selectedProject.Mobile)} />
                    <CategoryButton text='Back-End' category={category} value={selectedProject.BackEnd} onClick={() => setCategory(selectedProject.BackEnd)} />
                </div>
            </header>
            <article className='flex w-full flex-col gap-6 px-5 md:px-4 py-6 items-center bg-soft-white justify-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full max-w-7xl mx-auto gap-2.5 items-center justify-center'>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
                <button className='hover:shadow-[0_0_15px_2px] transition-all duration-150 hover:border-primary-500 hover:shadow-primary-500 hover:cursor-pointer bg-primary-500 shadow-[0_0_2px] shadow-black/70 text-white font-medium md:text-lg md:px-24 md:p-5 px-12 py-3 border rounded-full uppercase'>Ver portólio completo</button>
            </article>

        </section>
    )
}
