import { Heading } from '@/src/shared/ui-kit/text'
import React from 'react'
import { MdFilterList } from 'react-icons/md'
import ProjectCard from './components/project-card'
import { typeGetProjectProps } from '@/src/modules/projects/type'

type props = {
    data: typeGetProjectProps[]
}
export default function ProjectList({ data }: props) {
    return (
        <section className='w-full flex flex-col bg-white border rounded-2xl border-gray-200 shadow-sm overflow-hidden'>
            <header className='flex w-full py-4 px-5 items-center justify-between border-b border-gray-100'>
                <div className='flex items-center gap-2'>
                    <div className='w-2 h-6 bg-orange-500 rounded-full' /> 
                    <Heading level={2} className='text-lg font-bold text-gray-800'>Projetos</Heading>
                </div>
                <button className='p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-500'>
                    <MdFilterList size={24} />
                </button>
            </header>

            <div className='flex flex-col bg-gray-50/30 p-4 h-95 overflow-y-auto gap-4 w-full'>
                {data.length > 0 ? (
                    data.map((p, i) => <ProjectCard key={p.id || i} pProps={p} />)
                ) : (
                    <div className="flex flex-col items-center justify-center h-full text-gray-400 gap-2">
                        <p className='font-medium'>Nenhum projeto por aqui...</p>
                    </div>
                )}
            </div>
        </section>
    )
}