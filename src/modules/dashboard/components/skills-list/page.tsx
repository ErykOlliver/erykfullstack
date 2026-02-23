import { typeGetProjectProps } from '@/src/modules/projects'
import { Heading } from '@/src/shared/ui-kit/text'
import React from 'react'
import { MdFilterList } from 'react-icons/md'
import SkillCard from './components/skill-card'

type props = {
    data: typeGetProjectProps[]
}

export default function SkillList({ data }: props) {
    return (
        <section className='w-full h-fit flex flex-col border rounded-lg border-black-300'>
            <header className='flex w-full h-fit py-2 items-center  px-1 justify-between'>
                <Heading level={1} className='font-medium'>Habilidades</Heading>
                <button className='w-fit h-fit p-1'>
                    <MdFilterList className='size-7' />
                </button>
            </header>
            <div className='flex flex-col bg-soft-white p-1 rounded-lg h-96 overflow-y-auto gap-3 w-full'>
                {data.map((p, i) => (
                    <SkillCard key={i} data={p} />
                ))}
            </div>
        </section >
    )
}
