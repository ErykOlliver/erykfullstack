'use client'

import { deleteSkill } from '@/src/modules/skills/services/delete-skill'
import { typeGetSkillsProps } from '@/src/modules/skills/type'
import { hasPermission } from '@/src/shared/libs/has-permission'
import { Permissions } from '@/src/shared/libs/permissions-enum'
import { useSession } from 'next-auth/react'
import { useTransition } from 'react'
import { PiPencilSimple, PiTrash, PiCode } from 'react-icons/pi'

type props = {
    sProps: typeGetSkillsProps
}

export default function SkillCard({ sProps }: props) {
    const [isPending, startTransition] = useTransition()

    const { data } = useSession()

    const canCreateProject = data?.user?.role
        ? hasPermission(
            data.user.role,
            Permissions.MANAGE_PROJECTS
        )
        : false

    const handleDelete = () => {

        if (!canCreateProject) {
            alert("Sem permissão")
            return
        }


        startTransition(async () => {
            await deleteSkill(sProps.id)
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
                        {sProps.name}
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
                    className={`${!canCreateProject ? 'cursor-not-allowed' : 'cursor-pointer'} p-2 hover:bg-red-50 text-red-600 rounded-full transition-colors`}
                >
                    <PiTrash size={18} />
                </button>
            </div>
        </article>
    )
}