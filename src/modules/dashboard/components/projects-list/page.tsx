import { typeGetProjectProps } from '@/src/modules/projects'
import { Heading } from '@/src/shared/ui-kit/text'
import React from 'react'
import { MdFilterList } from 'react-icons/md'
import ProjectCard from './components/project-card'

type props = {
    data: typeGetProjectProps[]
}

export default function ProjectList({ data }: props) {
    return (
        <section className='w-full h-fit flex flex-col gap-2 border bg-white rounded-lg border-black-300'>
            <header className='flex w-full h-fit py-2 items-center  px-1 justify-between'>
                <Heading level={1} className='font-medium'>Projetos</Heading>
                <button className='w-fit h-fit p-1'>
                    <MdFilterList className='size-7' />
                </button>
            </header>
            <div className='flex flex-col bg-soft-white p-1 rounded-lg h-96 overflow-y-auto gap-4 w-full'>
                {data.map((p, i) => (
                    <ProjectCard key={i} data={p} />
                ))}
            </div>
        </section >
    )
}
