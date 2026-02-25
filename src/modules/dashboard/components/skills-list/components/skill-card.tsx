'use client'

import { deleteSkill } from '@/src/modules/skills/services/delete-skill'
import { typeGetSkillsProps } from '@/src/modules/skills/type'
import { useTransition } from 'react'
import { PiPencilSimple, PiTrash, PiCode } from 'react-icons/pi'

type props = {
    data: typeGetSkillsProps
}

export default function SkillCard({ data }: props) {
    const [isPending, startTransition] = useTransition()

    const handleDelete = () => {
        startTransition(async () => {
            await deleteSkill(data.id)
        })
    }
    return (
        <article className="group w-full rounded-xl flex items-center justify-between bg-white border border-gray-200 p-4 hover:shadow-md hover:border-orange-200 transition-all duration-300 shrink-0">

            <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-orange-50 group-hover:text-orange-500 transition-colors">
                    <PiCode size={18} />
                </div>

                <div className="flex flex-col min-w-0">
                    <h3 className="font-bold text-gray-800 truncate text-sm group-hover:text-orange-600 transition-colors">
                        {data.name}
                    </h3>
                </div>
            </div>

            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                <button
                    title="Editar"
                    className="p-2 hover:bg-orange-50 text-orange-600 rounded-full transition-colors"
                >
                    <PiPencilSimple size={18} />
                </button>
                <button
                    onClick={handleDelete}
                    disabled={isPending}
                    title="Excluir"
                    className="p-2 hover:bg-red-50 text-red-600 rounded-full transition-colors"
                >
                    <PiTrash size={18} />
                </button>
            </div>
        </article>
    )
}