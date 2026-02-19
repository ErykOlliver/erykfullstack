'use client'

import React, { useState } from 'react'
import ProjectCard from './components/project-card'
import { Heading, Paragraph } from '@/src/shared/ui-kit/text'
import { selectedProject } from '@/src/shared/utils/enums'



export default function Projects() {
    const [selected, setSelected] = useState<selectedProject>(selectedProject.FrontEnd)
    return (
        <section id='projects' className='w-full flex flex-col gap-6 h-fit py-6 relative bg-off-white'>
            <header className='w-full h-fit gap-6 flex flex-col px-5'>
                <Heading level={1} className='text-black-800 uppercase font-bold text-center'>Projetos que Geram Resultado.</Heading>
                <Paragraph className='text-base text-center text-black-600'>Soluções digitais desenvolvidas com foco em performance, escalabilidade e impacto real no negócio.</Paragraph>
                <div className='w-full h-fit flex items-center justify-center gap-2.5'>
                    <button onClick={() => setSelected(selectedProject.FrontEnd)} className={`${selected === selectedProject.FrontEnd ? 'opacity-100 shadow-sm shadow-primary-500' : 'opacity-50 shadow-none'} border uppercase border-white rounded-md px-1.5 text-xs py-1.5 bg-linear-to-r via-yellow-500 from-primary-500 font-medium to-primary-600 text-white`}>Projetos Front-End</button>
                    <button onClick={() => setSelected(selectedProject.Mobile)} className={`${selected === selectedProject.Mobile ? 'opacity-100 shadow-sm shadow-primary-500' : 'opacity-50 shadow-none'} border border-white rounded-md px-2 text-xs py-3 bg-linear-to-r from-primary-500 via-yellow-500 font-medium to-primary-600 text-white uppercase`}>Projetos Mobile(APPS)</button>
                    <button onClick={() => setSelected(selectedProject.BackEnd)} className={`${selected === selectedProject.BackEnd ? 'opacity-100 shadow-sm shadow-primary-500' : 'opacity-50 shadow-none'} border border-white rounded-md px-1.5 text-xs py-1.5 bg-linear-to-r from-primary-500 via-yellow-500 font-medium to-primary-600 text-white uppercase`}>Projetos Back-End</button>
                </div>
            </header>
            <article className='flex w-full flex-col gap-2.5 px-5 py-6 items-center bg-soft-white justify-center'>
                <div className='flex w-full flex-col gap-2.5 items-center justify-center'>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </div>
                <button className='bg-linear-to-b shadow-sm shadow-black/30 text-white font-medium px-12 py-3 border rounded-md from-yellow-500  to-primary-600'>Ver portólio completo</button>
            </article>

        </section>
    )
}
