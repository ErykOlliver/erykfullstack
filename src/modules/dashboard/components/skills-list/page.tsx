import { Heading } from '@/src/shared/ui-kit/text'
import { MdFilterList } from 'react-icons/md'
import SkillCard from './components/skill-card'
import { typeGetSkillsProps } from '@/src/modules/skills/type'

type props = {
    data: typeGetSkillsProps[]
}

export default function SkillList({ data }: props) {
    return (
        <section className='w-full flex flex-col bg-white border rounded-2xl border-gray-200 shadow-sm overflow-hidden'>
            <header className='flex w-full py-4 px-5 items-center justify-between border-b border-gray-100'>
                <div className='flex items-center gap-2'>
                    <div className='w-2 h-6 bg-zinc-800 rounded-full' />
                    <Heading level={2} className='text-lg font-bold text-gray-800'>Habilidades</Heading>
                </div>
                <button className='p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-500'>
                    <MdFilterList size={24} />
                </button>
            </header>

            <div className='flex flex-col bg-gray-50/30 p-4 h-95 overflow-y-auto gap-3 w-full custom-scrollbar'>
                {data.length > 0 ? (
                    data.map((skill, i) => (
                        <SkillCard key={skill.id || i} data={skill} />
                    ))
                ) : (
                    <div className="flex flex-col items-center justify-center h-full text-gray-400 gap-2">
                        <p className='font-medium'>Nenhuma habilidade cadastrada.</p>
                    </div>
                )}
            </div>
        </section>
    )
}